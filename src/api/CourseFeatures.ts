import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesPersonalFeature } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Feature";

/**
 * CourseFeaturesAPI
 *
 * Overview:
 * Endpoint for Course Features API.
 * Provides access to the list of features available for a course.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Courses`.
 */
export class CourseFeaturesAPI extends Manager {
	/**
	 * Gets features available for a specific course (v1).
	 *
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to the course features.
	 */
	public async getCourseFeatures(
		courseId: number,
	): Promise<ItslearningRestApiEntitiesPersonalFeature> {
		return this.http.get(`/restapi/personal/courses/${courseId}/features/v1`);
	}

	/**
	 * Gets features available for a specific course (v2).
	 *
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to the course features.
	 */
	public async getCourseFeaturesV2(
		courseId: number,
	): Promise<ItslearningRestApiEntitiesPersonalFeature> {
		return this.http.get(`/restapi/personal/courses/${courseId}/features/v2`);
	}
}
