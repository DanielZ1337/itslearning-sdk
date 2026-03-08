function isPlainObject(value: unknown): value is Record<string, unknown> {
	if (!value || typeof value !== "object") {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);

	return prototype === Object.prototype || prototype === null;
}

export function serializeRequestBodyDates<T>(value: T): T {
	if (value instanceof Date) {
		return value.toISOString() as T;
	}

	if (Array.isArray(value)) {
		return value.map((item) => serializeRequestBodyDates(item)) as T;
	}

	if (!isPlainObject(value)) {
		return value;
	}

	return Object.fromEntries(
		Object.entries(value).map(([key, item]) => [
			key,
			serializeRequestBodyDates(item),
		]),
	) as T;
}
