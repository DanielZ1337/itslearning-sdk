export type Config = {
	clientId?: string;
	redirectUri?: string;
	baseURL?: string;
};

export const defaultConfig = {
	clientId: "10ae9d30-1853-48ff-81cb-47b58a325685",
	redirectUri: "itsl-itslearning://login",
	baseURL: "https://site.itslearning.com",
} as const satisfies Config;
