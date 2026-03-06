import type { ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventType } from "./Itsolutions.Itslearning.Web.RestApi.ServiceLogic.Statistics.Events.UserEventType";

export type ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventDto =
	{
		/** Type of an event represented by this object. */
		Type: ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventType;
		/** Date and time when event has occurred. */
		DateTime: string;
		/** Additional event data, specific for this event type. */
		Payload: Record<string, unknown>;
	};
