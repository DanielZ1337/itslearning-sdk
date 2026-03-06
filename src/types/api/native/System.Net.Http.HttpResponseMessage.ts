export type SystemNetHttpHttpResponseMessage = {
	Version: string;
	Content: unknown;
	StatusCode: number;
	ReasonPhrase: string;
	Headers: Headers;
	RequestMessage: unknown;
	IsSuccessStatusCode: boolean;
};
