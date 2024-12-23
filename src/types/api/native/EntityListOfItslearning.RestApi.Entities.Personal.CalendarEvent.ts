import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesPersonalCalendarEvent } from "./Itslearning.RestApi.Entities.Personal.CalendarEvent";

// export type EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent = {
// 	EntityArray: Array<ItslearningRestApiEntitiesPersonalCalendarEvent>;
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent =
  PaginatedResponse<ItslearningRestApiEntitiesPersonalCalendarEvent>;
