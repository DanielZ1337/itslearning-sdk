/**
 * Represents workload information for a person in the system.
 */
export type ItslearningRestApiEntitiesWorkload = {
	/**
	 * The number of assignments finished by this person.
	 */
	FinishedAssignments: number;
	/**
	 * The total number of assignments available to this person.
	 */
	TotalAvailableAssignments: number;
	/**
	 * The number of workload minutes finished by this person.
	 */
	FinishedWorkload: number;
	/**
	 * The total number of workload minutes available to this person.
	 */
	TotalAvailableWorkload: number;
};
