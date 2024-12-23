import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType";

export type ItslearningRestApiEntitiesPersonalPlanElementBasic = {
	Id: number;
	Title: string;
	Type: ItslearningRestApiEntitiesElementType;
	IsMarkedAsHomework: boolean;
	IconUri: string;
};
