/**
 * Represents a file attachment included in a message or other entity.
 */
export type ItslearningRestApiEntitiesAttachment = {
	/**
	 * The unique identifier of the file that was attached to the message.
	 */
	FileId: number;
	/**
	 * The URL to access the attached file. An access token must be added to the request to gain access to the file.
	 */
	Url: string;
	/**
	 * The display name of the file attached to the message.
	 */
	DisplayName: string;
	/**
	 * The size of the attachment in kilobytes.
	 */
	FileSizeInKiloBytes: number;
};
