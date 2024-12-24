export const ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter = {
	AdministrationMenu: 1,
	TopMenu: 2,
	HeadteacherMenu: 4,
	MentorMenu: 5,
	CourseMainMenu: 6,
	CourseFollowUpMenu: 7,
	AssessmentRecord: 8,
	CourseAddResourceMenu: 9,
} as const;

export type ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter =
	(typeof ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter)[keyof typeof ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter];
