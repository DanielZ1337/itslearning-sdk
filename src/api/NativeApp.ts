import { Manager } from "../lib/Manager";
import type { ItslearningCommonRestApiEntitiesVersionResponse } from "../types/api/native/Itslearning.Common.RestApi.Entities.VersionResponse";
import { createSearchParams } from "../utils/search-params";

/**
 * NativeAppAPI
 *
 * Overview:
 * Some utility methods for native apps.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Courses`.
 *
 * **Note**: According to the API description, authentication is not required.
 * However, if authentication is needed in the future, consider implementing it accordingly.
 */
export class NativeAppAPI extends Manager {
  /**
   * Checks if the current version of the application is up to date.
   *
   * This method verifies whether the provided `currentVersion` of the application
   * meets the minimum required version and whether it is the latest version.
   *
   * @param applicationKey - Application key for the native app (same as client_id used for oauth2)
   * @param currentVersion - Current version of the native app containing only . and numbers. For example: 2.3.44.114
   * @param operatingSystem - A string for the operating system the native app runs on. For example: Android
   * @returns A promise that resolves to the version check result.
   */
  public async checkVersion(
    applicationKey: string,
    currentVersion: string,
    operatingSystem: string,
  ): Promise<ItslearningCommonRestApiEntitiesVersionResponse> {
    const queryParams = createSearchParams({
      currentVersion,
      operatingSystem,
    });

    return this.http.get(
      `/restapi/nativeapp/versioncheck/${applicationKey}/v1`,
      { params: queryParams },
    );
  }
}
