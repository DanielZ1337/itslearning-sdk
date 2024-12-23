import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesInstantMessage } from "./Itslearning.RestApi.Entities.InstantMessage";

// export type EntityListOfItslearningRestApiEntitiesInstantMessage = {
// 	EntityArray: ItslearningRestApiEntitiesInstantMessage[];
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesInstantMessage =
	PaginatedResponse<ItslearningRestApiEntitiesInstantMessage>;
