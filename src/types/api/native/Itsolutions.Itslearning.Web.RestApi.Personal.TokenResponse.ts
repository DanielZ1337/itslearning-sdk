export type TokenResponse = {
	access_token: string;
	token_type: "Bearer";
	expires_in: number;
	refresh_token: string;
};
