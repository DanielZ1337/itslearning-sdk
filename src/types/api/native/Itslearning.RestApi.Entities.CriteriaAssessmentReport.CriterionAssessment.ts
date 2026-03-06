import type { ItslearningRestApiEntitiesElement } from "./Itslearning.RestApi.Entities.Element";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";

export type ItslearningRestApiEntitiesCriteriaAssessmentReportCriterionAssessment =
	{
		AchievementLevelTitle: string;
		AssessmentDate: string | null;
		Comment: string;
		PercentScore: number;
		AssessedBy: ItslearningRestApiEntitiesPersonSimple;
		Element: ItslearningRestApiEntitiesElement;
	};
