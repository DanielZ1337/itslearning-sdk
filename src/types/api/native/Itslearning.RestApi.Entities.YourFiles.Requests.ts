import type { ItslearningRestApiEntitiesYourFilesDuplicateBehaviour } from "./Itslearning.RestApi.Entities.YourFiles.DuplicateBehaviour";

export type ItslearningRestApiEntitiesYourFilesCopyRequest = {
	ParentFolderId: number;
	Ids: Array<number>;
	DuplicateBehaviour: ItslearningRestApiEntitiesYourFilesDuplicateBehaviour;
};

export type ItslearningRestApiEntitiesYourFilesMoveRequest = {
	ParentFolderId: number;
	Ids: Array<number>;
};

export type ItslearningRestApiEntitiesYourFilesUpdateRequest = {
	ParentFolderId: number;
	Name: string;
};

export type ItslearningRestApiEntitiesYourFilesUploadedFileModel = {
	Id: string;
	Name: string;
	MimeType: string;
	SignedFileRepoId: string;
	Signature: string;
	Error: string;
};

export type ItslearningRestApiEntitiesYourFilesZipFileJobModel = {
	JobId: number;
	FileRepoId: string;
	ZipFileName: string;
	Created: string;
	Status: string;
	DownloadUrl: string;
};

export type ItslearningRestApiEntitiesYourFilesZipRequest = {
	FileIds: Array<number>;
	FolderIds: Array<number>;
};
