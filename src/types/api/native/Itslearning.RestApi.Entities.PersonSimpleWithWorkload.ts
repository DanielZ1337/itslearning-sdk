import type { ItslearningRestApiEntitiesWorkload } from "./Itslearning.RestApi.Entities.Workload";

/**
 * A simplified structure to represent a person in itslearning together with their workload
 */
export type ItslearningRestApiEntitiesPersonSimpleWithWorkload = {
	/**
	 * The workload information for this person.
	 */
	Workload: ItslearningRestApiEntitiesWorkload;
	/**
	 * The unique identifier for the person, scoped to a site (itslearning customer).
	 */
	PersonId: number;
	/**
	 * The person's first name. Should only be used when the first name is displayed alone, without the last name.
	 */
	FirstName: string;
	/**
	 * The person's last name. Should only be used when the last name is displayed alone, without the first name.
	 */
	LastName: string;
	/**
	 * The person's full name, formatted according to the site's regional settings.
	 */
	FullName: string;
	/**
	 * The URL to view the person's profile in itslearning.
	 */
	ProfileUrl: string;
	/**
	 * Additional information about the person. This can be context-sensitive and help distinguish between persons with identical names.
	 */
	AdditionalInfo: string;
	/**
	 * The absolute URL to the person's profile image. May be null or empty if no profile image exists.
	 */
	ProfileImageUrl: string;
	/**
	 * The absolute URL to a small version of the person's profile image. May be null or empty if no profile image exists.
	 */
	ProfileImageUrlSmall: string;
};
