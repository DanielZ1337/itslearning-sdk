/**
 * Utility to create URLSearchParams with support for various data types and undefined values.
 *
 * @param params - An object containing key-value pairs to be converted into URL parameters.
 * @returns An instance of URLSearchParams.
 */
export function createSearchParams(
	params: Record<string, unknown>,
): URLSearchParams {
	const searchParams = new URLSearchParams();

	Object.entries(params).forEach(([key, value]) => {
		if (value === undefined || value === null) return;
		if (value instanceof Date) {
			searchParams.append(key, value.toISOString());

			return;
		}

		if (Array.isArray(value)) {
			value.forEach((item, index) => {
				searchParams.append(`${key}[${index}]`, item.toString());
			});
			return;
		}

		searchParams.append(key, value.toString());
	});

	return searchParams;
}
