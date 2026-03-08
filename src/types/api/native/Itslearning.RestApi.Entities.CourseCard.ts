import type { ItslearningRestApiEntitiesCourseCardTeacher } from "./Itslearning.RestApi.Entities.CourseCardTeacher";

/**
 * Represents the course card for course list.
 */
export type ItslearningRestApiEntitiesCourseCard = {
	/**
	 * Unique identifier for the course.
	 */
	CourseId: number;
	/**
	 * Friendly name of the course, suitable for display.
	 */
	FriendlyName: string | null;
	/**
	 * Title of the course.
	 */
	Title: string;
	/**
	 * Name of the primary teacher for the course.
	 */
	TeacherName: string | null;
	/**
	 * URL to the profile picture of the primary teacher.
	 */
	TeacherPictureUrl: string | null;
	/**
	 * Total number of teachers assigned to the course.
	 */
	NumberOfTeachers: number;
	/**
	 * List of all teachers assigned to the course.
	 */
	Teachers: ItslearningRestApiEntitiesCourseCardTeacher[];
	/**
	 * CSS class name used for styling the course color.
	 */
	CourseColorClass: string;
	/**
	 * Number of announcements posted in the course.
	 */
	NumberOfAnnouncements: number;
	/**
	 * Number of tasks assigned in the course.
	 */
	NumberOfTasks: number;
	/**
	 * Number of follow-up tasks in the course.
	 */
	NumberOfFollowUpTasks: number;
	/**
	 * Display-friendly timestamp of when the course was last updated.
	 */
	LastUpdatedDisplayTime: string;
	/**
	 * ISO 8601 timestamp of when the course content was last updated.
	 */
	LastUpdated: Date;
	/**
	 * Display-friendly timestamp of when someone was last active in the course.
	 */
	LastOnlineDisplayTime: string;
	/**
	 * ISO 8601 timestamp of when someone was last online in the course.
	 */
	LastOnline: Date;
	/**
	 * Indicates whether the current user has marked this course as a favorite.
	 */
	IsFavouriteCourse: boolean;
	/**
	 * Indicates whether the current user has administrative rights in the course.
	 */
	CanAdminCourse: boolean;
};
