export const ItsolutionsItslUtilsConstantsElementType = {
	None: -1,
	Post: 0,
	Discussion: 1,
	Picture: 2,
	Folder: 4,
	Note: 8,
	WebLink: 32,
	FolderFile: 64,
	Survey: 128,
	Test: 256,
	Essay: 512,
	CMProject: 2048,
	All: 1073741823,
	ErrorType: 32768,
	NttTest: 65536,
	LearningToolElement: 131072,
	Planner: 262144,
	CustomActivity: 524288,
	LearningPath: 1048576,
	ManualAssessment: 2097152,
	AchievementGoal: 4194304,
	ExternallyPublishable: 748,
	MaxAllowedInCourse: 1073741823,
	MaxAllowedInProject: 1072102911,
	MaxAllowedInModule: 2052,
	AllForMultipleNotification: 1073741819,
	TaskListElements: 721792,
	Resources: 2158,
	Activities: 1639041,
	CoursePersonReportItems: 721444,
	GradeBookItems: 2818560,
	DiscontinueItems: 2050,
	CopyNotSupportedItems: 2306,
	CopyWithAnswersSupportedItems: 590465,
	LearningObjectiveNotSupportedItems: 1050628,
	LearningObjectiveAssessmentSupported: 721408,
	LearningObjectiveCriteriaBasedAssessmentSupported: 524800,
	AllowedForParents: 721610,
	CanContainSubElements: 1048580,
	AllowedInLearningPath: 1072690425,
	Hidden: 4194304,
} as const;

export type ItsolutionsItslUtilsConstantsElementType =
	(typeof ItsolutionsItslUtilsConstantsElementType)[keyof typeof ItsolutionsItslUtilsConstantsElementType];
