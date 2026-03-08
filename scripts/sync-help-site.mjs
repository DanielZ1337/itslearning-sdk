#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, "..");

const START_URL = "https://www.itslearning.com/restapi/help/";
const OUTPUT_DIR = resolve(repoRoot, "vendor", "itslearning-help");
const MANIFEST_FILE = "manifest.json";
const MAX_FILE_STEM_LENGTH = 80;

const startUrl = new URL(START_URL);
const allowedOrigin = startUrl.origin;
const allowedBasePath = startUrl.pathname.endsWith("/")
	? startUrl.pathname
	: `${startUrl.pathname}/`;

const visited = new Set();
const queue = [normalizeUrl(START_URL)];
const savedPages = new Map();

function normalizeUrl(input) {
	const url = new URL(input, START_URL);
	url.hash = "";

	if (
		(url.protocol === "https:" && url.port === "443") ||
		(url.protocol === "http:" && url.port === "80")
	) {
		url.port = "";
	}

	return url.toString();
}

function isAllowedUrl(url) {
	if (!["http:", "https:"].includes(url.protocol)) {
		return false;
	}

	if (url.origin !== allowedOrigin) {
		return false;
	}

	return (
		url.pathname === startUrl.pathname || url.pathname.startsWith(allowedBasePath)
	);
}

function shouldIgnoreHref(href) {
	const value = href.trim().toLowerCase();

	return (
		!value ||
		value.startsWith("#") ||
		value.startsWith("javascript:") ||
		value.startsWith("mailto:") ||
		value.startsWith("tel:") ||
		value.startsWith("data:")
	);
}

function extractLinks(html, baseUrl) {
	const links = new Set();
	const hrefRegex =
		/<a\b[^>]*\bhref\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi;

	let match;

	while ((match = hrefRegex.exec(html)) !== null) {
		const href = match[1] ?? match[2] ?? match[3] ?? "";

		if (shouldIgnoreHref(href)) {
			continue;
		}

		try {
			const url = new URL(href, baseUrl);
			url.hash = "";

			if (!isAllowedUrl(url)) {
				continue;
			}

			links.add(normalizeUrl(url.toString()));
		} catch {
			// Ignore malformed URLs in the mirror.
		}
	}

	return [...links];
}

function trimMirrorRelativePath(pathname) {
	if (pathname.startsWith(allowedBasePath)) {
		return pathname.slice(allowedBasePath.length);
	}

	if (pathname === startUrl.pathname) {
		return "";
	}

	return pathname.replace(/^\/+/, "");
}

function getRelativeSegments(url) {
	return trimMirrorRelativePath(url.pathname)
		.split("/")
		.filter(Boolean);
}

function shortHash(value) {
	return createHash("sha1").update(value).digest("hex").slice(0, 10);
}

function slugify(value) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "")
		.replace(/-{2,}/g, "-");
}

function truncate(value, maxLength) {
	if (value.length <= maxLength) {
		return value;
	}

	return value.slice(0, maxLength).replace(/-+$/g, "");
}

function getFileLabel(url) {
	const modelName = url.searchParams.get("modelName");

	if (modelName) {
		return modelName;
	}

	const segments = getRelativeSegments(url);
	return segments.at(-1) ?? "index";
}

function createFileName(url) {
	const fileLabel = truncate(
		slugify(getFileLabel(url)) || "page",
		MAX_FILE_STEM_LENGTH,
	);

	return `${fileLabel}__${shortHash(normalizeUrl(url.toString()))}.html`;
}

export function urlToFilePath(urlString) {
	const url = new URL(urlString);
	const relativeSegments = getRelativeSegments(url);

	if (relativeSegments.length === 0 && url.pathname.endsWith("/")) {
		return join(OUTPUT_DIR, "index", "index.html");
	}

	if (url.pathname.endsWith("/")) {
		return join(OUTPUT_DIR, ...relativeSegments, "index.html");
	}

	const directorySegments =
		relativeSegments.length > 1
			? relativeSegments.slice(0, -1)
			: relativeSegments.slice(0, 1);

	return join(OUTPUT_DIR, ...directorySegments, createFileName(url));
}

async function saveHtml(url, html) {
	const filePath = urlToFilePath(url);
	await mkdir(dirname(filePath), { recursive: true });
	await writeFile(filePath, html, "utf8");
	savedPages.set(url, relative(OUTPUT_DIR, filePath).replace(/\\/g, "/"));
}

async function writeManifest() {
	const manifestPath = join(OUTPUT_DIR, MANIFEST_FILE);
	const pages = Array.from(savedPages.entries())
		.sort(([left], [right]) => left.localeCompare(right))
		.map(([url, file]) => ({
			url,
			file,
		}));

	await writeFile(
		manifestPath,
		`${JSON.stringify({ startUrl: START_URL, pages }, null, "\t")}\n`,
		"utf8",
	);
}

async function crawl() {
	await rm(OUTPUT_DIR, { recursive: true, force: true });

	while (queue.length > 0) {
		const current = queue.shift();

		if (!current || visited.has(current)) {
			continue;
		}

		visited.add(current);
		console.log(`Fetching: ${current}`);

		try {
			const response = await fetch(current, {
				redirect: "follow",
				headers: {
					"user-agent": "itslearning-sdk-help-mirror/1.0",
				},
			});

			if (!response.ok) {
				console.warn(`  Skipped (HTTP ${response.status}): ${current}`);
				continue;
			}

			const finalUrl = normalizeUrl(response.url || current);
			const finalUrlObject = new URL(finalUrl);

			if (!isAllowedUrl(finalUrlObject)) {
				console.warn(
					`  Skipped (redirected outside allowed area): ${finalUrl}`,
				);
				continue;
			}

			const contentType = response.headers.get("content-type") ?? "";

			if (!contentType.toLowerCase().includes("text/html")) {
				console.log(`  Skipped (not HTML): ${finalUrl}`);
				continue;
			}

			const html = await response.text();
			await saveHtml(finalUrl, html);

			const discoveredLinks = extractLinks(html, finalUrl);

			for (const link of discoveredLinks) {
				if (!visited.has(link)) {
					queue.push(link);
				}
			}

			console.log(`  Saved + found ${discoveredLinks.length} links`);
		} catch (error) {
			console.error(`  Failed: ${current}`);
			console.error(error);
		}
	}

	await writeManifest();
	console.log(`Done. Saved ${savedPages.size} page(s) to ${OUTPUT_DIR}`);
}

function isMainModule() {
	if (!process.argv[1]) {
		return false;
	}

	return import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
}

if (isMainModule()) {
	await crawl();
}
