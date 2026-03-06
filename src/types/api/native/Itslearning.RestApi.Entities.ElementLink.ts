import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType.ts";

/**
 * Represents element link.
 */
export type ItslearningRestApiEntitiesElementLink = {
	/** The ID of element. */
	ElementId: number;
	/** Related element's type. */
	ElementType: ItslearningRestApiEntitiesElementType;
	/** The element's title. */
	Title: string;
	/** Url to the element's page in itslearning. */
	Url: string;
	/** Url to the location in itslearning opened without master page. */
	ContentUrl: string;
	/** Url to the element's icon used by itslearning. */
	IconUrl: string;
	/** Identifier of learning tool (Assignment extension, test extension etc.). It's 0 for native itslearning elements. It is applicable only if ElementType is LearningToolElement. */
	LearningToolId: number;
	/** Marks the element as homework. */
	Homework: boolean;
};
