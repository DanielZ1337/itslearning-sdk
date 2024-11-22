export const ItslearningRestApiEntitiesLocationRecipientType = {
	Course: 1,
	Project: 2,
	Hierarchy: 3,
	Collaboration: 4,
} as const;

export type ItslearningRestApiEntitiesLocationRecipientType =
	(typeof ItslearningRestApiEntitiesLocationRecipientType)[keyof typeof ItslearningRestApiEntitiesLocationRecipientType];
