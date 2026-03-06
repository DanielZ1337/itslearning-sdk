[itslearning-sdk](../../../modules.md) / [api/CoursesGroups](../index.md) / CoursesGroupsAPI

# CoursesGroupsAPI

CoursesGroupsAPI

Overview:
Endpoint for Courses Groups API.
Provides access to manage course groups and group sets.

Secured with OAuth2 and requires the OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new CoursesGroupsAPI(http): CoursesGroupsAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`CoursesGroupsAPI`

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

### createOrReplaceCourseGroupSets()

```ts
createOrReplaceCourseGroupSets(courseId, groupSets): Promise<void>;
```

Creates or replaces course group sets for a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### groupSets

[`ItslearningRestApiEntitiesCourseGroupsCourseGroupSet`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseGroupsCourseGroupSet.md)[]

The group sets to create or replace.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the group sets are updated.

***

### removeCourseGroups()

```ts
removeCourseGroups(courseId, groupsToRemove): Promise<void>;
```

Removes groups from a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### groupsToRemove

[`ItslearningRestApiEntitiesCourseGroupsCourseGroupsToRemove`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseGroupsCourseGroupsToRemove.md)

The groups to remove from the course.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the groups are removed.
