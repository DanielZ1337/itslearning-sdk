import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesChildCourse } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.ChildCourse";
import type { EntityListOfItslearningRestApiEntitiesChildV2 } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.ChildV2";
import type { EntityListOfItslearningRestApiEntitiesTask } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Task";
import type { ItslearningRestApiEntitiesPersonUpcoming } from "../types/api/native/Itslearning.RestApi.Entities.PersonUpcoming";
import { createSearchParams } from "../utils/search-params";

/**
 * ChildrenAPI
 *
 * Overview:
 * Endpoint for Children API.
 * Provides access to information about the current user's children (guardian functionality).
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Children`.
 */
export class ChildrenAPI extends Manager {
	/**
	 * Gets the list of children for the current user.
	 *
	 * @returns A promise that resolves to a paginated list of children.
	 */
	public async getChildren(): Promise<EntityListOfItslearningRestApiEntitiesChildV2> {
		return this.http.get("/restapi/personal/children/v1");
	}

	/**
	 * Gets tasks for a specific child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 10).
	 * @param status - Filter by task status.
	 * @param deadline - Filter by deadline type.
	 * @param isHomework - Filter by homework flag.
	 * @param fromDate - Filter tasks from this date.
	 * @param toDate - Filter tasks up to this date.
	 * @returns A promise that resolves to a paginated list of tasks for the child.
	 */
	public async getChildTasks(
		childId: number,
		pageIndex = 0,
		pageSize = 10,
		status?: number,
		deadline?: number,
		isHomework?: boolean,
		fromDate?: Date,
		toDate?: Date,
	): Promise<EntityListOfItslearningRestApiEntitiesTask> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
			status,
			deadline,
			isHomework,
			fromDate,
			toDate,
		});
		return this.http.get(`/restapi/personal/children/${childId}/tasks/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets tasks for a specific child within a specific course.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param courseId - The unique identifier of the course.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 10).
	 * @param status - Filter by task status.
	 * @param deadline - Filter by deadline type.
	 * @param isHomework - Filter by homework flag.
	 * @param fromDate - Filter tasks from this date.
	 * @param toDate - Filter tasks up to this date.
	 * @returns A promise that resolves to a paginated list of tasks for the child in the course.
	 */
	public async getChildCourseTasks(
		childId: number,
		courseId: number,
		pageIndex = 0,
		pageSize = 10,
		status?: number,
		deadline?: number,
		isHomework?: boolean,
		fromDate?: Date,
		toDate?: Date,
	): Promise<EntityListOfItslearningRestApiEntitiesTask> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
			status,
			deadline,
			isHomework,
			fromDate,
			toDate,
		});
		return this.http.get(
			`/restapi/personal/children/${childId}/courses/${courseId}/tasks/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets upcoming tasks, plans, and calendar events for a child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param fromDate - The start date for upcoming events.
	 * @param toDate - The end date for upcoming events.
	 * @returns A promise that resolves to upcoming events for the child.
	 */
	public async getChildUpcoming(
		childId: number,
		fromDate?: Date,
		toDate?: Date,
	): Promise<ItslearningRestApiEntitiesPersonUpcoming> {
		const queryParams = createSearchParams({ fromDate, toDate });
		return this.http.get(`/restapi/personal/children/${childId}/upcoming/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets courses for a specific child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 10).
	 * @returns A promise that resolves to a paginated list of courses for the child.
	 */
	public async getChildCourses(
		childId: number,
		pageIndex = 0,
		pageSize = 10,
	): Promise<EntityListOfItslearningRestApiEntitiesChildCourse> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});
		return this.http.get(`/restapi/personal/children/${childId}/courses/v1`, {
			params: queryParams,
		});
	}
}
