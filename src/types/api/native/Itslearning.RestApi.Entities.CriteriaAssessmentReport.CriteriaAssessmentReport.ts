import type { ItslearningRestApiEntitiesCriteriaAssessmentReportCriterion } from "./Itslearning.RestApi.Entities.CriteriaAssessmentReport.Criterion";
import type { ItslearningRestApiEntitiesCriteriaAssessmentReportCriterionAssessment } from "./Itslearning.RestApi.Entities.CriteriaAssessmentReport.CriterionAssessment";

export type ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReportItem =
	{
		Criterion: ItslearningRestApiEntitiesCriteriaAssessmentReportCriterion;
		Assessments: Array<ItslearningRestApiEntitiesCriteriaAssessmentReportCriterionAssessment>;
	};

export type ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReport =
	{
		ReportItems: Array<ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReportItem>;
	};
