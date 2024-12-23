export const ItslearningRestApiEntitiesInstantMessageRecipientRole = {
	Guest: 1,
	Student: 2,
	Teacher: 3,
	Administrator: 4,
	Parent: 5,
} as const;

export type ItslearningRestApiEntitiesInstantMessageRecipientRole =
	(typeof ItslearningRestApiEntitiesInstantMessageRecipientRole)[keyof typeof ItslearningRestApiEntitiesInstantMessageRecipientRole];
