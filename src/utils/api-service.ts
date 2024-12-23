export type FetchOptions = {
	timeout?: number;
} & RequestInit;

export class ApiService {
	private baseUrl: string;
	private accessToken: string | null = null;

	constructor(baseUrl: string, accessToken: string | null = null) {
		this.accessToken = accessToken;
		this.baseUrl = baseUrl;
	}

	setAccessToken(token: string) {
		this.accessToken = token;
	}

	async request<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
		const { timeout = 5000, ...fetchOptions } = options;

		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), timeout);
		fetchOptions.signal = controller.signal;

		const parsedUrl = new URL(endpoint, this.baseUrl);

		try {
			const response = await fetch(parsedUrl.toString(), {
				...fetchOptions,
				headers: {
					...fetchOptions.headers,
					"Content-Type": "application/json",
					...(this.accessToken
						? { Authorization: `Bearer ${this.accessToken}` }
						: {}),
				},
			});

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
}
