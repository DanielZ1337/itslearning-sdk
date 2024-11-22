import type { ItsolutionsItslearningWebRestApiPersonalTokenResponse } from '../types/api/native/Itsolutions.Itslearning.Web.RestApi.Personal.TokenResponse'
import { GrantType } from '../types/grantTypes'
import type { ApiService } from '../utils/api-service'

export class TokenAPI {
	private client: ApiService

	constructor(client: ApiService) {
		this.client = client
	}

	async getAccessToken(clientId: string, clientSecret: string, code: string, redirectUri: string) {
		const body = new URLSearchParams({
			client_id: clientId,
			client_secret: clientSecret,
			grant_type: GrantType.AuthorizationCode,
			code,
			redirect_uri: redirectUri,
		})

		return this.client.request<ItsolutionsItslearningWebRestApiPersonalTokenResponse>('/restapi/oauth2/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: body.toString(),
		})
	}
}
