import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesFollowUpTask } from "./Itslearning.RestApi.Entities.FollowUpTask";

// export type EntityListOfItslearningRestApiEntitiesFollowUpTask = {
// 	EntityArray: Array<ItslearningRestApiEntitiesFollowUpTask>;
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesFollowUpTask =
  PaginatedResponse<ItslearningRestApiEntitiesFollowUpTask>;
