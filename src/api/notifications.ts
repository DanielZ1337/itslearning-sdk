import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesElementLink } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.ElementLink";
import type { EntityListOfItslearningRestApiEntitiesNotification } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Notification";
import type { EntityListOfItslearningRestApiEntitiesStreamItemV2 } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.StreamItemV2";
import type { ItslearningRestApiEntitiesUpdatableNotificationUpdateV1 } from "../types/api/native/Itslearning.RestApi.Entities.Updatable.NotificationUpdateV1";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import { createSearchParams } from "../utils/search-params";

/**
 * NotificationsAPI
 *
 * Overview:
 * Endpoint for notifications and news feed for personal API.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `Notifications`.
 */
export class NotificationsAPI extends Manager {
  /**
   * Gets the list of elements related to a given notification.
   *
   * @param notificationId - The unique identifier of the notification.
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 10).
   */
  public async getNotificationElements(
    notificationId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<EntityListOfItslearningRestApiEntitiesElementLink> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/notifications/${notificationId}/elements/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets the list of resources attached to a given bulletin.
   *
   * @param bulletinId - The unique identifier of the bulletin.
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 10).
   */
  public async getBulletinElements(
    bulletinId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<EntityListOfItslearningRestApiEntitiesElementLink> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/notifications/bulletins/${bulletinId}/elements/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets the user's news feed (activities, resources, bulletins).
   * The feed is collected from all or favorite courses/projects, depending on user settings.
   *
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - How many items per page (default = 10).
   */
  public async getNewsFeed(pageIndex = 0, pageSize = 10): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/notifications/newsfeed/v1`, {
      params: queryParams,
    });
  }

  /**
   * Updates all personal notifications to be seen.
   */
  public async markAllAsSeen(): Promise<void> {
    return this.http.put(`/restapi/personal/notifications/seenmark/all/v1`);
  }

  /**
   * Gets the user's stream feed (collected from user's favorite courses/projects).
   * Items are sorted by PublishedDate; specify FromId + fromPublishedDate to page.
   *
   * @param useNewerThan - Set true to retrieve newer items than specified FromId.
   * @param fromId - NotificationId from which to page.
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 100).
   * @param fromPublishedDate - The date/time to filter from (ISO 8601 string).
   * @deprecated Use getStreamV2 instead.
   */
  public async getStreamV1(
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex = 0,
    pageSize = 100,
    fromPublishedDate?: string | Date,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
      fromPublishedDate,
    });
    return this.http.get(`/restapi/personal/notifications/stream/v1`, {
      params: queryParams,
    });
  }

  /**
   * Gets the user's stream feed (v2). Collected from user's favorite courses/projects.
   * Uses FromId + UseNewerThan to page.
   *
   * @param showLightBulletins - Whether to show light bulletins.
   * @param useNewerThan - If true, retrieve newer items than the FromId.
   * @param fromId - NotificationId from which to page.
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 100).
   */
  public async getStreamV2(
    showLightBulletins = true,
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex = 0,
    pageSize = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesStreamItemV2> {
    const queryParams = createSearchParams({
      showLightBulletins,
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/notifications/stream/v2`, {
      params: queryParams,
    });
  }

  /**
   * Returns the number of unread personal notifications for the user.
   */
  public async getUnreadCount(): Promise<number> {
    return this.http.get(`/restapi/personal/notifications/unread/count/v1`);
  }

  /**
   * Returns the number of unseen personal notifications for the user.
   */
  public async getUnseenCount(): Promise<number> {
    return this.http.get(`/restapi/personal/notifications/unseen/count/v1`);
  }

  /**
   * Updates the personal notifications to be read (v1).
   *
   * @param data - The notification data to update (e.g., marking as read).
   * @deprecated Use updateNotificationsV2 instead.
   */
  public async updateNotificationsV1(
    data: Array<ItslearningRestApiEntitiesUpdatableNotificationUpdateV1>,
  ): Promise<EntityListOfItslearningRestApiEntitiesNotification> {
    console.warn(
      "updateNotificationsV1 is obsolete. Use updateNotificationsV2 instead.",
    );
    return this.http.put(`/restapi/personal/notifications/v1`, { data });
  }

  /**
   * Gets personal notifications (read and unread) (v1).
   *
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 10).
   * @deprecated Use getNotificationsV2 instead.
   */
  public async getNotificationsV1(
    pageIndex = 0,
    pageSize = 10,
  ): Promise<EntityListOfItslearningRestApiEntitiesNotification> {
    console.warn(
      "getNotificationsV1 is obsolete. Use getNotificationsV2 instead.",
    );
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/notifications/v1`, {
      params: queryParams,
    });
  }

  /**
   * Updates the personal notifications to be read (v2).
   *
   * @param data - The notification data to update (e.g., marking as read).
   */
  public async updateNotificationsV2(
    data: Array<ItslearningRestApiEntitiesUpdatableNotificationUpdateV1>,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(`/restapi/personal/notifications/v2`, { data });
  }

  /**
   * Gets personal notifications (read and unread) (v2). Supports paging.
   *
   * @param useNewerThan - If true, retrieve notifications newer than FromId.
   * @param fromId - NotificationId from which to page.
   * @param pageIndex - Which page to retrieve (default = 0).
   * @param pageSize - The size of the page (default = 10).
   */
  public async getNotificationsV2(
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<EntityListOfItslearningRestApiEntitiesNotification> {
    const queryParams = createSearchParams({
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/notifications/v2`, {
      params: queryParams,
    });
  }
}
