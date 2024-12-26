[itslearning-sdk](../../../modules.md) / [api/Workload](../index.md) / WorkloadAPI

# WorkloadAPI

WorkloadAPI

Overview:
Endpoint for Workload API.

Secured with OAuth2, requires the OAuth2 API scope `Workload`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new WorkloadAPI()

```ts
new WorkloadAPI(http): WorkloadAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`WorkloadAPI`](WorkloadAPI.md)

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

### getAllStudentsWorkload()

```ts
getAllStudentsWorkload(pageIndex, pageSize): Promise<unknown>
```

Gets a list of all students with their corresponding workload.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of students per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

***

### getCourseStudentsWorkload()

```ts
getCourseStudentsWorkload(
   courseId, 
   pageIndex, 
pageSize): Promise<unknown>
```

Gets a list of students in a specified course with their corresponding workload.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of students per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

***

### getMenteesWorkload()

```ts
getMenteesWorkload(pageIndex, pageSize): Promise<unknown>
```

Gets a list of mentees with their corresponding workload.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of mentees per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

***

### getStudentCourseAssignments()

```ts
getStudentCourseAssignments(
   studentId, 
   courseId, 
   pageIndex, 
pageSize): Promise<unknown>
```

Gets a list of assignments for a particular student in a specific course with corresponding workload.

#### Parameters

##### studentId

`number`

The unique ID of the student.

##### courseId

`number`

The unique ID of the course.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of assignments per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

***

### getStudentCoursesWorkload()

```ts
getStudentCoursesWorkload(
   studentId, 
   pageIndex, 
pageSize): Promise<unknown>
```

Gets a list of courses with corresponding workload for a specific student.

#### Parameters

##### studentId

`number`

The unique ID of the student.

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of courses per page (default = 10).

#### Returns

`Promise`\<`unknown`\>
