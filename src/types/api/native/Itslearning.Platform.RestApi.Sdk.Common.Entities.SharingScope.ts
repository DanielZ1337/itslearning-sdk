export const ItslearningPlatformRestApiSdkCommonEntitiesSharingScope = {
	None: 0,
	School: 1,
	Site: 2,
	Community: 3,
	Custom: 4,
	State: 5,
} as const;

export type ItslearningPlatformRestApiSdkCommonEntitiesSharingScope =
	(typeof ItslearningPlatformRestApiSdkCommonEntitiesSharingScope)[keyof typeof ItslearningPlatformRestApiSdkCommonEntitiesSharingScope];
