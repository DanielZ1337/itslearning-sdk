import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2 } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Calendar.CalendarEventV2";
import type { ItslearningRestApiEntitiesPersonalCalendarEvent } from "../types/api/native/Itslearning.RestApi.Entities.Personal.CalendarEvent";

/**
 * CalendarAPI
 *
 * Overview:
 * Calendar endpoint for the personal API.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Calendar`.
 */
export class CalendarAPI extends Manager {
  /**
   * Retrieves a single calendar event by its unique identifier.
   *
   * @param eventId - The unique identifier of the calendar event.
   * @returns A promise that resolves to the requested CalendarEvent.
   */
  public async getEventById(
    eventId: number,
  ): Promise<ItslearningRestApiEntitiesPersonalCalendarEvent> {
    return this.http.get(
      `/restapi/personal/calendar/events/${encodeURIComponent(eventId)}/v1`,
    );
  }

  /**
   * Retrieves a paginated list of calendar events starting from a specific date.
   *
   * @param fromDate - The start date to filter events, in ISO 8601 format.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of events per page (default is 10).
   * @returns A promise that resolves to a CalendarEventList containing the events.
   */
  public async getEvents(
    fromDate?: string | Date,
    pageIndex: number = 0,
    pageSize: number = 10,
  ): Promise<ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2> {
    const queryParams = new URLSearchParams({
      PageIndex: pageIndex.toString(),
      PageSize: pageSize.toString(),
    });

    if (fromDate) {
      queryParams.append(
        "fromDate",
        fromDate instanceof Date ? fromDate.toISOString() : fromDate,
      );
    }

    return this.http.get(`/restapi/personal/calendar/events/v1`, {
      params: queryParams,
    });
  }
}
