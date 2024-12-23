import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";

// export type EntityListOfItslearningRestApiEntitiesPersonSimple = {
// 	EntityArray: Array<ItslearningRestApiEntitiesPersonSimple>;
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesPersonSimple =
	PaginatedResponse<ItslearningRestApiEntitiesPersonSimple>;
