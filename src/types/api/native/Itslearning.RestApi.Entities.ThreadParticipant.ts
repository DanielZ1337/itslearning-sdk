import type { ItsolutionsItslUtilsConstantsHierarchyRole } from "../Itsolutions.ItslUtils.Constants.HierarchyRole.ts";
import type { ItslearningRestApiEntitiesLocationRecipientType } from "./Itslearning.RestApi.Entities.LocationRecipientType.ts";

export type ItslearningRestApiEntitiesThreadParticipant = {
	SourceLocationId: number;
	SourceLocationType: ItslearningRestApiEntitiesLocationRecipientType;
	IsDeleted: boolean;
	CanReceive: boolean;
	RoleInHierarchy: ItsolutionsItslUtilsConstantsHierarchyRole;
	PersonId: number;
	FirstName: string;
	LastName: string;
	FullName: string;
	ProfileUrl: string;
	AdditionalInfo: string;
	ProfileImageUrl: string;
	ProfileImageUrlSmall: string;
};
