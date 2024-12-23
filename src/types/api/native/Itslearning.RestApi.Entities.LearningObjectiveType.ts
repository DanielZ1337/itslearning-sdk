export const ItslearningRestApiEntitiesLearningObjectiveType = {
  Subject: 1,
  Folder: 2,
  LearningObjective: 3,
  Category: 4,
} as const;

export type ItslearningRestApiEntitiesLearningObjectiveType =
  (typeof ItslearningRestApiEntitiesLearningObjectiveType)[keyof typeof ItslearningRestApiEntitiesLearningObjectiveType];
