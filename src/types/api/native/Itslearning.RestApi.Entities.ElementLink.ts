import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType.ts";

export type ItslearningRestApiEntitiesElementLink = {
	ElementId: number;
	ElementType: ItslearningRestApiEntitiesElementType;
	Title: string;
	Url: string;
	ContentUrl: string;
	IconUrl: string;
	LearningToolId: number;
	Homework: boolean;
};
