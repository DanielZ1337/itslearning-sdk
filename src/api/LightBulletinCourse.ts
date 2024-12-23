import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesElementLink } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.ElementLink";
import type { ItslearningRestApiEntitiesLightBulletinsLightBulletinIdentifier } from "../types/api/native/Itslearning.RestApi.Entities.LightBulletins.LightBulletinIdentifier";
import type { ItslearningRestApiEntitiesLightBulletinsLightBulletinOutputImageData } from "../types/api/native/Itslearning.RestApi.Entities.LightBulletins.LightBulletinOutputImageData";
import { ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod } from "../types/api/native/Itslearning.RestApi.Entities.LightBulletins.LightBulletinTimePeriod";
import type { ItslearningRestApiEntitiesLightBulletinsLightBulletinV2 } from "../types/api/native/Itslearning.RestApi.Entities.LightBulletins.LightBulletinV2";
import type { ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1 } from "../types/api/native/Itslearning.RestApi.Entities.Updatable.LightBulletin.LightBulletinAddInputDataV1";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import { createSearchParams } from "../utils/search-params";

/**
 * LightBulletinCourseAPI
 *
 * Overview:
 * Endpoint for light bulletins in course scope.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Courses`.
 */
export class LightBulletinCourseAPI extends Manager {
  /**
   * Gets light bulletins by course identifier.
   *
   * @param courseId - The unique ID of the course.
   * @param timePeriod - (Optional) The time period to filter bulletins.
   * @param useNewerThan - (Optional) If true, retrieves bulletins newer than `fromId`.
   * @param fromId - (Optional) The ID to start retrieving bulletins from.
   * @param pageIndex - (Optional) The index of the page to retrieve (default = 0).
   * @param pageSize - (Optional) The number of bulletins per page (default = 100).
   * @returns A promise that resolves to the list of light bulletins.
   */
  public async getCourseBulletins(
    courseId: number,
    timePeriod: ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod = ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod.Current,
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex: number = 0,
    pageSize: number = 100,
  ): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinV2> {
    const queryParams = createSearchParams({
      timePeriod,
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(`/restapi/personal/courses/${courseId}/bulletins/v1`, {
      params: queryParams,
    });
  }

  /**
   * Enables or disables comments for the specified bulletin.
   *
   * @param bulletinId - The unique ID of the light bulletin.
   * @param allowComments - Boolean indicating whether to allow (`true`) or disallow (`false`) comments.
   * @returns A promise that resolves to the response from the API.
   */
  public async toggleCommentsForBulletin(
    bulletinId: number,
    allowComments: boolean,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    const queryParams = createSearchParams({
      allowComments,
    });

    return this.http.put(
      `/restapi/personal/courses/bulletins/${bulletinId}/comments/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets the list of resources attached to the specified bulletin.
   *
   * @param bulletinId - The unique ID of the light bulletin.
   * @param pageIndex - (Optional) The index of the page to retrieve (default = 0).
   * @param pageSize - (Optional) The number of resources per page (default = 100).
   * @returns A promise that resolves to the list of attached resources.
   */
  public async getBulletinElements(
    bulletinId: number,
    pageIndex: number = 0,
    pageSize: number = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesElementLink> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(
      `/restapi/personal/courses/bulletins/${bulletinId}/elements/v1`,
      { params: queryParams },
    );
  }

  /**
   * Toggles the pinned status of a bulletin.
   *
   * @param bulletinId - The unique ID of the light bulletin.
   * @param pinned - Boolean indicating whether to pin (`true`) or unpin (`false`) the bulletin.
   * @returns A promise that resolves to the response from the API.
   */
  public async toggleBulletinPinnedStatus(
    bulletinId: number,
    pinned: boolean,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    const queryParams = createSearchParams({
      pinned,
    });

    return this.http.put(
      `/restapi/personal/courses/bulletins/${bulletinId}/pinned/v1`,
      { params: queryParams },
    );
  }

  /**
   * Uploads a file attachment to temporary storage for the specified bulletin.
   *
   * @param bulletinId - The unique ID of the light bulletin.
   * @param file - The file to upload.
   * @returns A promise that resolves to the response from the API.
   */
  public async uploadBulletinImage(
    bulletinId: number,
    file: Blob | File,
  ): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinOutputImageData> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post(
      `/restapi/personal/courses/bulletins/${bulletinId}/uploadimage/v1`,
      {
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  }

  /**
   * Deletes a specific bulletin along with its comments, embedded links, attached images, and resources.
   *
   * @param bulletinId - The unique ID of the light bulletin.
   * @returns A promise that resolves to the response from the API.
   */
  public async deleteBulletin(
    bulletinId: number,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.delete(
      `/restapi/personal/courses/bulletins/${bulletinId}/v1`,
    );
  }

  /**
   * Gets a specific light bulletin by its identifier.
   *
   * @param bulletinId - The unique ID of the light bulletin.
   * @returns A promise that resolves to the light bulletin details.
   */
  public async getBulletinById(
    bulletinId: number,
  ): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinV2> {
    return this.http.get(
      `/restapi/personal/courses/bulletins/${bulletinId}/v1`,
    );
  }

  /**
   * Creates a new light bulletin for a course.
   *
   * @param bulletinData - The data for the new light bulletin.
   * @returns A promise that resolves to the response from the API.
   */
  public async createBulletin(
    bulletinData: ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1,
  ): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinIdentifier> {
    return this.http.post(`/restapi/personal/courses/bulletins/v1`, {
      data: bulletinData,
    });
  }

  /**
   * Updates an existing light bulletin.
   *
   * @param bulletinData - The updated data for the light bulletin.
   * @returns A promise that resolves to the response from the API.
   */
  public async updateBulletin(
    bulletinData: ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(`/restapi/personal/courses/bulletins/v1`, {
      data: bulletinData,
    });
  }
}
