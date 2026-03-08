#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const defaultDocsDirectory = path.join(repoRoot, "vendor", "itslearning-help");

const defaultDocsDirectoryCandidates = [
	process.argv[2],
	process.env.ITSLEARNING_HELP_DIR,
	defaultDocsDirectory,
].filter(Boolean);

const docsDirectory = defaultDocsDirectoryCandidates.find((candidate) =>
	fs.existsSync(candidate),
);

if (!docsDirectory) {
	throw new Error(
		[
			"Could not find the vendored itslearning help-site export.",
			`Expected it at ${defaultDocsDirectory}.`,
			"Run `npm run sync:help` to refresh it, or pass a custom path as the first argument.",
		].join(" "),
	);
}

const resourceDirectory = docsDirectory;
const apiDirectory = path.join(docsDirectory, "Api");

/**
 * @typedef {{ kind: "date" } | { kind: "model", model: string } | { kind: "array", item: Schema } | { kind: "primitive" }} Schema
 */

function collectFiles(directoryPath, predicate) {
	/** @type {string[]} */
	const files = [];

	for (const entry of fs.readdirSync(directoryPath, { withFileTypes: true })) {
		const fullPath = path.join(directoryPath, entry.name);

		if (entry.isDirectory()) {
			files.push(...collectFiles(fullPath, predicate));
			continue;
		}

		if (predicate(fullPath)) {
			files.push(fullPath);
		}
	}

	return files.sort((left, right) => left.localeCompare(right));
}

function decodeHtml(value) {
	return value
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">");
}

function stripTags(value) {
	return decodeHtml(value.replace(/<[^>]+>/g, " "));
}

function normalizeWhitespace(value) {
	return value.replace(/\s+/g, " ").trim();
}

function sanitizeModelName(modelName) {
	return modelName.replace(/[^A-Za-z0-9]/g, "");
}

function isResourceModelFile(filePath) {
	if (!filePath.endsWith(".html")) {
		return false;
	}

	const parentDirectoryName = path.basename(path.dirname(filePath));
	const fileName = path.basename(filePath);

	return (
		parentDirectoryName === "ResourceModel" ||
		fileName.startsWith("ResourceModel__modelName%3D")
	);
}

/**
 * @param {string} typeHtml
 * @returns {Schema}
 */
function parseTypeSchema(typeHtml) {
	const normalizedHtml = normalizeWhitespace(typeHtml);
	const strippedType = normalizeWhitespace(stripTags(typeHtml));

	const collectionMatch = normalizedHtml.match(
		/Collection of <a [^>]*modelName=([^"&]+)[^>]*>/i,
	);

	if (collectionMatch) {
		return {
			kind: "array",
			item: {
				kind: "model",
				model: decodeURIComponent(collectionMatch[1]),
			},
		};
	}

	const directModelMatch = normalizedHtml.match(
		/<a [^>]*modelName=([^"&]+)[^>]*>/i,
	);

	if (directModelMatch) {
		return {
			kind: "model",
			model: decodeURIComponent(directModelMatch[1]),
		};
	}

	if (/^Collection of /i.test(strippedType)) {
		return {
			kind: "array",
			item: {
				kind: "primitive",
			},
		};
	}

	if (strippedType.toLowerCase() === "date") {
		return {
			kind: "date",
		};
	}

	return {
		kind: "primitive",
	};
}

function parseModelSchemas() {
	const resourceFiles = collectFiles(resourceDirectory, isResourceModelFile);

	/** @type {Record<string, Record<string, Schema>>} */
	const modelSchemas = {};

	const rowPattern =
		/<tr>\s*<td class="parameter-name">([^<]+)<\/td>\s*<td[^>]*>.*?<\/td>\s*<td class="parameter-type">\s*(.*?)\s*<\/td>\s*<td class="parameter-annotations">.*?<\/td>\s*<\/tr>/gs;

	for (const resourceFile of resourceFiles) {
		const html = fs.readFileSync(resourceFile, "utf8");
		const modelMatch = html.match(/<h1>([^<]+)<\/h1>/i);

		if (!modelMatch) {
			continue;
		}

		const modelName = normalizeWhitespace(stripTags(modelMatch[1]));
		/** @type {Record<string, Schema>} */
		const properties = {};

		for (const row of html.matchAll(rowPattern)) {
			const propertyName = normalizeWhitespace(stripTags(row[1]));
			const propertySchema = parseTypeSchema(row[2]);

			if (propertySchema.kind === "primitive") {
				continue;
			}

			properties[propertyName] = propertySchema;
		}

		modelSchemas[modelName] = properties;
	}

	return modelSchemas;
}

/**
 * @param {Schema} schema
 * @param {Record<string, Record<string, Schema>>} modelSchemas
 * @param {Map<string, boolean>} modelMemo
 * @param {Set<string>} activeModels
 * @returns {boolean}
 */
function isSchemaTransformable(schema, modelSchemas, modelMemo, activeModels) {
	switch (schema.kind) {
		case "primitive":
			return false;
		case "date":
			return true;
		case "array":
			return isSchemaTransformable(
				schema.item,
				modelSchemas,
				modelMemo,
				activeModels,
			);
		case "model":
			return isModelTransformable(
				schema.model,
				modelSchemas,
				modelMemo,
				activeModels,
			);
	}
}

function isModelTransformable(
	modelName,
	modelSchemas,
	modelMemo,
	activeModels = new Set(),
) {
	const cachedValue = modelMemo.get(modelName);

	if (cachedValue !== undefined) {
		return cachedValue;
	}

	if (activeModels.has(modelName)) {
		return false;
	}

	const modelSchema = modelSchemas[modelName];

	if (!modelSchema) {
		modelMemo.set(modelName, false);
		return false;
	}

	activeModels.add(modelName);

	const isTransformable = Object.values(modelSchema).some((propertySchema) =>
		isSchemaTransformable(propertySchema, modelSchemas, modelMemo, activeModels),
	);

	activeModels.delete(modelName);
	modelMemo.set(modelName, isTransformable);

	return isTransformable;
}

/**
 * @param {Schema} schema
 * @param {Record<string, Record<string, Schema>>} modelSchemas
 * @param {Map<string, boolean>} modelMemo
 * @returns {Schema | null}
 */
function pruneSchema(schema, modelSchemas, modelMemo) {
	if (
		!isSchemaTransformable(schema, modelSchemas, modelMemo, new Set())
	) {
		return null;
	}

	if (schema.kind === "array") {
		const prunedItem = pruneSchema(schema.item, modelSchemas, modelMemo);

		if (!prunedItem) {
			return null;
		}

		return {
			kind: "array",
			item: prunedItem,
		};
	}

	return schema;
}

function pruneModelSchemas(modelSchemas) {
	const modelMemo = new Map();
	/** @type {Record<string, Record<string, Schema>>} */
	const prunedModelSchemas = {};

	for (const modelName of Object.keys(modelSchemas).sort((left, right) =>
		left.localeCompare(right),
	)) {
		if (!isModelTransformable(modelName, modelSchemas, modelMemo, new Set())) {
			continue;
		}

		/** @type {Record<string, Schema>} */
		const properties = {};

		for (const propertyName of Object.keys(modelSchemas[modelName]).sort(
			(left, right) => left.localeCompare(right),
		)) {
			const propertySchema = modelSchemas[modelName][propertyName];
			const prunedPropertySchema = pruneSchema(
				propertySchema,
				modelSchemas,
				modelMemo,
			);

			if (prunedPropertySchema) {
				properties[propertyName] = prunedPropertySchema;
			}
		}

		if (Object.keys(properties).length > 0) {
			prunedModelSchemas[modelName] = properties;
		}
	}

	return prunedModelSchemas;
}

function normalizeRoutePath(rawRoutePath) {
	const [pathWithoutQuery] = decodeHtml(rawRoutePath).split("?");
	const normalizedPath = pathWithoutQuery.startsWith("/")
		? pathWithoutQuery
		: `/${pathWithoutQuery}`;

	return normalizedPath.toLowerCase();
}

/**
 * @param {string} responseBlock
 * @returns {Schema | null}
 */
function parseResponseSchema(responseBlock) {
	const resourceDescriptionBlock = responseBlock.split(
		/<h3>\s*Response Formats\s*<\/h3>/i,
	)[0];

	const descriptorFragment =
		resourceDescriptionBlock.split(/<table class="help-page-table">/i)[0];

	if (!descriptorFragment) {
		return null;
	}

	const schema = parseTypeSchema(descriptorFragment);

	return schema.kind === "primitive" ? null : schema;
}

function schemasAreEqual(left, right) {
	return JSON.stringify(left) === JSON.stringify(right);
}

function parseRouteSchemas(prunedModelSchemas) {
	const apiFiles = collectFiles(
		apiDirectory,
		(filePath) => filePath.endsWith(".html"),
	);

	/** @type {Map<string, { method: string, pathTemplate: string, schema: Schema }>} */
	const routeMap = new Map();
	const modelMemo = new Map();

	for (const apiFile of apiFiles) {
		const html = fs.readFileSync(apiFile, "utf8");
		const routeMatch = html.match(/<h1>([^<]+)<\/h1>/i);

		if (!routeMatch) {
			continue;
		}

		const routeTitle = normalizeWhitespace(stripTags(routeMatch[1]));
		const routeMethodMatch = routeTitle.match(
			/^(GET|POST|PUT|PATCH|DELETE)\s+(.+)$/i,
		);

		if (!routeMethodMatch) {
			continue;
		}

		const [, method, rawRoutePath] = routeMethodMatch;
		const responseSection = html.split(/<h2>\s*Response Information\s*<\/h2>/i)[1];

		if (!responseSection) {
			continue;
		}

		const resourceDescriptionSection = responseSection.split(
			/<h3>\s*Resource Description\s*<\/h3>/i,
		)[1];

		if (!resourceDescriptionSection) {
			continue;
		}

		const parsedSchema = parseResponseSchema(resourceDescriptionSection);

		if (!parsedSchema) {
			continue;
		}

		const prunedSchema = pruneSchema(parsedSchema, prunedModelSchemas, modelMemo);

		if (!prunedSchema) {
			continue;
		}

		const pathTemplate = normalizeRoutePath(rawRoutePath);
		const routeKey = `${method.toUpperCase()} ${pathTemplate}`;
		const existingRoute = routeMap.get(routeKey);

		if (existingRoute) {
			if (!schemasAreEqual(existingRoute.schema, prunedSchema)) {
				throw new Error(
					`Conflicting response schemas found for ${routeKey}.`,
				);
			}

			continue;
		}

		routeMap.set(routeKey, {
			method: method.toUpperCase(),
			pathTemplate,
			schema: prunedSchema,
		});
	}

	return Array.from(routeMap.values()).sort((left, right) => {
		const methodComparison = left.method.localeCompare(right.method);

		if (methodComparison !== 0) {
			return methodComparison;
		}

		return left.pathTemplate.localeCompare(right.pathTemplate);
	});
}

function collectReachableModels(routeSchemas, modelSchemas) {
	const reachableModels = new Set();

	/**
	 * @param {Schema} schema
	 */
	function visitSchema(schema) {
		if (schema.kind === "array") {
			visitSchema(schema.item);
			return;
		}

		if (schema.kind !== "model") {
			return;
		}

		if (reachableModels.has(schema.model)) {
			return;
		}

		reachableModels.add(schema.model);

		const modelSchema = modelSchemas[schema.model];

		if (!modelSchema) {
			return;
		}

		for (const propertySchema of Object.values(modelSchema)) {
			visitSchema(propertySchema);
		}
	}

	for (const route of routeSchemas) {
		visitSchema(route.schema);
	}

	return reachableModels;
}

function formatGeneratedFile(headerTitle, importLine, exportName, value, typeName) {
	return [
		"/*",
		` * ${headerTitle}`,
		" *",
		" * This file is generated by scripts/generate-date-metadata.mjs.",
		" */",
		"",
		importLine,
		"",
		`export const ${exportName} = ${JSON.stringify(value, null, "\t")} as const satisfies ${typeName};`,
		"",
	].join("\n");
}

function writeGeneratedFiles(modelSchemas, routeSchemas) {
	const generatedDirectory = path.join(repoRoot, "src", "lib", "generated");
	fs.mkdirSync(generatedDirectory, { recursive: true });

	const modelRegistryFile = path.join(
		generatedDirectory,
		"date-model-registry.ts",
	);
	const routeRegistryFile = path.join(
		generatedDirectory,
		"response-route-registry.ts",
	);

	fs.writeFileSync(
		modelRegistryFile,
		formatGeneratedFile(
			"Docs-derived model registry for response date hydration.",
			'import type { ModelRegistry } from "../response-schema";',
			"dateModelRegistry",
			modelSchemas,
			"ModelRegistry",
		),
		"utf8",
	);

	fs.writeFileSync(
		routeRegistryFile,
		formatGeneratedFile(
			"Docs-derived route registry for response date hydration.",
			'import type { ResponseRoute } from "../response-schema";',
			"responseRouteRegistry",
			routeSchemas,
			"readonly ResponseRoute[]",
		),
		"utf8",
	);
}

function findMatchingBrace(sourceText, openingBraceIndex) {
	let depth = 0;

	for (let index = openingBraceIndex; index < sourceText.length; index += 1) {
		const character = sourceText[index];

		if (character === "{") {
			depth += 1;
			continue;
		}

		if (character === "}") {
			depth -= 1;

			if (depth === 0) {
				return index;
			}
		}
	}

	return -1;
}

function findTypeAliasObjectBounds(sourceText, aliasName) {
	const exportToken = `export type ${aliasName}`;
	let searchIndex = 0;

	while (searchIndex < sourceText.length) {
		const aliasIndex = sourceText.indexOf(exportToken, searchIndex);

		if (aliasIndex === -1) {
			return null;
		}

		const equalsIndex = sourceText.indexOf("=", aliasIndex);
		const semicolonIndex = sourceText.indexOf(";", equalsIndex);
		const openingBraceIndex = sourceText.indexOf("{", equalsIndex);

		if (
			equalsIndex === -1 ||
			semicolonIndex === -1 ||
			openingBraceIndex === -1 ||
			semicolonIndex < openingBraceIndex
		) {
			searchIndex = semicolonIndex === -1 ? sourceText.length : semicolonIndex + 1;
			continue;
		}

		const closingBraceIndex = findMatchingBrace(sourceText, openingBraceIndex);

		if (closingBraceIndex === -1) {
			return null;
		}

		return {
			openingBraceIndex,
			closingBraceIndex,
		};
	}

	return null;
}

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeDateTypeAnnotation(typeAnnotation) {
	const normalizedParts = typeAnnotation
		.split("|")
		.map((typePart) => typePart.trim())
		.map((typePart) => {
			if (typePart === "string") {
				return "Date";
			}

			if (typePart === "Array<string>") {
				return "Array<Date>";
			}

			if (typePart === "string[]") {
				return "Date[]";
			}

			return typePart;
		})
		.filter(
			(typePart, index, allTypeParts) =>
				allTypeParts.indexOf(typePart) === index,
		);

	return normalizedParts.join(" | ");
}

function updateResponseTypeDefinitions(modelSchemas, reachableModels) {
	const typeFiles = collectFiles(
		path.join(repoRoot, "src", "types"),
		(filePath) =>
			filePath.endsWith(".ts") &&
			!filePath.endsWith(".test.ts") &&
			!filePath.endsWith("index.ts"),
	);

	let changedFileCount = 0;
	let changedPropertyCount = 0;

	for (const typeFile of typeFiles) {
		const originalSource = fs.readFileSync(typeFile, "utf8");
		let nextSource = originalSource;

		for (const modelName of reachableModels) {
			const modelSchema = modelSchemas[modelName];
			const dateProperties = Object.entries(modelSchema).filter(
				([, schema]) => schema.kind === "date",
			);

			if (dateProperties.length === 0) {
				continue;
			}

			const aliasName = sanitizeModelName(modelName);
			const aliasBounds = findTypeAliasObjectBounds(nextSource, aliasName);

			if (!aliasBounds) {
				continue;
			}

			const blockStart = aliasBounds.openingBraceIndex + 1;
			const blockEnd = aliasBounds.closingBraceIndex;
			let typeBlock = nextSource.slice(blockStart, blockEnd);
			let typeBlockChanged = false;

			for (const [propertyName] of dateProperties) {
				const propertyPattern = new RegExp(
					`(^[\\t ]*${escapeRegExp(propertyName)}\\??:\\s*)([^;]+)(;)`,
					"m",
				);
				const propertyMatch = typeBlock.match(propertyPattern);

				if (!propertyMatch) {
					continue;
				}

				const currentTypeAnnotation = propertyMatch[2].trim();
				const nextTypeAnnotation =
					normalizeDateTypeAnnotation(currentTypeAnnotation);

				if (currentTypeAnnotation === nextTypeAnnotation) {
					continue;
				}

				typeBlock = typeBlock.replace(
					propertyPattern,
					`$1${nextTypeAnnotation}$3`,
				);
				typeBlockChanged = true;
				changedPropertyCount += 1;
			}

			if (typeBlockChanged) {
				nextSource = [
					nextSource.slice(0, blockStart),
					typeBlock,
					nextSource.slice(blockEnd),
				].join("");
			}
		}

		if (nextSource !== originalSource) {
			fs.writeFileSync(typeFile, nextSource, "utf8");
			changedFileCount += 1;
		}
	}

	return {
		changedFileCount,
		changedPropertyCount,
	};
}

const rawModelSchemas = parseModelSchemas();
const prunedModelSchemas = pruneModelSchemas(rawModelSchemas);
const routeSchemas = parseRouteSchemas(prunedModelSchemas);
const reachableModels = collectReachableModels(routeSchemas, prunedModelSchemas);

/** @type {Record<string, Record<string, Schema>>} */
const reachableModelSchemas = {};

for (const modelName of Array.from(reachableModels).sort((left, right) =>
	left.localeCompare(right),
)) {
	reachableModelSchemas[modelName] = prunedModelSchemas[modelName];
}

writeGeneratedFiles(reachableModelSchemas, routeSchemas);

const updatedTypeSummary = updateResponseTypeDefinitions(
	reachableModelSchemas,
	reachableModels,
);

console.log(
	[
		`Generated ${Object.keys(reachableModelSchemas).length} transformable model schemas.`,
		`Generated ${routeSchemas.length} response route schemas.`,
		`Updated ${updatedTypeSummary.changedPropertyCount} date properties across ${updatedTypeSummary.changedFileCount} type files.`,
	].join(" "),
);
