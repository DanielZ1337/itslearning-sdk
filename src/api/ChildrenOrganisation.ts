import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesChildOrganisationPermissions } from "../types/api/native/Itslearning.RestApi.Entities.ChildOrganisationPermissions";

/**
 * ChildrenOrganisationAPI
 *
 * Overview:
 * Endpoint for Children Organisation API.
 * Provides access to organisation permissions for a guardian's children.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Children`.
 */
export class ChildrenOrganisationAPI extends Manager {
	/**
	 * Gets the organisation permissions for a specific child.
	 *
	 * @param childId - The unique identifier of the child.
	 * @returns A promise that resolves to the child's organisation permissions.
	 */
	public async getChildPermissions(
		childId: number,
	): Promise<ItslearningRestApiEntitiesChildOrganisationPermissions> {
		return this.http.get(
			`/restapi/personal/children/${childId}/permissions/v1`,
		);
	}
}
