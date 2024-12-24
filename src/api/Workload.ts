import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

/**
 * WorkloadAPI
 *
 * Overview:
 * Endpoint for Workload API.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `Workload`.
 */
export class WorkloadAPI extends Manager {
	/**
	 * Gets a list of assignments for a particular student in a specific course with corresponding workload.
	 *
	 * @param studentId - The unique ID of the student.
	 * @param courseId - The unique ID of the course.
	 * @param pageIndex - The index of the page to retrieve (default = 0).
	 * @param pageSize - The number of assignments per page (default = 10).
	 */
	public async getStudentCourseAssignments(
		studentId: number,
		courseId: number,
		pageIndex = 0,
		pageSize = 10,
	): Promise<unknown> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});

		return this.http.get(
			`/restapi/personal/workload/assignments/${studentId}/${courseId}/v1`,
			{ params: queryParams },
		);
	}

	/**
	 * Gets a list of students in a specified course with their corresponding workload.
	 *
	 * @param courseId - The unique ID of the course.
	 * @param pageIndex - The index of the page to retrieve (default = 0).
	 * @param pageSize - The number of students per page (default = 10).
	 */
	public async getCourseStudentsWorkload(
		courseId: number,
		pageIndex = 0,
		pageSize = 10,
	): Promise<unknown> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});

		return this.http.get(`/restapi/personal/workload/course/${courseId}/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets a list of courses with corresponding workload for a specific student.
	 *
	 * @param studentId - The unique ID of the student.
	 * @param pageIndex - The index of the page to retrieve (default = 0).
	 * @param pageSize - The number of courses per page (default = 10).
	 */
	public async getStudentCoursesWorkload(
		studentId: number,
		pageIndex = 0,
		pageSize = 10,
	): Promise<unknown> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});

		return this.http.get(`/restapi/personal/workload/courses/${studentId}/v1`, {
			params: queryParams,
		});
	}

	/**
	 * Gets a list of mentees with their corresponding workload.
	 *
	 * @param pageIndex - The index of the page to retrieve (default = 0).
	 * @param pageSize - The number of mentees per page (default = 10).
	 */
	public async getMenteesWorkload(
		pageIndex = 0,
		pageSize = 10,
	): Promise<unknown> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});

		return this.http.get("/restapi/personal/workload/mentees/v1", {
			params: queryParams,
		});
	}

	/**
	 * Gets a list of all students with their corresponding workload.
	 *
	 * @param pageIndex - The index of the page to retrieve (default = 0).
	 * @param pageSize - The number of students per page (default = 10).
	 */
	public async getAllStudentsWorkload(
		pageIndex = 0,
		pageSize = 10,
	): Promise<unknown> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
		});

		return this.http.get("/restapi/personal/workload/students/v1", {
			params: queryParams,
		});
	}
}
