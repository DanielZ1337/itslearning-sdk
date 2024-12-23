export const ItslearningRestApiEntitiesRelationType = {
	Teacher: 1,
	Parent: 2,
	Supervisor: 3,
} as const;

export type ItslearningRestApiEntitiesRelationType =
	(typeof ItslearningRestApiEntitiesRelationType)[keyof typeof ItslearningRestApiEntitiesRelationType];
