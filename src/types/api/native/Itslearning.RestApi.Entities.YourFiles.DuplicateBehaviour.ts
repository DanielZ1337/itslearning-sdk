export const ItslearningRestApiEntitiesYourFilesDuplicateBehaviour = {
	Replace: 0,
	KeepBoth: 1,
	Skip: 2,
} as const;

export type ItslearningRestApiEntitiesYourFilesDuplicateBehaviour =
	(typeof ItslearningRestApiEntitiesYourFilesDuplicateBehaviour)[keyof typeof ItslearningRestApiEntitiesYourFilesDuplicateBehaviour];
