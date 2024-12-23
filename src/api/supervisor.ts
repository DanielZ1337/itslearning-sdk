import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * SupervisorAPI
 *
 * Overview:
 * Endpoint for retrieving data for supervisors - mentors and headteachers.
 *
 * Secured with OAuth2, requires OAuth2 API scope `Supervisor`.
 */
export class SupervisorAPI extends Manager {
  /**
   * Gets a list of all persons the current user is a supervisor for (mentorees).
   *
   * @param supervisorType - The type of supervisor (e.g., 'Mentor', 'HeadTeacher').
   * @param pageIndex - The index of the page to retrieve (default = 0).
   * @param pageSize - The number of persons per page (default = 10).
   * @returns A promise that resolves to a list of supervised persons.
   */
  public async getSupervisedPersons(
    supervisorType: string,
    pageIndex = 0,
    pageSize = 10,
  ): Promise<unknown> {
    const queryParams = createSearchParams({
      supervisorType,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(`/restapi/personal/supervisor/supervised/v1`, {
      params: queryParams,
    });
  }
}
