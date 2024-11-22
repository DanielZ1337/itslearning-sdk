import type { ItslearningRestApiEntitiesNotificationType } from "./Itslearning.RestApi.Entities.NotificationType";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";

export type ItslearningRestApiEntitiesNotification = {
	NotificationId: number;
	Text: string;
	PublishedDate: Date;
	PublishedBy: ItslearningRestApiEntitiesPersonSimple;
	Type: ItslearningRestApiEntitiesNotificationType;
	Url: string;
	ContentUrl: string;
	IsRead: boolean;
	IsAnonymous: boolean;
};
