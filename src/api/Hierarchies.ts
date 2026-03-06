import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesHierarchySimple } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.HierarchySimple";
import type { EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRole } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.PersonSimpleWithHierarchyRole";
import type { EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRoleAndCourseMembership } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.PersonSimpleWithHierarchyRoleAndCourseMembership";
import type { ItslearningRestApiEntitiesHierarchySimple } from "../types/api/native/Itslearning.RestApi.Entities.HierarchySimple";
import type { ItslearningRestApiEntitiesHierarchySimpleWithMemberCount } from "../types/api/native/Itslearning.RestApi.Entities.HierarchySimpleWithMemberCount";
import { createSearchParams } from "../utils/search-params";

/**
 * HierarchiesAPI
 *
 * Overview:
 * Endpoint for Hierarchies API.
 * Provides access to organisation hierarchy data including children, members, and parents.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Hierarchies`.
 */
export class HierarchiesAPI extends Manager {
	/**
	 * Gets child hierarchies for a given hierarchy node.
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @returns A promise that resolves to a list of child hierarchy nodes.
	 */
	public async getChildren(
		hierarchyId: number,
	): Promise<Array<ItslearningRestApiEntitiesHierarchySimple>> {
		return this.http.get(
			`/restapi/personal/hierarchies/${hierarchyId}/children/v1`,
		);
	}

	/**
	 * Gets child hierarchies with member counts for a specific course.
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to a list of child hierarchy nodes with member counts.
	 */
	public async getChildrenWithMemberCountForCourse(
		hierarchyId: number,
		courseId: number,
	): Promise<Array<ItslearningRestApiEntitiesHierarchySimpleWithMemberCount>> {
		const queryParams = createSearchParams({ courseId });
		return this.http.get(
			`/restapi/personal/hierarchies/${hierarchyId}/childrenwithmembercountforcourse/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets child hierarchies with member counts for the current person.
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @returns A promise that resolves to a list of child hierarchy nodes with member counts.
	 */
	public async getChildrenWithMemberCountForPerson(
		hierarchyId: number,
	): Promise<Array<ItslearningRestApiEntitiesHierarchySimpleWithMemberCount>> {
		return this.http.get(
			`/restapi/personal/hierarchies/${hierarchyId}/childrenwithmembercountforperson/v1`,
		);
	}

	/**
	 * Gets members of a hierarchy node (v1).
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 25).
	 * @returns A promise that resolves to a paginated list of members with hierarchy roles.
	 */
	public async getMembers(
		hierarchyId: number,
		pageIndex = 0,
		pageSize = 25,
	): Promise<EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRole> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});
		return this.http.get(
			`/restapi/personal/hierarchies/${hierarchyId}/members/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets members of a hierarchy node with course membership info (v2).
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @param pageIndex - The page index (default = 0).
	 * @param pageSize - The number of results per page (default = 25).
	 * @param courseContext - The course context ID for membership information.
	 * @returns A promise that resolves to a paginated list of members with hierarchy roles and course membership.
	 */
	public async getMembersWithCourseMembership(
		hierarchyId: number,
		pageIndex = 0,
		pageSize = 25,
		courseContext?: number,
	): Promise<EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRoleAndCourseMembership> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
			courseContext,
		});
		return this.http.get(
			`/restapi/personal/hierarchies/${hierarchyId}/members/v2`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets parent hierarchies for a given hierarchy node.
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @param visibleInSearchOnly - Whether to include only hierarchies visible in search.
	 * @returns A promise that resolves to a list of parent hierarchy nodes.
	 */
	public async getParents(
		hierarchyId: number,
		visibleInSearchOnly?: boolean,
	): Promise<Array<ItslearningRestApiEntitiesHierarchySimple>> {
		const queryParams = createSearchParams({ visibleInSearchOnly });
		return this.http.get(
			`/restapi/personal/hierarchies/${hierarchyId}/parents/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets a hierarchy node by role.
	 *
	 * @param hierarchyId - The unique identifier of the hierarchy node.
	 * @param role - The role to filter by.
	 * @returns A promise that resolves to the hierarchy node.
	 */
	public async getByRole(
		hierarchyId: number,
		role?: string,
	): Promise<ItslearningRestApiEntitiesHierarchySimple> {
		const queryParams = createSearchParams({ role });
		return this.http.get(`/restapi/personal/hierarchies/${hierarchyId}/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets the default hierarchy for the current person.
	 *
	 * @returns A promise that resolves to the default hierarchy node.
	 */
	public async getDefault(): Promise<ItslearningRestApiEntitiesHierarchySimple> {
		return this.http.get("/restapi/personal/hierarchies/default/v1");
	}

	/**
	 * Gets the default hierarchy for a specific course.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to the default hierarchy for the course.
	 */
	public async getDefaultForCourse(
		courseId: number,
	): Promise<ItslearningRestApiEntitiesHierarchySimple> {
		return this.http.get(
			`/restapi/personal/hierarchies/defaultforcourse/${courseId}`,
		);
	}

	/**
	 * Gets the default hierarchy with member count for the current person.
	 *
	 * @returns A promise that resolves to the default hierarchy node with member count.
	 */
	public async getDefaultWithMemberCount(): Promise<ItslearningRestApiEntitiesHierarchySimpleWithMemberCount> {
		return this.http.get(
			"/restapi/personal/hierarchies/defaultwithmembercount/v1",
		);
	}

	/**
	 * Gets organisation hierarchies for the current user by role.
	 *
	 * @param role - The role to filter organisations by.
	 * @returns A promise that resolves to a paginated list of organisation hierarchy nodes.
	 */
	public async getOrganisations(
		role?: string,
	): Promise<EntityListOfItslearningRestApiEntitiesHierarchySimple> {
		const queryParams = createSearchParams({ role });
		return this.http.get("/restapi/personal/hierarchies/organisations/v1", {
			params: queryParams,
		});
	}
}
