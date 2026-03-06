export const ItslearningRestApiEntitiesPersonalCourseFileErrorCode = {
	/** Invalid file extension */
	InvalidFileExtension: 1,
	/** Invalid uploaded content */
	InvalidUploadedContent: 2,
	/** File size is too big */
	FileSizeIsTooBig: 3,
	/** Content of file exceeds quota */
	ContentSizeExceedsQuota: 4,
	/** The folder structure is empty */
	StructureIsEmpty: 5,
	/** The file is empty */
	FileIsEmpty: 6,
	/** The file is not a zip file */
	NotZipFile: 7,
	/** The zip file is corrupted */
	ZipFileIsCorrupted: 8,
	/** The zip file is password protected */
	ZipFileIsPasswordProtected: 9,
	/** The file name contains invalid characters */
	FileNameContainsInvalidCharacters: 10,
	/** The first part of the file name is illegal */
	IllegalFirstPartOfFileName: 11,
	/** The parent folder name is invalid */
	InvalidParentFolderName: 12,
	/** The folder name is illegal */
	InvalidFolderName: 13,
	/** The file name is too long */
	FileNameTooLong: 14,
	/** The folder name is too long */
	FolderNameTooLong: 15,
	/** The path is too long */
	PathTooLong: 16,
	/** Invalid element type */
	InvalidElementType: 17,
	/** Too many zip entries */
	TooManyZipEntries: 18,
	/** Unexpected error */
	UnexpectedError: 19,
	/** Invalid customer id */
	InvalidCustomerId: 20,
	/** Invalid person id */
	InvalidPersonId: 21,
	/** Invalid parent folder id */
	InvalidParentFolderId: 22,
	/** File name is empty */
	FileNameIsEmpty: 23,
	/** Invalid file identifier */
	InvalidFileIdentifier: 24,
	/** Invalid file signature */
	InvalidFileSignature: 25,
	/** The view url is empty */
	ViewUrlIsEmpty: 26,
	/** Invalid folder */
	InvalidFolder: 27,
	/** Invalid file */
	InvalidFile: 28,
	/** Invalid cloud id */
	InvalidCloudId: 29,
	/** Invalid OAuth user */
	InvalidOAuthUser: 30,
} as const;

export type ItslearningRestApiEntitiesPersonalCourseFileErrorCode =
	(typeof ItslearningRestApiEntitiesPersonalCourseFileErrorCode)[keyof typeof ItslearningRestApiEntitiesPersonalCourseFileErrorCode];
