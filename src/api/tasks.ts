import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * TasksAPI
 *
 * Overview:
 * Endpoint for Tasks API.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Tasks`.
 */
export class TasksAPI extends Manager {
  /**
   * Gets follow-up tasks for a specific course.
   *
   * The list includes activities that have new or updated submissions/student work,
   * or require the teacher to assess a submission/attempt. Requires admin permissions for the course.
   *
   * Supports paging. If paging is not used, it will use a default pageSize on pageIndex 0.
   *
   * @param courseId - The unique ID of the course.
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @returns A promise that resolves to a list of follow-up tasks for the specified course.
   */
  public async getCourseFollowUpTasks(
    courseId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/tasks/followuptasks/${courseId}/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets the user's follow-up tasks.
   *
   * The list includes activities from favorite courses that have new or updated submissions/student work,
   * or require the teacher to assess a submission/attempt. Provides an overview to help decide which tasks to follow up on next.
   *
   * Supports paging. If paging is not used, it will use a default pageSize on pageIndex 0.
   *
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @returns A promise that resolves to a list of the user's follow-up tasks.
   */
  public async getUserFollowUpTasks(
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/tasks/followuptasks/v1`, {
      params: queryParams,
    });
  }

  /**
   * Gets a list of tasks assigned to the user with optional filters.
   *
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @param status - (Optional) The status to filter tasks by (e.g., 'pending', 'completed').
   * @param deadline - (Optional) The deadline to filter tasks by, in ISO 8601 format.
   * @param isHomework - (Optional) Whether to filter tasks that are marked as homework.
   * @returns A promise that resolves to a list of tasks assigned to the user.
   */
  public async getUserTasks(
    pageIndex = 0,
    pageSize = 10,
    status?: string,
    deadline?: string,
    isHomework?: boolean,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      status,
      deadline,
      isHomework,
    });
    return this.http.get(`/restapi/personal/tasks/v1`, { params: queryParams });
  }
}
