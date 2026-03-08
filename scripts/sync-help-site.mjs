#!/usr/bin/env node

import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, "..");

const START_URL = "https://www.itslearning.com/restapi/help/";
const OUTPUT_DIR = resolve(repoRoot, "vendor", "itslearning-help");

const startUrl = new URL(START_URL);
const allowedOrigin = startUrl.origin;
const allowedBasePath = startUrl.pathname.endsWith("/")
	? startUrl.pathname
	: `${startUrl.pathname}/`;

const visited = new Set();
const queue = [normalizeUrl(START_URL)];

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

function urlToFilePath(urlString) {
	const url = new URL(urlString);
	let relativePath = url.pathname;

	if (relativePath.startsWith(allowedBasePath)) {
		relativePath = relativePath.slice(allowedBasePath.length);
	} else if (relativePath === startUrl.pathname) {
		relativePath = "";
	} else {
		relativePath = relativePath.replace(/^\/+/, "");
	}

	if (!relativePath) {
		relativePath = "index";
	}

	let filePath;

	if (url.pathname.endsWith("/")) {
		filePath = join(OUTPUT_DIR, relativePath, "index.html");
	} else if (extname(relativePath)) {
		filePath = join(OUTPUT_DIR, relativePath);
	} else {
		filePath = join(OUTPUT_DIR, `${relativePath}.html`);
	}

	if (url.search) {
		const encodedQuery = encodeURIComponent(url.search.slice(1));
		filePath = filePath.replace(/(\.html)?$/, `__${encodedQuery}.html`);
	}

	return filePath;
}

async function saveHtml(url, html) {
	const filePath = urlToFilePath(url);
	await mkdir(dirname(filePath), { recursive: true });
	await writeFile(filePath, html, "utf8");
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

	console.log(`Done. Saved ${visited.size} page(s) to ${OUTPUT_DIR}`);
}

await crawl();
