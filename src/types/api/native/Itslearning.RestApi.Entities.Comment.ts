import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple.ts";

/**
 * The class contains data model of user comment
 */
export type ItslearningRestApiEntitiesComment = {
	/** Comment identifier. */
	Id: number;
	/** The person who created the comment. */
	Author: ItslearningRestApiEntitiesPersonSimple;
	/** Text message. */
	CommentText: string;
	/** true if it's allowed to edit the comment. Always true if current person is an author of the comment. */
	AllowEditComment: boolean;
	/** true if it's allowed to delete the comment. */
	AllowDeleteComment: boolean;
	/** Date time in UTC when the comment was created. */
	CreatedDateTime: Date;
	/** true if the comment has been read by current person. */
	IsRead: boolean;
};
