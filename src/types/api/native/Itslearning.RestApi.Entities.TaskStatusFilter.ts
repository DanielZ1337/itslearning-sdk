export const ItslearningRestApiEntitiesTaskStatusFilter = {
	Active: 0,
	Completed: 1,
	Hidden: 2,
	All: 10,
	ActiveViewAsInCourse: 20,
	CompletedViewAsInCourse: 21,
} as const;

export type ItslearningRestApiEntitiesTaskStatusFilter =
	(typeof ItslearningRestApiEntitiesTaskStatusFilter)[keyof typeof ItslearningRestApiEntitiesTaskStatusFilter];
