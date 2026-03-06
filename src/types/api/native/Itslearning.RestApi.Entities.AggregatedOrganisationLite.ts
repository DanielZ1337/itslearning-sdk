/**
 * Represents a site or school.
 */
export type ItslearningRestApiEntitiesAggregatedOrganisationLite = {
	/** The customer id for the site. */
	CustomerId: number;
	/** The site name. */
	SiteName: string;
	/** The school name. Only set if IsSite=false. */
	SchoolName: string;
	/** The school id (hierarchy id). Will be 0 for sites. */
	HierarchyId: number;
	/** True if Organisation is of type Site. False if Organisation is of type School. */
	IsSite: boolean;
};
