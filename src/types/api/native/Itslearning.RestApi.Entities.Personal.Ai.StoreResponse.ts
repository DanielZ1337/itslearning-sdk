export type ItslearningRestApiEntitiesPersonalAiStoreFileInfo = {
	FileId: string;
	Status: string;
	FileName: string;
	Size: number;
};

export type ItslearningRestApiEntitiesPersonalAiCreateStoreResponse = {
	StoreToken: string;
	Files: Array<ItslearningRestApiEntitiesPersonalAiStoreFileInfo>;
};

export type ItslearningRestApiEntitiesPersonalAiStoreStatusResponse = {
	StoreToken: string;
	AllFilesReady: boolean;
	Files: Array<ItslearningRestApiEntitiesPersonalAiStoreFileInfo>;
};
