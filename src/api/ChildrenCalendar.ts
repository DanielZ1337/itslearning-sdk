import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Personal.CalendarEvent";
import type { ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2 } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Calendar.CalendarEventV2";
import { createSearchParams } from "../utils/search-params";

/**
 * ChildrenCalendarAPI
 *
 * Overview:
 * Endpoint for Children Calendar API.
 * Provides access to calendar events for a guardian's children.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Children`.
 */
export class ChildrenCalendarAPI extends Manager {
	/**
	 * Gets calendar events for a specific course of a child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param courseId - The unique identifier of the course.
	 * @param fromDate - The start date for calendar events.
	 * @param toDate - The end date for calendar events.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 20).
	 * @returns A promise that resolves to a paginated list of calendar events.
	 */
	public async getChildCourseEvents(
		childId: number,
		courseId: number,
		fromDate?: Date,
		toDate?: Date,
		pageIndex = 0,
		pageSize = 20,
	): Promise<EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent> {
		const queryParams = createSearchParams({
			fromDate,
			toDate,
			PageIndex: pageIndex,
			PageSize: pageSize,
		});
		return this.http.get(
			`/restapi/personal/children/${childId}/courses/${courseId}/events/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets a specific calendar event for a child by event ID.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param eventId - The unique identifier of the event.
	 * @returns A promise that resolves to the calendar event details.
	 */
	public async getChildEventById(
		childId: number,
		eventId: number,
	): Promise<ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2> {
		return this.http.get(
			`/restapi/personal/children/${childId}/events/${eventId}/v1`,
		);
	}
}
