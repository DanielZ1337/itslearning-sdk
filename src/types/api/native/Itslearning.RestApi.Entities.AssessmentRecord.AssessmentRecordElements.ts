import type { ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordItem } from "./Itslearning.RestApi.Entities.AssessmentRecord.AssessmentRecordItem";
import type { ItslearningRestApiEntitiesAssessmentRecordAssessmentScale } from "./Itslearning.RestApi.Entities.AssessmentRecord.AssessmentScale";

export type ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordElements =
	{
		AssessmentRecordItems: Array<ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordItem>;
		AssessmentRecordItemsCount: number;
		FinalAssessmentRecordItems: Array<ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordItem>;
		AssessmentScales: Array<ItslearningRestApiEntitiesAssessmentRecordAssessmentScale>;
		IsScoreInUse: boolean;
	};
