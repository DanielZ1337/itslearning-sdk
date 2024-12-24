import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesBroadcastInstantMessageToSend } from "../types/api/native/Itslearning.RestApi.Entities.BroadcastInstantMessageToSend";
import type { ItsolutionsItslearningItslCoreBusinessLayerInstantMessageBroadcastBroadcastMessageStatisticsEntity } from "../types/api/native/Itsolutions.Itslearning.ItslCore.BusinessLayer.InstantMessage.Broadcast.BroadcastMessageStatisticsEntity";
import { createSearchParams } from "../utils/search-params";

/**
 * InstantMessageBroadcastAPI
 *
 * Overview:
 * Endpoint for internal instant message broadcasting for personal API.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `InstantMessage`.
 */
export class InstantMessageBroadcastAPI extends Manager {
	/**
	 * Sends a broadcast instant message.
	 * Creates a new thread for a new broadcast message.
	 *
	 * @param data - The data required to send the broadcast message.
	 */
	public async sendBroadcastMessage(
		data: ItslearningRestApiEntitiesBroadcastInstantMessageToSend,
	): Promise<unknown> {
		return this.http.post("/restapi/personal/instantmessages/broadcast/v1", {
			data,
		});
	}

	/**
	 * Marks broadcast threads as deleted and creates an async task
	 * to permanently delete them and all associated data.
	 */
	public async deleteBroadcastThreads(data: Array<number>): Promise<void> {
		return this.http.delete("/restapi/personal/instantmessages/broadcast/v1");
	}

	/**
	 * Gets statistics on how many recipients read messages of specified thread.
	 *
	 * @param threadId - The unique ID of the broadcast thread.
	 */
	public async getBroadcastStatistics(
		threadId: number,
	): Promise<ItsolutionsItslearningItslCoreBusinessLayerInstantMessageBroadcastBroadcastMessageStatisticsEntity> {
		return this.http.get(
			`/restapi/personal/instantmessages/broadcastStatistics/${threadId}/v1`,
		);
	}
}
