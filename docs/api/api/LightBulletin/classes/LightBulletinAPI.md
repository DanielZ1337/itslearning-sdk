[itslearning-sdk](../../../modules.md) / [api/LightBulletin](../index.md) / LightBulletinAPI

# LightBulletinAPI

LightBulletinAPI

Overview:
Endpoint for light bulletins for the personal API.

Secured with OAuth2, requires OAuth2 API scope `light bulletin`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new LightBulletinAPI()

```ts
new LightBulletinAPI(http): LightBulletinAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`LightBulletinAPI`](LightBulletinAPI.md)

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

### addCommentV1()

```ts
addCommentV1(lightBulletinId, comment): Promise<ItslearningRestApiEntitiesComment>
```

Adds a new comment to the specified light bulletin.

#### Parameters

##### lightBulletinId

`number`

The unique ID of the light bulletin.

##### comment

`string`

The text of the comment to add.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesComment`](../../../types/type-aliases/ItslearningRestApiEntitiesComment.md)\>

A promise that resolves to the response from the API.

***

### addCommentV2()

```ts
addCommentV2(lightBulletinId, comment): Promise<ItslearningRestApiEntitiesComment>
```

Adds a new comment to the specified light bulletin (Version 2).

#### Parameters

##### lightBulletinId

`number`

The unique ID of the light bulletin.

##### comment

[`ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1.md)

The text of the comment to add.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesComment`](../../../types/type-aliases/ItslearningRestApiEntitiesComment.md)\>

A promise that resolves to the response from the API.

***

### deleteComment()

```ts
deleteComment(commentId): Promise<SystemNetHttpHttpResponseMessage>
```

Deletes a specific comment.

#### Parameters

##### commentId

`number`

The unique ID of the comment to delete.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### getComments()

```ts
getComments(
   lightBulletinId, 
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesComment>
```

Retrieves the list of comments for the specified light bulletin.

#### Parameters

##### lightBulletinId

`number`

The unique ID of the light bulletin.

##### useNewerThan?

`boolean`

(Optional) If true, retrieves comments newer than `fromId`.

##### fromId?

`number`

(Optional) The ID to start retrieving comments from.

##### pageIndex?

`number` = `0`

(Optional) The index of the page to retrieve (default = 0).

##### pageSize?

`number` = `100`

(Optional) The number of comments per page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesComment`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesComment.md)\>

A promise that resolves to the list of comments.

***

### markBulletinsAsSeen()

```ts
markBulletinsAsSeen(data): Promise<SystemNetHttpHttpResponseMessage>
```

Marks light bulletins as seen.

#### Parameters

##### data

[`ItslearningRestApiEntitiesUpdatableLightBulletinUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableLightBulletinUpdateV1.md)[]

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### toggleCommentSubscription()

```ts
toggleCommentSubscription(lightBulletinId, subscribe): Promise<SystemNetHttpHttpResponseMessage>
```

Turns on/off notifications for new comments for the specified light bulletin.

#### Parameters

##### lightBulletinId

`number`

The unique ID of the light bulletin.

##### subscribe

[`ItslearningRestApiEntitiesUpdatableLightBulletinSubscriptionUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableLightBulletinSubscriptionUpdateV1.md)

Boolean indicating whether to subscribe (true) or unsubscribe (false) from notifications.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### updateCommentV1()

```ts
updateCommentV1(commentId, newText): Promise<SystemNetHttpHttpResponseMessage>
```

Updates the text of a specific comment.

#### Parameters

##### commentId

`number`

The unique ID of the comment to update.

##### newText

`string`

The new text for the comment.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.

***

### updateCommentV2()

```ts
updateCommentV2(commentId, newText): Promise<SystemNetHttpHttpResponseMessage>
```

Updates the text of a specific comment (Version 2).

#### Parameters

##### commentId

`number`

The unique ID of the comment to update.

##### newText

[`ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableLightBulletinCommentUpdateV1.md)

The new text for the comment.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves to the response from the API.
