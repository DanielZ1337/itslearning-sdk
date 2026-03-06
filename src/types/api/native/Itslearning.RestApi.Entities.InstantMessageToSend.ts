export type ItslearningRestApiEntitiesInstantMessageToSend = {
	/** CourseId to send instant message to. */
	CourseId?: number;
	/** ProjectId to send instant message to. */
	ProjectId?: number;
	/** Guids of files already uploaded to temporary file repo storage. */
	FileId?: string[];
	/**
	 * PersonIds to send instant message to. A new thread will be created if the persons
	 * don't have an existing thread already. The ToPersonIds or the InstantMessageThreadId
	 * or CourseIds or ProjectIds need to have a valid value.
	 */
	ToPersonIds?: number[];
	/** The thread to send to; if null or zero a new thread is assumed. */
	InstantMessageThreadId?: number;
	/** The text of the message. */
	Text: string;
	/** Gets whether a message to multiple recipients should be sent as individual messages. */
	SendAsIndividualMessages?: boolean;
};
