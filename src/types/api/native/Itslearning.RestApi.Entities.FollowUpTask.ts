import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType.ts";

/**
 * Represents a follow up task.
 */
export type ItslearningRestApiEntitiesFollowUpTask = {
	/**
	 * Title of the follow-up task.
	 */
	Title: string;
	/**
	 * Title of the location (course, project, or group) where the task resides.
	 */
	LocationTitle: string;
	/**
	 * Number of new or recently updated task submissions.
	 */
	NumberOfNewOrUpdatedSubmissions: number;
	/**
	 * Number of task submissions that are awaiting assessment or grading.
	 */
	NumberOfSubmissionsToAssess: number;
	/**
	 * Total number of task submissions that require evaluation.
	 */
	TotalNumberOfEvaluateSubmissions: number;
	/**
	 * URL to access the follow-up task details.
	 */
	Url: string;
	/**
	 * URL to the task content or instructions.
	 */
	ContentUrl: string;
	/**
	 * URL to an icon representing the task type.
	 */
	IconUrl: string;
	/**
	 * Unique identifier of the learning element (task).
	 */
	ElementId: number;
	/**
	 * Type of the learning element (assignment, project, assessment, etc.).
	 */
	ElementType: ItslearningRestApiEntitiesElementType;
	/**
	 * Unique identifier of the learning tool that provides this task.
	 */
	LearningToolId: number;
};
