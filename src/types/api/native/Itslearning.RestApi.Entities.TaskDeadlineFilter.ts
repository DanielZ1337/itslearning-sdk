export const ItslearningRestApiEntitiesTaskDeadlineFilter = {
  All: 0,
  Deadline: 1,
  Overdue: 2,
  NoDeadline: 3,
} as const;

export type ItslearningRestApiEntitiesTaskDeadlineFilter =
  (typeof ItslearningRestApiEntitiesTaskDeadlineFilter)[keyof typeof ItslearningRestApiEntitiesTaskDeadlineFilter];
