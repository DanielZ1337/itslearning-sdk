export const ItsolutionsItslUtilsConstantsHierarchyRole = {
	None: 0,
	Guest: 1,
	Student: 2,
	Teacher: 3,
	Administrator: 4,
} as const

export type ItsolutionsItslUtilsConstantsHierarchyRole =
	(typeof ItsolutionsItslUtilsConstantsHierarchyRole)[keyof typeof ItsolutionsItslUtilsConstantsHierarchyRole]
