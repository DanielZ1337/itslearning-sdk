import { TokenAPI } from "./api/Token";
import { HttpClient } from "./lib/HttpClient";
import { defaultConfig } from "./types/config";
import { GrantType } from "./types/grantTypes";
import { ApiService } from "./utils/api-service";

export interface SDKConfig {
  clientId: string;
  redirectUri: string;
  baseURL: string;
  accessToken?: string;
}

export class ItsLearningSDK {
  private clientId: string;
  private redirectUri: string;
  private baseURL: string;
  private accessToken?: string;
  private http: HttpClient;

  public token: TokenAPI;

  constructor(config: SDKConfig) {
    this.clientId = config.clientId;
    this.redirectUri = config.redirectUri;
    this.baseURL = config.baseURL;
    this.accessToken = config.accessToken;
    this.http = new HttpClient(this.baseURL, this.accessToken);
    this.token = new TokenAPI(this.http);
  }
}

const sdk = new ItsLearningSDK({
  clientId: defaultConfig.clientId,
  redirectUri: defaultConfig.redirectUri,
  baseURL: defaultConfig.baseURL,
});

const test = await sdk.token.getAccessToken("yeet");
