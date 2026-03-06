import type { ItslearningRestApiEntitiesPersonSimpleWithHierarchyExtendedRole } from "./Itslearning.RestApi.Entities.PersonSimpleWithHierarchyExtendedRole";

/**
 * Represents the course from perspective of parents of a learner.
 */
export type ItslearningRestApiEntitiesChildCourse = {
	Teachers: Array<ItslearningRestApiEntitiesPersonSimpleWithHierarchyExtendedRole>;
	CourseId: number;
	Title: string;
	FriendlyName: string;
	CourseColor: string;
	CourseFillColor: string;
	CourseCode: string;
};
