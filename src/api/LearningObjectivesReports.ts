import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.LearningObjectiveProgressReport.ReportAssessmentStatus";
import type { EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.LearningObjectiveProgressReport.ReportSubject";
import type { ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReport } from "../types/api/native/Itslearning.RestApi.Entities.CriteriaAssessmentReport.CriteriaAssessmentReport";
import type { ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport } from "../types/api/native/Itslearning.RestApi.Entities.LearningObjectiveProgressReport.AggregatedReport";
import { createSearchParams } from "../utils/search-params";

/**
 * LearningObjectivesReportsAPI
 *
 * Overview:
 * Endpoint for Learning Objectives Progress Report API.
 * Provides access to learning objective progress reports and criteria assessments.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Courses`.
 */
export class LearningObjectivesReportsAPI extends Manager {
	/**
	 * Returns aggregated learning objective progress report for the current user.
	 *
	 * @param options - Filtering options.
	 * @returns Aggregated progress report.
	 */
	public async getProgressReport(options?: {
		subjectId?: number;
		personSyncKey?: string;
		fromDateTime?: string;
		toDateTime?: string;
		statuses?: string[];
	}): Promise<ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport> {
		const params = createSearchParams({
			subjectId: options?.subjectId,
			personSyncKey: options?.personSyncKey,
			fromDateTime: options?.fromDateTime,
			toDateTime: options?.toDateTime,
			statuses: options?.statuses,
		});
		return this.http.get(`/restapi/personal/progressreport/v1?${params}`);
	}

	/**
	 * Returns aggregated learning objective progress report for a specific person.
	 *
	 * @param personId - The person identifier.
	 * @param options - Filtering options.
	 * @returns Aggregated progress report for the person.
	 */
	public async getProgressReportForPerson(
		personId: number,
		options?: {
			subjectId?: number;
			fromDateTime?: string;
			toDateTime?: string;
			statuses?: string[];
		},
	): Promise<ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport> {
		const params = createSearchParams({
			subjectId: options?.subjectId,
			fromDateTime: options?.fromDateTime,
			toDateTime: options?.toDateTime,
			statuses: options?.statuses,
		});
		return this.http.get(
			`/restapi/personal/progressreport/${personId}/v1?${params}`,
		);
	}

	/**
	 * Returns available report subjects for the current user.
	 *
	 * @param options - Filtering options.
	 * @returns List of report subjects.
	 */
	public async getReportSubjects(options?: {
		personSyncKey?: string;
		fromDateTime?: string;
		toDateTime?: string;
		subjectIds?: number[];
	}): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject> {
		const params = createSearchParams({
			personSyncKey: options?.personSyncKey,
			fromDateTime: options?.fromDateTime,
			toDateTime: options?.toDateTime,
			subjectIds: options?.subjectIds,
		});
		return this.http.get(
			`/restapi/personal/progressreport/reportsubjects/v1?${params}`,
		);
	}

	/**
	 * Returns available report subjects for a specific person.
	 *
	 * @param personId - The person identifier.
	 * @param options - Filtering options.
	 * @returns List of report subjects for the person.
	 */
	public async getReportSubjectsForPerson(
		personId: number,
		options?: {
			fromDateTime?: string;
			toDateTime?: string;
			subjectIds?: number[];
		},
	): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject> {
		const params = createSearchParams({
			fromDateTime: options?.fromDateTime,
			toDateTime: options?.toDateTime,
			subjectIds: options?.subjectIds,
		});
		return this.http.get(
			`/restapi/personal/progressreport/reportsubjects/${personId}/v1?${params}`,
		);
	}

	/**
	 * Returns available assessment statuses for the current user.
	 *
	 * @param personSyncKey - Optional sync key to identify person.
	 * @returns List of report assessment statuses.
	 */
	public async getReportStatuses(
		personSyncKey?: string,
	): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus> {
		const params = createSearchParams({ personSyncKey });
		return this.http.get(
			`/restapi/personal/progressreport/statuses/v1?${params}`,
		);
	}

	/**
	 * Returns available assessment statuses for a specific person.
	 *
	 * @param personId - The person identifier.
	 * @returns List of report assessment statuses for the person.
	 */
	public async getReportStatusesForPerson(
		personId: number,
	): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus> {
		return this.http.get(
			`/restapi/personal/progressreport/statuses/${personId}/v1`,
		);
	}

	/**
	 * Returns criteria assessment report for a specific person.
	 *
	 * @param personId - The person identifier.
	 * @param options - Filtering options.
	 * @returns Criteria assessment report.
	 */
	public async getCriteriaAssessmentReport(
		personId: number,
		options?: {
			courseId?: number;
			criteriaIds?: number[];
			fromDateTime?: string;
			toDateTime?: string;
		},
	): Promise<ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReport> {
		const params = createSearchParams({
			courseId: options?.courseId,
			criteriaIds: options?.criteriaIds,
			fromDateTime: options?.fromDateTime,
			toDateTime: options?.toDateTime,
		});
		return this.http.get(
			`/restapi/personal/progressreport/criteria/${personId}/v1?${params}`,
		);
	}
}
