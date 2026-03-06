export type ItslearningRestApiEntitiesAssessmentRecordPersonAssessmentValue = {
	GradeBookItemId: number;
	IsExempt: boolean;
	IsManualAssessmentRequired: boolean;
	Score: number | null;
	Scale: number | null;
	OverwrittenAssessmentItemId: number | null;
	OverwrittenScore: number | null;
	AnswerSubmitted: boolean;
	AttemptId: number | null;
	AnswerDateTime: string | null;
	AssessmentVisible: boolean;
	ElementSessionStatus: number;
	ElementResultId: number | null;
	IsAnonymousSubmission: boolean;
	ElementPersonCanTake: boolean;
};
