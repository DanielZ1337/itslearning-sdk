/**
 * A simplified structure to represent a person (user) in itslearning.
 */
export type ItslearningRestApiEntitiesPersonSimple = {
	/** The unique id for the person, in scope of a site (itslearning customer). */
	PersonId: number;
	/** The person's first name. It can only be used when first name is displayed without last name. Otherwise must be used. */
	FirstName: string;
	/** The person's last name. It can only be used when last name is displayed without first name. Otherwise must be used. */
	LastName: string;
	/** The person's full name formatted according to regional settings of a site. */
	FullName: string;
	/** The url to view the person's profile in itslearning. */
	ProfileUrl: string;
	/** Additional information about the person. This can be context sensitive. For example when using the rest api method for message recipients search, this field can contain extra information about the person, that helps the user distinguish between persons with identical names. */
	AddttionalInfo: string;
	/** The absolute URL to the person's profile image. This can be null or empty if the person does not have a profile image. */
	ProfileImageUrl: string;
	/** The absolute URL to the person's small profile image. This can be null or empty if the person does not have a profile image. */
	ProfileImageUrlSmall: string;
};
