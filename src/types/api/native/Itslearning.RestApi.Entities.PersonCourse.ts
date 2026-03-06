/**
 * Represents the course with personalized data.
 */
export type ItslearningRestApiEntitiesPersonCourse = {
	/** The course last updated date. Time zone is UTC. Can be null if it was never updated. */
	LastUpdatedUtc: Date;
	/** The new notifications count in course for person. */
	NewNotificationsCount: number;
	/** The new bulletins in course for person. */
	NewBulletinsCount: number;
	/** The itslearning internal URL for the course. */
	Url: string;
	/** Defines if person has administration permissions in the course. */
	HasAdminPermissions: boolean;
	/** Defines if person has student permissions in the course. */
	HasStudentPermissions: boolean;
	/** The unique id for the course, in scope of a site (itslearning customer). */
	CourseId: number;
	/** The course title. */
	Title: string;
	/** The course friendly name. */
	FriendlyName: string;
	/** Color code for the course. */
	CourseColorClass: string;
	/** Fill color code for the course. */
	CourseFillColor: string;
	/** Code for the course. */
	CourseCode: string;
};
