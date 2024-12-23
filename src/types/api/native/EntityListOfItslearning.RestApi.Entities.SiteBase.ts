import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesSiteBase } from "./Itslearning.RestApi.Entities.SiteBase";

// export type EntityListOfItslearningRestApiEntitiesSiteBase = {
// 	EntityArray: Array<ItslearningRestApiEntitiesSiteBase>;
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesSiteBase =
  PaginatedResponse<ItslearningRestApiEntitiesSiteBase>;
