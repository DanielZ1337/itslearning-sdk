export const ItsolutionsItslUtilsConstantsContentAreaFilterType = {
	All: 0,
	Favorites: 1,
	NoFavorites: 2,
} as const;

export type ItsolutionsItslUtilsConstantsContentAreaFilterType =
	(typeof ItsolutionsItslUtilsConstantsContentAreaFilterType)[keyof typeof ItsolutionsItslUtilsConstantsContentAreaFilterType];
