export class ConfigManager {
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

  setRefreshToken(token: string) {
    this.refreshToken = token;
  }

  getRefreshToken(): string | undefined {
    return this.refreshToken;
  }

  setRedirectUri(uri: string) {
    this.redirectUri = uri;
  }

  getRedirectUri(): string {
    return this.redirectUri;
  }

  setBaseURL(url: string) {
    this.baseURL = url;
  }

  getBaseURL(): string {
    return this.baseURL;
  }

  setClientId(id: string) {
    this.clientId = id;
  }

  getClientId(): string {
    return this.clientId;
  }
}
