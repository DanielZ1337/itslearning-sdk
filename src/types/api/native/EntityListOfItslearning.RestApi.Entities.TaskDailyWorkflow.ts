import type { PaginatedResponse } from "../../paginated";
import type { ItslearningRestApiEntitiesTaskDailyWorkflow } from "./Itslearning.RestApi.Entities.TaskDailyWorkflow.ts";

// export type EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow = {
// 	EntityArray: ItslearningRestApiEntitiesTaskDailyWorkflow[];
// 	Total: number;
// 	CurrentPageIndex: number;
// 	PageSize: number;
// };

export type EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow =
	PaginatedResponse<ItslearningRestApiEntitiesTaskDailyWorkflow>;
