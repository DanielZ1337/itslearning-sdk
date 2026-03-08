import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import { hydrateApiResponse } from "./response-transformer";
import { createSearchParams } from "../utils/search-params";
import { serializeRequestBodyDates } from "../utils/request-body";
import type { AuthManager } from "./AuthManager";
import type { ConfigManager } from "./ConfigManager";

export class HttpClient {
	private config: ConfigManager;
	private auth: AuthManager;
	private client: AxiosInstance;

	constructor(config: ConfigManager, authManager: AuthManager) {
		this.config = config;
		this.auth = authManager;
		this.client = axios.create();
	}

	private normalizeQuery(
		query?: AxiosRequestConfig["params"],
	): Record<string, unknown> {
		if (!query) {
			return {};
		}

		if (query instanceof URLSearchParams) {
			return Object.fromEntries(query.entries());
		}

		if (typeof query === "object") {
			return query as Record<string, unknown>;
		}

		return {};
	}

	private getURL(
		endpoint: string,
		options?: { query?: AxiosRequestConfig["params"] },
	) {
		const url = new URL(this.config.getBaseURL());

		url.pathname = endpoint;

		const search = createSearchParams({
			...this.normalizeQuery(options?.query),
			access_token: this.auth.getAccessToken(),
		});

		url.search = search.toString();

		return url.toString();
	}

	/**
	 * If data is FormData, override transformRequest to pass it through unchanged
	 * and strip Content-Type so the platform sets multipart/form-data with boundary.
	 * Uses duck-typing instead of instanceof to handle RN's FormData polyfill.
	 */
	private applyFormDataConfig(
		data: unknown,
		config: Record<string, unknown>,
	): Record<string, unknown> {
		if (
			data &&
			typeof data === "object" &&
			typeof (data as any).append === "function" &&
			typeof (data as any).getParts === "function"
		) {
			return {
				...config,
				transformRequest: () => data,
				headers: {
					...((config.headers as Record<string, unknown>) ?? {}),
					"Content-Type": null,
				},
			};
		}
		if (data instanceof FormData) {
			return {
				...config,
				transformRequest: (_d: unknown, headers: Record<string, unknown>) => {
					if (headers && typeof headers.delete === "function") {
						(headers as any).delete("Content-Type");
					} else if (headers) {
						delete headers["Content-Type"];
					}
					return data;
				},
			};
		}
		return config;
	}

	async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
		return await this.client
			.get(
				this.getURL(endpoint, {
					query: options?.params,
				}),
				options,
			)
			.then((response) => hydrateApiResponse("GET", endpoint, response.data));
	}

	async post<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
		const { data, params, ...config } = options ?? {};
		const serializedData = serializeRequestBodyDates(data);
		return await this.client
			.post(
				this.getURL(endpoint, { query: params }),
				serializedData,
				this.applyFormDataConfig(serializedData, config),
			)
			.then((response) => hydrateApiResponse("POST", endpoint, response.data));
	}

	async put<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
		const { data, params, ...config } = options ?? {};
		const serializedData = serializeRequestBodyDates(data);
		return await this.client
			.put(
				this.getURL(endpoint, { query: params }),
				serializedData,
				this.applyFormDataConfig(serializedData, config),
			)
			.then((response) => hydrateApiResponse("PUT", endpoint, response.data));
	}

	async delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
		return await this.client
			.delete(this.getURL(endpoint, { query: options?.params }))
			.then((response) => hydrateApiResponse("DELETE", endpoint, response.data));
	}

	async patch<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
		const { data, params, ...config } = options ?? {};
		const serializedData = serializeRequestBodyDates(data);
		return await this.client
			.patch(
				this.getURL(endpoint, { query: params }),
				serializedData,
				this.applyFormDataConfig(serializedData, config),
			)
			.then((response) => hydrateApiResponse("PATCH", endpoint, response.data));
	}
}
