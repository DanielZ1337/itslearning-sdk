import type { ItslearningRestApiEntitiesHierarchyExtendedRole } from "./Itslearning.RestApi.Entities.HierarchyExtendedRole";

export type ItslearningRestApiEntitiesPersonSimpleWithHierarchyExtendedRole = {
	HierarchyRole: ItslearningRestApiEntitiesHierarchyExtendedRole;
	PersonId: number;
	FirstName: string;
	LastName: string;
	FullName: string;
	ProfileUrl: string;
	AdditionalInfo: string;
	ProfileImageUrl: string;
	ProfileImageUrlSmall: string;
};
