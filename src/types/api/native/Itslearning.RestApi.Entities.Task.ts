import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType.ts";
import type { ItslearningRestApiEntitiesTaskStatus } from "./Itslearning.RestApi.Entities.TaskStatus.ts";
import type { ItsolutionsItslUtilsConstantsLocationType } from "./Itsolutions.ItslUtils.Constants.LocationType.ts";

/**
 * Represents the task.
 */
export type ItslearningRestApiEntitiesTask = {
	/** Task description. */
	Description: string;
	/** The name of the course or project that the task belong. Empty if the task is part of a individual learning plan. */
	LocationTitle: string;
	/** Friendly name of event location. Can be used instead of LocationTitle which is usually more official. */
	LocationFriendlyName: string;
	/** The unique id for for the task, in scope of a site (itslearning customer). */
	TaskId: number;
	/** Task title. */
	Title: string;
	/** Task status. */
	Status: keyof typeof ItslearningRestApiEntitiesTaskStatus;
	/** Task deadline. Time zone is UTC. Can be null if there is no deadline. */
	Deadline: Date | null;
	/** The itslearning internal URL for the task. */
	Url: string;
	/** The itslearning content URL for the task. */
	ContentUrl: string;
	/** Url to related element icon. */
	IconUrl: string;
	/** The identifier of related element. */
	ElementId: number;
	/** Type of related element. */
	ElementType: ItslearningRestApiEntitiesElementType;
	/** Identifier of learning tool (Assignment extension, test extension etc.). It's 0 for native itslearning elements. It is applicable only if ElementType is LearningToolElement. */
	LearningToolId: number;
	/** Marks the task as homework. */
	Homework: boolean;
	/** The task location type. */
	LocationType: ItsolutionsItslUtilsConstantsLocationType;
	/** The task location identifier. */
	LocationId: number;
};
