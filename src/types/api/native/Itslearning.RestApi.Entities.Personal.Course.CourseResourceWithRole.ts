import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType";
import type { ItslearningRestApiEntitiesPersonContextRole } from "./Itslearning.RestApi.Entities.PersonContextRole";

export type ItslearningRestApiEntitiesPersonalCourseCourseResourceWithRole = {
	CourseCode: string;
	CourseTitle: string;
	ContextRole: ItslearningRestApiEntitiesPersonContextRole;
	Title: string;
	ElementId: number;
	ElementType: ItslearningRestApiEntitiesElementType;
	CourseId: number;
	Url: string;
	ContentUrl: string;
	IconUrl: string;
	Active: boolean;
	LearningToolId: number;
	AddElementUrl: string;
	Homework: boolean;
	Path: string;
	LearningObjectId: number;
	LearningObjectInstanceId: number;
};
