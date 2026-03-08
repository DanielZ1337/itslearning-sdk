import { dateModelRegistry } from "./generated/date-model-registry";
import { responseRouteRegistry } from "./generated/response-route-registry";
import type {
	HydrationSchema,
	ModelRegistry,
	ModelSchema,
	ResponseRoute,
	ResponseMethod,
} from "./response-schema";

type CompiledResponseRoute = ResponseRoute & {
	pattern: RegExp;
};

const compiledRoutes: CompiledResponseRoute[] = responseRouteRegistry.map((route) => ({
	...route,
	pattern: compileRouteTemplate(route.pathTemplate),
}));

const routeSchemaCache = new Map<string, HydrationSchema | null>();

function compileRouteTemplate(pathTemplate: string): RegExp {
	const escaped = pathTemplate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const pattern = escaped.replace(/\\\{[^}]+\\\}/g, "[^/]+");

	return new RegExp(`^${pattern}$`, "i");
}

export function normalizeRoutePath(path: string): string {
	const [pathname] = path.split("?");

	if (!pathname) {
		return "/";
	}

	const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

	return normalizedPath.toLowerCase();
}

function resolveRouteSchema(
	method: ResponseMethod,
	path: string,
): HydrationSchema | null {
	const cacheKey = `${method.toUpperCase()} ${normalizeRoutePath(path)}`;
	const cachedSchema = routeSchemaCache.get(cacheKey);

	if (cachedSchema !== undefined) {
		return cachedSchema;
	}

	const normalizedPath = normalizeRoutePath(path);
	const route = compiledRoutes.find(
		(candidate) =>
			candidate.method === method.toUpperCase() &&
			candidate.pattern.test(normalizedPath),
	);

	const schema = route?.schema ?? null;
	routeSchemaCache.set(cacheKey, schema);

	return schema;
}

function parseDateValue(value: string): Date | string {
	if (value.length === 0) {
		return value;
	}

	const parsedDate = new Date(value);

	if (Number.isNaN(parsedDate.getTime())) {
		return value;
	}

	return parsedDate;
}

function hydrateModel(
	value: Record<string, unknown>,
	modelName: string,
	modelRegistry: ModelRegistry,
): Record<string, unknown> {
	const modelSchema = modelRegistry[modelName];

	if (!modelSchema) {
		return value;
	}

	for (const [propertyName, propertySchema] of Object.entries(modelSchema)) {
		if (!(propertyName in value)) {
			continue;
		}

		value[propertyName] = hydrateValueWithSchema(
			value[propertyName],
			propertySchema,
			modelRegistry,
		);
	}

	return value;
}

export function hydrateValueWithSchema<T>(
	value: T,
	schema: HydrationSchema,
	modelRegistry: ModelRegistry = dateModelRegistry,
): T {
	if (value === null || value === undefined) {
		return value;
	}

	switch (schema.kind) {
		case "primitive":
			return value;
		case "date":
			return (
				typeof value === "string" ? parseDateValue(value) : value
			) as T;
		case "array":
			if (!Array.isArray(value)) {
				return value;
			}

			return value.map((item) =>
				hydrateValueWithSchema(item, schema.item, modelRegistry),
			) as T;
		case "model":
			if (typeof value !== "object" || Array.isArray(value)) {
				return value;
			}

			return hydrateModel(
				value as Record<string, unknown>,
				schema.model,
				modelRegistry,
			) as T;
	}
}

export function hydrateApiResponse<T>(
	method: ResponseMethod,
	path: string,
	data: T,
	modelRegistry: ModelRegistry = dateModelRegistry,
): T {
	const schema = resolveRouteSchema(method, path);

	if (!schema) {
		return data;
	}

	return hydrateValueWithSchema(data, schema, modelRegistry);
}

export function getModelSchema(
	modelName: string,
	modelRegistry: ModelRegistry = dateModelRegistry,
): ModelSchema | undefined {
	return modelRegistry[modelName];
}
