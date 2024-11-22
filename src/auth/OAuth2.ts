import type { ItsolutionsItslearningWebRestApiPersonalTokenResponse } from '../types/api/native/Itsolutions.Itslearning.Web.RestApi.Personal.TokenResponse'
import { GrantType } from '../types/grantTypes'
import type { ItslearningScope } from '../types/scopes'
import { ApiService } from '../utils/api-service'

type OAuth2Config = {
	clientId: string
	clientSecret: string
	redirectUri: string
	tokenUrl: string
}

export class OAuth2Client {
	private config: OAuth2Config
	private accessToken: string | null = null
	private refreshToken: string | null = null

	constructor(config: OAuth2Config) {
		this.config = config
	}

	getAuthorizationUrl(state: string, scope: ItslearningScope[]): string {
		const params = new URLSearchParams({
			client_id: this.config.clientId,
			response_type: 'code',
			redirect_uri: this.config.redirectUri,
			scope: scope.join(' '),
			state,
		})
		return `${this.config.tokenUrl}/authorize?${params.toString()}`
	}

	async getTokenFromCode(code: string): Promise<void> {
		const response = await fetchWrapper<ItsolutionsItslearningWebRestApiPersonalTokenResponse>(
			`${this.config.tokenUrl}/token`,
			{
				method: 'POST',
				body: new URLSearchParams({
					grant_type: GrantType.AuthorizationCode,
					code,
					redirect_uri: this.config.redirectUri,
					client_id: this.config.clientId,
					client_secret: this.config.clientSecret,
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		)

		this.accessToken = response.access_token
		this.refreshToken = response.refresh_token
	}

	async refreshAccessToken(): Promise<void> {
		if (!this.refreshToken) throw new Error('No refresh token available')

		const response = await fetchWrapper<TokenResponse>(this.config.tokenUrl, {
			method: 'POST',
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: this.refreshToken,
				client_id: this.config.clientId,
				client_secret: this.config.clientSecret,
			}),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})

		this.accessToken = response.access_token
		this.refreshToken = response.refresh_token
	}

	getAccessToken(): string | null {
		return this.accessToken
	}

	setAccessToken(token: string): void {
		this.accessToken = token
	}
}
