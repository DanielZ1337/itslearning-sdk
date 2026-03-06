import type { ItslearningRestApiEntitiesInstantMessageParticipant } from "./Itslearning.RestApi.Entities.InstantMessageParticipant.ts";

/**
 * Represents a instance of an Instant Message
 */
export type ItslearningRestApiEntitiesInstantMessage = {
	/** The unique id for the message, in scope of a site (itslearning customer) */
	MessageId: number;
	/** Obsolete use InstantMessageThreadId instead */
	MessageThreadId: number;
	/** The unique id for the thread in scope of a site */
	InstantMessageThreadId: number;
	/** Recipients for new message threads - does not need to be filled if not used when posting a new thread */
	MessageThreadParticipants: ItslearningRestApiEntitiesInstantMessageParticipant[];
	/** DateTime when the message was created */
	Created: Date;
	/** Formatted DateTime when the message was created */
	CreatedFormatted: string;
	/** How long ago the message was created */
	CreatedRelative: string;
	/** How long ago the message was edited */
	EditedRelative: string;
	/** Id of the author of the message */
	CreatedBy: number;
	/** Name of the author of the message */
	CreatedByName: string;
	/** Home organization of the author of the message. */
	HomeOrganization: string;
	/** Url to the avatar of the author */
	CreatedByAvatar: string;
	/** The message text */
	Text: string;
	/** The url to the attached file */
	AttachmentUrl: string;
	/** File name of the attached file */
	AttachmentName: string;
	/** The link to combine together with the message text */
	Link: string;
	/** Link title to create a friendly name for the link */
	LinkTitle: string;
	/** The target to the link eg. _blank */
	LinkTarget: string;
	/** Is the message a system message */
	IsSystemMessage: boolean;
	/** Is the message deleted */
	IsDeleted: boolean;
	/** Id of the person, who deleted this message. */
	DeletedBy: number;
	/** If the current user is allowed to delete the message */
	CanDelete: boolean;
	/** Is the message edited */
	IsEdited: boolean;
	/** If the current user is allowed to edit the message */
	CanEdit: boolean;
	/** If this message has been marked as starred by the user */
	IsStarred: boolean;
	/** Flag used for messages we should not update the UI for */
	IsSilent: boolean;
	/** This message was reported as abusive by the current user. */
	IsAbuse: boolean;
	/** The message is used to share another message. */
	HasShared: boolean;
	/** The message is used to reply to another message. */
	HasRepliedTo: boolean;
	/** The message is an abuse report. It has a child message that was marked as abusive message. */
	HasAbuseReported: boolean;
	/** The message is an report for abusive thread. */
	HasAbuseThreadReported: boolean;
	/** The origin message for child message. */
	OriginInstantMessage: ItslearningRestApiEntitiesInstantMessage;
	/** The origin instant message thread identifier. */
	OriginInstantMessageThreadId: number;
	/** Id of the person, who delete original instant message thread. */
	OriginInstantMessageThreadDeletedBy: number;
	/** The origin instant message thread name. */
	OriginInstantMessageThreadName: string;
	/** The child message is shared by the message. */
	ChildMessage: ItslearningRestApiEntitiesInstantMessage;
	/** Additional heading to display. Extra information about where the message had its origin if a message was shared or replied to. */
	AdditionalHeading: string;
	/** This message was sent as broadcast mass message. */
	IsBroadcastMassMessage: boolean;
	/** Defines that child message has been deleted permanently */
	IsChildMessageDeletedPermanently: boolean;
	/** DateTime when the message was created converted to user's timezone */
	CreatedLocal: Date;
	/** Time when the message was created in user's timezone. */
	CreatedLocalTimeStamp: string;
	/** Date when the message was created in user's timezone formatted considering culture. */
	CreatedLocalDateStamp: string;
	/** First name of the author. */
	CreatedByShortName: string;
	/** Date when the message was created in user's timezone formatted as short numeric date without year. */
	CreatedLocalShortNumericDate: string;
};
