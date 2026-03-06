import type { ItslearningRestApiEntitiesCourseUpcoming } from "./Itslearning.RestApi.Entities.CourseUpcoming";

export type ItslearningRestApiEntitiesPersonUpcoming = {
	Date: string;
	Courses: Array<ItslearningRestApiEntitiesCourseUpcoming>;
};
