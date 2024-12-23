import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesFollowUpTask } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.FollowUpTask";
import type { EntityListOfItslearningRestApiEntitiesPersonSimple } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.PersonSimple";
import type { EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Personal.CalendarEvent";
import type { EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Personal.Course.CourseParticipantUnenrolled";
import type { ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType } from "../types/api/native/Itslearning.Platform.RestApi.Sdk.Common.Entities.LearningToolType";
import type { ItslearningRestApiEntitiesCourseParticipantToAdd } from "../types/api/native/Itslearning.RestApi.Entities.CourseParticipantToAdd";
import type { ItslearningRestApiEntitiesFollowUpTask } from "../types/api/native/Itslearning.RestApi.Entities.FollowUpTask";
import type { ItslearningRestApiEntitiesPersonalCourseCourseApplicant } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Course.CourseApplicant";
import type { ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Course.CourseFolderDetails";
import type { ItsolutionsItslUtilsConstantsElementType } from "../types/api/native/Itsolutions.ItslUtils.Constants.ElementType";
import type { ItslearningRestApiEntitiesPersonCourseCardData } from "../types/api/native/Itslearning.RestApi.Entities.PersonCourseCardData";
import type { EntityListOfItslearningRestApiEntitiesPersonCourseCardData } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.PersonCourseCardData";
import { ItsolutionsItslUtilsConstantsContentAreaFilterType } from "../types/api/native/Itsolutions.ItslUtils.Constants.ContentAreaFilterType";
import { createSearchParams } from "../utils/search-params";
import type { ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove } from "../types/api/native/Itslearning.RestApi.Entities.CourseParticipants.CourseParticipantsToRemove";
import type { EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Personal.Course.CourseParticipant";
import type { SystemNetHttpHttpResponseMessage } from "../types/api/native/System.Net.Http.HttpResponseMessage";
import type { ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Course.PageSetup.CourseProfile";
import type { ItslearningRestApiEntitiesPersonalCourseCourseResource } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Course.CourseResource";
import type { EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Personal.Course.CourseResource";
import { ItslearningRestApiEntitiesTaskStatusFilter } from "../types/api/native/Itslearning.RestApi.Entities.TaskStatusFilter";
import { ItslearningRestApiEntitiesTaskDeadlineFilter } from "../types/api/native/Itslearning.RestApi.Entities.TaskDeadlineFilter";
import type { EntityListOfItslearningRestApiEntitiesTask } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Task";
import type { ItslearningRestApiEntitiesCourse } from "../types/api/native/Itslearning.RestApi.Entities.Course";
import type { ItsolutionsItslUtilsConstantsLocationType } from "../types/api/native/Itsolutions.ItslUtils.Constants.LocationType";
import type { EntityListOfItslearningRestApiEntitiesCourse } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.Course";
import type { EntityListOfItslearningRestApiEntitiesElementLink } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.ElementLink";
import type { ItslearningRestApiEntitiesPersonalCourseCourseResourceWithRole } from "../types/api/native/Itslearning.RestApi.Entities.Personal.Course.CourseResourceWithRole";
import type { EntityListOfItslearningRestApiEntitiesPersonCourse } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.PersonCourse";
import type { ItslearningRestApiEntitiesStreamItemV2 } from "../types/api/native/Itslearning.RestApi.Entities.StreamItemV2";
import type { EntityListOfItslearningRestApiEntitiesStreamItemV2 } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.StreamItemV2";

/**
 * CoursesAPI
 *
 * Overview:
 * Endpoint to Courses API.
 * Courses in itslearning are personal and related to the person.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `Courses`.
 */
export class CoursesAPI extends Manager {
  /**
   * Searches for persons to add to a course based on the search text.
   *
   * @param courseId - The unique identifier of the course.
   * @param searchText - The text to search for in participant names or emails.
   * @returns A promise that resolves to a list of participants matching the search criteria.
   */
  public async searchParticipants(
    courseId: number,
    searchText: string,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonSimple> {
    const queryParams = createSearchParams({ searchText });
    return this.http.get(
      `/restapi/personal/courses/${courseId}/addparticipants/search/v1`,
      { params: queryParams },
    );
  }

  /**
   * Adds persons to a course.
   *
   * @param courseId - The unique identifier of the course.
   * @param participants - An array of participant identifiers to add to the course.
   * @returns A promise that resolves when the participants are successfully added.
   */
  public async addParticipants(
    courseId: number,
    participants: Array<ItslearningRestApiEntitiesCourseParticipantToAdd>,
  ): Promise<void> {
    return this.http.post(
      `/restapi/personal/courses/${courseId}/addparticipants/v1`,
      {
        data: participants,
      },
    );
  }

  /**
   * Retrieves the list of applicants for a course.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the list of applicants.
   */
  public async getApplicants(
    courseId: number,
  ): Promise<Array<ItslearningRestApiEntitiesPersonalCourseCourseApplicant>> {
    return this.http.get(`/restapi/personal/courses/${courseId}/applicants/v1`);
  }

  /**
   * Retrieves calendar events for a given course within a date range.
   *
   * @param courseId - The unique identifier of the course.
   * @param fromDate - The start date to filter events, in ISO 8601 format.
   * @param toDate - The end date to filter events, in ISO 8601 format.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of events per page (default is 10).
   * @returns A promise that resolves to a paginated list of calendar events.
   */
  public async getCalendarEvents(
    courseId: number,
    fromDate: string | Date,
    toDate: string | Date,
    pageIndex = 0,
    pageSize = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent> {
    const queryParams = createSearchParams({
      fromDate: fromDate,
      toDate: toDate,
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/calendarevents/v1`,
      { params: queryParams },
    );
  }

  /**
   * Changes the role of multiple participants in bulk.
   *
   * @param courseId - The unique identifier of the course.
   * @param roleId - The role identifier to assign to the participants.
   * @param participantIds - An array of participant identifiers whose roles are to be changed.
   * @returns A promise that resolves when the roles are successfully changed.
   */
  public async changeRoleBulk(
    courseId: number,
    roleId: string,
    participantIds: string[],
  ): Promise<unknown> {
    throw new Error("Not implemented");
    // const payload = { participantIds };
    // const queryParams = new URLSearchParams({ roleId });

    // await this.http.post(
    //   `/restapi/personal/courses/${encodeURIComponent(
    //     courseId,
    //   )}/changerole/bulk/v1`,
    //   payload,
    // );
  }

  /**
   * Changes the role of a single participant in a course.
   *
   * @param courseId - The unique identifier of the course.
   * @param participantId - The unique identifier of the participant.
   * @param roleId - The role identifier to assign to the participant.
   * @returns A promise that resolves when the role is successfully changed.
   */
  public async changeParticipantRole(
    courseId: number,
    participantId: string,
    roleId: string,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    // const queryParams = new URLSearchParams({
    //   participantId,
    //   roleId,
    // });

    // await this.http.post(
    //   `/restapi/personal/courses/${encodeURIComponent(
    //     courseId,
    //   )}/changerole/v1`,
    // );
  }

  /**
   * Creates a file element in the course containing the cloud file.
   *
   * @param courseId - The unique identifier of the course.
   * @param folderId - The unique identifier of the folder within the course.
   * @param planId - The plan identifier associated with the file.
   * @param fileData - The data of the file to be uploaded.
   * @returns A promise that resolves to the created file's details.
   *
   * @throws Error if the user does not have access to the course or folder.
   * @throws Error if the course does not exist.
   */
  public async createCloudFile(
    courseId: number,
    folderId: number,
    planId: string,
    fileData: FormData,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    // const queryParams = new URLSearchParams({ planId });

    // const response = await this.http.post(
    //   `/restapi/personal/courses/${encodeURIComponent(
    //     courseId,
    //   )}/folders/${folderId}/file/cloud/v1`,
    //   fileData,
    // );

    // if (response.status === 403) {
    //   throw new Error("Access to the course or folder is forbidden.");
    // } else if (response.status === 404) {
    //   throw new Error("The course does not exist.");
    // }

    // return response.json();
  }

  /**
   * Creates a file element in the course containing the file from the file repository.
   *
   * @param courseId - The unique identifier of the course.
   * @param folderId - The unique identifier of the folder within the course.
   * @param planId - The plan identifier associated with the file.
   * @param fileData - The data of the file to be uploaded.
   * @returns A promise that resolves to the created file's details.
   *
   * @throws Error if the user does not have access to the course or folder.
   * @throws Error if the course does not exist.
   */
  public async createFileRepoFile(
    courseId: number,
    folderId: number,
    planId: string,
    fileData: FormData,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    // const queryParams = new URLSearchParams({ planId });

    // const response = await this.http.post(
    //   `/restapi/personal/courses/${encodeURIComponent(
    //     courseId,
    //   )}/folders/${folderId}/file/filerepo/v1`,
    //   fileData,
    //   {
    //     headers: {
    //       // 'Content-Type' is set automatically when using FormData
    //     },
    //   },
    // );

    // if (response.status === 403) {
    //   throw new Error("Access to the course or folder is forbidden.");
    // } else if (response.status === 404) {
    //   throw new Error("The course does not exist.");
    // }

    // return response.json();
  }

  /**
   * Retrieves a list of resources for a given course and folder.
   *
   * @param courseId - The unique identifier of the course.
   * @param folderId - The unique identifier of the folder within the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of resources per page (default is 10).
   * @param elementType - The type of elements to filter (e.g., 'file', 'link').
   * @param learningToolType - The type of learning tool to filter.
   * @returns A promise that resolves to a paginated list of resources.
   */
  public async getResources(
    courseId: number,
    folderId: number,
    pageIndex = 0,
    pageSize = 100,
    elementType?: ItsolutionsItslUtilsConstantsElementType,
    learningToolType?: ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType,
  ): Promise<ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      elementType,
      learningToolType,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/folders/${folderId}/resources/v1`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves follow-up tasks for a given course.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of tasks per page (default is 10).
   * @returns A promise that resolves to a paginated list of follow-up tasks.
   */
  public async getFollowUpTasks(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesFollowUpTask> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/followuptasks/v1`,
      { params: queryParams },
    );
  }

  /**
   * Updates the timestamp for when the user last visited the course.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves when the timestamp is successfully updated.
   */
  public async updateLastVisited(courseId: number): Promise<void> {
    await this.http.put(`/restapi/personal/courses/${courseId}/lastvisited/v1`);
  }

  /**
   * Retrieves setup information for the course participant and add participant page.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the setup information.
   */
  public async getParticipantSetup(courseId: number): Promise<unknown> {
    return this.http.get(
      `/restapi/personal/courses/${courseId}/participants/setup/v1`,
    );
  }

  /**
   * Grants temporary access to persons for a course.
   *
   * @param courseId - The unique identifier of the course.
   * @param participantIds - An array of participant identifiers to grant temporary access.
   * @param duration - The duration of temporary access in minutes.
   * @returns A promise that resolves when temporary access is successfully granted.
   */
  public async grantTemporaryAccess(
    courseId: number,
    participantIds: string[],
    duration: number,
  ): Promise<void> {
    throw new Error("Not implemented");
    // const payload = {
    //   participantIds,
    //   duration,
    // };

    // await this.http.post(
    //   `/restapi/personal/courses/${encodeURIComponent(
    //     courseId,
    //   )}/participants/temporaryaccess/v1`,
    //   payload,
    // );
  }

  /**
   * Retrieves a list of unenrolled participants for a given course.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of participants per page (default is 10).
   * @param searchText - The text to search within participant names or emails.
   * @param orderByField - The field to order the participants by.
   * @param orderAscending - Indicates whether the order is ascending.
   * @param dropDateFrom - The start date to filter drop dates, in ISO 8601 format.
   * @returns A promise that resolves to a paginated list of unenrolled participants.
   */
  public async getUnenrolledParticipants(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    searchText?: string,
    orderByField = "fullName",
    orderAscending = true,
    dropDateFrom?: string | Date,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      orderAscending,
      orderByField,
      searchText,
      dropDateFrom,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/participants/unenrolled/v1`,
      { params: queryParams },
    );
  }

  /**
   * Removes one or more participants from the given course.
   *
   * @param courseId - The unique identifier of the course.
   * @param participantIds - An array of participant identifiers to remove.
   * @returns A promise that resolves when the participants are successfully removed.
   */
  public async removeParticipants(
    courseId: number,
    data: ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove,
  ): Promise<void> {
    await this.http.delete(
      `/restapi/personal/courses/${courseId}/participants/v1`,
      { data },
    );
  }

  /**
   * Retrieves a list of course participants with various filters.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of participants per page (default is 10).
   * @param courseProfileId - The course profile identifier to filter participants.
   * @param searchText - The text to search within participant names or emails.
   * @param orderByField - The field to order the participants by.
   * @param orderAscending - Indicates whether the order is ascending.
   * @returns A promise that resolves to a paginated list of course participants.
   */
  public async getCourseParticipants(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    courseProfileId?: string,
    searchText?: string,
    orderByField: string = "fullName",
    orderAscending = true,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      orderAscending,
      courseProfileId,
      searchText,
      orderByField,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/participants/v1`,
      { params: queryParams },
    );
  }

  /**
   * Removes one or more participants from the given course (Version 2).
   *
   * @param courseId - The unique identifier of the course.
   * @param participantIds - An array of participant identifiers to remove.
   * @returns A promise that resolves when the participants are successfully removed.
   */
  public async removeParticipantsV2(
    courseId: number,
    data: ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.delete(
      `/restapi/personal/courses/${courseId}/participants/v2`,
      {
        data,
      },
    );
  }

  /**
   * Retrieves a list of course participants with advanced filtering (Version 2).
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of participants per page (default is 10).
   * @param courseProfileIds - An array of course profile identifiers to filter participants.
   * @param searchText - The text to search within participant names or emails.
   * @param orderByField - The field to order the participants by.
   * @param orderAscending - Indicates whether the order is ascending.
   * @returns A promise that resolves to a paginated list of course participants.
   */
  public async getCourseParticipantsV2(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    courseProfileIds: string[] = [],
    searchText?: string,
    orderByField?: string,
    orderAscending = true,
  ): Promise<unknown> {
    throw new Error("Not implemented");

    const queryParams = createSearchParams({
      "paging.PageIndex": pageIndex,
      "paging.PageSize": pageSize,
      searchText,
      orderByField,
      orderAscending,
    });

    courseProfileIds.forEach((id, index) => {
      queryParams.append(`courseProfileIds[${index}]`, id);
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/participants/v2`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves a list of course participants with advanced filtering (Version 3).
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of participants per page (default is 10).
   * @param courseProfileIds - An array of course profile identifiers to filter participants.
   * @param groupIds - An array of group identifiers to filter participants.
   * @param hierarchyIds - An array of hierarchy identifiers to filter participants.
   * @param notInGroup - Indicates whether to exclude participants in specific groups.
   * @param searchText - The text to search within participant names or emails.
   * @param orderByField - The field to order the participants by.
   * @param orderAscending - Indicates whether the order is ascending.
   * @returns A promise that resolves to a paginated list of course participants.
   */
  public async getCourseParticipantsV3(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    courseProfileIds: number[] = [],
    groupIds: number[] = [],
    hierarchyIds: number[] = [],
    notInGroup = false,
    searchText?: string,
    orderByField?: string,
    orderAscending = true,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant> {
    const queryParams = createSearchParams({
      "paging.PageIndex": pageIndex,
      "paging.PageSize": pageSize,
      orderAscending,
      courseProfileIds,
      groupIds,
      hierarchyIds,
      notInGroup,
      searchText,
      orderByField,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/participants/v3`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves information on available course profiles for a specific course.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the course profiles information.
   */
  public async getCourseProfiles(
    courseId: number,
  ): Promise<
    Array<ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile>
  > {
    return this.http.get(`/restapi/personal/courses/${courseId}/profiles/v1`);
  }

  /**
   * Retrieves all resources in a course with extended information.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of resources per page (default is 10).
   * @returns A promise that resolves to a list of all resources in the course.
   */
  public async getExtendedResources(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = new URLSearchParams({
      PageIndex: pageIndex.toString(),
      PageSize: pageSize.toString(),
    });

    return this.http.post(
      `/restapi/personal/courses/${courseId}/resources/extended/v1`,
    );
  }

  /**
   * Retrieves the last updated resources for a given element type in a course.
   *
   * @param courseId - The unique identifier of the course.
   * @param elementType - The type of elements to filter (e.g., 'file', 'link').
   * @param numberOfElements - The number of elements to retrieve. Default is 3. Maximum is 10.
   * @param excludeLearningPathSubElements - Indicates whether to exclude learning path sub-elements.
   * @returns A promise that resolves to the list of last updated resources.
   */
  public async getLastUpdatedResources(
    courseId: number,
    elementType: number,
    numberOfElements = 3,
    excludeLearningPathSubElements = false,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource> {
    const queryParams = createSearchParams({
      elementType,
      numberOfElements,
      excludeLearningPathSubElements,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/resources/lastupdated/v1`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves a list of resources (in the root folder) for a given course.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of resources per page (default is 10).
   * @param elementType - The type of elements to filter (e.g., 'file', 'link').
   * @param learningToolType - The type of learning tool to filter.
   * @returns A promise that resolves to a paginated list of resources.
   */
  public async getRootResources(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    elementType?: ItsolutionsItslUtilsConstantsElementType,
    learningToolType?: ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType,
  ): Promise<ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      elementType,
      learningToolType,
    });

    return this.http.get(`/restapi/personal/courses/${courseId}/resources/v1`, {
      params: queryParams,
    });
  }

  /**
   * Searches syncable hierarchies for a given course based on the search text.
   *
   * @param courseId - The unique identifier of the course.
   * @param searchText - The text to search for within hierarchies.
   * @returns A promise that resolves to the list of matching hierarchies.
   */
  public async searchHierarchies(
    courseId: number,
    searchText: string,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = new URLSearchParams({ searchText });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/searchhierarchies/v1`,
    );
  }

  /**
   * Retrieves the user's stream feed from a course.
   *
   * @param courseId - The unique identifier of the course.
   * @param showLightBulletins - Indicates whether to show light bulletins.
   * @param useNewerThan - Indicates whether to use the 'newer than' filter.
   * @param fromId - The stream item ID to start retrieving from.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of stream items per page (default is 100).
   * @returns A promise that resolves to the list of stream items.
   */
  public async getStreamFeed(
    courseId: number,
    showLightBulletins = true,
    useNewerThan?: boolean,
    fromId?: number,
    pageIndex = 0,
    pageSize = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesStreamItemV2> {
    const queryParams = createSearchParams({
      showLightBulletins,
      UseNewerThan: useNewerThan,
      PageIndex: pageIndex,
      PageSize: pageSize,
      fromId,
    });

    return this.http.get(`/restapi/personal/courses/${courseId}/stream/v1`, {
      params: queryParams,
    });
  }

  /**
   * Retrieves all hierarchies synchronized with a given course.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the list of synchronized hierarchies.
   */
  public async getSynchronizedHierarchies(courseId: number): Promise<unknown> {
    return this.http.get(
      `/restapi/personal/courses/${courseId}/synchronisedhierarchies/v1`,
    );
  }

  /**
   * Synchronizes hierarchies to a course.
   *
   * @param courseId - The unique identifier of the course.
   * @param hierarchies - An array of hierarchy identifiers to synchronize.
   * @returns A promise that resolves when synchronization is successful.
   */
  public async synchronizeHierarchies(
    courseId: number,
    hierarchies: string[],
  ): Promise<void> {
    throw new Error("Not implemented");
    const data = { hierarchies };

    await this.http.post(
      `/restapi/personal/courses/${courseId}/synchronisehierarchies/v1`,
      { data },
    );
  }

  /**
   * Retrieves a list of tasks for a given course with optional filters.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of tasks per page (default is 10).
   * @param status - The status to filter tasks (e.g., 'pending', 'completed').
   * @param deadline - The deadline to filter tasks, in ISO 8601 format.
   * @param isHomework - Indicates whether to filter homework tasks.
   * @returns A promise that resolves to a paginated list of tasks.
   */
  public async getTasks(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    status: ItslearningRestApiEntitiesTaskStatusFilter = ItslearningRestApiEntitiesTaskStatusFilter.All,
    deadline: ItslearningRestApiEntitiesTaskDeadlineFilter = ItslearningRestApiEntitiesTaskDeadlineFilter.All,
    isHomework?: boolean,
  ): Promise<EntityListOfItslearningRestApiEntitiesTask> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      status,
      deadline,
      isHomework,
    });

    return this.http.get(`/restapi/personal/courses/${courseId}/tasks/v1`, {
      params: queryParams,
    });
  }

  /**
   * Toggles whether the user has marked a course as favorite.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the updated favorite status.
   */
  public async toggleFavorite(
    courseId: number,
  ): Promise<SystemNetHttpHttpResponseMessage> {
    return this.http.put(
      `/restapi/personal/courses/${courseId}/toggleFavorite/v1`,
    );
  }

  /**
   * Retrieves basic information about a course for the current user.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the basic course information.
   */
  public async getCourseBasicInfo(
    courseId: number,
  ): Promise<ItslearningRestApiEntitiesCourse> {
    return this.http.get(`/restapi/personal/courses/${courseId}/v1`);
  }

  /**
   * Updates the course information.
   *
   * @param courseId - The unique identifier of the course.
   * @param updateData - The data to update the course with.
   * @returns A promise that resolves when the course is successfully updated.
   */
  public async updateCourse(
    courseId: number,
    updateData: unknown,
  ): Promise<void> {
    throw new Error("Not implemented");
    await this.http.put(`/restapi/personal/courses/${courseId}/v1`, {
      data: updateData,
    });
  }

  /**
   * Retrieves a list of students for a given course.
   *
   * @param courseId - The unique identifier of the course.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of students per page (default is 10).
   * @param sort - The field to sort the students by.
   * @param sortDescending - Indicates whether the sort order is descending.
   * @param search - The text to search within student names or emails.
   * @returns A promise that resolves to a paginated list of students.
   */
  public async getStudents(
    courseId: number,
    pageIndex = 0,
    pageSize = 100,
    sort: string = "LastVisited",
    sortDescending = true,
    search: string = "",
  ): Promise<unknown> {
    throw new Error("Not implemented");

    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      sortDescending,
      sort,
      search,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/yourstudents/v1`,
      { params: queryParams },
    );
  }

  /**
   * Searches for resources in a course based on location type and search text.
   *
   * @param locationId - The unique identifier of the course or project.
   * @param locationType - The type of location to filter resources (e.g., 'folder', 'file').
   * @param searchText - The text to search within resource names or descriptions.
   * @returns A promise that resolves to the list of matching resources.
   */
  public async searchResources(
    locationId: number,
    locationType: ItsolutionsItslUtilsConstantsLocationType,
    searchText: string = "",
  ): Promise<ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails> {
    const queryParams = createSearchParams({
      locationId,
      locationType,
      searchText,
    });

    return this.http.get(
      `/restapi/personal/courses/${locationId}/resources/search/v1`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves information about courses with active lesson plans within a specified date range.
   *
   * @param startDate - The start date of the date range, in ISO 8601 format.
   * @param endDate - The end date of the date range, in ISO 8601 format.
   * @returns A promise that resolves to the information about the courses.
   */
  public async getActivePlans(
    startDate: string,
    endDate: string,
  ): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = new URLSearchParams({
      startDate: encodeURIComponent(startDate),
      endDate: encodeURIComponent(endDate),
    });

    return this.http.post(`/restapi/personal/courses/activeplans/v1`);
  }

  /**
   * Retrieves persons that the user is allowed to communicate with, given the customer's eSafety rules.
   *
   * @param searchText - The text to search for in person names or emails.
   * @returns A promise that resolves to a list of eligible persons.
   */
  public async getEligiblePersons(searchText: string): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = new URLSearchParams({ searchText });
    return this.http.get(`/restapi/personal/courses/addparticipants/search/v1`);
  }

  /**
   * Retrieves a list of courses for a given teacher.
   *
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of courses per page (default is 100).
   * @param onlyWithResources - Indicates whether to include only courses with resources.
   * @returns A promise that resolves to a paginated list of courses.
   */
  public async getTeacherCourses(
    pageIndex = 0,
    pageSize = 100,
    onlyWithResources = false,
  ): Promise<EntityListOfItslearningRestApiEntitiesCourse> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      onlyWithResources,
    });

    return this.http.get(`/restapi/personal/courses/iteach/v1`, {
      params: queryParams,
    });
  }

  /**
   * Retrieves the list of elements related to a given notification.
   *
   * @param courseId - The unique identifier of the course.
   * @param notificationId - The unique identifier of the notification.
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of elements per page (default is 10).
   * @returns A promise that resolves to a list of related elements.
   */
  public async getNotificationElements(
    courseId: number,
    notificationId: number,
    pageIndex = 0,
    pageSize = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesElementLink> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(
      `/restapi/personal/courses/${courseId}/notifications/${notificationId}/elements/v1`,
      { params: queryParams },
    );
  }

  /**
   * Retrieves a specific resource and information about the course and the user's role.
   *
   * @param courseId - The unique identifier of the course.
   * @param resourceId - The unique identifier of the resource.
   * @returns A promise that resolves to the resource details, course information, and user role.
   */
  public async getResourceDetails(
    courseId: number,
    resourceId: string,
  ): Promise<ItslearningRestApiEntitiesPersonalCourseCourseResourceWithRole> {
    return this.http.get(
      `/restapi/personal/courses/${courseId}/resources/${resourceId}/v1`,
    );
  }

  /**
   * Searches for a course by its synchronization key.
   *
   * @param courseSyncKey - The synchronization key of the course.
   * @returns A promise that resolves to the course details.
   */
  public async searchCourseBySyncKey(courseSyncKey: string): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = new URLSearchParams({ courseSyncKey });
    return this.http.get(`/restapi/personal/courses/search/v1`);
  }

  /**
   * Retrieves a list of the user's students.
   *
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of students per page (default is 10).
   * @returns A promise that resolves to a paginated list of students.
   */
  public async getMyStudents(pageIndex = 0, pageSize = 100): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = new URLSearchParams({
      PageIndex: pageIndex.toString(),
      PageSize: pageSize.toString(),
    });

    return this.http.get(`/restapi/personal/courses/students/v1`);
  }

  /**
   * Creates a new course.
   *
   * @param createData - The data required to create the course.
   * @returns A promise that resolves to the created course's details.
   */
  public async createCourse(createData: unknown): Promise<unknown> {
    throw new Error("Not implemented");
    return this.http.post(`/restapi/personal/courses/v1`, { data: createData });
  }

  /**
   * Retrieves a paginated list of courses.
   *
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of courses per page (default is 100).
   * @returns A promise that resolves to a paginated list of courses.
   *
   * @deprecated This endpoint returns only favorite courses. Use `getCoursesV2` instead.
   */
  public async getCoursesV1(
    pageIndex = 0,
    pageSize = 100,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonCourse> {
    console.warn(
      "getCoursesV1 is deprecated and returns only favorite courses. Use getCoursesV2 instead.",
    );

    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
    });

    return this.http.get(`/restapi/personal/courses/v1`, {
      params: queryParams,
    });
  }

  /**
   * Retrieves a paginated list of courses with filtering options.
   *
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of courses per page (default is 100).
   * @param filter - The filter criteria to apply to the course list.
   * @returns A promise that resolves to a paginated list of courses.
   */
  public async getCoursesV2(
    pageIndex = 0,
    pageSize = 100,
    filter: ItsolutionsItslUtilsConstantsContentAreaFilterType = ItsolutionsItslUtilsConstantsContentAreaFilterType.All,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonCourse> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      filter,
    });

    return this.http.get(`/restapi/personal/courses/v2`, {
      params: queryParams,
    });
  }

  /**
   * Retrieves a paginated list of courses with additional information.
   *
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of courses per page (default is 100).
   * @param filter - The filter criteria to apply to the course list.
   * @returns A promise that resolves to a paginated list of courses with additional information.
   */
  public async getCoursesV3(
    pageIndex = 0,
    pageSize = 100,
    filter: ItsolutionsItslUtilsConstantsContentAreaFilterType = ItsolutionsItslUtilsConstantsContentAreaFilterType.All,
  ): Promise<EntityListOfItslearningRestApiEntitiesPersonCourseCardData> {
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      filter,
    });

    return this.http.get(`/restapi/personal/courses/v3`, {
      params: queryParams,
    });
  }

  /**
   * Retrieves basic information about a course and the user's role in it.
   *
   * @param courseId - The unique identifier of the course.
   * @returns A promise that resolves to the course information and user role.
   */
  public async getCourseWithRole(courseId: number): Promise<unknown> {
    throw new Error("Not implemented");
    return this.http.get(`/restapi/personal/courses/withrole/${courseId}/v1`);
  }

  /**
   * Retrieves all courses of the user's students.
   *
   * @returns A promise that resolves to the list of courses.
   */
  public async getStudentsCourses(): Promise<unknown> {
    throw new Error("Not implemented");
    return this.http.get(`/restapi/personal/courses/yourstudents/courses/v1`);
  }

  /**
   * Retrieves a list of all students for a teacher across all courses where the teacher has a teacher's role.
   *
   * @param pageIndex - The index of the page to retrieve (default is 0).
   * @param pageSize - The number of students per page (default is 10).
   * @param sort - The field to sort the students by.
   * @param sortDescending - Indicates whether the sort order is descending.
   * @param search - The text to search within student names or emails.
   * @returns A promise that resolves to a paginated list of students.
   */
  public async getAllStudentsForTeacher(
    pageIndex = 0,
    pageSize = 100,
    sort: string = "LastLogon",
    sortDescending = true,
    search: string = "",
  ): Promise<unknown> {
    throw new Error("Not implemented");
    const queryParams = createSearchParams({
      PageIndex: pageIndex,
      PageSize: pageSize,
      sortDescending,
      sort,
      search,
    });

    return this.http.get(`/restapi/personal/courses/yourstudents/v1`, {
      params: queryParams,
    });
  }
}
