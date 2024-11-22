export const ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType = {
	LearningResource: 0,
	LearningActivity: 1,
} as const;

export type ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType =
	(typeof ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType)[keyof typeof ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType];
