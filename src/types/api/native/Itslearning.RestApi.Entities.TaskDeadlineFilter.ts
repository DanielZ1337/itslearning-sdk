export const ItslearningRestApiEntitiesTaskDeadlineFilterValues = {
	All: 0,
	Deadline: 1,
	Overdue: 2,
	NoDeadline: 3,
} as const

export type ItslearningRestApiEntitiesTaskDeadlineFilterType =
	(typeof ItslearningRestApiEntitiesTaskDeadlineFilterValues)[keyof typeof ItslearningRestApiEntitiesTaskDeadlineFilterValues]
