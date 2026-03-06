import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesPersonalFeature } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Feature";

/**
 * ChildrenCoursesAPI
 *
 * Overview:
 * Endpoint for Children Courses API.
 * Provides access to course features for a guardian's children.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Children`.
 */
export class ChildrenCoursesAPI extends Manager {
	/**
	 * Gets features available for a child's course.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to the course features for the child.
	 */
	public async getChildCourseFeatures(
		childId: number,
		courseId: number,
	): Promise<ItslearningRestApiEntitiesPersonalFeature> {
		return this.http.get(
			`/restapi/personal/children/${childId}/courses/${courseId}/features/v1`,
		);
	}
}
