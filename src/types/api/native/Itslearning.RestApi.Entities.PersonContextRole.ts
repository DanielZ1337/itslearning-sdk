export const ItslearningRestApiEntitiesPersonContextRole = {
	Member: 0,
	Learner: 1,
	Instructor: 2,
	ContentDeveloper: 3,
	Manager: 4,
	Mentor: 5,
	Administrator: 6,
	TeachingAssistant: 7,
} as const;

export type ItslearningRestApiEntitiesPersonContextRole =
	(typeof ItslearningRestApiEntitiesPersonContextRole)[keyof typeof ItslearningRestApiEntitiesPersonContextRole];
