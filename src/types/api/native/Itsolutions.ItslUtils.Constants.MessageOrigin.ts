export const ItsolutionsItslUtilsConstantsMessageOrigin = {
	Page: 0,
	ContentBlock: 1,
	DropDown: 2,
} as const;

export type ItsolutionsItslUtilsConstantsMessageOrigin =
	(typeof ItsolutionsItslUtilsConstantsMessageOrigin)[keyof typeof ItsolutionsItslUtilsConstantsMessageOrigin];
