import { Manager } from "../lib/Manager";
import type { ItsolutionsItslUtilsConstantsMessageOrigin } from "../types/api/native/Itsolutions.ItslUtils.Constants.MessageOrigin";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import { createSearchParams } from "../utils/search-params";

/**
 * MessagesAPI
 *
 * Overview:
 * Endpoint for internal messages for personal API.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Messages`.
 */
export class MessagesAPI extends Manager {
  /**
   * Toggles a message's favorite status.
   *
   * @param messageId - The unique ID of the message.
   * @param isFavorite - Whether the message is marked as favorite.
   * @param messageOrigin - The origin of the message.
   */
  public async toggleFavorite(
    messageId: number,
    isFavorite?: boolean,
    messageOrigin?: ItsolutionsItslUtilsConstantsMessageOrigin,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    const queryParams = createSearchParams({ isFavorite, messageOrigin });
    return this.http.post(
      `/restapi/personal/messages/${messageId}/toggleFavorite/v1`,
      {
        params: queryParams,
      },
    );
  }

  /**
   * Gets a single message by its ID.
   *
   * @param messageId - The unique ID of the message.
   */
  public async getMessage(messageId: number): Promise<unknown> {
    throw new Error("Not implemented");
    return this.http.get(`/restapi/personal/messages/${messageId}/v1`);
  }

  /**
   * Updates a message's properties (only supports updating IsRead).
   *
   * @param messageId - The unique ID of the message.
   * @param messageOrigin - The origin of the message.
   * @param updateData - The data to update (e.g., { IsRead: true }).
   */
  public async updateMessage(
    messageId: number,
    messageOrigin: string,
    updateData: unknown,
  ): Promise<void> {
    throw new Error("Not implemented");
    const queryParams = createSearchParams({ messageOrigin });
    return this.http.put(`/restapi/personal/messages/${messageId}/v1`, {
      params: queryParams,
      data: updateData,
    });
  }

  /**
   * Deletes a message by moving it to the deleted folder.
   *
   * @param messageId - The unique ID of the message.
   * @param messageOrigin - The origin of the message.
   */
  public async deleteMessage(
    messageId: number,
    messageOrigin: string,
  ): Promise<void> {
    throw new Error("Not implemented");
    const queryParams = createSearchParams({ messageOrigin });
    return this.http.delete(`/restapi/personal/messages/${messageId}/v1`, {
      params: queryParams,
    });
  }

  /**
   * Gets an attachment from a message.
   *
   * @param fileId - The unique ID of the attachment file.
   */
  public async getMessageAttachment(fileId: string): Promise<unknown> {
    throw new Error("Not implemented");
    return this.http.get(`/restapi/personal/messages/attachments/${fileId}/v1`);
  }

  /**
   * (Obsolete) Sets push notifications for a device in itslearning.
   * Use `restapi/personal/person/push/v1` instead.
   *
   * @param data - The push configuration data.
   */
  public async setPushNotifications(data: unknown): Promise<void> {
    console.warn(
      "This method is obsolete. Use restapi/personal/person/push/v1 instead.",
    );
    throw new Error("Not implemented");
    return this.http.post(`/restapi/personal/messages/push/v1`, { data });
  }

  /**
   * Searches for message recipients, given esafety rules.
   *
   * @param searchText - The text to search for recipients (min 3 chars).
   */
  public async searchMessageRecipients(searchText: string): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = createSearchParams({ searchText });
    return this.http.get(`/restapi/personal/messages/recipients/search/v1`, {
      params: queryParams,
    });
  }

  /**
   * Sends a message to recipients.
   *
   * @param data - Message details, including recipients and optional ReplyToMessageId.
   */
  public async sendMessage(data: unknown): Promise<unknown> {
    throw new Error("Not implemented");
    return this.http.post(`/restapi/personal/messages/send/v1`, { data });
  }

  /**
   * Returns the number of unread messages for the user.
   */
  public async getUnreadCount(): Promise<number> {
    return this.http.get(`/restapi/personal/messages/unread/count/v1`);
  }

  /**
   * Gets the user's unread messages, supports paging.
   *
   * @param pageIndex - The page index (default = 0).
   * @param pageSize - The page size (default = 20, for example).
   */
  public async getUnreadMessages(
    pageIndex = 0,
    pageSize = 20,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/messages/unread/v1`, {
      params: queryParams,
    });
  }

  /**
   * Updates messages (only supports updating IsRead field).
   *
   * @param data - The data containing message IDs and IsRead values to update.
   */
  public async updateMessages(data: unknown): Promise<void> {
    throw new Error("Not implemented");
    return this.http.put(`/restapi/personal/messages/v1`, { data });
  }

  /**
   * Gets the user's messages. Supports paging with UseNewerThan & FromId.
   *
   * @param useNewerThan - If true, retrieve messages newer than FromId.
   * @param fromId - MessageId to page from if useNewerThan is true.
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 20).
   */
  public async getMessages(
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex = 0,
    pageSize = 20,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = createSearchParams({
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/messages/v1`, {
      params: queryParams,
    });
  }
}
