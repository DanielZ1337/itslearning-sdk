import type { ItslearningRestApiEntitiesAttachment } from "./Itslearning.RestApi.Entities.Attachment";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";

export type ItslearningRestApiEntitiesMessage = {
	/** The message text (can contain html). */
	Text: string;
	/** The list of users this message was sent to. */
	To: ItslearningRestApiEntitiesPersonSimple[];
	/** A list of attachments to this message. */
	Attachments: ItslearningRestApiEntitiesAttachment[];
	/** The unique id for the message, in scope of a site (itslearning customer). */
	MessageId: number;
	/** Basic details of who sent the message. */
	From: ItslearningRestApiEntitiesPersonSimple;
	/** When the message was received. Time zone is UTC. */
	DateReceived: Date;
	/** The subject of the message. */
	Subject: string;
	/** The preview text (the first part of the message, stripped for html and html entities). */
	PreviewText: string;
	/** The URL of the complete message. */
	MessageUrl: string;
	/** The content URL of the complete message. */
	ContentUrl: string;
	/** True if this message has any attachments. */
	HasAttachments: boolean;
	/** True if this message has been read. */
	IsRead: boolean;
	/** True if this message has been forwarded. */
	IsForwarded: boolean;
	/** The time and date the last time this message was forwarded. */
	LastForwardedDateTime: Date | null;
	/** True if this message has been replied. */
	IsReplied: boolean;
	/** The time and date the last time this message was replied. */
	LastRepliedDateTime: Date | null;
};
