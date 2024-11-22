import type { ItslearningRestApiEntitiesElementType } from './Itslearning.RestApi.Entities.ElementType.ts'
import type { ItslearningRestApiEntitiesTaskStatus } from './Itslearning.RestApi.Entities.TaskStatus.ts'
import type { ItsolutionsItslUtilsConstantsLocationType } from './Itsolutions.ItslUtils.Constants.LocationType.ts'

export type ItslearningRestApiEntitiesTask = {
	Description: string
	LocationTitle: string
	LocationFriendlyName: string
	TaskId: number
	Title: string
	// technically, it should be ItslearningRestApiEntitiesTaskStatus, but wrong documentation
	Status: keyof typeof ItslearningRestApiEntitiesTaskStatus
	Deadline: Date
	Url: string
	ContentUrl: string
	IconUrl: string
	ElementId: number
	ElementType: ItslearningRestApiEntitiesElementType
	LearningToolId: number
	Homework: boolean
	LocationType: ItsolutionsItslUtilsConstantsLocationType
	LocationId: number
}
