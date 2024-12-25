export const ItslearningRestApiEntitiesPersonContextRole = {
	Member: 1,
	Learner: 2,
	Instructor: 3,
	ContentDeveloper: 4,
	Manager: 5,
	Mentor: 6,
	Administrator: 7,
	TeachingAssistant: 8,
} as const;

export type ItslearningRestApiEntitiesPersonContextRole =
	(typeof ItslearningRestApiEntitiesPersonContextRole)[keyof typeof ItslearningRestApiEntitiesPersonContextRole];
