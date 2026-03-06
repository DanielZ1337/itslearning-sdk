import type { ItslearningRestApiEntitiesWorkload } from "./Itslearning.RestApi.Entities.Workload";

/**
 * A structure to represent a course in itslearning together with the workload for a particular student
 */
export type ItslearningRestApiEntitiesCourseWithWorkload = {
	/**
	 * Unique identifier for the course.
	 */
	CourseId: number;
	/**
	 * Title of the course.
	 */
	Title: string;
	/**
	 * Workload information and statistics for this course for the student.
	 */
	Workload: ItslearningRestApiEntitiesWorkload;
	/**
	 * Indicates whether the user can access the course assignment list.
	 */
	CanAccessAssignmentList: boolean;
};
