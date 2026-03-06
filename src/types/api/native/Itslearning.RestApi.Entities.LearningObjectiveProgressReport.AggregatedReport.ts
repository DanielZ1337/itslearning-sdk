import type { ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReportAssessmentStatus } from "./Itslearning.RestApi.Entities.LearningObjectiveProgressReport.AggregatedReportAssessmentStatus";
import type { ItslearningRestApiEntitiesLearningObjectiveProgressReportReportCluster } from "./Itslearning.RestApi.Entities.LearningObjectiveProgressReport.ReportCluster";

export type ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport =
	{
		SubjectId: number;
		SubjectSummary: Array<ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReportAssessmentStatus>;
		SubjectMasteryPercentage: number;
		Clusters: Array<ItslearningRestApiEntitiesLearningObjectiveProgressReportReportCluster>;
		UseMastery: boolean;
		FullReportUrl: string;
	};
