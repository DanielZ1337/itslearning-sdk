export const ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod = {
	Current: 0,
	Expired: 1,
	Scheduled: 2,
	All: 3,
} as const;

export type ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod =
	(typeof ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod)[keyof typeof ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod];
