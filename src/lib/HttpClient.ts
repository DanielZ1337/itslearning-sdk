import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";
import type { AuthManager } from "./AuthManager";
import { createSearchParams } from "../utils/search-params";
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

  private getURL(
    endpoint: string,
    options?: { query?: Record<string, string> },
  ) {
    const url = new URL(this.config.getBaseURL());

    url.pathname = endpoint;

    const search = createSearchParams({
      ...options?.query,
      access_token: this.auth.getAccessToken(),
    });

    url.search = search.toString();

    return url.toString();
  }

  async get<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    return await this.client
      .get(
        this.getURL(endpoint, {
          query: options?.params,
        }),
        options,
      )
      .then((response) => response.data);
  }

  async post<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    return await this.client
      .post(this.getURL(endpoint, options?.params), options?.data, {
        data: options?.data,
      })
      .then((response) => response.data);
  }

  async put<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    return await this.client
      .put(this.getURL(endpoint, options?.params), options?.data, {
        data: options?.data,
      })
      .then((response) => response.data);
  }

  async delete<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    return await this.client
      .delete(this.getURL(endpoint, options?.params))
      .then((response) => response.data);
  }

  async patch<T>(endpoint: string, options?: AxiosRequestConfig): Promise<T> {
    return await this.client
      .patch(this.getURL(endpoint, options?.params), options?.data, {
        data: options?.data,
      })
      .then((response) => response.data);
  }
}
