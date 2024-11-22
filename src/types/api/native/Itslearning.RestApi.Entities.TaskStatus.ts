export const ItslearningRestApiEntitiesTaskStatus = {
	Unknown: 0,
	NotStarted: 1,
	InProgress: 2,
	Completed: 3,
} as const

export type ItslearningRestApiEntitiesTaskStatus =
	(typeof ItslearningRestApiEntitiesTaskStatus)[keyof typeof ItslearningRestApiEntitiesTaskStatus]
