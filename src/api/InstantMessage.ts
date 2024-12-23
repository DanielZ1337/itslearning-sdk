import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesInstantMessage } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.InstantMessage";
import type { EntityListOfItslearningRestApiEntitiesInstantMessageThread } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.InstantMessageThread";
import type { ItslearningRestApiEntitiesInstantMessage } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessage";
import type { ItslearningRestApiEntitiesInstantMessageFilterSuggestion } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageFilterSuggestion";
import type { ItslearningRestApiEntitiesInstantMessageListModel } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageListModel";
import type { ItslearningRestApiEntitiesInstantMessagePermissions } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessagePermissions";
import type { ItslearningRestApiEntitiesInstantMessageThread } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageThread";
import type { ItslearningRestApiEntitiesInstantMessageThreadListModel } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageThreadListModel";
import type { ItslearningRestApiEntitiesInstantMessageThreadSearchParams } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageThreadSearchParams";
import type { ItslearningRestApiEntitiesInstantMessageToPatch } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageToPatch";
import type { ItslearningRestApiEntitiesInstantMessageToSendV2 } from "../types/api/native/Itslearning.RestApi.Entities.InstantMessageToSendV2";
import type { ItslearningRestApiEntitiesMessagesDisabledThreadParticipants } from "../types/api/native/Itslearning.RestApi.Entities.MessagesDisabledThreadParticipants";
import type { ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1 } from "../types/api/native/Itslearning.RestApi.Entities.Updatable.InstantMessageThreadUpdateV1";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import { createSearchParams } from "../utils/search-params";

/**
 * InstantMessagesAPI
 *
 * Overview:
 * Endpoint for internal instant messages for personal API.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `InstantMessage`.
 */
export class InstantMessagesAPI extends Manager {
	/**
	 * Cancels abuse report for an instant message.
	 *
	 * @param instantMessageId - The unique ID of the instant message.
	 */
	public async cancelAbuseReport(
		instantMessageId: number,
	): Promise<ItslearningRestApiEntitiesInstantMessage> {
		return this.http.delete(
			`/restapi/personal/instantmessages/${instantMessageId}/abusereport/v1`,
		);
	}

	/**
	 * Undelete (restore) an instant message.
	 *
	 * @param instantMessageId - The unique ID of the instant message to restore.
	 */
	public async restoreInstantMessage(
		instantMessageId: number,
	): Promise<ItslearningRestApiEntitiesInstantMessage> {
		return this.http.patch(
			`/restapi/personal/instantmessages/${instantMessageId}/restore/v1`,
		);
	}

	/**
	 * Deletes an instant message.
	 *
	 * @param instantMessageId - The unique ID of the instant message to delete.
	 */
	public async deleteInstantMessage(
		instantMessageId: number,
	): Promise<ItslearningRestApiEntitiesInstantMessage> {
		return this.http.delete(
			`/restapi/personal/instantmessages/${instantMessageId}/v1`,
		);
	}

	/**
	 * Uploads a file attachment to temporary storage.
	 *
	 * @param fileData - The file to upload, wrapped in FormData.
	 */
	public async uploadAttachment(fileData: FormData): Promise<unknown> {
		throw new Error("Not implemented");
		return this.http.post(`/restapi/personal/instantmessages/attachment/v1`, {
			data: fileData,
		});
	}

	/**
	 * Deletes temporary files that were uploaded.
	 *
	 * @param fileId - The ID of the file to delete.
	 */
	public async deleteAttachment(
		fileId: string,
	): Promise<SystemNetHttpHttpResponseMessage> {
		const queryParams = createSearchParams({ fileId });
		return this.http.delete(`/restapi/personal/instantmessages/attachment/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Cancels abuse report for a thread.
	 *
	 * @param threadId - The unique ID of the thread.
	 */
	public async cancelAbuseThreadReport(threadId: number): Promise<void> {
		return this.http.put(
			`/restapi/personal/instantmessages/cancelabusethreadreport/${threadId}/v1`,
		);
	}

	/**
	 * Registers or unregisters a (SignalR) communication channel.
	 *
	 * @param channelId - The unique ID of the communication channel.
	 * @param unregister - True to unregister, false to register.
	 */
	public async registerCommunicationChannel(
		channelId: string,
		unregister = false,
	): Promise<void> {
		throw new Error("Not implemented");
		const queryParams = createSearchParams({ unregister });
		return this.http.post(
			`/restapi/personal/instantmessages/communicationchannel/${channelId}/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets the number of unread messages in a specific thread for the current user.
	 *
	 * @param threadId - The unique ID of the instant message thread.
	 * @returns The count of unread messages.
	 */
	public async getThreadUnreadCount(threadId: number): Promise<number> {
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/unread/count/v1`,
		);
	}

	/**
	 * Searches inside a given thread for messages matching the provided search text.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param searchText - The text to search for.
	 */
	public async searchMessagesInThread(
		threadId: number,
		searchText: string,
	): Promise<Array<number>> {
		const queryParams = createSearchParams({ searchText });
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/messages/search/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets the messages in a specific thread (v2).
	 * One cannot use both `lowerBoundInstantMessageId` and `upperBoundInstantMessageId`.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param maxMessages - The max number of messages to retrieve.
	 * @param upperBoundInstantMessageId - The message ID to retrieve messages before.
	 * @param lowerBoundInstantMessageId - The message ID to retrieve messages after.
	 * @deprecated Use getThreadMessagesV3 instead.
	 */
	public async getThreadMessagesV2(
		threadId: number,
		maxMessages?: number,
		upperBoundInstantMessageId?: number,
		lowerBoundInstantMessageId?: number,
	): Promise<unknown> {
		const queryParams = createSearchParams({
			maxMessages,
			upperBoundInstantMessageId,
			lowerBoundInstantMessageId,
		});
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/messages/v2`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets a collection of instant messages extended with a `hasMore` field (v3).
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param pageSize - How many messages to fetch.
	 * @param fromId - The ID from which to start fetching.
	 */
	public async getThreadMessagesV3(
		threadId: number,
		pageSize?: number,
		fromId?: number,
	): Promise<ItslearningRestApiEntitiesInstantMessageListModel> {
		const queryParams = createSearchParams({
			pageSize,
			fromId,
		});
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/messages/v3`,
			{ params: queryParams },
		);
	}

	/**
	 * Adds a moderator to an instant message thread.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param moderatorData - The moderator data (e.g., participant IDs).
	 */
	public async addModeratorToThread(threadId: number, moderatorData: unknown) {
		throw new Error("Not implemented");
		// return this.http.put(
		//   `/restapi/personal/instantmessages/messagethreads/${threadId}/moderators/v1`,
		//   { data: moderatorData },
		// );
	}

	/**
	 * Gets a collection of thread participants who cannot see messages.
	 *
	 * @param threadId - The unique ID of the thread.
	 */
	public async getParticipantsWithDisabledMessages(
		threadId: number,
	): Promise<ItslearningRestApiEntitiesMessagesDisabledThreadParticipants> {
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/participants/messages-disabled/v1`,
		);
	}

	/**
	 * Adds participants to an instant message thread.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param participants - The participants to add.
	 */
	public async addParticipantsToThread(
		threadId: number,
		participants: ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1,
	): Promise<ItslearningRestApiEntitiesInstantMessageThread> {
		return this.http.put(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/participants/v1`,
			{ data: participants },
		);
	}

	/**
	 * Removes participants from an instant message thread.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param participants - The participants to remove.
	 */
	public async removeParticipantsFromThread(
		threadId: number,
		participants: ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1,
	): Promise<ItslearningRestApiEntitiesInstantMessageThread> {
		return this.http.delete(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/participants/v1`,
			{ data: participants },
		);
	}

	/**
	 * Restores deletion for a thread.
	 *
	 * @param threadId - The unique ID of the thread to restore.
	 */
	public async restoreThread(threadId: number): Promise<void> {
		throw new Error("Not implemented");
		return this.http.patch(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/restore/v1`,
		);
	}

	/**
	 * Toggles whether students can send replies to this thread or not.
	 *
	 * @param threadId - The unique ID of the thread.
	 */
	public async toggleThreadReplies(threadId: number): Promise<void> {
		throw new Error("Not implemented");
		return this.http.put(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/toggleEnableDisableReplies/v1`,
		);
	}

	/**
	 * Updates the last read instant message ID for a thread.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param lastReadInstantMessageId - The message ID to mark as last read.
	 * @param sortIndex - The sort index of the message (optional).
	 */
	public async updateLastRead(
		threadId: number,
		lastReadInstantMessageId: number,
		sortIndex?: number,
	): Promise<void> {
		const queryParams = createSearchParams({ sortIndex });
		return this.http.put(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/updatelastread/${lastReadInstantMessageId}/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Deletes a thread.
	 *
	 * @param threadId - The unique ID of the thread to delete.
	 */
	public async deleteThread(threadId: number): Promise<void> {
		return this.http.delete(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/v1`,
		);
	}

	/**
	 * Updates an instant message thread (e.g. name or participants).
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param updateData - The data for updating the thread.
	 */
	public async updateThread(
		threadId: number,
		updateData: ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1,
	): Promise<ItslearningRestApiEntitiesInstantMessageThread> {
		return this.http.put(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/v1`,
			{ data: updateData },
		);
	}

	/**
	 * Gets messages in a specific thread (v1).
	 * @param threadId - The unique ID of the thread.
	 * @param maxMessages - The max number of messages to retrieve.
	 * @param upperBoundInstantMessageId - The message ID to retrieve messages before.
	 * @param lowerBoundInstantMessageId - The message ID to retrieve messages after.
	 * @deprecated Use getThreadMessagesV2 instead.
	 */
	public async getThreadMessagesV1(
		threadId: number,
		maxMessages?: number,
		upperBoundInstantMessageId?: number,
		lowerBoundInstantMessageId?: number,
	): Promise<EntityListOfItslearningRestApiEntitiesInstantMessage> {
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/v1`,
		);
	}

	/**
	 * Gets an instant message thread and messages (v2).
	 * One cannot use both lowerBoundInstantMessageId and upperBoundInstantMessageId.
	 *
	 * @param threadId - The unique ID of the thread.
	 * @param maxMessages - The max number of messages to retrieve.
	 * @param upperBoundInstantMessageId - The message ID to retrieve before.
	 * @param lowerBoundInstantMessageId - The message ID to retrieve after.
	 */
	public async getThreadAndMessagesV2(
		threadId: number,
		maxMessages = 100,
		upperBoundInstantMessageId?: number,
		lowerBoundInstantMessageId?: number,
	): Promise<ItslearningRestApiEntitiesInstantMessageThread> {
		const queryParams = createSearchParams({
			maxMessages,
			upperBoundInstantMessageId,
			lowerBoundInstantMessageId,
		});
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/${threadId}/v2`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets the instant message thread ID for group answer. Creates it if not present.
	 *
	 * @param collaborationId - The unique ID of the collaboration.
	 */
	public async getCollaborationThreadId(
		collaborationId: number,
	): Promise<unknown> {
		throw new Error("Not implemented");
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/collaborations/${collaborationId}/v1`,
		);
	}

	/**
	 * Gets the instant message thread ID for a one-to-one conversation between the current user and another user.
	 *
	 * @param personId - The unique ID of the other user.
	 */
	public async getOneToOneThreadId(personId: number): Promise<number> {
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/onetoone/${personId}/v1`,
		);
	}

	/**
	 * Searches the logged-in user's message threads.
	 *
	 * @param searchData - The data for the search (e.g. searchText, paging, etc.).
	 */
	public async searchMessageThreads(
		searchData: ItslearningRestApiEntitiesInstantMessageThreadSearchParams,
	): Promise<EntityListOfItslearningRestApiEntitiesInstantMessageThread> {
		return this.http.post(
			`/restapi/personal/instantmessages/messagethreads/search/v1`,
			{ data: searchData },
		);
	}

	/**
	 * Suggests conversations whose names contain the given search text.
	 *
	 * @param searchText - The text to search within thread names.
	 */
	public async getThreadSuggestions(
		searchText: string,
	): Promise<Array<ItslearningRestApiEntitiesInstantMessageThread>> {
		const queryParams = createSearchParams({ searchText });
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/suggestions/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets the number of threads that contain unread messages.
	 */
	public async getUnreadThreadsCount(): Promise<number> {
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/unread/count/v1`,
		);
	}

	/**
	 * Gets the user's message threads (v1).
	 *
	 * @param maxThreadCount - The maximum number of threads to retrieve.
	 * @param threadPage - The page number of threads.
	 * @param maxMessages - The max number of messages to retrieve for each thread.
	 *
	 * @deprecated Use v2 or v3 instead.
	 */
	public async getMessageThreadsV1(
		maxThreadCount?: number,
		threadPage?: number,
		maxMessages?: number,
	): Promise<EntityListOfItslearningRestApiEntitiesInstantMessageThread> {
		console.warn("getMessageThreadsV1 is deprecated. Use v2 or v3 instead.");
		const queryParams = createSearchParams({
			maxThreadCount,
			threadPage,
			maxMessages,
		});
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/v1`,
			{
				params: queryParams,
			},
		);
	}

	/**
	 * Gets the user's message threads (v2).
	 *
	 * @param maxThreadCount - The maximum number of threads to retrieve.
	 * @param threadPage - The page number of threads.
	 * @param maxMessages - The max number of messages to retrieve per thread.
	 */
	public async getMessageThreadsV2(
		maxThreadCount?: number,
		threadPage?: number,
		maxMessages?: number,
	): Promise<EntityListOfItslearningRestApiEntitiesInstantMessageThread> {
		const queryParams = createSearchParams({
			maxThreadCount,
			threadPage,
			maxMessages,
		});
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/v2`,
			{
				params: queryParams,
			},
		);
	}

	/**
	 * Gets a collection of threads for the user, extended with a hasMore field (v3).
	 *
	 * @param fromSortIndex - The sort index to start from.
	 * @param pageSize - The number of threads to retrieve.
	 */
	public async getMessageThreadsV3(
		fromSortIndex?: number,
		pageSize = 100,
	): Promise<ItslearningRestApiEntitiesInstantMessageThreadListModel> {
		const queryParams = createSearchParams({ fromSortIndex, pageSize });
		return this.http.get(
			`/restapi/personal/instantmessages/messagethreads/v3`,
			{
				params: queryParams,
			},
		);
	}

	/**
	 * Gets permissions for the instant message system.
	 */
	public async getInstantMessagePermissions(): Promise<ItslearningRestApiEntitiesInstantMessagePermissions> {
		return this.http.get(`/restapi/personal/instantmessages/permissions/v1`);
	}

	/**
	 * Checks privacy rules to determine if the user is allowed to initiate communication with a person.
	 *
	 * @param personId - The unique ID of the person.
	 */
	public async checkPrivacyRules(personId: number): Promise<unknown> {
		throw new Error("Not implemented");
		return this.http.get(
			`/restapi/personal/instantmessages/privacy/${personId}/v1`,
		);
	}

	/**
	 * Gets recipient persons requested (bulk lookup).
	 *
	 * @param requestData - The request body containing criteria for recipients.
	 */
	public async getRecipientPersons(requestData: unknown): Promise<unknown> {
		throw new Error("Not implemented");
		return this.http.post(
			`/restapi/personal/instantmessages/recipients/persons/v1`,
			{ data: requestData },
		);
	}

	/**
	 * Gets persons that the user is allowed to communicate with, given eSafety rules.
	 *
	 * @param searchText - The search text to filter persons.
	 * @param instantMessageThreadId - Optional thread ID to narrow down.
	 * @param recipientRoles - Optional array of roles to filter.
	 */
	public async searchRecipients(
		searchText: string,
		instantMessageThreadId?: number,
		recipientRoles?: string[],
	): Promise<unknown> {
		throw new Error("Not implemented");
		const queryParams = createSearchParams({
			searchText,
			instantMessageThreadId,
		});
		(recipientRoles || []).forEach((role, idx) => {
			queryParams.append(`recipientRoles[${idx}]`, role);
		});

		return this.http.get(
			`/restapi/personal/instantmessages/recipients/search/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets recipients (persons, course or project) requested (v1).
	 *
	 * @param personIds - Array of person IDs.
	 * @param courseId - Optional course ID.
	 * @param projectId - Optional project ID.
	 */
	public async getRecipientsV1(
		personIds: number[],
		courseId?: number,
		projectId?: number,
	): Promise<unknown> {
		throw new Error("Not implemented");
		const queryParams = createSearchParams({
			courseId,
			projectId,
			personIds,
		});

		return this.http.get(`/restapi/personal/instantmessages/recipients/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets recipients (persons, courses, or projects) requested (v2).
	 *
	 * @param personIds - Array of person IDs.
	 * @param courseIds - Array of course IDs.
	 * @param projectIds - Array of project IDs.
	 */
	public async getRecipientsV2(
		personIds: number[],
		courseIds: number[],
		projectIds: number[],
	): Promise<unknown> {
		throw new Error("Not implemented");
		const queryParams = createSearchParams({
			personIds,
			courseIds,
			projectIds,
		});

		return this.http.get(`/restapi/personal/instantmessages/recipients/v2`, {
			params: queryParams,
		});
	}

	/**
	 * Gets the settings for the instant message system (v1).
	 */
	public async getSettingsV1(): Promise<unknown> {
		throw new Error("Not implemented");
		return this.http.get(`/restapi/personal/instantmessages/settings/v1`);
	}

	/**
	 * Gets the settings for the instant message system (v2).
	 */
	public async getSettingsV2(): Promise<unknown> {
		throw new Error("Not implemented");
		return this.http.get(`/restapi/personal/instantmessages/settings/v2`);
	}

	/**
	 * Gets the number of starred messages for the current user.
	 */
	public async getStarredMessagesCount(): Promise<number> {
		return this.http.get(`/restapi/personal/instantmessages/starred/count/v1`);
	}

	/**
	 * Searches for suggestions of person names or thread names matching the input.
	 *
	 * @param searchText - The text to search for.
	 * @param maxSuggestions - The max number of suggestions to return.
	 */
	public async getSuggestions(
		searchText: string,
		maxSuggestions = 10,
	): Promise<Array<ItslearningRestApiEntitiesInstantMessageFilterSuggestion>> {
		const queryParams = createSearchParams({ searchText, maxSuggestions });
		return this.http.get(`/restapi/personal/instantmessages/suggestions/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Toggles whether the given message is starred or not.
	 *
	 * @param instantMessageId - The unique ID of the instant message.
	 */
	public async toggleMessageStar(instantMessageId: number): Promise<void> {
		return this.http.put(
			`/restapi/personal/instantmessages/togglemessagestar/${instantMessageId}/v1`,
		);
	}

	/**
	 * Toggles blocking a specific person.
	 *
	 * @param personId - The unique ID of the person to block/unblock.
	 */
	public async togglePersonBlock(personId: number): Promise<boolean> {
		return this.http.put(
			`/restapi/personal/instantmessages/togglepersonblock/${personId}/v1`,
		);
	}

	/**
	 * Sends an instant message (v1). Use v2 instead.
	 *
	 * @param data - The data required to send the message.
	 * @deprecated Use sendInstantMessageV2 instead.
	 */
	public async sendInstantMessageV1(data: unknown): Promise<void> {
		console.warn(
			"sendInstantMessageV1 is deprecated. Use sendInstantMessageV2 instead.",
		);
		throw new Error("Not implemented");
		// return this.http.post(`/restapi/personal/instantmessages/v1`, { data });
	}

	/**
	 * Updates the text for an instant message.
	 *
	 * @param data - The data with updated message text.
	 */
	public async updateInstantMessageText(
		data: ItslearningRestApiEntitiesInstantMessageToPatch,
	): Promise<ItslearningRestApiEntitiesInstantMessage> {
		return this.http.patch(`/restapi/personal/instantmessages/v1`, { data });
	}

	/**
	 * Sends an instant message (v2).
	 * Creates a new thread or reuses an old one. Returns the thread the message was sent to.
	 *
	 * @param data - The data required to send the message.
	 */
	public async sendInstantMessageV2(
		data: ItslearningRestApiEntitiesInstantMessageToSendV2,
	): Promise<ItslearningRestApiEntitiesInstantMessageThread> {
		return this.http.post(`/restapi/personal/instantmessages/v2`, { data });
	}
}
