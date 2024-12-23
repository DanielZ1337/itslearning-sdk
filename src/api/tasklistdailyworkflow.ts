import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * TaskListDailyWorkflowAPI
 *
 * Overview:
 * Endpoint for TaskListDailyWorkflow API.
 *
 * Daily workflow tasklist in itslearning is personal with a focus on tasks with deadlines in the near future.
 * This API is used to display tasks in a chronological way (overdue, today, tomorrow, later).
 *
 * Secured with OAuth2, requires the OAuth2 API scope `TaskListDailyWorkflow`.
 */
export class TaskListDailyWorkflowAPI extends Manager {
  /**
   * Gets a list of completed tasks for a user in a specific course.
   *
   * The list includes activities that have been completed by the user within the specified course.
   * Requires admin permissions for the course.
   *
   * Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.
   *
   * @param courseId - The unique ID of the course.
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of completed tasks per page (default = 10).
   * @returns A promise that resolves to a list of completed tasks for the specified course.
   */
  public async getCourseCompletedTasks(
    courseId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/tasklistdailyworkflow/${courseId}/completed/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets a list of tasks assigned to the user in a specific course, separated into sections.
   *
   * The tasks are organized chronologically (overdue, today, tomorrow, later) to help users prioritize.
   *
   * Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.
   *
   * @param courseId - The unique ID of the course.
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @returns A promise that resolves to a list of tasks separated into sections for the specified course.
   */
  public async getCourseTasksSeparated(
    courseId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/tasklistdailyworkflow/${courseId}/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets a list of tasks assigned to a user in "View As" mode.
   *
   * "View As" mode allows administrators or teachers to view tasks from the perspective of another user.
   *
   * Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.
   *
   * @param courseId - The unique ID of the course.
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @returns A promise that resolves to a list of tasks in "View As" mode for the specified course.
   */
  public async getViewAsTasks(
    courseId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/tasklistdailyworkflow/${courseId}/viewas/v1`,
      { params: queryParams },
    );
  }

  /**
   * For a parent, gets a list of tasks assigned to a child, separated into sections.
   *
   * The tasks are organized chronologically (overdue, today, tomorrow, later) to help parents monitor their child's tasks.
   *
   * Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.
   *
   * @param childId - The unique ID of the child.
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @returns A promise that resolves to a list of tasks separated into sections for the specified child.
   */
  public async getChildTasksSeparated(
    childId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/tasklistdailyworkflow/child/${childId}/v1`,
      { params: queryParams },
    );
  }

  /**
   * For a parent, gets a list of completed tasks for a child.
   *
   * The list includes activities that have been completed by the child.
   *
   * Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.
   *
   * @param childId - The unique ID of the child.
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of completed tasks per page (default = 10).
   * @returns A promise that resolves to a list of completed tasks for the specified child.
   */
  public async getChildCompletedTasks(
    childId: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(
      `/restapi/personal/tasklistdailyworkflow/completed/child/${childId}/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets a list of tasks assigned to the user, separated into sections.
   *
   * The tasks are organized chronologically (overdue, today, tomorrow, later) to help users prioritize.
   *
   * Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.
   *
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of tasks per page (default = 10).
   * @returns A promise that resolves to a list of tasks separated into sections for the user.
   */
  public async getUserTasksSeparated(
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/tasklistdailyworkflow/v1`, {
      params: queryParams,
    });
  }
}
