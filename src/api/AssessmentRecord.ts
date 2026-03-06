import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesAssessmentRecordAssessmentRecordPerson } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.AssessmentRecord.AssessmentRecordPerson";
import type { ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordElements } from "../types/api/native/Itslearning.RestApi.Entities.AssessmentRecord.AssessmentRecordElements";
import { createSearchParams } from "../utils/search-params";

/**
 * AssessmentRecordAPI
 *
 * Overview:
 * Endpoint for Assessment Record API.
 * Provides access to gradebook/assessment data for a course.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Courses`.
 */
export class AssessmentRecordAPI extends Manager {
	/**
	 * Returns the assessment record elements (gradebook columns) for a course.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @param termId - Optional term identifier to filter by.
	 * @returns Assessment record elements with scale info.
	 */
	public async getAssessmentRecordElements(
		courseId: number,
		termId?: number,
	): Promise<ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordElements> {
		const params = createSearchParams({ termId });
		return this.http.get(
			`/restapi/personal/course/${courseId}/assessmentrecord/assessmentrecordelements/v1?${params}`,
		);
	}

	/**
	 * Returns a paginated list of persons with their assessment values for a course.
	 *
	 * @param courseId - The course identifier.
	 * @param options - Filtering and paging options.
	 * @returns Paginated list of assessment record persons.
	 */
	public async getAssessmentRecordPersonItems(
		courseId: number,
		options?: {
			termId?: number;
			pageIndex?: number;
			pageSize?: number;
			searchText?: string;
			groupIds?: number[];
			includePersonsNotInAnyGroups?: boolean;
		},
	): Promise<EntityListOfItslearningRestApiEntitiesAssessmentRecordAssessmentRecordPerson> {
		const params = createSearchParams({
			termId: options?.termId,
			"paging.PageIndex": options?.pageIndex,
			"paging.PageSize": options?.pageSize,
			searchText: options?.searchText,
			"groupIds[]": options?.groupIds,
			includePersonsNotInAnyGroups: options?.includePersonsNotInAnyGroups,
		});
		return this.http.get(
			`/restapi/personal/course/${courseId}/assessmentrecord/assessmentrecordpersonitems/v1?${params}`,
		);
	}

	/**
	 * Sets a grade assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 * @param assessmentId - The assessment identifier.
	 * @param assessmentItemId - The assessment item identifier.
	 */
	public async setPersonAssessmentGrade(
		courseId: number,
		gradebookItemId: number,
		personId: number,
		assessmentId: number,
		assessmentItemId: number,
	): Promise<void> {
		const params = createSearchParams({
			gradebookItemId,
			personId,
			assessmentId,
			assessmentItemId,
		});
		return this.http.put(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentgrade/v1?${params}`,
			undefined,
		);
	}

	/**
	 * Removes a grade assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 */
	public async deletePersonAssessmentGrade(
		courseId: number,
		gradebookItemId: number,
		personId: number,
	): Promise<void> {
		const params = createSearchParams({ gradebookItemId, personId });
		return this.http.delete(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentgrade/v1?${params}`,
		);
	}

	/**
	 * Sets a numeric score assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 * @param score - The numeric score to set.
	 */
	public async setPersonAssessmentScore(
		courseId: number,
		gradebookItemId: number,
		personId: number,
		score: number,
	): Promise<void> {
		const params = createSearchParams({ gradebookItemId, personId, score });
		return this.http.put(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentscore/v1?${params}`,
			undefined,
		);
	}

	/**
	 * Removes a numeric score assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 */
	public async deletePersonAssessmentScore(
		courseId: number,
		gradebookItemId: number,
		personId: number,
	): Promise<void> {
		const params = createSearchParams({ gradebookItemId, personId });
		return this.http.delete(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentscore/v1?${params}`,
		);
	}

	/**
	 * Sets an overwritten grade assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 * @param oldAssessmentItemId - The previous assessment item identifier.
	 * @param assessmentId - The new assessment identifier.
	 * @param overwrittenAssessmentItemId - The overwritten assessment item identifier.
	 */
	public async setPersonAssessmentOverwrittenGrade(
		courseId: number,
		gradebookItemId: number,
		personId: number,
		oldAssessmentItemId: number,
		assessmentId: number,
		overwrittenAssessmentItemId: number,
	): Promise<void> {
		const params = createSearchParams({
			gradebookItemId,
			personId,
			oldAssessmentItemId,
			assessmentId,
			overwrittenAssessmentItemId,
		});
		return this.http.put(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentoverwrittengrade/v1?${params}`,
			undefined,
		);
	}

	/**
	 * Sets an overwritten score assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 * @param overwrittenScore - The overwritten score value.
	 * @param oldScore - The old score value.
	 */
	public async setPersonAssessmentOverwrittenScore(
		courseId: number,
		gradebookItemId: number,
		personId: number,
		overwrittenScore: number,
		oldScore: number,
	): Promise<void> {
		const params = createSearchParams({
			gradebookItemId,
			personId,
			overwrittenScore,
			oldScore,
		});
		return this.http.put(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentoverwrittenscore/v1?${params}`,
			undefined,
		);
	}

	/**
	 * Clears the overwritten assessment for a person on a gradebook item.
	 *
	 * @param courseId - The course identifier.
	 * @param gradebookItemId - The gradebook item identifier.
	 * @param personId - The person identifier.
	 */
	public async clearPersonAssessmentOverwritten(
		courseId: number,
		gradebookItemId: number,
		personId: number,
	): Promise<void> {
		const params = createSearchParams({ gradebookItemId, personId });
		return this.http.put(
			`/restapi/personal/course/${courseId}/assessmentrecord/personassessmentoverwritten/v1?${params}`,
			undefined,
		);
	}

	/**
	 * Gets the setup for the assessment record page, including language, settings, paths, and permissions.
	 *
	 * @param courseId - The unique identifier of the course.
	 * @returns A promise that resolves to the assessment record page setup.
	 */
	public async getSettings(courseId: number): Promise<unknown> {
		return this.http.get(
			`/restapi/personal/course/${courseId}/assessmentrecord/settings/v1`,
		);
	}
}
