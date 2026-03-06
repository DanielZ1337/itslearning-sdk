import type { ItslearningRestApiEntitiesPersonContextRole } from "./Itslearning.RestApi.Entities.PersonContextRole.ts";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple.ts";

/**
 * Represents the course with personalized data.
 */
export type ItslearningRestApiEntitiesPersonCourseCardData = {
	/**
	 * Number of follow-up tasks assigned to the user in this course.
	 */
	FollowUpTaskCount: number;
	/**
	 * Total number of tasks assigned to the user in this course.
	 */
	TaskCount: number;
	/**
	 * List of teachers in the course.
	 */
	TeachersInCourse: ItslearningRestApiEntitiesPersonSimple[];
	/**
	 * Role of the user in the course (student, teacher, administrator, etc.).
	 */
	Role: ItslearningRestApiEntitiesPersonContextRole;
	/**
	 * UTC timestamp of when this course data was last updated.
	 */
	LastUpdatedUtc: Date;
	/**
	 * Number of new notifications for the user in this course.
	 */
	NewNotificationsCount: number;
	/**
	 * Number of new bulletins posted in this course.
	 */
	NewBulletinsCount: number;
	/**
	 * URL to access the course.
	 */
	Url: string;
	/**
	 * Indicates whether the user has administrative permissions in the course.
	 */
	HasAdminPermissions: boolean;
	/**
	 * Indicates whether the user has student permissions in the course.
	 */
	HasStudentPermissions: boolean;
	/**
	 * Unique identifier for the course.
	 */
	CourseId: number;
	/**
	 * Official title of the course.
	 */
	Title: string;
	/**
	 * Friendly name of the course for display purposes.
	 */
	FriendlyName: string;
	/**
	 * Hex color code or color name associated with the course.
	 */
	CourseColor: string;
	/**
	 * Fill color used for course styling elements.
	 */
	CourseFillColor: string;
	/**
	 * Official course code identifier.
	 */
	CourseCode: string;
};
