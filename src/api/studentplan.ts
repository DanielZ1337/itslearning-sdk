import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * StudentPlanAPI
 *
 * Overview:
 * Endpoint for Student Plans in Personal API.
 *
 * Tasks in itslearning are personal and related to actions a user should perform in the future.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `StudentPlan`.
 */
export class StudentPlanAPI extends Manager {
  /**
   * Gets the active achievement goals for a specific course.
   *
   * @param courseId - The unique ID of the course.
   * @returns A promise that resolves to a list of active achievement goals.
   */
  public async getActiveAchievementGoals(courseId: number): Promise<unknown> {
    const queryParams = createSearchParams({ courseId });
    return this.http.get(
      `/restapi/personal/studentplan/achievementgoals/active/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets the archived achievement goals for a specific course.
   *
   * @param courseId - The unique ID of the course.
   * @returns A promise that resolves to a list of archived achievement goals.
   */
  public async getArchivedAchievementGoals(courseId: number): Promise<unknown> {
    const queryParams = createSearchParams({ courseId });
    return this.http.get(
      `/restapi/personal/studentplan/achievementgoals/archived/v1`,
      { params: queryParams },
    );
  }

  /**
   * Gets the course-wide achievement goals.
   *
   * **Note**: No documentation available for this endpoint.
   *
   * @returns A promise that resolves to a list of course-wide achievement goals.
   */
  public async getCourseWideAchievementGoals(): Promise<unknown> {
    return this.http.get(
      `/restapi/personal/studentplan/achievementgoals/coursewide/v1`,
    );
  }

  /**
   * Gets a list of topic assessments for the specified course and student.
   *
   * @param courseId - The unique ID of the course.
   * @param fromId - (Optional) The ID to start retrieving assessments from.
   * @returns A promise that resolves to a list of topic assessments.
   */
  public async getTopicAssessments(
    courseId: number,
    fromId?: number,
  ): Promise<unknown> {
    const queryParams = createSearchParams({ courseId, fromId });
    return this.http.get(
      `/restapi/personal/studentplan/assessments/topics/v1`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves a list of comments related to the specific person's student plan.
   *
   * @param courseId - The unique ID of the course.
   * @param useNewerThan - (Optional) If true, retrieve comments newer than `fromId`.
   * @param fromId - (Optional) The ID to start retrieving comments from.
   * @param pageIndex - (Optional) The index of the page to retrieve (default = 0).
   * @param pageSize - (Optional) The number of comments per page (default = 10).
   * @returns A promise that resolves to a list of related comments.
   */
  public async getComments(
    courseId: number,
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      courseId,
      UseNewerThan: useNewerThan,
      FromId: fromId,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });
    return this.http.get(`/restapi/personal/studentplan/comments/v1`, {
      params: queryParams,
    });
  }

  /**
   * Returns a list of courses for the Student Plan.
   *
   * @param lastCommentReadDateTimesUtc - (Optional) The last read date-time for comments in UTC.
   * @returns A promise that resolves to a list of courses associated with the Student Plan.
   */
  public async getStudentPlanCourses(
    lastCommentReadDateTimesUtc?: string,
  ): Promise<unknown> {
    const queryParams = createSearchParams({ lastCommentReadDateTimesUtc });
    return this.http.get(`/restapi/personal/studentplan/courses/v1`, {
      params: queryParams,
    });
  }

  /**
   * Returns an overview entity for the Student Plan.
   *
   * @param courseId - The unique ID of the course.
   * @param lastCommentReadDateTimeUtc - (Optional) The last read date-time for comments in UTC.
   * @returns A promise that resolves to an overview entity of the Student Plan.
   */
  public async getStudentPlanOverview(
    courseId: number,
    lastCommentReadDateTimeUtc?: string,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      courseId,
      lastCommentReadDateTimeUtc,
    });
    return this.http.get(`/restapi/personal/studentplan/overview/v1`, {
      params: queryParams,
    });
  }
}
