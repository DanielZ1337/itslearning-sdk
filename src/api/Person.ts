import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesPersonalFeature } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Feature";
import type { ItslearningRestApiEntitiesPersonImageDimensions } from "../types/api/native/Itslearning.RestApi.Entities.PersonImageDimensions";
import type { ItslearningRestApiEntitiesPersonProfile } from "../types/api/native/Itslearning.RestApi.Entities.PersonProfile";
import type { ItslearningRestApiEntitiesPersonRole } from "../types/api/native/Itslearning.RestApi.Entities.PersonRole";
import type { ItslearningRestApiEntitiesPersonSimple } from "../types/api/native/Itslearning.RestApi.Entities.PersonSimple";
import type { ItslearningRestApiEntitiesPushSetting } from "../types/api/native/Itslearning.RestApi.Entities.PushSetting";
import type { ItslearningRestApiEntitiesRelation } from "../types/api/native/Itslearning.RestApi.Entities.Relation";
import type { ItsolutionsItslearningItslCoreBusinessLayerPersonCustomInfoExtraUserInformationField } from "../types/api/native/Itsolutions.Itslearning.ItslCore.BusinessLayer.Person.CustomInfo.ExtraUserInformationField";

/**
 * PersonAPI
 *
 * Overview:
 * Endpoint to get and modify a user's profile.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Person`.
 */
export class PersonAPI extends Manager {
	/**
	 * Gets basic information about the requested person (subject to eSafety rules).
	 *
	 * @param personId - The unique ID of the person.
	 */
	public async getPersonInfo(
		personId: number,
	): Promise<ItslearningRestApiEntitiesPersonSimple> {
		return this.http.get(`/restapi/personal/person/${personId}/v1`);
	}

	/**
	 * Gets extra user information for a given person (if configured and accessible).
	 *
	 * @param personId - The unique ID of the person.
	 */
	public async getExtraUserInfo(
		personId: number,
	): Promise<ItsolutionsItslearningItslCoreBusinessLayerPersonCustomInfoExtraUserInformationField> {
		return this.http.get(
			`/restapi/personal/person/extrauserinformation/${personId}/v1`,
		);
	}

	/**
	 * Gets available features for the current person.
	 */
	public async getPersonFeatures(): Promise<ItslearningRestApiEntitiesPersonalFeature> {
		return this.http.get("/restapi/personal/person/features/v1");
	}

	/**
	 * Gets the max image dimensions allowed for a profile image upload.
	 */
	public async getImageDimensions(): Promise<ItslearningRestApiEntitiesPersonImageDimensions> {
		return this.http.get("/restapi/personal/person/image/dimensions/v1");
	}

	/**
	 * Uploads/updates the person's profile image.
	 *
	 * @param imageData - The image file. Content-Type can be 'image/jpeg' or 'image/png',
	 *                   or sent as multipart/form-data.
	 */
	public async uploadProfileImage(
		imageData: FormData | ArrayBuffer,
	): Promise<void> {
		return this.http.post("/restapi/personal/person/image/v1", {
			data: imageData,
		});
	}

	/**
	 * Marks the user as online.
	 * The response contains a timeout, before which this endpoint should be called again to stay online.
	 * @returns the interval in seconds before you should call this method again
	 */
	public async setOnlineStatus(): Promise<number> {
		return this.http.put("/restapi/personal/person/online/v1");
	}

	/**
	 * Sets the person setting "RemindConnectGoogleOnLogin".
	 *
	 * @param remind - Boolean to enable or disable the reminder.
	 */
	public async setRemindConnectGoogleOnLogin(remind: boolean): Promise<void> {
		return this.http.put(
			"/restapi/personal/person/PersonSetting/RemindConnectGoogleOnLogin/v1",
			{ data: { remind } },
		);
	}

	/**
	 * Sets push notifications in itslearning (on/off) for a device.
	 * Also registers the device for push notifications (if needed).
	 *
	 * @param pushData - The configuration data for push notifications.
	 */
	public async setPushNotifications(
		pushData: ItslearningRestApiEntitiesPushSetting,
	): Promise<void> {
		return this.http.post("/restapi/personal/person/push/v1", {
			data: pushData,
		});
	}

	/**
	 * Gets list of relations for the specified person.
	 *
	 * @param personId - The unique ID of the person.
	 */
	public async getPersonRelations(
		personId: number,
	): Promise<Array<ItslearningRestApiEntitiesRelation>> {
		return this.http.get(`/restapi/personal/person/relations/${personId}/v1`);
	}

	/**
	 * Gets list of roles for the current person.
	 */
	public async getPersonRoles(): Promise<
		Array<ItslearningRestApiEntitiesPersonRole>
	> {
		return this.http.get("/restapi/personal/person/roles/v1");
	}

	/**
	 * Gets an access token for the specified service on behalf of the user.
	 *
	 * @param serviceName - The name of the service.
	 */
	public async getServiceAccessToken(serviceName: string): Promise<unknown> {
		return this.http.get(
			`/restapi/personal/person/serviceaccess/${serviceName}/v1`,
		);
	}

	/**
	 * Gets the user's profile details (language codes, etc.).
	 */
	public async getMyProfile(): Promise<ItslearningRestApiEntitiesPersonProfile> {
		return this.http.get("/restapi/personal/person/v1");
	}
}
