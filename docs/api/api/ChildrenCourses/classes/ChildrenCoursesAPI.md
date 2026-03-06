[itslearning-sdk](../../../modules.md) / [api/ChildrenCourses](../index.md) / ChildrenCoursesAPI

# ChildrenCoursesAPI

ChildrenCoursesAPI

Overview:
Endpoint for Children Courses API.
Provides access to course features for a guardian's children.

Secured with OAuth2 and requires the OAuth2 API scope `Children`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ChildrenCoursesAPI(http): ChildrenCoursesAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ChildrenCoursesAPI`

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

### getChildCourseFeatures()

```ts
getChildCourseFeatures(childId, courseId): Promise<ItslearningRestApiEntitiesPersonalFeature>;
```

Gets features available for a child's course.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalFeature`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalFeature.md)\>

A promise that resolves to the course features for the child.
