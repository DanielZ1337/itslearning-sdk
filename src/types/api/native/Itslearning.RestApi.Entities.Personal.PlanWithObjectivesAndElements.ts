import type { ItslearningRestApiEntitiesPersonalPlanElementBasic } from "./Itslearning.RestApi.Entities.Personal.PlanElementBasic";
import type { ItslearningRestApiEntitiesPersonalPlanLearningObjectiveBasic } from "./Itslearning.RestApi.Entities.Personal.PlanLearningObjectiveBasic";

export type ItslearningRestApiEntitiesPersonalPlanWithObjectivesAndElements = {
  CourseId: number;
  CourseName: string;
  CourseSyncKey: string;
  PlanId: number;
  PlanTopicName: string;
  PlanTopicColor: string;
  PlanTitle: string;
  PlanDescription: string;
  PlanStartDate: string;
  PlanEndDate: string;
  CoursePlannerUrl: string;
  LearningObjectives: Array<ItslearningRestApiEntitiesPersonalPlanLearningObjectiveBasic>;
  Elements: Array<ItslearningRestApiEntitiesPersonalPlanElementBasic>;
};
