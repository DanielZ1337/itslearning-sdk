import { Manager } from "../lib/Manager";

/**
 * SiteLinksAPI
 *
 * Overview:
 * Endpoint for retrieving the site links.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Person`.
 */
export class SiteLinksAPI extends Manager {
  /**
   * Gets the site links visible to the user.
   *
   * @returns A promise that resolves to a list of site links.
   */
  public async getSiteLinks(): Promise<unknown> {
    return this.http.get(`/restapi/personal/person/sitelinks/v1`);
  }
}
