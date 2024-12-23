export const ItslearningRestApiEntitiesPersonRole = {
	None: 0,
	Admin: 1,
	Supervisor: 2,
	Teacher: 3,
	Student: 4,
	Parent: 5,
} as const;

export type ItslearningRestApiEntitiesPersonRole =
	(typeof ItslearningRestApiEntitiesPersonRole)[keyof typeof ItslearningRestApiEntitiesPersonRole];
