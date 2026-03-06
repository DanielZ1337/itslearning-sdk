// export enum ItslearningRestApiEntitiesElementType {
// 	Unknown = 0,
// 	Discussion = 1,
// 	PictureWithDescription = 2,
// 	Folder = 4,
// 	Note = 8,
// 	WebLink = 32,
// 	FolderFile = 64,
// 	Survey = 128,
// 	Assignment = 256,
// 	Lesson = 2048,
// 	Test = 65536,
// 	LearningToolElement = 131072,
// 	CustomActivity = 524288,
// 	LearningPath = 1048576,
// }

/**
 * Represents the type of a learning element or content item in the system.
 * This enum defines the various types of elements that can exist in courses and other locations.
 */
export const ItslearningRestApiEntitiesElementType = {
	/**
	 * Element type is not defined or unknown.
	 */
	Unknown: 0,
	/**
	 * Discussion element.
	 */
	Discussion: 1,
	/**
	 * Picture with description element.
	 */
	PictureWithDescription: 2,
	/**
	 * Folder container element.
	 */
	Folder: 4,
	/**
	 * Note element.
	 */
	Note: 8,
	/**
	 * Web link element.
	 */
	WebLink: 32,
	/**
	 * File element (folder file).
	 */
	FolderFile: 64,
	/**
	 * Survey element.
	 */
	Survey: 128,
	/**
	 * Assignment element.
	 */
	Assignment: 256,
	/**
	 * Lesson element.
	 */
	Lesson: 2048,
	/**
	 * Test 2.0 element.
	 */
	Test: 65536,
	/**
	 * Learning tool element (any element that belongs to an extension or learning tool).
	 */
	LearningToolElement: 131072,
	/**
	 * Custom activity element.
	 */
	CustomActivity: 524288,
	/**
	 * Learning path element.
	 */
	LearningPath: 1048576,
} as const;

export type ItslearningRestApiEntitiesElementType =
	(typeof ItslearningRestApiEntitiesElementType)[keyof typeof ItslearningRestApiEntitiesElementType];
