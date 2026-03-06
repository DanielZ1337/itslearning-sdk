import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesLearningObjectiveRepositorySubjectLabel } from "../types/api/native/Itslearning.RestApi.Entities.LearningObjectiveRepository.SubjectLabel";

/**
 * LearningObjectiveRepositoryAPI
 *
 * Overview:
 * Endpoint for Learning Objective Repository API.
 * Provides access to learning objective subjects by country.
 *
 * Secured with OAuth2.
 */
export class LearningObjectiveRepositoryAPI extends Manager {
	/**
	 * Gets learning objective subjects for a country.
	 *
	 * @param countryCode - The ISO country code (e.g. "NO", "SE", "DK").
	 * @returns A promise that resolves to a list of subject labels for the given country.
	 */
	public async getSubjectsByCountry(
		countryCode: string,
	): Promise<
		Array<ItslearningRestApiEntitiesLearningObjectiveRepositorySubjectLabel>
	> {
		return this.http.get(
			`/restapi/learningobjectiverepository/subjects/${countryCode}/v1`,
		);
	}
}
