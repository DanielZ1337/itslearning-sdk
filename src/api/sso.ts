import { Manager } from "../lib/Manager";

export class SsoAPI extends Manager {
  public async generateSSOUrl(url: string): Promise<string> {
    return this.http.get(`/restapi/personal/sso/url/v1?url=${url}`);
  }
}
