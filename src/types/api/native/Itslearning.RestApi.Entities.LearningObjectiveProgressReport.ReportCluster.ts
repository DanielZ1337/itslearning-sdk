import type { ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReportAssessmentStatus } from "./Itslearning.RestApi.Entities.LearningObjectiveProgressReport.AggregatedReportAssessmentStatus";
import type { ItslearningRestApiEntitiesLearningObjectiveProgressReportReportGroup } from "./Itslearning.RestApi.Entities.LearningObjectiveProgressReport.ReportGroup";

export type ItslearningRestApiEntitiesLearningObjectiveProgressReportReportCluster =
	{
		ClusterId: number;
		Title: string;
		Description: string;
		ClusterSummary: Array<ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReportAssessmentStatus>;
		ClusterMasteryPercentage: number;
		Groups: Array<ItslearningRestApiEntitiesLearningObjectiveProgressReportReportGroup>;
	};
