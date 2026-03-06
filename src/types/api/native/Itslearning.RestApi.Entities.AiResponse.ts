export type ItslearningRestApiEntitiesAiChatMessage = {
	Role: string;
	Text: string;
};

export type ItslearningRestApiEntitiesAiResponse = {
	Text: string;
	ChatHistoryId: string;
	ResponseId: string;
	Prompt: Array<ItslearningRestApiEntitiesAiChatMessage>;
};
