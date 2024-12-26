[itslearning-sdk](../../../modules.md) / [api/LightBulletinCourse](../index.md) / LightBulletinCourseAPI

# LightBulletinCourseAPI

LightBulletinCourseAPI

Overview:
Endpoint for light bulletins in course scope.

Secured with OAuth2, requires OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new LightBulletinCourseAPI()

```ts
new LightBulletinCourseAPI(http): LightBulletinCourseAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`LightBulletinCourseAPI`](LightBulletinCourseAPI.md)

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

### createBulletin()

```ts
createBulletin(bulletinData): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinIdentifier>
```

Creates a new light bulletin for a course.

#### Parameters

##### bulletinData

[`ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1.md)

The data for the new light bulletin.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLightBulletinsLightBulletinIdentifier`](../../../types/type-aliases/ItslearningRestApiEntitiesLightBulletinsLightBulletinIdentifier.md)\>

A promise that resolves to the response from the API.

***

### deleteBulletin()

```ts
deleteBulletin(bulletinId): Promise<SystemNetHttpHttpResponseMessage>
```

Deletes a specific bulletin along with its comments, embedded links, attached images, and resources.

#### Parameters

##### bulletinId

`number`

The unique ID of the light bulletin.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### getBulletinById()

```ts
getBulletinById(bulletinId): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinV2>
```

Gets a specific light bulletin by its identifier.

#### Parameters

##### bulletinId

`number`

The unique ID of the light bulletin.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLightBulletinsLightBulletinV2`](../../../types/type-aliases/ItslearningRestApiEntitiesLightBulletinsLightBulletinV2.md)\>

A promise that resolves to the light bulletin details.

***

### getBulletinElements()

```ts
getBulletinElements(
   bulletinId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesElementLink>
```

Gets the list of resources attached to the specified bulletin.

#### Parameters

##### bulletinId

`number`

The unique ID of the light bulletin.

##### pageIndex

`number` = `0`

(Optional) The index of the page to retrieve (default = 0).

##### pageSize

`number` = `100`

(Optional) The number of resources per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesElementLink`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesElementLink.md)\>

A promise that resolves to the list of attached resources.

***

### getCourseBulletins()

```ts
getCourseBulletins(
   courseId, 
   timePeriod, 
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinV2>
```

Gets light bulletins by course identifier.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### timePeriod

[`ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod`](../../../types/type-aliases/ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod.md) = `ItslearningRestApiEntitiesLightBulletinsLightBulletinTimePeriod.Current`

(Optional) The time period to filter bulletins.

##### useNewerThan?

`boolean`

(Optional) If true, retrieves bulletins newer than `fromId`.

##### fromId?

`number`

(Optional) The ID to start retrieving bulletins from.

##### pageIndex?

`number` = `0`

(Optional) The index of the page to retrieve (default = 0).

##### pageSize?

`number` = `100`

(Optional) The number of bulletins per page (default = 100).

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLightBulletinsLightBulletinV2`](../../../types/type-aliases/ItslearningRestApiEntitiesLightBulletinsLightBulletinV2.md)\>

A promise that resolves to the list of light bulletins.

***

### toggleBulletinPinnedStatus()

```ts
toggleBulletinPinnedStatus(bulletinId, pinned): Promise<SystemNetHttpHttpResponseMessage>
```

Toggles the pinned status of a bulletin.

#### Parameters

##### bulletinId

`number`

The unique ID of the light bulletin.

##### pinned

`boolean`

Boolean indicating whether to pin (`true`) or unpin (`false`) the bulletin.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### toggleCommentsForBulletin()

```ts
toggleCommentsForBulletin(bulletinId, allowComments): Promise<SystemNetHttpHttpResponseMessage>
```

Enables or disables comments for the specified bulletin.

#### Parameters

##### bulletinId

`number`

The unique ID of the light bulletin.

##### allowComments

`boolean`

Boolean indicating whether to allow (`true`) or disallow (`false`) comments.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### updateBulletin()

```ts
updateBulletin(bulletinData): Promise<SystemNetHttpHttpResponseMessage>
```

Updates an existing light bulletin.

#### Parameters

##### bulletinData

[`ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableLightBulletinLightBulletinAddInputDataV1.md)

The updated data for the light bulletin.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### uploadBulletinImage()

```ts
uploadBulletinImage(bulletinId, file): Promise<ItslearningRestApiEntitiesLightBulletinsLightBulletinOutputImageData>
```

Uploads a file attachment to temporary storage for the specified bulletin.

#### Parameters

##### bulletinId

`number`

The unique ID of the light bulletin.

##### file

The file to upload.

`Blob` | `File`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLightBulletinsLightBulletinOutputImageData`](../../../types/type-aliases/ItslearningRestApiEntitiesLightBulletinsLightBulletinOutputImageData.md)\>

A promise that resolves to the response from the API.
