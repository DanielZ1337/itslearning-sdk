import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesPersonCourseCardData } from "./Itslearning.RestApi.Entities.PersonCourseCardData";

// export type EntityListOfItslearningRestApiEntitiesPersonCourseCardData = {
//   EntityArray: Array<ItslearningRestApiEntitiesPersonCourseCardData>;
//   Total: number;
//   CurrentPageIndex: number;
//   PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesPersonCourseCardData =
	PaginatedResponse<ItslearningRestApiEntitiesPersonCourseCardData>;
