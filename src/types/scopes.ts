export const ItslearningScopes = {
	Calendar: "Calendar",
	Children: "Children",
	CkEditor: "CkEditor",
	Courses: "Courses",
	Hierarchies: "Hierarchies",
	LearningObjectiveRepository: "LearningObjectiveRepository",
	LearningObjectivesReports: "LearningObjectivesReports",
	LightBulletin: "LightBulletin",
	Messages: "Messages",
	Notifications: "Notifications",
	Person: "Person",
	Planner: "Planner",
	Reports: "Reports",
	Scope: "SCOPE",
	Sso: "Sso",
	Statistics: "Statistics",
	StudentPlan: "StudentPlan",
	Supervisor: "Supervisor",
	TaskListDailyWorkflow: "TaskListDailyWorkflow",
	Tasks: "Tasks",
	Workload: "Workload",
} as const;

export type ItslearningScope =
	(typeof ItslearningScopes)[keyof typeof ItslearningScopes];
