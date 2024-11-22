import { OAuth2Client } from './auth/OAuth2'

export interface SDKConfig {
	clientId: string
	clientSecret: string
	redirectUri: string
	tokenUrl: string
	baseURL: string
	accessToken?: string
}

export class ItsLearningSDK {
	private clientId: string
	private clientSecret: string
	private redirectUri: string
	private tokenUrl: string
	private baseURL: string
	private accessToken?: string

	public oauth2: OAuth2Client

	constructor(config: SDKConfig) {
		this.clientId = config.clientId
		this.clientSecret = config.clientSecret
		this.redirectUri = config.redirectUri
		this.tokenUrl = config.tokenUrl
		this.baseURL = config.baseURL
		this.accessToken = config.accessToken

		this.oauth2 = new OAuth2Client(config)

		// this.assessmentRecord = new AssessmentRecordAPI(this.baseURL, () =>
		//   this.getAccessToken(),
		// );
	}

	setAccessToken(token: string) {
		this.accessToken = token
	}

	getAccessToken(): string | undefined {
		return this.accessToken
	}

	getAuthorizationUrl(state: string, scope: string[]): string {
		const params = new URLSearchParams({
			client_id: this.clientId,
			response_type: 'code',
			redirect_uri: this.redirectUri,
			scope: scope.join(' '),
			state,
		})
		return `${this.tokenUrl}/authorize?${params.toString()}`
	}

	async exchangeCodeForToken(code: string): Promise<void> {
		const response = await fetch(this.tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				grant_type: 'authorization_code',
				code,
				client_id: this.clientId,
				client_secret: this.clientSecret,
				redirect_uri: this.redirectUri,
			}),
		})

		if (!response.ok) {
			throw new Error(`Failed to exchange code: ${response.statusText}`)
		}

		const data = await response.json()
		this.accessToken = data.access_token
	}

	async refreshToken(refreshToken: string): Promise<void> {
		const response = await fetch(this.tokenUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: refreshToken,
				client_id: this.clientId,
				client_secret: this.clientSecret,
			}),
		})

		if (!response.ok) {
			throw new Error(`Failed to refresh token: ${response.statusText}`)
		}

		const data = await response.json()
		this.accessToken = data.access_token
	}
}
