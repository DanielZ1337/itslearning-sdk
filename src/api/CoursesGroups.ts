import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesCourseGroupsCourseGroupSet } from "../types/api/native/Itslearning.RestApi.Entities.CourseGroups.CourseGroupSet";
import type { ItslearningRestApiEntitiesCourseGroupsCourseGroupsToRemove } from "../types/api/native/Itslearning.RestApi.Entities.CourseGroups.CourseGroupsToRemove";

/**
 * CoursesGroupsAPI
 *
 * Overview:
 * Endpoint for Courses Groups API.
 * Provides access to manage course groups and group sets.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Courses`.
 */
export class CoursesGroupsAPI extends Manager {
	/**
	 * Removes groups from a course.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @param groupsToRemove - The groups to remove from the course.
	 * @returns A promise that resolves when the groups are removed.
	 */
	public async removeCourseGroups(
		courseId: number,
		groupsToRemove: ItslearningRestApiEntitiesCourseGroupsCourseGroupsToRemove,
	): Promise<void> {
		return this.http.delete(`/restapi/personal/courses/${courseId}/groups/v1`, {
			data: groupsToRemove,
		});
	}

	/**
	 * Creates or replaces course group sets for a course.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @param groupSets - The group sets to create or replace.
	 * @returns A promise that resolves when the group sets are updated.
	 */
	public async createOrReplaceCourseGroupSets(
		courseId: number,
		groupSets: Array<ItslearningRestApiEntitiesCourseGroupsCourseGroupSet>,
	): Promise<void> {
		return this.http.put(`/restapi/personal/courses/${courseId}/groupsets/v1`, {
			data: groupSets,
		});
	}
}
