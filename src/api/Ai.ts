import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesAiResponse } from "../types/api/native/Itslearning.RestApi.Entities.AiResponse";
import type { ItslearningRestApiEntitiesPersonalAiAiRequest } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Ai.AiRequest";
import type { ItslearningRestApiEntitiesPersonalAiAiResponseRequest } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Ai.AiResponseRequest";
import type {
	ItslearningRestApiEntitiesPersonalAiAddLinkRequest,
	ItslearningRestApiEntitiesPersonalAiCreateElementRequest,
} from "../types/api/native/Itslearning.RestApi.Entities.Personal.Ai.Requests";
import type { ItslearningRestApiEntitiesPersonalAiStoreStatusResponse } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Ai.StoreResponse";

/**
 * AiAPI
 *
 * Overview:
 * Endpoint for AI (Artificial Intelligence) API.
 * Provides access to AI-powered features such as text summarization, translation,
 * chat, and element creation.
 *
 * Secured with OAuth2 and requires appropriate OAuth2 API scopes.
 */
export class AiAPI extends Manager {
	/**
	 * Sends an AI request and returns the AI-generated response.
	 *
	 * @param request - The AI request body.
	 * @returns The AI response.
	 */
	public async sendRequest(
		request: ItslearningRestApiEntitiesPersonalAiAiRequest,
	): Promise<ItslearningRestApiEntitiesAiResponse> {
		return this.http.post(`/restapi/personal/ai/v1`, { data: request });
	}

	/**
	 * Sends a follow-up response request (continuing a conversation).
	 *
	 * @param request - The response request with previous response ID.
	 * @returns The AI response.
	 */
	public async sendResponseRequest(
		request: ItslearningRestApiEntitiesPersonalAiAiResponseRequest,
	): Promise<ItslearningRestApiEntitiesAiResponse> {
		return this.http.post(`/restapi/personal/ai/responses/v1`, {
			data: request,
		});
	}

	/**
	 * Creates a new course element using AI-generated content.
	 *
	 * @param request - The element creation request.
	 * @returns The created element.
	 */
	public async createElement(
		request: ItslearningRestApiEntitiesPersonalAiCreateElementRequest,
	): Promise<unknown> {
		return this.http.post(`/restapi/personal/ai/elements/v1`, {
			data: request,
		});
	}

	/**
	 * Returns the status of a file store (used for AI context uploads).
	 *
	 * @param storeToken - The store token identifier.
	 * @returns The store status response.
	 */
	public async getStoreStatus(
		storeToken: string,
	): Promise<ItslearningRestApiEntitiesPersonalAiStoreStatusResponse> {
		return this.http.get(`/restapi/personal/ai/stores/${storeToken}/status/v1`);
	}

	/**
	 * Adds a link as a resource to an AI store.
	 *
	 * @param storeToken - The store token identifier.
	 * @param request - The link request containing the URL.
	 */
	public async addLinkToStore(
		storeToken: string,
		request: ItslearningRestApiEntitiesPersonalAiAddLinkRequest,
	): Promise<void> {
		return this.http.post(
			`/restapi/personal/ai/stores/${storeToken}/links/v1`,
			{ data: request },
		);
	}

	/**
	 * Adds course resources to an AI store.
	 *
	 * @param storeToken - The store token identifier.
	 * @param resourceIds - Array of resource identifiers to add.
	 */
	public async addResourcesToStore(
		storeToken: string,
		resourceIds: number[],
	): Promise<void> {
		return this.http.post(
			`/restapi/personal/ai/stores/${storeToken}/resources/v1`,
			{ data: { resourceIds } },
		);
	}

	/**
	 * Removes a file from an AI store.
	 *
	 * @param storeToken - The store token identifier.
	 * @param fileId - The file identifier to remove.
	 */
	public async removeFileFromStore(
		storeToken: string,
		fileId: string,
	): Promise<void> {
		return this.http.delete(
			`/restapi/personal/ai/stores/${storeToken}/files/${fileId}/v1`,
		);
	}

	/**
	 * Updates the AI guidelines for the current user or organisation.
	 *
	 * @param guidelines - The guidelines text to set.
	 */
	public async updateGuidelines(guidelines: string): Promise<void> {
		return this.http.put(`/restapi/personal/ai/guidelines/v1`, {
			data: { guidelines },
		});
	}
}
