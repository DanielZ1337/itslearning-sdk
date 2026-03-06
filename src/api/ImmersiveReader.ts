import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesImmersiveReaderInfo } from "../types/api/native/Itslearning.RestApi.Entities.ImmersiveReaderInfo";
import { createSearchParams } from "../utils/search-params";

/**
 * ImmersiveReaderAPI
 *
 * Overview:
 * Endpoint for Immersive Reader API.
 * Provides access tokens and configuration for the Microsoft Immersive Reader.
 *
 * Secured with OAuth2.
 */
export class ImmersiveReaderAPI extends Manager {
	/**
	 * Gets the immersive reader info for a specific resource.
	 *
	 * @param resourceId - The unique identifier of the resource.
	 * @param resourceType - The type of the resource.
	 * @param contentBlockId - The optional content block ID within the resource.
	 * @returns A promise that resolves to the immersive reader info including access token.
	 */
	public async getImmersiveReaderInfo(
		resourceId: number,
		resourceType: number,
		contentBlockId?: number,
	): Promise<ItslearningRestApiEntitiesImmersiveReaderInfo> {
		const queryParams = createSearchParams({
			resourceId,
			resourceType,
			contentBlockId,
		});
		return this.http.get("/restapi/personal/immersivereader/v1", {
			params: queryParams,
		});
	}
}
