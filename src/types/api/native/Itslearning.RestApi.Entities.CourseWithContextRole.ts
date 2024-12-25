import type { ItslearningRestApiEntitiesPersonContextRole } from "./Itslearning.RestApi.Entities.PersonContextRole";

export type ItslearningRestApiEntitiesCourseWithContextRole = {
	ContextRole: ItslearningRestApiEntitiesPersonContextRole;
	OrganisationLegalId: string;
	OrganisationSyncKey: string;
	Code: string;
	CourseId: number;
	CreatedDateTimeUtc: Date;
	Title: string;
	OrganisationId: number;
	CourseColorClass: string;
	SyncKey: string;
};
