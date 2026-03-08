#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, "..");

function run(command, args) {
	const result = spawnSync(command, args, {
		cwd: repoRoot,
		stdio: "inherit",
		shell: false,
	});

	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}

function collectFiles(pathname) {
	if (!existsSync(pathname)) {
		return [];
	}

	const stats = statSync(pathname);

	if (stats.isFile()) {
		return [pathname];
	}

	if (!stats.isDirectory()) {
		return [];
	}

	const collectedFiles = [];

	for (const entry of readdirSync(pathname, { withFileTypes: true })) {
		collectedFiles.push(...collectFiles(resolve(pathname, entry.name)));
	}

	return collectedFiles.sort((left, right) => left.localeCompare(right));
}

function snapshotFiles(paths) {
	const snapshot = new Map();

	for (const pathname of paths) {
		for (const filePath of collectFiles(pathname)) {
			snapshot.set(filePath, readFileSync(filePath, "utf8"));
		}
	}

	return snapshot;
}

function mapsAreEqual(left, right) {
	if (left.size !== right.size) {
		return false;
	}

	for (const [key, value] of left.entries()) {
		if (right.get(key) !== value) {
			return false;
		}
	}

	return true;
}

function printChangedFiles(beforeSnapshot, afterSnapshot) {
	const changedFiles = new Set([
		...beforeSnapshot.keys(),
		...afterSnapshot.keys(),
	]);

	for (const filePath of [...changedFiles].sort((left, right) =>
		left.localeCompare(right),
	)) {
		if (beforeSnapshot.get(filePath) === afterSnapshot.get(filePath)) {
			continue;
		}

		console.error(`Out of date: ${filePath.replace(`${repoRoot}\\`, "")}`);
	}
}

const watchedPaths = [
	resolve(repoRoot, "src", "lib", "generated"),
	resolve(repoRoot, "src", "types", "api", "native"),
	resolve(repoRoot, "src", "types", "index.ts"),
];

const beforeSnapshot = snapshotFiles(watchedPaths);
run(process.execPath, [resolve(__dirname, "generate-date-metadata.mjs")]);
const afterSnapshot = snapshotFiles(watchedPaths);

if (!mapsAreEqual(beforeSnapshot, afterSnapshot)) {
	printChangedFiles(beforeSnapshot, afterSnapshot);
	process.exit(1);
}
