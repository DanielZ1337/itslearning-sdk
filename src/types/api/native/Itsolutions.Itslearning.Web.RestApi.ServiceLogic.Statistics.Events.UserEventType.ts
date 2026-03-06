export const ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventType =
	{
		CourseVisit: 0,
		ElementVisit: 1,
		SessionMeasured: 2,
	} as const;

export type ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventType =
	(typeof ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventType)[keyof typeof ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventType];
