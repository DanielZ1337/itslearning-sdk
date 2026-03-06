[itslearning-sdk](../../../modules.md) / [api/CourseFeatures](../index.md) / CourseFeaturesAPI

# CourseFeaturesAPI

CourseFeaturesAPI

Overview:
Endpoint for Course Features API.
Provides access to the list of features available for a course.

Secured with OAuth2 and requires the OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new CourseFeaturesAPI(http): CourseFeaturesAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`CourseFeaturesAPI`

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

### getCourseFeatures()

```ts
getCourseFeatures(courseId): Promise<ItslearningRestApiEntitiesPersonalFeature>;
```

Gets features available for a specific course (v1).

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalFeature`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalFeature.md)\>

A promise that resolves to the course features.

***

### getCourseFeaturesV2()

```ts
getCourseFeaturesV2(courseId): Promise<ItslearningRestApiEntitiesPersonalFeature>;
```

Gets features available for a specific course (v2).

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalFeature`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalFeature.md)\>

A promise that resolves to the course features.
