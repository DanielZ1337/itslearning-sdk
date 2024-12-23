import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesPersonalLtiExtensionCustomerSetup } from "../types/api/native/Itslearning.RestApi.Entities.Personal.LtiExtensionCustomerSetup";
import type { ItslearningRestApiEntitiesPersonalLtiExtensionDetails } from "../types/api/native/Itslearning.RestApi.Entities.Personal.LtiExtensionDetails";
import { createSearchParams } from "../utils/search-params";

/**
 * LtiExtensionAPI
 *
 * Overview:
 * API controller for LTI extensions.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Courses`.
 */
export class LtiExtensionAPI extends Manager {
  /**
   * Gets the LTI details for the user and for the given course (if defined).
   *
   * @param extensionId - The unique ID of the LTI extension.
   * @param courseId - (Optional) The unique ID of the course.
   * @returns A promise that resolves to the LTI details.
   */
  public async getLtiDetailsV1(
    extensionId: number,
    courseId: number = 0,
  ): Promise<ItslearningRestApiEntitiesPersonalLtiExtensionDetails> {
    const queryParams = createSearchParams({
      courseId,
    });

    return this.http.get(`/restapi/personal/lti/${extensionId}/details/v1`, {
      params: queryParams,
    });
  }

  /**
   * Gets the LTI customer setup for the user and for the given course (if defined).
   *
   * @param extensionId - The unique ID of the LTI extension.
   * @param courseId - (Optional) The unique ID of the course.
   * @returns A promise that resolves to the LTI customer setup details.
   */
  public async getLtiDetailsV2(
    extensionId: number,
    courseId: number = 0,
  ): Promise<ItslearningRestApiEntitiesPersonalLtiExtensionCustomerSetup> {
    const queryParams = createSearchParams({
      courseId,
    });

    return this.http.get(`/restapi/personal/lti/${extensionId}/details/v2`, {
      params: queryParams,
    });
  }
}
