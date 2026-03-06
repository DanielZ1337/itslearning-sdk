import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesPlannerPlanPreviewV2 } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Planner.PlanPreviewV2";
import type { ItslearningRestApiEntitiesPlannerPlanPreviewV2 } from "../types/api/native/Itslearning.RestApi.Entities.Planner.PlanPreviewV2";
import { createSearchParams } from "../utils/search-params";

/**
 * ChildrenPlansAPI
 *
 * Overview:
 * Endpoint for Children Plans API.
 * Provides access to planner plans for a guardian's children.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Children`.
 */
export class ChildrenPlansAPI extends Manager {
	/**
	 * Gets plans for a specific child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param startDate - The start date of the plans range.
	 * @param stopDate - The stop date of the plans range.
	 * @param onlyWithoutDates - Whether to include only plans without dates.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 10).
	 * @returns A promise that resolves to a paginated list of plan previews.
	 */
	public async getChildPlans(
		childId: number,
		startDate?: Date,
		stopDate?: Date,
		onlyWithoutDates?: boolean,
		pageIndex = 0,
		pageSize = 10,
	): Promise<EntityListOfItslearningRestApiEntitiesPlannerPlanPreviewV2> {
		const queryParams = createSearchParams({
			startDate,
			stopDate,
			onlyWithoutDates,
			PageIndex: pageIndex,
			PageSize: pageSize,
		});
		return this.http.get(`/restapi/personal/children/${childId}/plans/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets a specific plan for a child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @param planId - The unique identifier of the plan.
	 * @returns A promise that resolves to the plan preview.
	 */
	public async getChildPlan(
		childId: number,
		planId: number,
	): Promise<ItslearningRestApiEntitiesPlannerPlanPreviewV2> {
		return this.http.get(
			`/restapi/personal/children/${childId}/plans/${planId}/v1`,
		);
	}
}
