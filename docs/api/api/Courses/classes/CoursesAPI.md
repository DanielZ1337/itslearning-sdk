[itslearning-sdk](../../../modules.md) / [api/Courses](../index.md) / CoursesAPI

# CoursesAPI

CoursesAPI

Overview:
Endpoint to Courses API.
Courses in itslearning are personal and related to the person.

Secured with OAuth2 and requires the OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new CoursesAPI()

```ts
new CoursesAPI(http): CoursesAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`CoursesAPI`](CoursesAPI.md)

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`constructor`](../../../lib/Manager/classes/Manager.md#constructors)

## Properties

### http

```ts
protected readonly http: HttpClient;
```

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`http`](../../../lib/Manager/classes/Manager.md#http-1)

## Methods

### addParticipants()

```ts
addParticipants(courseId, participants): Promise<void>
```

Adds persons to a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### participants

[`ItslearningRestApiEntitiesCourseParticipantToAdd`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseParticipantToAdd.md)[]

An array of participant identifiers to add to the course.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the participants are successfully added.

***

### changeParticipantRole()

```ts
changeParticipantRole(
   courseId, 
   participantId, 
roleId): Promise<unknown>
```

Changes the role of a single participant in a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### participantId

`number`

The unique identifier of the participant.

##### roleId

`number`

The role identifier to assign to the participant.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the role is successfully changed.

***

### changeRoleBulk()

```ts
changeRoleBulk(
   courseId, 
   roleId, 
participantIds): Promise<unknown>
```

Changes the role of multiple participants in bulk.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### roleId

`number`

The role identifier to assign to the participants.

##### participantIds

`number`[]

An array of participant identifiers whose roles are to be changed.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the roles are successfully changed.

***

### createCloudFile()

```ts
createCloudFile(
   courseId, 
   folderId, 
   planId, 
fileData): Promise<unknown>
```

Creates a file element in the course containing the cloud file.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### folderId

`number`

The unique identifier of the folder within the course.

##### planId

`string`

The plan identifier associated with the file.

##### fileData

`FormData`

The data of the file to be uploaded.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the created file's details.

#### Throws

Error if the user does not have access to the course or folder.

#### Throws

Error if the course does not exist.

***

### createCourse()

```ts
createCourse(createData): Promise<ItslearningRestApiEntitiesCourse>
```

Creates a new course.

#### Parameters

##### createData

[`ItslearningRestApiEntitiesCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesCourse.md)

The data required to create the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesCourse.md)\>

A promise that resolves to the created course's details.

***

### createFileRepoFile()

```ts
createFileRepoFile(
   courseId, 
   folderId, 
   planId, 
fileData): Promise<unknown>
```

Creates a file element in the course containing the file from the file repository.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### folderId

`number`

The unique identifier of the folder within the course.

##### planId

`string`

The plan identifier associated with the file.

##### fileData

`FormData`

The data of the file to be uploaded.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the created file's details.

#### Throws

Error if the user does not have access to the course or folder.

#### Throws

Error if the course does not exist.

***

### getActivePlans()

```ts
getActivePlans(
   startDate, 
   endDate, 
syncKeys): Promise<ItslearningRestApiEntitiesPersonalCourseWithActivePlans[]>
```

Retrieves information about courses with active lesson plans within a specified date range.

#### Parameters

##### startDate

The start date of the date range, in ISO 8601 format.

`string` | `Date`

##### endDate

The end date of the date range, in ISO 8601 format.

`string` | `Date`

##### syncKeys

`string`[]

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseWithActivePlans`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseWithActivePlans.md)[]\>

A promise that resolves to the information about the courses.

***

### getAllStudentsForTeacher()

```ts
getAllStudentsForTeacher(
   pageIndex, 
   pageSize, 
   sort, 
   sortDescending, 
search): Promise<ItslearningRestApiEntitiesPersonalCourseYourStudent[]>
```

Retrieves a list of all students for a teacher across all courses where the teacher has a teacher's role.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of students per page (default is 100).

##### sort

`string` = `"LastLogon"`

The field to sort the students by.

##### sortDescending

`boolean` = `true`

Indicates whether the sort order is descending.

##### search

`string` = `""`

The text to search within student names or emails.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseYourStudent`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseYourStudent.md)[]\>

A promise that resolves to a paginated list of students.

***

### getApplicants()

```ts
getApplicants(courseId): Promise<ItslearningRestApiEntitiesPersonalCourseCourseApplicant[]>
```

Retrieves the list of applicants for a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseCourseApplicant`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseCourseApplicant.md)[]\>

A promise that resolves to the list of applicants.

***

### getCalendarEvents()

```ts
getCalendarEvents(
   courseId, 
   fromDate, 
   toDate, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent>
```

Retrieves calendar events for a given course within a date range.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### fromDate

The start date to filter events, in ISO 8601 format.

`string` | `Date`

##### toDate

The end date to filter events, in ISO 8601 format.

`string` | `Date`

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of events per page (default is 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent.md)\>

A promise that resolves to a paginated list of calendar events.

***

### getCourseBasicInfo()

```ts
getCourseBasicInfo(courseId): Promise<ItslearningRestApiEntitiesCourse>
```

Retrieves basic information about a course for the current user.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesCourse.md)\>

A promise that resolves to the basic course information.

***

### ~~getCourseParticipants()~~

```ts
getCourseParticipants(
   courseId, 
   pageIndex, 
   pageSize, 
   courseProfileId?, 
   searchText?, 
   orderByField?, 
orderAscending?): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant>
```

Retrieves a list of course participants with various filters.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of participants per page (default is 100).

##### courseProfileId?

`string`

The course profile identifier to filter participants.

##### searchText?

`string`

The text to search within participant names or emails.

##### orderByField?

`string` = `"fullName"`

The field to order the participants by.

##### orderAscending?

`boolean` = `true`

Indicates whether the order is ascending.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant.md)\>

A promise that resolves to a paginated list of course participants.

#### Deprecated

This endpoint returns only favorite courses. Use `getCourseParticipantsV2` instead.

***

### ~~getCourseParticipantsV2()~~

```ts
getCourseParticipantsV2(
   courseId, 
   pageIndex, 
   pageSize, 
   courseProfileIds, 
   searchText?, 
   orderByField?, 
orderAscending?): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant>
```

Retrieves a list of course participants with advanced filtering (Version 2).

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of participants per page (default is 100).

##### courseProfileIds

`string`[] = `[]`

An array of course profile identifiers to filter participants.

##### searchText?

`string`

The text to search within participant names or emails.

##### orderByField?

`string` = `"fullName"`

The field to order the participants by.

##### orderAscending?

`boolean` = `true`

Indicates whether the order is ascending.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant.md)\>

A promise that resolves to a paginated list of course participants.

#### Deprecated

This endpoint returns only favorite courses. Use `getCourseParticipantsV3` instead.

***

### getCourseParticipantsV3()

```ts
getCourseParticipantsV3(
   courseId, 
   pageIndex, 
   pageSize, 
   courseProfileIds, 
   groupIds, 
   hierarchyIds, 
   notInGroup, 
   searchText?, 
   orderByField?, 
orderAscending?): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant>
```

Retrieves a list of course participants with advanced filtering (Version 3).

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of participants per page (default is 100).

##### courseProfileIds

`number`[] = `[]`

An array of course profile identifiers to filter participants.

##### groupIds

`number`[] = `[]`

An array of group identifiers to filter participants.

##### hierarchyIds

`number`[] = `[]`

An array of hierarchy identifiers to filter participants.

##### notInGroup

`boolean` = `false`

Indicates whether to exclude participants in specific groups.

##### searchText?

`string`

The text to search within participant names or emails.

##### orderByField?

`string`

The field to order the participants by.

##### orderAscending?

`boolean` = `true`

Indicates whether the order is ascending.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipant.md)\>

A promise that resolves to a paginated list of course participants.

***

### getCourseProfiles()

```ts
getCourseProfiles(courseId): Promise<ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile[]>
```

Retrieves information on available course profiles for a specific course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCoursePageSetupCourseProfile.md)[]\>

A promise that resolves to the course profiles information.

***

### ~~getCoursesV1()~~

```ts
getCoursesV1(pageIndex, pageSize): Promise<EntityListOfItslearningRestApiEntitiesPersonCourse>
```

Retrieves a paginated list of courses.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of courses per page (default is 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonCourse`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonCourse.md)\>

A promise that resolves to a paginated list of courses.

#### Deprecated

This endpoint returns only favorite courses. Use `getCoursesV2` instead.

***

### ~~getCoursesV2()~~

```ts
getCoursesV2(
   pageIndex, 
   pageSize, 
filter): Promise<EntityListOfItslearningRestApiEntitiesPersonCourse>
```

Retrieves a paginated list of courses with filtering options.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of courses per page (default is 100).

##### filter

[`ItsolutionsItslUtilsConstantsContentAreaFilterType`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsContentAreaFilterType.md) = `ItsolutionsItslUtilsConstantsContentAreaFilterType.All`

The filter criteria to apply to the course list.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonCourse`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonCourse.md)\>

A promise that resolves to a paginated list of courses.

#### Deprecated

This endpoint returns only favorite courses. Use `getCoursesV3` instead.

***

### getCoursesV3()

```ts
getCoursesV3(
   pageIndex, 
   pageSize, 
filter): Promise<EntityListOfItslearningRestApiEntitiesPersonCourseCardData>
```

Retrieves a paginated list of courses with additional information.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of courses per page (default is 100).

##### filter

[`ItsolutionsItslUtilsConstantsContentAreaFilterType`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsContentAreaFilterType.md) = `ItsolutionsItslUtilsConstantsContentAreaFilterType.All`

The filter criteria to apply to the course list.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonCourseCardData`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonCourseCardData.md)\>

A promise that resolves to a paginated list of courses with additional information.

***

### getCourseWithRole()

```ts
getCourseWithRole(courseId): Promise<ItslearningRestApiEntitiesCourseWithContextRole>
```

Retrieves basic information about a course and the user's role in it.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourseWithContextRole`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseWithContextRole.md)\>

A promise that resolves to the course information and user role.

***

### getEligiblePersons()

```ts
getEligiblePersons(searchText): Promise<EligiblePersonsResponse[]>
```

Retrieves persons that the user is allowed to communicate with, given the customer's eSafety rules.

#### Parameters

##### searchText

`string`

The text to search for in person names or emails.

#### Returns

`Promise`\<[`EligiblePersonsResponse`](../../../types/type-aliases/EligiblePersonsResponse.md)[]\>

A promise that resolves to a list of eligible persons.

***

### getExtendedResources()

```ts
getExtendedResources(
   courseId, 
   pageIndex, 
pageSize): Promise<unknown>
```

Retrieves all resources in a course with extended information.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of resources per page (default is 100).

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of all resources in the course.

***

### getFollowUpTasks()

```ts
getFollowUpTasks(
   courseId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesFollowUpTask>
```

Retrieves follow-up tasks for a given course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of tasks per page (default is 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesFollowUpTask`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesFollowUpTask.md)\>

A promise that resolves to a paginated list of follow-up tasks.

***

### getLastUpdatedResources()

```ts
getLastUpdatedResources(
   courseId, 
   elementType, 
   numberOfElements, 
excludeLearningPathSubElements): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource>
```

Retrieves the last updated resources for a given element type in a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### elementType

`number`

The type of elements to filter (e.g., 'file', 'link').

##### numberOfElements

`number` = `3`

The number of elements to retrieve. Default is 3. Maximum is 10.

##### excludeLearningPathSubElements

`boolean` = `false`

Indicates whether to exclude learning path sub-elements.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCourseCourseResource.md)\>

A promise that resolves to the list of last updated resources.

***

### getMyStudents()

```ts
getMyStudents(pageIndex, pageSize): Promise<EntityListOfItslearningRestApiEntitiesCourse>
```

Retrieves a list of the user's students.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of students per page (default is 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesCourse`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesCourse.md)\>

A promise that resolves to a paginated list of students.

***

### getNotificationElements()

```ts
getNotificationElements(
   courseId, 
   notificationId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesElementLink>
```

Retrieves the list of elements related to a given notification.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### notificationId

`number`

The unique identifier of the notification.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of elements per page (default is 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesElementLink`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesElementLink.md)\>

A promise that resolves to a list of related elements.

***

### getParticipantSetup()

```ts
getParticipantSetup(courseId): Promise<ItslearningRestApiEntitiesPersonalCoursePageSetupCourseParticipantSetup>
```

Retrieves setup information for the course participant and add participant page.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCoursePageSetupCourseParticipantSetup`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCoursePageSetupCourseParticipantSetup.md)\>

A promise that resolves to the setup information.

***

### getResourceDetails()

```ts
getResourceDetails(courseId, resourceId): Promise<ItslearningRestApiEntitiesPersonalCourseCourseResourceWithRole>
```

Retrieves a specific resource and information about the course and the user's role.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### resourceId

`string`

The unique identifier of the resource.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseCourseResourceWithRole`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseCourseResourceWithRole.md)\>

A promise that resolves to the resource details, course information, and user role.

***

### getResources()

```ts
getResources(
   courseId, 
   folderId, 
   pageIndex, 
   pageSize, 
   elementType?, 
learningToolType?): Promise<ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails>
```

Retrieves a list of resources for a given course and folder.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### folderId

`number`

The unique identifier of the folder within the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of resources per page (default is 100).

##### elementType?

[`ItsolutionsItslUtilsConstantsElementType`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsElementType.md)

The type of elements to filter (e.g., 'file', 'link').

##### learningToolType?

[`ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType`](../../../types/type-aliases/ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType.md)

The type of learning tool to filter.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails.md)\>

A promise that resolves to a paginated list of resources.

***

### getRootResources()

```ts
getRootResources(
   courseId, 
   pageIndex, 
   pageSize, 
   elementType?, 
learningToolType?): Promise<ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails>
```

Retrieves a list of resources (in the root folder) for a given course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of resources per page (default is 100).

##### elementType?

[`ItsolutionsItslUtilsConstantsElementType`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsElementType.md)

The type of elements to filter (e.g., 'file', 'link').

##### learningToolType?

[`ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType`](../../../types/type-aliases/ItslearningPlatformRestApiSdkCommonEntitiesLearningToolType.md)

The type of learning tool to filter.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails.md)\>

A promise that resolves to a paginated list of resources.

***

### getStreamFeed()

```ts
getStreamFeed(
   courseId, 
   showLightBulletins, 
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesStreamItemV2>
```

Retrieves the user's stream feed from a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### showLightBulletins

`boolean` = `true`

Indicates whether to show light bulletins.

##### useNewerThan?

`boolean`

Indicates whether to use the 'newer than' filter.

##### fromId?

`number`

The stream item ID to start retrieving from.

##### pageIndex?

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize?

`number` = `100`

The number of stream items per page (default is 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesStreamItemV2`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesStreamItemV2.md)\>

A promise that resolves to the list of stream items.

***

### getStudentsCourses()

```ts
getStudentsCourses(): Promise<ItslearningRestApiEntitiesPersonalCourseYourStudentCourse[]>
```

Retrieves all courses of the user's students.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseYourStudentCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseYourStudentCourse.md)[]\>

A promise that resolves to the list of courses.

***

### getSynchronizedHierarchies()

```ts
getSynchronizedHierarchies(courseId): Promise<unknown>
```

Retrieves all hierarchies synchronized with a given course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the list of synchronized hierarchies.

***

### getTasks()

```ts
getTasks(
   courseId, 
   pageIndex, 
   pageSize, 
   status, 
   deadline, 
isHomework?): Promise<EntityListOfItslearningRestApiEntitiesTask>
```

Retrieves a list of tasks for a given course with optional filters.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of tasks per page (default is 100).

##### status

[`ItslearningRestApiEntitiesTaskStatusFilter`](../../../types/type-aliases/ItslearningRestApiEntitiesTaskStatusFilter.md) = `ItslearningRestApiEntitiesTaskStatusFilter.All`

The status to filter tasks (e.g., 'pending', 'completed').

##### deadline

[`ItslearningRestApiEntitiesTaskDeadlineFilter`](../../../types/type-aliases/ItslearningRestApiEntitiesTaskDeadlineFilter.md) = `ItslearningRestApiEntitiesTaskDeadlineFilter.All`

The deadline to filter tasks, in ISO 8601 format.

##### isHomework?

`boolean`

Indicates whether to filter homework tasks.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTask`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTask.md)\>

A promise that resolves to a paginated list of tasks.

***

### getTeacherCourses()

```ts
getTeacherCourses(
   pageIndex, 
   pageSize, 
onlyWithResources): Promise<EntityListOfItslearningRestApiEntitiesCourse>
```

Retrieves a list of courses for a given teacher.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of courses per page (default is 100).

##### onlyWithResources

`boolean` = `false`

Indicates whether to include only courses with resources.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesCourse`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesCourse.md)\>

A promise that resolves to a paginated list of courses.

***

### getUnenrolledParticipants()

```ts
getUnenrolledParticipants(
   courseId, 
   pageIndex, 
   pageSize, 
   searchText?, 
   orderByField?, 
   orderAscending?, 
dropDateFrom?): Promise<EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled>
```

Retrieves a list of unenrolled participants for a given course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of participants per page (default is 100).

##### searchText?

`string`

The text to search within participant names or emails.

##### orderByField?

`string` = `"fullName"`

The field to order the participants by.

##### orderAscending?

`boolean` = `true`

Indicates whether the order is ascending.

##### dropDateFrom?

The start date to filter drop dates, in ISO 8601 format.

`string` | `Date`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCourseCourseParticipantUnenrolled.md)\>

A promise that resolves to a paginated list of unenrolled participants.

***

### getYourStudents()

```ts
getYourStudents(
   courseId, 
   pageIndex, 
   pageSize, 
   sort, 
   sortDescending, 
search): Promise<ItslearningRestApiEntitiesPersonalCourseYourStudent[]>
```

Retrieves a list of your students for a given course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `100`

The number of students per page (default is 100).

##### sort

`string` = `"LastVisited"`

The field to sort the students by.

##### sortDescending

`boolean` = `true`

Indicates whether the sort order is descending.

##### search

`string` = `""`

The text to search within student names or emails.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseYourStudent`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseYourStudent.md)[]\>

A promise that resolves to a paginated list of students.

***

### grantTemporaryAccess()

```ts
grantTemporaryAccess(
   courseId, 
   participantIds, 
duration): Promise<void>
```

Grants temporary access to persons for a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### participantIds

`string`[]

An array of participant identifiers to grant temporary access.

##### duration

`number`

The duration of temporary access in minutes.

#### Returns

`Promise`\<`void`\>

A promise that resolves when temporary access is successfully granted.

***

### removeParticipants()

```ts
removeParticipants(courseId, data): Promise<void>
```

Removes one or more participants from the given course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### data

[`ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove.md)

#### Returns

`Promise`\<`void`\>

A promise that resolves when the participants are successfully removed.

***

### removeParticipantsV2()

```ts
removeParticipantsV2(courseId, data): Promise<SystemNetHttpHttpResponseMessage>
```

Removes one or more participants from the given course (Version 2).

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### data

[`ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseParticipantsCourseParticipantsToRemove.md)

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves when the participants are successfully removed.

***

### searchCourseBySyncKey()

```ts
searchCourseBySyncKey(courseSyncKey): Promise<ItslearningRestApiEntitiesCourse>
```

Searches for a course by its synchronization key.

#### Parameters

##### courseSyncKey

`string`

The synchronization key of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesCourse.md)\>

A promise that resolves to the course details.

***

### searchHierarchies()

```ts
searchHierarchies(courseId, searchText): Promise<unknown>
```

Searches syncable hierarchies for a given course based on the search text.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### searchText

`string`

The text to search for within hierarchies.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the list of matching hierarchies.

***

### searchParticipants()

```ts
searchParticipants(courseId, searchText): Promise<EntityListOfItslearningRestApiEntitiesPersonSimple>
```

Searches for persons to add to a course based on the search text.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### searchText

`string`

The text to search for in participant names or emails.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonSimple`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonSimple.md)\>

A promise that resolves to a list of participants matching the search criteria.

***

### searchResources()

```ts
searchResources(
   locationId, 
   locationType, 
searchText): Promise<ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails>
```

Searches for resources in a course based on location type and search text.

#### Parameters

##### locationId

`number`

The unique identifier of the course or project.

##### locationType

[`ItsolutionsItslUtilsConstantsLocationType`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsLocationType.md)

The type of location to filter resources (e.g., 'folder', 'file').

##### searchText

`string` = `""`

The text to search within resource names or descriptions.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCourseCourseFolderDetails.md)\>

A promise that resolves to the list of matching resources.

***

### synchronizeHierarchies()

```ts
synchronizeHierarchies(courseId, hierarchies): Promise<void>
```

Synchronizes hierarchies to a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### hierarchies

`string`[]

An array of hierarchy identifiers to synchronize.

#### Returns

`Promise`\<`void`\>

A promise that resolves when synchronization is successful.

***

### toggleFavorite()

```ts
toggleFavorite(courseId): Promise<SystemNetHttpHttpResponseMessage>
```

Toggles whether the user has marked a course as favorite.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the updated favorite status.

***

### updateCourse()

```ts
updateCourse(courseId, updateData): Promise<ItslearningRestApiEntitiesCourse>
```

Updates the course information.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### updateData

[`ItslearningRestApiEntitiesCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesCourse.md)

The data to update the course with.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourse`](../../../types/type-aliases/ItslearningRestApiEntitiesCourse.md)\>

A promise that resolves when the course is successfully updated.

***

### updateLastVisited()

```ts
updateLastVisited(courseId): Promise<void>
```

Updates the timestamp for when the user last visited the course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the timestamp is successfully updated.
