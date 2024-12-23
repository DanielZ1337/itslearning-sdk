import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * StatisticsAPI
 *
 * Overview:
 * Endpoint for Statistics API.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `Statistics`.
 */
export class StatisticsAPI extends Manager {
  /**
   * Posts a user event to the Statistics API.
   *
   * @param eventData - The data representing the user event to be posted.
   * @returns A promise that resolves to the response from the API.
   */
  public async postUserEvent(eventData: unknown): Promise<unknown> {
    return this.http.post(`/restapi/personal/statistics/events/v1`, {
      data: eventData,
    });
  }
}
