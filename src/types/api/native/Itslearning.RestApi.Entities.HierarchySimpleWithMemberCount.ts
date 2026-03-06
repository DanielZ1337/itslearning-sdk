import type { ItslearningRestApiEntitiesHierarchySimple } from "./Itslearning.RestApi.Entities.HierarchySimple";
/**
 * Entity for get information about a hierarchy
 */
export type ItslearningRestApiEntitiesHierarchySimpleWithMemberCount =
	ItslearningRestApiEntitiesHierarchySimple & {
		/**
		 * The number of members in this hierarchy level.
		 */
		NumberOfMembers: number;
		/**
		 * Indicates whether this hierarchy level has child hierarchies.
		 */
		HasChildren: boolean;
		/**
		 * Indicates whether this hierarchy can be synchronised with external systems.
		 */
		Synchable: boolean;
		/**
		 * Indicates whether this hierarchy can be inspected or audited.
		 */
		Inspectable: boolean;
	};
