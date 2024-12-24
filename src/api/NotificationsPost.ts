import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesDeletePersonalNotificationsForLocationTriggerV1 } from "../types/api/native/Itslearning.RestApi.Entities.DeletePersonalNotificationsForLocationTriggerV1";
import type { ItslearningRestApiEntitiesDeletePersonalNotificationsForObjectTriggerV1 } from "../types/api/native/Itslearning.RestApi.Entities.DeletePersonalNotificationsForObjectTriggerV1";
import type { ItslearningRestApiEntitiesPersonalNotificationsPostV1 } from "../types/api/native/Itslearning.RestApi.Entities.PersonalNotificationsPostV1";
import type { ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter } from "../types/api/native/Itsolutions.ItslUtils.Constants.ItslearningSectionUrlParameter";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import { createSearchParams } from "../utils/search-params";

/**
 * NotificationsPostAPI
 *
 * Overview:
 * Endpoint for posting new notifications for the personal API.
 *
 * The notifications you get access to are the same that are shown under the bell in itslearning.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `Notifications`.
 */
export class NotificationsPostAPI extends Manager {
	/**
	 * Deletes all personal notifications related to a specific location.
	 *
	 * @param location - The location identifier related to the notifications to delete.
	 * @returns A promise that resolves when the notifications are successfully deleted.
	 */
	public async deleteNotificationsByLocation(
		location: ItslearningRestApiEntitiesDeletePersonalNotificationsForLocationTriggerV1,
	): Promise<SystemNetHttpHttpResponseMessage> {
		return this.http.post(
			"/restapi/personal/notifications/deletetriggers/location/v1",
			{
				data: location,
			},
		);
	}

	/**
	 * Deletes all personal notifications related to a specific object.
	 *
	 * @param object - The object identifier related to the notifications to delete.
	 * @returns A promise that resolves when the notifications are successfully deleted.
	 */
	public async deleteNotificationsByObject(
		object: ItslearningRestApiEntitiesDeletePersonalNotificationsForObjectTriggerV1,
	): Promise<SystemNetHttpHttpResponseMessage> {
		return this.http.post(
			"/restapi/personal/notifications/deletetriggers/object/v1",
			{
				data: object,
			},
		);
	}

	/**
	 * Sends an "Import Completed" notification for a specific course and module.
	 *
	 * The current user will be set as the author and a recipient of the notification.
	 *
	 * @param courseId - The unique ID of the course.
	 * @param moduleId - The unique ID of the module.
	 * @param section - The section related to the import.
	 * @param state - The state of the import.
	 * @param folders - The folders related to the import.
	 * @param resources - The resources related to the import.
	 * @returns A promise that resolves when the notification is successfully sent.
	 */
	public async sendImportCompletedNotification(
		courseId: number,
		moduleId: number,
		section: ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter,
		state: string,
		folders: number,
		resources: number,
	): Promise<SystemNetHttpHttpResponseMessage> {
		const queryParams = createSearchParams({
			section,
			state,
			folders,
			resources,
		});

		return this.http.post(
			`/restapi/personal/notifications/posts/course/${courseId}/module/${moduleId}/importCompleted/v1`,
			{
				params: queryParams,
			},
		);
	}

	/**
	 * Sends personal notifications. The current user will be set as the author of all notifications.
	 *
	 * @param notifications - An array of notification objects to send.
	 * @returns A promise that resolves when the notifications are successfully sent.
	 */
	public async sendPersonalNotifications(
		notifications: ItslearningRestApiEntitiesPersonalNotificationsPostV1[],
	): Promise<SystemNetHttpHttpResponseMessage> {
		return this.http.post("/restapi/personal/notifications/posts/v1", {
			data: { notifications },
		});
	}
}
