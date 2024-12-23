import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesCourseCard } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.CourseCard";
import type { ItslearningRestApiEntitiesCourseCardSettings } from "../types/api/native/Itslearning.RestApi.Entities.CourseCardSettings";
import type { ItslearningRestApiEntitiesPersonCourseRank } from "../types/api/native/Itslearning.RestApi.Entities.PersonCourseRank";
import { createSearchParams } from "../utils/search-params";

/**
 * CourseCardsAPI
 *
 * Overview:
 * Endpoint for CourseCards API.
 * Course cards in itslearning are personal and provide a better overview on the homepage for the daily workflow.
 *
 * Secured with OAuth2, and requires OAuth2 API scope `Courses`.
 */
export class CourseCardsAPI extends Manager {
	/**
	 * Retrieves the course card settings for a specific course.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to the CourseCardSettings.
	 */
	public async getCourseCardSettings(
		courseId: number,
	): Promise<ItslearningRestApiEntitiesCourseCardSettings> {
		return this.http.get(
			`/restapi/personal/courses/cards/${encodeURIComponent(courseId)}/settings/v1`,
		);
	}

	/**
	 * Applies course card settings to a specific course.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @param settings - The settings to apply to the course card.
	 * @returns A promise that resolves when the settings are successfully applied.
	 */
	public async applyCourseCardSettings(
		courseId: number,
		settings: Partial<ItslearningRestApiEntitiesCourseCardSettings>,
	): Promise<ItslearningRestApiEntitiesCourseCardSettings> {
		return this.http.post(
			`/restapi/personal/courses/cards/${encodeURIComponent(courseId)}/settings/v1`,
			{
				data: settings,
			},
		);
	}

	/**
	 * Ranks a course card. (No documentation available; assumptions made based on endpoint name)
	 *
	 * @param body - The ranking request containing courseId and rank position.
	 */
	public async rankCourseCard(
		body: ItslearningRestApiEntitiesPersonCourseRank,
	): Promise<void> {
		return this.http.post(`/restapi/personal/courses/cards/rank/v1`, {
			data: body,
		});
	}

	/**
	 * Retrieves a paginated list of course cards for the user's starred courses.
	 *
	 * @param pageIndex - The index of the page to retrieve (default is 0).
	 * @param pageSize - The number of course cards per page (default is 10).
	 * @param sortBy - The criteria to sort the course cards (e.g., 'lastAccessed', 'title').
	 * @param searchText - The text to search within course titles or descriptions.
	 * @param isShowMore - Flag indicating whether to show more details.
	 * @returns A promise that resolves to a paginated list of starred course cards.
	 */
	public async getStarredCourseCards(
		pageIndex = 0,
		pageSize = 10,
		sortBy = "Title",
		searchText?: string,
		isShowMore = false,
	): Promise<EntityListOfItslearningRestApiEntitiesCourseCard> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
			sortBy,
			searchText,
			isShowMore,
		});

		return this.http.get(`/restapi/personal/courses/cards/starred/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Retrieves a paginated list of course cards for the user's unstarred courses.
	 *
	 * @param pageIndex - The index of the page to retrieve (default is 0).
	 * @param pageSize - The number of course cards per page (default is 10).
	 * @param sortBy - The criteria to sort the course cards (e.g., 'lastAccessed', 'title').
	 * @param searchText - The text to search within course titles or descriptions.
	 * @param isShowMore - Flag indicating whether to show more details.
	 * @returns A promise that resolves to a paginated list of unstarred course cards.
	 */
	public async getUnstarredCourseCards(
		pageIndex = 0,
		pageSize = 10,
		sortBy = "Title",
		searchText?: string,
		isShowMore = false,
	): Promise<EntityListOfItslearningRestApiEntitiesCourseCard> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
			sortBy,
			searchText,
			isShowMore,
		});

		return this.http.get(`/restapi/personal/courses/cards/unstarred/v1`, {
			params: queryParams,
		});
	}
}
