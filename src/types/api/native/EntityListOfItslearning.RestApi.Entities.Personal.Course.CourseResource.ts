import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesPersonalCourseCourseResource } from "./Itslearning.RestApi.Entities.Personal.Course.CourseResource.ts";

// export type EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource =
// 	{
// 		EntityArray: ItslearningRestApiEntitiesPersonalCourseCourseResource[];
// 		Total: number;
// 		CurrentPageIndex: number;
// 		PageSize: number;
// 	};

export type EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource =
  PaginatedResponse<ItslearningRestApiEntitiesPersonalCourseCourseResource>;
