import axios from "axios";
import type { HttpClient } from "../lib/HttpClient";
import { Manager } from "../lib/Manager";
import type { ItsolutionsItslearningWebRestApiPersonalTokenResponse } from "../types/api/native/Itsolutions.Itslearning.Web.RestApi.Personal.TokenResponse";
import { defaultConfig } from "../types/config";
import { GrantType } from "../types/grantTypes";

export class TokenAPI extends Manager {
  private clientId: string;

  constructor(http: HttpClient, clientId: string = defaultConfig.clientId) {
    super(http);
    this.clientId = clientId;
  }

  async getAccessToken(code: string) {
    const body = new URLSearchParams({
      client_id: this.clientId,
      grant_type: GrantType.AuthorizationCode,
      code,
    });

    return await this.http.post("/restapi/oauth2/token", {
      data: body.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async refreshAccessToken(clientId: string, refreshToken: string) {
    const body = new URLSearchParams({
      client_id: clientId,
      grant_type: GrantType.RefreshToken,
      refresh_token: refreshToken,
    });

    return await this.http.post<ItsolutionsItslearningWebRestApiPersonalTokenResponse>(
      "/restapi/oauth2/token",
      {
        data: body.toString(),
      },
    );
  }

  public async revokeToken(refreshToken: string): Promise<void> {
    return await this.http.delete(`/restapi/oauth2/token/v1`, {
      params: {
        refresh_token: refreshToken,
      },
    });
  }
}
