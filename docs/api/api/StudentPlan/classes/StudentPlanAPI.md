[itslearning-sdk](../../../modules.md) / [api/StudentPlan](../index.md) / StudentPlanAPI

# StudentPlanAPI

StudentPlanAPI

Overview:
Endpoint for Student Plans in Personal API.

Tasks in itslearning are personal and related to actions a user should perform in the future.

Secured with OAuth2, requires the OAuth2 API scope `StudentPlan`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new StudentPlanAPI()

```ts
new StudentPlanAPI(http): StudentPlanAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`StudentPlanAPI`](StudentPlanAPI.md)

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

### getActiveAchievementGoals()

```ts
getActiveAchievementGoals(courseId): Promise<unknown>
```

Gets the active achievement goals for a specific course.

#### Parameters

##### courseId

`number`

The unique ID of the course.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of active achievement goals.

***

### getArchivedAchievementGoals()

```ts
getArchivedAchievementGoals(courseId): Promise<unknown>
```

Gets the archived achievement goals for a specific course.

#### Parameters

##### courseId

`number`

The unique ID of the course.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of archived achievement goals.

***

### getComments()

```ts
getComments(
   courseId, 
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<unknown>
```

Retrieves a list of comments related to the specific person's student plan.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### useNewerThan?

`boolean`

(Optional) If true, retrieve comments newer than `fromId`.

##### fromId?

`number`

(Optional) The ID to start retrieving comments from.

##### pageIndex?

`number` = `0`

(Optional) The index of the page to retrieve (default = 0).

##### pageSize?

`number` = `10`

(Optional) The number of comments per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of related comments.

***

### getCourseWideAchievementGoals()

```ts
getCourseWideAchievementGoals(): Promise<unknown>
```

Gets the course-wide achievement goals.

**Note**: No documentation available for this endpoint.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of course-wide achievement goals.

***

### getStudentPlanCourses()

```ts
getStudentPlanCourses(lastCommentReadDateTimesUtc?): Promise<unknown>
```

Returns a list of courses for the Student Plan.

#### Parameters

##### lastCommentReadDateTimesUtc?

`string`

(Optional) The last read date-time for comments in UTC.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of courses associated with the Student Plan.

***

### getStudentPlanOverview()

```ts
getStudentPlanOverview(courseId, lastCommentReadDateTimeUtc?): Promise<unknown>
```

Returns an overview entity for the Student Plan.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### lastCommentReadDateTimeUtc?

`string`

(Optional) The last read date-time for comments in UTC.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to an overview entity of the Student Plan.

***

### getTopicAssessments()

```ts
getTopicAssessments(courseId, fromId?): Promise<unknown>
```

Gets a list of topic assessments for the specified course and student.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### fromId?

`number`

(Optional) The ID to start retrieving assessments from.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of topic assessments.
