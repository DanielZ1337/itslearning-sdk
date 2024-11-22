export const ItslearningRestApiEntitiesInstantMessageMassMessageType = {
	None: 1,
	OneWay: 2,
	Broadcast: 3,
} as const;

export type ItslearningRestApiEntitiesInstantMessageMassMessageType =
	(typeof ItslearningRestApiEntitiesInstantMessageMassMessageType)[keyof typeof ItslearningRestApiEntitiesInstantMessageMassMessageType];
