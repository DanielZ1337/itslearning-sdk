import type { ItsolutionsItslearningWebRestApiPersonalTokenResponse } from "../types/api/native/Itsolutions.Itslearning.Web.RestApi.Personal.TokenResponse";
import { GrantType } from "../types/grantTypes";
import type { ItslearningScope } from "../types/scopes";
import type { ConfigManager } from "./ConfigManager";

export class AuthManager {
  private config: ConfigManager;

  constructor(config: ConfigManager) {
    this.config = config;
  }

  setAccessToken(token: string) {
    this.config.setAccessToken(token);
  }

  getAccessToken(): string | undefined {
    return this.config.getAccessToken();
  }

  setRefreshToken(token: string) {
    this.config.setRefreshToken(token);
  }

  getRefreshToken(): string | undefined {
    return this.config.getRefreshToken();
  }

  getAuthorizationUrl(
    state: string,
    scope: ItslearningScope[] | ItslearningScope,
  ): string {
    const params = new URLSearchParams({
      client_id: this.config.getClientId(),
      response_type: "code",
      redirect_uri: this.config.getRedirectUri(),
      scope: scope instanceof Array ? scope.join(" ") : scope,
      state,
    });

    const url = new URL("/restapi/oauth2/authorize", this.config.getBaseURL());
    url.search = params.toString();
    return url.toString();
  }

  async exchangeCodeForToken(code: string): Promise<void> {
    const response = await fetch(
      new URL("/restapi/oauth2/token", this.config.getBaseURL()),
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: GrantType.AuthorizationCode,
          code,
          client_id: this.config.getClientId(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to exchange code: ${response.statusText}`);
    }

    const data =
      (await response.json()) as ItsolutionsItslearningWebRestApiPersonalTokenResponse;
    this.config.setAccessToken(data.access_token);
    this.config.setRefreshToken(data.refresh_token);
  }

  async handleRefreshToken(): Promise<void> {
    const refreshToken = this.config.getRefreshToken();
    const clientId = this.config.getClientId();
    if (!refreshToken) throw new Error("No refresh token available");
    if (!clientId) throw new Error("No client id available");

    const response = await fetch(
      new URL("/restapi/oauth2/token", this.config.getBaseURL()),
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: GrantType.RefreshToken,
          refresh_token: refreshToken,
          client_id: clientId,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data =
      (await response.json()) as ItsolutionsItslearningWebRestApiPersonalTokenResponse;
    this.config.setAccessToken(data.access_token);
    this.config.setRefreshToken(data.refresh_token);
  }
}
