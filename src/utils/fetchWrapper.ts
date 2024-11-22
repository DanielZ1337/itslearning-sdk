export interface FetchOptions extends RequestInit {
	timeout?: number;
}

export async function fetchWrapper<T>(
	url: string,
	options: FetchOptions = {},
): Promise<T> {
	const { timeout = 5000, ...fetchOptions } = options;

	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeout);
	fetchOptions.signal = controller.signal;

	try {
		const response = await fetch(url, fetchOptions);

		if (!response.ok) {
			throw new Error(
				`HTTP error! Status: ${response.status} - ${response.statusText} - ${response.url}`,
			);
		}

		clearTimeout(id);
		return response.json();
	} catch (error) {
		clearTimeout(id);

		// @ts-ignore - error is of type unknown
		if (error.name === "AbortError") {
			throw new Error("Request timeout");
		}
		throw error;
	}
}
