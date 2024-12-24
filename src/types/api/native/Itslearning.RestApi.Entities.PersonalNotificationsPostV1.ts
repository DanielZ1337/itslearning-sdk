import type { ItslearningRestApiEntitiesTypedId } from "./Itslearning.RestApi.Entities.TypedId";

export type ItslearningRestApiEntitiesPersonalNotificationsPostV1 = {
	Message: string;
	LocalizedMessages: Array<Record<string, string>>;
	NotificationType: string;
	Object: ItslearningRestApiEntitiesTypedId;
	Locations: Array<ItslearningRestApiEntitiesTypedId>;
	Url: string;
	ToPersonIds: Array<number>;
};
