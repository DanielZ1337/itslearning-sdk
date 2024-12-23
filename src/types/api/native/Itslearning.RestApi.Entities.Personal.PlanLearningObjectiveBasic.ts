import type { ItslearningRestApiEntitiesLearningObjectiveType } from "./Itslearning.RestApi.Entities.LearningObjectiveType";

export type ItslearningRestApiEntitiesPersonalPlanLearningObjectiveBasic = {
  Id: number;
  Title: string;
  Description: string;
  IsFromRepository: boolean;
  Type: ItslearningRestApiEntitiesLearningObjectiveType;
};
