export const GrantType = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
  JwtBearer: "urn:ietf:params:oauth:grant-type:jwt-bearer",
} as const;

export type GrantType = (typeof GrantType)[keyof typeof GrantType];
