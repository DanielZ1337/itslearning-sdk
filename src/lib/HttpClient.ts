import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

export class HttpClient {
  private baseUrl: string;
  private accessToken: string | null = null;
  private client: AxiosInstance;

  constructor(baseUrl: string, accessToken: string | null = null) {
    this.accessToken = accessToken;
    this.baseUrl = baseUrl;

    this.client = axios.create({
      baseURL: this.baseUrl,
    });
  }

  private getURL(
    endpoint: string,
    options?: { query?: Record<string, string> },
  ) {
    const url = new URL(this.baseUrl);

    url.pathname = endpoint;
    const search = new URLSearchParams(options?.query);

    //append access_token to params if available

    if (this.accessToken) search.append("access_token", this.accessToken);

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
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
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
}
