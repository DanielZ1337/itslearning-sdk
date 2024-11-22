export const GrantType = {
	AuthorizationCode: "authorization_code",
	RefreshToken: "refresh_token",
} as const;

export type GrantType = (typeof GrantType)[keyof typeof GrantType];
