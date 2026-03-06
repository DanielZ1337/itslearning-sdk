import type { ItslearningRestApiEntitiesPersonalCourseFileErrorCode } from "./Itslearning.RestApi.Entities.Personal.Course.FileErrorCode";

export type ItslearningRestApiEntitiesPersonalCourseCreateFileResponse = {
	/** Element id for the file created */
	ElementId: number;
	/** The cloud id of the file created */
	CloudId: string;
	/** The error message if creation failed */
	ErrorMessage: string;
	/** The error codes if creation failed */
	ErrorCodes: ItslearningRestApiEntitiesPersonalCourseFileErrorCode[];
	/** If the creation was successful or not */
	Success: boolean;
	/** The title for the newly created file element */
	Title: string;
};
