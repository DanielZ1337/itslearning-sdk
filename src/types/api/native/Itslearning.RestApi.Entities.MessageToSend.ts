export type ItslearningRestApiEntitiesMessageToSend = {
	/** PersonIds in the To field. */
	ToPersonIds: number[];
	/** PersonIds in the Bcc field. */
	BccPersonIds?: number[];
	/** If set, the message is a reply to this MessageId. */
	ReplyToMessageId?: number;
	/** If set, the message is a forward of this MessageId. */
	ForwardToMessageId?: number;
	/** The subject of the message. */
	Subject: string;
	/** The text of the message. */
	Text: string;
};
