import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * PageUrlAPI
 *
 * Overview:
 * Endpoint to get URLs from itslearning.
 *
 * This API does not require authentication.
 */
export class PageUrlAPI extends Manager {
	/**
	 * Gets the URLs required to configure the CkEditor.
	 *
	 * @returns A promise that resolves to the CkEditor configuration URLs.
	 */
	public async getCkEditorConfigUrls(): Promise<Record<string, string>> {
		return this.http.get("/restapi/pageurl/ckeditorconfigurls");
	}

	/**
	 * Gets the 'course element' page URL.
	 *
	 * @param courseId - The unique ID of the course.
	 * @param elementId - The unique ID of the course element.
	 * @param elementType - The type of the course element.
	 * @returns A promise that resolves to the URL of the specified course element.
	 */
	public async getCourseElementPageUrl(
		courseId: number,
		elementId: number,
		elementType?: number,
	): Promise<string> {
		const queryParams = createSearchParams({
			courseId,
			elementId,
			elementType,
		});

		return this.http.get("/restapi/pageurl/courseelement", {
			params: queryParams,
		});
	}

	/**
	 * Gets the base URLs for different customer-specific services.
	 *
	 * @returns A promise that resolves to the base URLs of various services.
	 */
	public async getServicesBaseUrl(): Promise<Record<string, string>> {
		return this.http.get("/restapi/pageurl/services/v1");
	}

	/**
	 * Gets the base URL to build tree link navigation URLs.
	 *
	 * @returns A promise that resolves to the base URL for tree link navigation.
	 */
	public async getTreeLinkBaseUrl(): Promise<string> {
		return this.http.get("/restapi/pageurl/treelink");
	}

	/**
	 * Gets the 'view learning tool element' page URL.
	 *
	 * @param elementId - The unique ID of the learning tool element.
	 * @returns A promise that resolves to the URL of the specified learning tool element.
	 */
	public async getViewLearningToolElementPageUrl(
		elementId: number,
	): Promise<string> {
		const queryParams = createSearchParams({ elementId });

		return this.http.get("/restapi/pageurl/viewLearningToolElement", {
			params: queryParams,
		});
	}
}
