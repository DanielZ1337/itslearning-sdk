import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesPlannerPlanPreview } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Planner.PlanPreview";
import type { ItslearningRestApiEntitiesPersonalPlanWithObjectivesAndElements } from "../types/api/native/Itslearning.RestApi.Entities.Personal.PlanWithObjectivesAndElements";
import type { ItsolutionsItslearningWebRestApiInternalModelsPlannerShareablePlannerAddSharedResourcesToCoursePlanRequest } from "../types/api/native/Itsolutions.Itslearning.Web.RestApi.Internal.Models.Planner.ShareablePlanner.AddSharedResourcesToCoursePlanRequest";
import { createSearchParams } from "../utils/search-params";

/**
 * PlannerAPI
 *
 * Overview:
 * Endpoint to get planner information.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Planner`.
 */
export class PlannerAPI extends Manager {
	/**
	 * Gets a list of plans, with learning objectives and elements attached.
	 *
	 * @param plansIds - An array of plan IDs to retrieve.
	 */
	public async getPlansInfo(
		plansIds: number[],
	): Promise<
		Array<ItslearningRestApiEntitiesPersonalPlanWithObjectivesAndElements>
	> {
		const queryParams = createSearchParams({
			plansIds,
		});

		return this.http.get(`/restapi/personal/planner/plansinfo/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Adds shared plan elements to the course plan.
	 *
	 * @param targetCourseId - The unique ID of the target course.
	 * @param targetTopicId - The unique ID of the target topic.
	 * @param targetPlanId - The unique ID of the target plan.
	 * @param data - Any additional data (e.g., list of elements) to be added.
	 */
	public async addSharedPlanElements(
		targetCourseId: number,
		targetTopicId: number,
		targetPlanId: number,
		data: unknown,
	): Promise<ItsolutionsItslearningWebRestApiInternalModelsPlannerShareablePlannerAddSharedResourcesToCoursePlanRequest> {
		return this.http.post(
			`/restapi/personal/planner/targetCourse/${targetCourseId}/targetTopic/${targetTopicId}/targetPlan/${targetPlanId}/v1`,
			{ data },
		);
	}

	/**
	 * Gets previews of plans for the specified course. Can filter by date range.
	 *
	 * If the plan starts or ends within the provided period, it will be included.
	 * If no period is supplied, all course plans are returned.
	 *
	 * @param courseId - The unique ID of the course.
	 * @param startDate - (Optional) The start date (ISO 8601).
	 * @param stopDate - (Optional) The end date (ISO 8601).
	 */
	public async getCoursePlans(
		courseId: number,
		startDate?: string | Date,
		stopDate?: string | Date,
	): Promise<EntityListOfItslearningRestApiEntitiesPlannerPlanPreview> {
		const queryParams = createSearchParams({
			courseId,
			startDate,
			stopDate,
		});

		return this.http.get(`/restapi/personal/planner/v1`, {
			params: queryParams,
		});
	}
}
