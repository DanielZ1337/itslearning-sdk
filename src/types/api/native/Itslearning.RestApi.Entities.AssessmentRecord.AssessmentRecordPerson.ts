import type { ItslearningRestApiEntitiesAssessmentRecordPersonAssessmentValue } from "./Itslearning.RestApi.Entities.AssessmentRecord.PersonAssessmentValue";

export type ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordPerson = {
	PersonAssessments: Array<ItslearningRestApiEntitiesAssessmentRecordPersonAssessmentValue>;
	PersonId: number;
	FirstName: string;
	LastName: string;
	FullName: string;
	ProfileUrl: string;
	AdditionalInfo: string;
	ProfileImageUrl: string;
	ProfileImageUrlSmall: string;
};
