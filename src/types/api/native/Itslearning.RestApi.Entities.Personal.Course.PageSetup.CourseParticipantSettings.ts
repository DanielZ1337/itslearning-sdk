import type { ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile } from "./Itslearning.RestApi.Entities.Personal.Course.PageSetup.CourseProfile";

export type ItslearningRestApiEntitiesPersonalCoursePageSetupCourseParticipantSettings =
	{
		CourseProfiles: ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile;
		DefaultCourseProfileId: number;
		InstantMessageMaxPersonsPerThread: number;
		ShowApplicantTab: boolean;
		FirstNameFirst: boolean;
		ExtraInformationTitle: string;
		FunctionalityMessages: boolean;
		CurrentPersonId: number;
		TemporaryAccessToCourses: boolean;
	};
