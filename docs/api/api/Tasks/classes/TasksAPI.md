[itslearning-sdk](../../../modules.md) / [api/Tasks](../index.md) / TasksAPI

# TasksAPI

TasksAPI

Overview:
Endpoint for Tasks API.

Secured with OAuth2, requires OAuth2 API scope `Tasks`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new TasksAPI()

```ts
new TasksAPI(http): TasksAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`TasksAPI`](TasksAPI.md)

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

### getCourseFollowUpTasks()

```ts
getCourseFollowUpTasks(
   courseId, 
   pageIndex, 
pageSize): Promise<unknown>
```

Gets follow-up tasks for a specific course.

The list includes activities that have new or updated submissions/student work,
or require the teacher to assess a submission/attempt. Requires admin permissions for the course.

Supports paging. If paging is not used, it will use a default pageSize on pageIndex 0.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of tasks per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of follow-up tasks for the specified course.

***

### getUserFollowUpTasks()

```ts
getUserFollowUpTasks(pageIndex, pageSize): Promise<unknown>
```

Gets the user's follow-up tasks.

The list includes activities from favorite courses that have new or updated submissions/student work,
or require the teacher to assess a submission/attempt. Provides an overview to help decide which tasks to follow up on next.

Supports paging. If paging is not used, it will use a default pageSize on pageIndex 0.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of tasks per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of the user's follow-up tasks.

***

### getUserTasks()

```ts
getUserTasks(
   pageIndex, 
   pageSize, 
   status?, 
   deadline?, 
isHomework?): Promise<unknown>
```

Gets a list of tasks assigned to the user with optional filters.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of tasks per page (default = 10).

##### status?

`string`

(Optional) The status to filter tasks by (e.g., 'pending', 'completed').

##### deadline?

`string`

(Optional) The deadline to filter tasks by, in ISO 8601 format.

##### isHomework?

`boolean`

(Optional) Whether to filter tasks that are marked as homework.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of tasks assigned to the user.
