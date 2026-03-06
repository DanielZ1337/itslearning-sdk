import type { ItslearningRestApiEntitiesCalendarEventSimple } from "./Itslearning.RestApi.Entities.CalendarEventSimple";
import type { ItslearningRestApiEntitiesPlanSimple } from "./Itslearning.RestApi.Entities.PlanSimple";
import type { ItslearningRestApiEntitiesTaskSimple } from "./Itslearning.RestApi.Entities.TaskSimple";

export type ItslearningRestApiEntitiesCourseUpcoming = {
	Tasks: Array<ItslearningRestApiEntitiesTaskSimple>;
	Plans: Array<ItslearningRestApiEntitiesPlanSimple>;
	CalendarEvents: Array<ItslearningRestApiEntitiesCalendarEventSimple>;
	CourseId: number;
	Title: string;
	FriendlyName: string;
	CourseColor: string;
	CourseFillColor: string;
	CourseCode: string;
};
