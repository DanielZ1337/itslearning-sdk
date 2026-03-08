import type { ItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus } from "./Itslearning.RestApi.Entities.LearningObjectiveProgressReport.ReportAssessmentStatus";

export type ItslearningRestApiEntitiesLearningObjectiveProgressReportReportLearningObjectiveParent =
	{
		Id: number;
		Title: string;
		Description: string;
	};

export type ItslearningRestApiEntitiesLearningObjectiveProgressReportReportGroupItem =
	{
		LearningObjectiveId: number;
		Title: string;
		Description: string;
		Status: ItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus;
		Mastered: boolean;
		MasteredDate: Date | null;
	};
