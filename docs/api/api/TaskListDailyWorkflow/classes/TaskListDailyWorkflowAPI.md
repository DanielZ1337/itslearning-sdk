[itslearning-sdk](../../../modules.md) / [api/TaskListDailyWorkflow](../index.md) / TaskListDailyWorkflowAPI

# TaskListDailyWorkflowAPI

TaskListDailyWorkflowAPI

Overview:
Endpoint for TaskListDailyWorkflow API.

Daily workflow tasklist in itslearning is personal with a focus on tasks with deadlines in the near future.
This API is used to display tasks in a chronological way (overdue, today, tomorrow, later).

Secured with OAuth2, requires the OAuth2 API scope `TaskListDailyWorkflow`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new TaskListDailyWorkflowAPI()

```ts
new TaskListDailyWorkflowAPI(http): TaskListDailyWorkflowAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`TaskListDailyWorkflowAPI`](TaskListDailyWorkflowAPI.md)

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

### getChildCompletedTasks()

```ts
getChildCompletedTasks(
   childId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow>
```

For a parent, gets a list of completed tasks for a child.

The list includes activities that have been completed by the child.

Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.

#### Parameters

##### childId

`number`

The unique ID of the child.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

The number of completed tasks per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow.md)\>

A promise that resolves to a list of completed tasks for the specified child.

***

### getChildTasksSeparated()

```ts
getChildTasksSeparated(
   childId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection>
```

For a parent, gets a list of tasks assigned to a child, separated into sections.

The tasks are organized chronologically (overdue, today, tomorrow, later) to help parents monitor their child's tasks.

Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.

#### Parameters

##### childId

`number`

The unique ID of the child.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

The number of tasks per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection.md)\>

A promise that resolves to a list of tasks separated into sections for the specified child.

***

### getCourseCompletedTasks()

```ts
getCourseCompletedTasks(
   courseId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow>
```

Gets a list of completed tasks for a user in a specific course.

The list includes activities that have been completed by the user within the specified course.
Requires admin permissions for the course.

Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

The number of completed tasks per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTaskDailyWorkflow.md)\>

A promise that resolves to a list of completed tasks for the specified course.

***

### getCourseTasksSeparated()

```ts
getCourseTasksSeparated(
   courseId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection>
```

Gets a list of tasks assigned to the user in a specific course, separated into sections.

The tasks are organized chronologically (overdue, today, tomorrow, later) to help users prioritize.

Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

The number of tasks per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection.md)\>

A promise that resolves to a list of tasks separated into sections for the specified course.

***

### getUserTasksSeparated()

```ts
getUserTasksSeparated(pageIndex, pageSize): Promise<EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection>
```

Gets a list of tasks assigned to the user, separated into sections.

The tasks are organized chronologically (overdue, today, tomorrow, later) to help users prioritize.

Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

The number of tasks per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection.md)\>

A promise that resolves to a list of tasks separated into sections for the user.

***

### getViewAsTasks()

```ts
getViewAsTasks(
   courseId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection>
```

Gets a list of tasks assigned to a user in "View As" mode.

"View As" mode allows administrators or teachers to view tasks from the perspective of another user.

Supports paging. If paging is not used, it will use a default `pageSize` on `pageIndex` 0.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

The number of tasks per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTaskDailyWorkflowSection.md)\>

A promise that resolves to a list of tasks in "View As" mode for the specified course.
