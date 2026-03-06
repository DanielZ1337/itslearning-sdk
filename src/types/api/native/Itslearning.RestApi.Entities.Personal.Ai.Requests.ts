import type { ItslearningRestApiEntitiesPersonalAiAiFeatureType } from "./Itslearning.RestApi.Entities.Personal.Ai.AiFeatureType";

export type ItslearningRestApiEntitiesPersonalAiAddLinkRequest = {
	Url: string;
};

export type ItslearningRestApiEntitiesPersonalAiCreateElementRequest = {
	ElementType: number;
	Title: string;
	Text: string;
	FolderId: number | null;
	PlanId: number | null;
	Feature: ItslearningRestApiEntitiesPersonalAiAiFeatureType;
};
