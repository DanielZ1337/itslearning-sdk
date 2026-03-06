/**
 * Represents a simplified hierarchy node in the organisation structure.
 */
export type ItslearningRestApiEntitiesHierarchySimple = {
	/**
	 * The unique identifier for this hierarchy level.
	 */
	HierarchyId: number;
	/**
	 * The identifier of the parent hierarchy level.
	 */
	ParentHierarchyId: number;
	/**
	 * The title of the hierarchy level.
	 */
	Title: string;
	/**
	 * The path of this hierarchy within the hierarchy tree.
	 */
	Path: string;
	/**
	 * The type of the hierarchy (organisation type classification).
	 */
	OrganizationType: number;
	/**
	 * The identifier of the organisation to which this hierarchy belongs.
	 */
	OrganizationHierarchyId: number;
};
