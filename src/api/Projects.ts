import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * ProjectsAPI
 *
 * Overview:
 * Endpoint to Projects API.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Courses`.
 */
export class ProjectsAPI extends Manager {
  /**
   * Toggles the user's favorite status for the specified project.
   *
   * @param projectId - The unique ID of the project.
   * @returns A promise that resolves when the favorite status is toggled.
   */
  public async toggleFavoriteProject(projectId: number): Promise<void> {
    return this.http.put(
      `/restapi/personal/projects/${projectId}/toggleFavorite/v1`,
    );
  }
}
