export const ItslearningRestApiEntitiesInstantMessageThreadType = {
	Group: "Group",
	Course: "Course",
	Project: "Project",
	OneToOne: "OneToOne",
	GroupPlaceHolder: "GroupPlaceHolder",
} as const;

export type ItslearningRestApiEntitiesInstantMessageThreadType =
	(typeof ItslearningRestApiEntitiesInstantMessageThreadType)[keyof typeof ItslearningRestApiEntitiesInstantMessageThreadType];
