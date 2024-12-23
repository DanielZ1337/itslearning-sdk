import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesCourseCard } from "./Itslearning.RestApi.Entities.CourseCard";

// export type EntityListOfItslearningRestApiEntitiesCourseCard = {
// 	EntityArray: Array<ItslearningRestApiEntitiesCourseCard>;
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesCourseCard =
	PaginatedResponse<ItslearningRestApiEntitiesCourseCard>;
