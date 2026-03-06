/**
 * Represents a course in the itslearning system.
 */
export type ItslearningRestApiEntitiesCourse = {
	/**
	 * The course code used for identification and display.
	 */
	Code: string;
	/**
	 * Unique identifier for the course.
	 */
	CourseId: number;
	/**
	 * UTC timestamp of when the course was created.
	 */
	CreatedDateTimeUtc: Date;
	/**
	 * Official title of the course.
	 */
	Title: string;
	/**
	 * Unique identifier of the organisation that owns this course.
	 */
	OrganisationId: number;
	/**
	 * CSS class name used for styling the course color in the user interface.
	 */
	CourseColorClass: string;
	/**
	 * Synchronization key used for tracking external system synchronizations.
	 */
	SyncKey: string;
};
