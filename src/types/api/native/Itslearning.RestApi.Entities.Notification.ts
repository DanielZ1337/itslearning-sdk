import type { ItslearningRestApiEntitiesNotificationType } from "./Itslearning.RestApi.Entities.NotificationType";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";

/**
 * Represents a notification in itslearning.
 */
export type ItslearningRestApiEntitiesNotification = {
	/** The unique id for for the notification, in scope of a site (itslearning customer). */
	NotificationId: number;
	/** Descriptive text for the notification */
	Text: string;
	/** Date time when the notification was published. Time zone is UTC. */
	PublishedDate: Date;
	/** The person who published the notification. */
	PublishedBy: ItslearningRestApiEntitiesPersonSimple;
	/** The type of notification. */
	Type: ItslearningRestApiEntitiesNotificationType;
	/** Url to the location in itslearning connected to the notification. */
	Url: string;
	/** Url to the location in itslearning connected to the notification that open without master page. */
	ContentUrl: string;
	/** True if the user has read the notification. */
	IsRead: boolean;
	/** True if notification is anonymous */
	IsAnonymous: boolean;
};
