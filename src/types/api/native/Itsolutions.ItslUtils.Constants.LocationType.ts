export const ItsolutionsItslUtilsConstantsLocationType = {
	Course: 1,
	Project: 2,
	Hierarchy: 3,
	Personal: 5,
	Site: 6,
	PersonCache: 7,
	Library: 8,
} as const;

export type ItsolutionsItslUtilsConstantsLocationType =
	(typeof ItsolutionsItslUtilsConstantsLocationType)[keyof typeof ItsolutionsItslUtilsConstantsLocationType];
