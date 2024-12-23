import { Manager } from "../lib/Manager";

/**
 * SearchDataAPI
 *
 * Overview:
 * Endpoint for SearchData API.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Courses`.
 */
export class SearchDataAPI extends Manager {
  /**
   * Posts search data to the SearchData API.
   *
   * **Note**: No documentation available for this endpoint.
   *
   * @param data - The search data to post.
   * @returns A promise that resolves to the response from the API.
   */
  public async postSearchData(data: unknown): Promise<unknown> {
    return this.http.post(`/restapi/learningtool/searchdata/v1`, { data });
  }
}
