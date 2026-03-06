import type { ItslearningRestApiEntitiesElementType } from "./Itslearning.RestApi.Entities.ElementType";
import type { ItslearningRestApiEntitiesLightBulletinsLightBulletinV2 } from "./Itslearning.RestApi.Entities.LightBulletins.LightBulletinV2";
import type { ItslearningRestApiEntitiesLocationType } from "./Itslearning.RestApi.Entities.LocationType";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";

/**
 * Represents data for a single item in stream feed.
 */
export type ItslearningRestApiEntitiesStreamItemV2 = {
	/**
	 * The unique identifier for the stream item, which is the same as the notification item ID, scoped to a site (itslearning customer).
	 */
	NotificationId: number;
	/**
	 * Descriptive text for the stream item.
	 */
	Text: string;
	/**
	 * The project or course title associated with the item.
	 */
	LocationTitle: string;
	/**
	 * Date and time when the news feed item was published, in UTC timezone.
	 */
	PublishedDate: Date;
	/**
	 * The person who published the stream item.
	 */
	PublishedBy: ItslearningRestApiEntitiesPersonSimple;
	/**
	 * URL to the location in itslearning connected to the notification.
	 */
	Url: string;
	/**
	 * URL to the location in itslearning connected to the notification that opens without the master page.
	 */
	ContentUrl: string;
	/**
	 * URL to the icon used by itslearning for the stream item.
	 */
	IconUrl: string;
	/**
	 * Related light bulletin, if the current stream item is bulletin-related.
	 */
	LightBulletin: ItslearningRestApiEntitiesLightBulletinsLightBulletinV2;
	/**
	 * Identifier of the related element. If multiple elements are related, fetch them separately and use ElementsCount to get the exact count.
	 */
	ElementId: number;
	/**
	 * Type of the related element. Will be Unknown if not element-related. If multiple elements are related, fetch them separately and use ElementsCount to get the exact count.
	 */
	ElementType: ItslearningRestApiEntitiesElementType;
	/**
	 * Identifier of the learning tool (e.g., Assignment extension, test extension). Zero (0) for native itslearning elements. If multiple elements are related, fetch them separately and use ElementsCount to get the exact count.
	 */
	LearningToolId: number;
	/**
	 * @deprecated Use ElementsCount instead. Indicates whether the notification is about operations on multiple elements.
	 */
	HasMoreElements: boolean;
	/**
	 * The count of elements related to this notification.
	 */
	ElementsCount: number;
	/**
	 * The location type associated with the stream item.
	 */
	LocationType: ItslearningRestApiEntitiesLocationType;
	/**
	 * The location identifier associated with the stream item.
	 */
	LocationId: number;
};
