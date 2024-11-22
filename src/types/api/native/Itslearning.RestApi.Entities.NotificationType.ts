export const ItslearningRestApiEntitiesNotificationType = {
	Unknown: 0,
	Assessment: 1,
	Behaviour: 5,
} as const;

export type ItslearningRestApiEntitiesNotificationType =
	(typeof ItslearningRestApiEntitiesNotificationType)[keyof typeof ItslearningRestApiEntitiesNotificationType];
