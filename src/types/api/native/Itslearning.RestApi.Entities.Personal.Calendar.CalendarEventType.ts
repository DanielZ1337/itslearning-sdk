export const ItslearningRestApiEntitiesPersonalCalendarCalendarEventType = {
	Course: 0,
	Project: 1,
	Personal: 2,
} as const;

export type ItslearningRestApiEntitiesPersonalCalendarCalendarEventType =
	(typeof ItslearningRestApiEntitiesPersonalCalendarCalendarEventType)[keyof typeof ItslearningRestApiEntitiesPersonalCalendarCalendarEventType];
