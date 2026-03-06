/**
 * Represents the role of a person within a course or location context.
 * This enum defines the different roles that a person can have in the system.
 */
export const ItslearningRestApiEntitiesPersonContextRole = {
	/**
	 * The default member role.
	 */
	Member: 1,
	/**
	 * The learner role.
	 */
	Learner: 2,
	/**
	 * The instructor role.
	 */
	Instructor: 3,
	/**
	 * The content developer role.
	 */
	ContentDeveloper: 4,
	/**
	 * The manager role.
	 */
	Manager: 5,
	/**
	 * The mentor role.
	 */
	Mentor: 6,
	/**
	 * The administrator role.
	 */
	Administrator: 7,
	/**
	 * The teaching assistant role.
	 */
	TeachingAssistant: 8,
} as const;

export type ItslearningRestApiEntitiesPersonContextRole =
	(typeof ItslearningRestApiEntitiesPersonContextRole)[keyof typeof ItslearningRestApiEntitiesPersonContextRole];
