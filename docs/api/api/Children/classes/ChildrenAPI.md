[itslearning-sdk](../../../modules.md) / [api/Children](../index.md) / ChildrenAPI

# ChildrenAPI

ChildrenAPI

Overview:
Endpoint for Children API.
Provides access to information about the current user's children (guardian functionality).

Secured with OAuth2 and requires the OAuth2 API scope `Children`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ChildrenAPI(http): ChildrenAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ChildrenAPI`

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`constructor`](../../../lib/Manager/classes/Manager.md#constructor)

## Properties

### http

```ts
protected readonly http: HttpClient;
```

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`http`](../../../lib/Manager/classes/Manager.md#http)

## Methods

### getChildCourses()

```ts
getChildCourses(
   childId, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesChildCourse>;
```

Gets courses for a specific child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `10`

The number of results per page (default = 10).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesChildCourse`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesChildCourse.md)\>

A promise that resolves to a paginated list of courses for the child.

***

### getChildCourseTasks()

```ts
getChildCourseTasks(
   childId, 
   courseId, 
   pageIndex?, 
   pageSize?, 
   status?, 
   deadline?, 
   isHomework?, 
   fromDate?, 
toDate?): Promise<EntityListOfItslearningRestApiEntitiesTask>;
```

Gets tasks for a specific child within a specific course.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### courseId

`number`

The unique identifier of the course.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `10`

The number of results per page (default = 10).

##### status?

`number`

Filter by task status.

##### deadline?

`number`

Filter by deadline type.

##### isHomework?

`boolean`

Filter by homework flag.

##### fromDate?

`Date`

Filter tasks from this date.

##### toDate?

`Date`

Filter tasks up to this date.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTask`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTask.md)\>

A promise that resolves to a paginated list of tasks for the child in the course.

***

### getChildren()

```ts
getChildren(): Promise<EntityListOfItslearningRestApiEntitiesChildV2>;
```

Gets the list of children for the current user.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesChildV2`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesChildV2.md)\>

A promise that resolves to a paginated list of children.

***

### getChildTasks()

```ts
getChildTasks(
   childId, 
   pageIndex?, 
   pageSize?, 
   status?, 
   deadline?, 
   isHomework?, 
   fromDate?, 
toDate?): Promise<EntityListOfItslearningRestApiEntitiesTask>;
```

Gets tasks for a specific child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `10`

The number of results per page (default = 10).

##### status?

`number`

Filter by task status.

##### deadline?

`number`

Filter by deadline type.

##### isHomework?

`boolean`

Filter by homework flag.

##### fromDate?

`Date`

Filter tasks from this date.

##### toDate?

`Date`

Filter tasks up to this date.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesTask`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesTask.md)\>

A promise that resolves to a paginated list of tasks for the child.

***

### getChildUpcoming()

```ts
getChildUpcoming(
   childId, 
   fromDate?, 
toDate?): Promise<ItslearningRestApiEntitiesPersonUpcoming>;
```

Gets upcoming tasks, plans, and calendar events for a child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### fromDate?

`Date`

The start date for upcoming events.

##### toDate?

`Date`

The end date for upcoming events.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonUpcoming`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonUpcoming.md)\>

A promise that resolves to upcoming events for the child.
