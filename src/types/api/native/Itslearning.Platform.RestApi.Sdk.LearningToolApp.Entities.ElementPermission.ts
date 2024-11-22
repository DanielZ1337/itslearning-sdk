export const ItslearningPlatformRestApiSdkLearningToolAppEntitiesElementPermission = {
	All: 0,
	Modifier: 1,
	Evaluator: 2,
	Participant: 3,
	Read: 4,
} as const

export type ItslearningPlatformRestApiSdkLearningToolAppEntitiesElementPermission =
	(typeof ItslearningPlatformRestApiSdkLearningToolAppEntitiesElementPermission)[keyof typeof ItslearningPlatformRestApiSdkLearningToolAppEntitiesElementPermission]
