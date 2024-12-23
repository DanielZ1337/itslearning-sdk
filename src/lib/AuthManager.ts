import { GrantType } from "../types/grantTypes";
import type { ItslearningScope } from "../types/scopes";

export class AuthManager {
  private clientId: string;
  private redirectUri: string;
  private baseURL: string;
  private accessToken?: string;
  private refreshToken?: string;

  constructor(
    clientId: string,
    redirectUri: string,
    baseURL: string,
    accessToken?: string,
    refreshToken?: string,
  ) {
    this.clientId = clientId;
    this.redirectUri = redirectUri;
    this.baseURL = baseURL;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken(): string | undefined {
    return this.accessToken;
  }

  getAuthorizationUrl(
    state: string,
    scope: ItslearningScope[] | ItslearningScope,
  ): string {
    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: "code",
      redirect_uri: this.redirectUri,
      scope: scope instanceof Array ? scope.join(" ") : scope,
      state,
    });
    return new URL(
      `/restapi/oauth2/authorize?${params.toString()}`,
      this.baseURL,
    ).toString();
  }

  async exchangeCodeForToken(code: string): Promise<void> {
    const response = await fetch(
      new URL("/restapi/oauth2/token", this.baseURL),
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: GrantType.AuthorizationCode,
          code,
          client_id: this.clientId,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to exchange code: ${response.statusText}`);
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;
  }

  async handleRefreshToken(): Promise<void> {
    if (!this.refreshToken) throw new Error("No refresh token available");

    const response = await fetch(
      new URL("/restapi/oauth2/token", this.baseURL),
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: GrantType.RefreshToken,
          refresh_token: this.refreshToken,
          client_id: this.clientId,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${response.statusText}`);
    }

    const data = await response.json();
    this.accessToken = data.access_token;
  }
}
