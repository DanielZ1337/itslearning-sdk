// export type EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled =
// 	{
// 		EntityArray: Array<ItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled>;
// 		Total: number;
// 		CurrentPageIndex: number;
// 		PageSize: number;
// 	};

import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled } from "./Itslearning.RestApi.Entities.Personal.Course.CourseParticipantUnenrolled";

export type EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled =
	PaginatedResponse<ItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled>;
