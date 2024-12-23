import type { ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType } from "./Itslearning.Platform.RestApi.Sdk.Common.Entities.LearningToolType";
import type { ItslearningPlatformRestApiSdkCommonEntitiesSharingScope } from "./Itslearning.Platform.RestApi.Sdk.Common.Entities.SharingScope";

export type ItslearningPlatformRestApiSdkItslEntitiesPlannerPlanElement = {
	LearningObjectInstanceId: number;
	ExtensionId: number;
	AuthorPersonId: number;
	AuthorName: string;
	SharedWith: string;
	SharingScope: ItslearningPlatformRestApiSdkCommonEntitiesSharingScope;
	VendorDefaultName: string;
	VendorAuthorName: string;
	ElementLearningObjectives: Array<number>;
	IconTypeId: number;
	IconsVersion: number;
	ElementId: number;
	Title: string;
	LearningObjectId: number;
	LearningToolType: ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType;
	Order: number;
};
