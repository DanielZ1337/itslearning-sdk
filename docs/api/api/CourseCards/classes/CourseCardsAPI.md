[itslearning-sdk](../../../modules.md) / [api/CourseCards](../index.md) / CourseCardsAPI

# CourseCardsAPI

CourseCardsAPI

Overview:
Endpoint for CourseCards API.
Course cards in itslearning are personal and provide a better overview on the homepage for the daily workflow.

Secured with OAuth2, and requires OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new CourseCardsAPI()

```ts
new CourseCardsAPI(http): CourseCardsAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`CourseCardsAPI`](CourseCardsAPI.md)

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

### applyCourseCardSettings()

```ts
applyCourseCardSettings(courseId, settings): Promise<ItslearningRestApiEntitiesCourseCardSettings>
```

Applies course card settings to a specific course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### settings

`Partial`\<[`ItslearningRestApiEntitiesCourseCardSettings`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseCardSettings.md)\>

The settings to apply to the course card.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourseCardSettings`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseCardSettings.md)\>

A promise that resolves when the settings are successfully applied.

***

### getCourseCardSettings()

```ts
getCourseCardSettings(courseId): Promise<ItslearningRestApiEntitiesCourseCardSettings>
```

Retrieves the course card settings for a specific course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCourseCardSettings`](../../../types/type-aliases/ItslearningRestApiEntitiesCourseCardSettings.md)\>

A promise that resolves to the CourseCardSettings.

***

### getStarredCourseCards()

```ts
getStarredCourseCards(
   pageIndex, 
   pageSize, 
   sortBy, 
   searchText?, 
isShowMore?): Promise<EntityListOfItslearningRestApiEntitiesCourseCard>
```

Retrieves a paginated list of course cards for the user's starred courses.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `10`

The number of course cards per page (default is 10).

##### sortBy

`string` = `"Title"`

The criteria to sort the course cards (e.g., 'lastAccessed', 'title').

##### searchText?

`string`

The text to search within course titles or descriptions.

##### isShowMore?

`boolean` = `false`

Flag indicating whether to show more details.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesCourseCard`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesCourseCard.md)\>

A promise that resolves to a paginated list of starred course cards.

***

### getUnstarredCourseCards()

```ts
getUnstarredCourseCards(
   pageIndex, 
   pageSize, 
   sortBy, 
   searchText?, 
isShowMore?): Promise<EntityListOfItslearningRestApiEntitiesCourseCard>
```

Retrieves a paginated list of course cards for the user's unstarred courses.

#### Parameters

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `10`

The number of course cards per page (default is 10).

##### sortBy

`string` = `"Title"`

The criteria to sort the course cards (e.g., 'lastAccessed', 'title').

##### searchText?

`string`

The text to search within course titles or descriptions.

##### isShowMore?

`boolean` = `false`

Flag indicating whether to show more details.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesCourseCard`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesCourseCard.md)\>

A promise that resolves to a paginated list of unstarred course cards.

***

### rankCourseCard()

```ts
rankCourseCard(body): Promise<void>
```

Ranks a course card. (No documentation available; assumptions made based on endpoint name)

#### Parameters

##### body

[`ItslearningRestApiEntitiesPersonCourseRank`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonCourseRank.md)

The ranking request containing courseId and rank position.

#### Returns

`Promise`\<`void`\>
