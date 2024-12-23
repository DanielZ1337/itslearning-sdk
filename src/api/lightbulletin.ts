import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesComment } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Comment";
import type { ItslearningRestApiEntitiesComment } from "../types/api/native/Itslearning.RestApi.Entities.Comment";
import type { ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1 } from "../types/api/native/Itslearning.RestApi.Entities.Updatable.LightBulletinCommentUpdateV1";
import type { ItslearningRestApiEntitiesUpdatableLightBulletinSubscriptionUpdateV1 } from "../types/api/native/Itslearning.RestApi.Entities.Updatable.LightBulletinSubscriptionUpdateV1";
import type { ItslearningRestApiEntitiesUpdatableLightBulletinUpdateV1 } from "../types/api/native/Itslearning.RestApi.Entities.Updatable.LightBulletinUpdateV1";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import { createSearchParams } from "../utils/search-params";

/**
 * LightBulletinAPI
 *
 * Overview:
 * Endpoint for light bulletins for the personal API.
 *
 * Secured with OAuth2, requires OAuth2 API scope `light bulletin`.
 */
export class LightBulletinAPI extends Manager {
  /**
   * Turns on/off notifications for new comments for the specified light bulletin.
   *
   * @param lightBulletinId - The unique ID of the light bulletin.
   * @param subscribe - Boolean indicating whether to subscribe (true) or unsubscribe (false) from notifications.
   * @returns A promise that resolves to the response from the API.
   */
  public async toggleCommentSubscription(
    lightBulletinId: number,
    subscribe: ItslearningRestApiEntitiesUpdatableLightBulletinSubscriptionUpdateV1,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(
      `/restapi/personal/lightbulletins/${lightBulletinId}/comments/subscription/v1`,
      { data: subscribe },
    );
  }

  /**
   * Adds a new comment to the specified light bulletin.
   *
   * @param lightBulletinId - The unique ID of the light bulletin.
   * @param comment - The text of the comment to add.
   * @returns A promise that resolves to the response from the API.
   */
  public async addCommentV1(
    lightBulletinId: number,
    comment: string,
  ): Promise<ItslearningRestApiEntitiesComment> {
    return this.http.post(
      `/restapi/personal/lightbulletins/${lightBulletinId}/comments/v1`,
      { data: comment },
    );
  }

  /**
   * Retrieves the list of comments for the specified light bulletin.
   *
   * @param lightBulletinId - The unique ID of the light bulletin.
   * @param useNewerThan - (Optional) If true, retrieves comments newer than `fromId`.
   * @param fromId - (Optional) The ID to start retrieving comments from.
   * @param pageIndex - (Optional) The index of the page to retrieve (default = 0).
   * @param pageSize - (Optional) The number of comments per page (default = 100).
   * @returns A promise that resolves to the list of comments.
   */
  public async getComments(
    lightBulletinId: number,
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex: number = 0,
    pageSize: number = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesComment> {
    const queryParams = createSearchParams({
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(
      `/restapi/personal/lightbulletins/${lightBulletinId}/comments/v1`,
      { params: queryParams },
    );
  }

  /**
   * Adds a new comment to the specified light bulletin (Version 2).
   *
   * @param lightBulletinId - The unique ID of the light bulletin.
   * @param comment - The text of the comment to add.
   * @returns A promise that resolves to the response from the API.
   */
  public async addCommentV2(
    lightBulletinId: number,
    comment: ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1,
  ): Promise<ItslearningRestApiEntitiesComment> {
    return this.http.post(
      `/restapi/personal/lightbulletins/${lightBulletinId}/comments/v2`,
      { data: comment },
    );
  }

  /**
   * Updates the text of a specific comment.
   *
   * @param commentId - The unique ID of the comment to update.
   * @param newText - The new text for the comment.
   * @returns A promise that resolves to the response from the API.
   */
  public async updateCommentV1(
    commentId: number,
    newText: string,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(
      `/restapi/personal/lightbulletins/comments/${commentId}/v1`,
      { data: newText },
    );
  }

  /**
   * Deletes a specific comment.
   *
   * @param commentId - The unique ID of the comment to delete.
   * @returns A promise that resolves to the response from the API.
   */
  public async deleteComment(
    commentId: number,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.delete(
      `/restapi/personal/lightbulletins/comments/${commentId}/v1`,
    );
  }

  /**
   * Updates the text of a specific comment (Version 2).
   *
   * @param commentId - The unique ID of the comment to update.
   * @param newText - The new text for the comment.
   * @returns A promise that resolves to the response from the API.
   */
  public async updateCommentV2(
    commentId: number,
    newText: ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(
      `/restapi/personal/lightbulletins/comments/${commentId}/v2`,
      { data: newText },
    );
  }

  /**
   * Marks light bulletins as seen.
   *
   * @returns A promise that resolves to the response from the API.
   */
  public async markBulletinsAsSeen(
    data: Array<ItslearningRestApiEntitiesUpdatableLightBulletinUpdateV1>,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(`/restapi/personal/lightbulletins/v1`);
  }
}
