import { Manager } from "../lib/Manager";
import type { ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventDto } from "../types/api/native/Itsolutions.Itslearning.Web.RestApi.ServiceLogic.Statistics.Events.UserEventDto";

/**
 * StatisticsAPI
 *
 * Overview:
 * Endpoint for Statistics API.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `Statistics`.
 */
export class StatisticsAPI extends Manager {
	/**
	 * Posts a batch of user events to the Statistics API.
	 *
	 * @param events - A collection of user event DTOs to be processed.
	 */
	public async postUserEvent(
		events: ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventDto[],
	): Promise<void> {
		return this.http.post("/restapi/personal/statistics/events/v1", {
			data: events,
		});
	}
}
