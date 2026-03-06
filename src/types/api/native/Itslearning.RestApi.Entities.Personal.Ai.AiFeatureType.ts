export const ItslearningRestApiEntitiesPersonalAiAiFeatureType = {
	Unknown: 0,
	Summarize: 1,
	Translate: 2,
	Improve: 3,
	Shorten: 4,
	Lengthen: 5,
	Custom: 6,
	CreateLearningObjective: 7,
	CreateElement: 8,
	Chat: 9,
} as const;

export type ItslearningRestApiEntitiesPersonalAiAiFeatureType =
	(typeof ItslearningRestApiEntitiesPersonalAiAiFeatureType)[keyof typeof ItslearningRestApiEntitiesPersonalAiAiFeatureType];
