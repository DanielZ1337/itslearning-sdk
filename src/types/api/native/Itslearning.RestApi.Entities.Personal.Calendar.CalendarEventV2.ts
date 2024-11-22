import type { ItslearningRestApiEntitiesPersonalCalendarAttendanceAttendanceDetails } from "./Itslearning.RestApi.Entities.Personal.Calendar.Attendance.AttendanceDetails.ts";
import type { ItslearningRestApiEntitiesPersonalCalendarCalendarEventType } from "./Itslearning.RestApi.Entities.Personal.Calendar.CalendarEventType.ts";

export type ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2 = {
	EventId: number;
	FromDate: Date;
	ToDate: Date;
	EventTitle: string;
	Description: string;
	ImportDescription: string;
	EventType: ItslearningRestApiEntitiesPersonalCalendarCalendarEventType;
	LocationId: number;
	LocationGroupId: number;
	LocationColor: string;
	LocationFillColor: string;
	LocationTitle: string;
	LocationFriendlyName: string;
	HidePersonalWordForPersonalEvent: boolean;
	AttendanceDetails: ItslearningRestApiEntitiesPersonalCalendarAttendanceAttendanceDetails;
};
