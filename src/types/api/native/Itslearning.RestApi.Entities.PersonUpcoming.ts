import type { ItslearningRestApiEntitiesCourseUpcoming } from "./Itslearning.RestApi.Entities.CourseUpcoming";

export type ItslearningRestApiEntitiesPersonUpcoming = {
	Date: Date;
	Courses: Array<ItslearningRestApiEntitiesCourseUpcoming>;
};
