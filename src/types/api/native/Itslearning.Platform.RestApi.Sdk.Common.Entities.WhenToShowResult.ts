export const ItslearningPlatformRestApiSdkCommonEntitiesWhenToShowResult = {
	Undefined: 0,
	Never: 1,
	AfterEachAttempt: 2,
	AfterDeadline: 3,
	AfterAllAttempts: 4,
	WhenTeacherDecides: 5,
} as const;

export type ItslearningPlatformRestApiSdkCommonEntitiesWhenToShowResult =
	(typeof ItslearningPlatformRestApiSdkCommonEntitiesWhenToShowResult)[keyof typeof ItslearningPlatformRestApiSdkCommonEntitiesWhenToShowResult];
