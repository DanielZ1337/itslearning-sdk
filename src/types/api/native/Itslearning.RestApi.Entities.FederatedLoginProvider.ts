import type { ItslearningRestApiEntitiesLogoutType } from "./Itslearning.RestApi.Entities.LogoutType";

export type ItslearningRestApiEntitiesFederatedLoginProvider = {
	Id: number;
	Name: string;
	IconUrl: string;
	OpenInExternalBrowser: boolean;
	ButtonText: string;
	LogoutType: ItslearningRestApiEntitiesLogoutType;
};
