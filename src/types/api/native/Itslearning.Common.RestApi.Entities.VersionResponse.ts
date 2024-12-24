export const ItslearningCommonRestApiEntitiesVersionResponse = {
	Unknown: 0,
	LatestVersion: 1,
	NewVersionAvailable: 2,
	MustUpdate: 3,
} as const;

export type ItslearningCommonRestApiEntitiesVersionResponse =
	(typeof ItslearningCommonRestApiEntitiesVersionResponse)[keyof typeof ItslearningCommonRestApiEntitiesVersionResponse];
