import type { ItslearningRestApiEntitiesCourseCardTeacher } from "./Itslearning.RestApi.Entities.CourseCardTeacher.ts";

export type ItslearningRestApiEntitiesCourseCardSettings = {
	CourseTitle: string;
	FriendlyName: string;
	CourseColorClass: string;
	VisibleCourseCardCandidateIds: string;
	VisibleCourseCardCandidates: ItslearningRestApiEntitiesCourseCardTeacher[];
	CanEditCourseColour: boolean;
	CanEditFriendlyName: boolean;
};
