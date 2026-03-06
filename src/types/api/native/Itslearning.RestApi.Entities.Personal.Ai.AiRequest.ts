import type { ItslearningRestApiEntitiesPersonalAiAiFeatureType } from "./Itslearning.RestApi.Entities.Personal.Ai.AiFeatureType";

export type ItslearningRestApiEntitiesPersonalAiAiRequest = {
	Feature: ItslearningRestApiEntitiesPersonalAiAiFeatureType;
	LocationId: number;
	LocationType: number;
	PlanId: number | null;
	SystemPrompt: string;
	UserPrompt: string;
	Content: string;
	ChatHistoryId: string | null;
};
