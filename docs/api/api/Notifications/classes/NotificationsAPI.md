[itslearning-sdk](../../../modules.md) / [api/Notifications](../index.md) / NotificationsAPI

# NotificationsAPI

NotificationsAPI

Overview:
Endpoint for notifications and news feed for personal API.

Secured with OAuth2, requires the OAuth2 API scope `Notifications`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new NotificationsAPI()

```ts
new NotificationsAPI(http): NotificationsAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`NotificationsAPI`](NotificationsAPI.md)

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

### getBulletinElements()

```ts
getBulletinElements(
   bulletinId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesElementLink>
```

Gets the list of resources attached to a given bulletin.

#### Parameters

##### bulletinId

`number`

The unique identifier of the bulletin.

##### pageIndex

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize

`number` = `10`

The size of the page (default = 10).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesElementLink`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesElementLink.md)\>

***

### getNewsFeed()

```ts
getNewsFeed(pageIndex, pageSize): Promise<unknown>
```

Gets the user's news feed (activities, resources, bulletins).
The feed is collected from all or favorite courses/projects, depending on user settings.

#### Parameters

##### pageIndex

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize

`number` = `10`

How many items per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

***

### getNotificationElements()

```ts
getNotificationElements(
   notificationId, 
   pageIndex, 
pageSize): Promise<EntityListOfItslearningRestApiEntitiesElementLink>
```

Gets the list of elements related to a given notification.

#### Parameters

##### notificationId

`number`

The unique identifier of the notification.

##### pageIndex

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize

`number` = `10`

The size of the page (default = 10).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesElementLink`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesElementLink.md)\>

***

### ~~getNotificationsV1()~~

```ts
getNotificationsV1(pageIndex, pageSize): Promise<EntityListOfItslearningRestApiEntitiesNotification>
```

Gets personal notifications (read and unread) (v1).

#### Parameters

##### pageIndex

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize

`number` = `10`

The size of the page (default = 10).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesNotification`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesNotification.md)\>

#### Deprecated

Use getNotificationsV2 instead.

***

### getNotificationsV2()

```ts
getNotificationsV2(
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesNotification>
```

Gets personal notifications (read and unread) (v2). Supports paging.

#### Parameters

##### useNewerThan?

`boolean`

If true, retrieve notifications newer than FromId.

##### fromId?

`number`

NotificationId from which to page.

##### pageIndex?

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize?

`number` = `10`

The size of the page (default = 10).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesNotification`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesNotification.md)\>

***

### ~~getStreamV1()~~

```ts
getStreamV1(
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
   pageSize?, 
fromPublishedDate?): Promise<unknown>
```

Gets the user's stream feed (collected from user's favorite courses/projects).
Items are sorted by PublishedDate; specify FromId + fromPublishedDate to page.

#### Parameters

##### useNewerThan?

`boolean`

Set true to retrieve newer items than specified FromId.

##### fromId?

`number`

NotificationId from which to page.

##### pageIndex?

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize?

`number` = `100`

The size of the page (default = 100).

##### fromPublishedDate?

The date/time to filter from (ISO 8601 string).

`string` | `Date`

#### Returns

`Promise`\<`unknown`\>

#### Deprecated

Use getStreamV2 instead.

***

### getStreamV2()

```ts
getStreamV2(
   showLightBulletins, 
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesStreamItemV2>
```

Gets the user's stream feed (v2). Collected from user's favorite courses/projects.
Uses FromId + UseNewerThan to page.

#### Parameters

##### showLightBulletins

`boolean` = `true`

Whether to show light bulletins.

##### useNewerThan?

`boolean`

If true, retrieve newer items than the FromId.

##### fromId?

`number`

NotificationId from which to page.

##### pageIndex?

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize?

`number` = `100`

The size of the page (default = 100).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesStreamItemV2`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesStreamItemV2.md)\>

***

### getUnreadCount()

```ts
getUnreadCount(): Promise<number>
```

Returns the number of unread personal notifications for the user.

#### Returns

`Promise`\<`number`\>

***

### getUnseenCount()

```ts
getUnseenCount(): Promise<number>
```

Returns the number of unseen personal notifications for the user.

#### Returns

`Promise`\<`number`\>

***

### markAllAsSeen()

```ts
markAllAsSeen(): Promise<void>
```

Updates all personal notifications to be seen.

#### Returns

`Promise`\<`void`\>

***

### ~~updateNotificationsV1()~~

```ts
updateNotificationsV1(data): Promise<EntityListOfItslearningRestApiEntitiesNotification>
```

Updates the personal notifications to be read (v1).

#### Parameters

##### data

[`ItslearningRestApiEntitiesUpdatableNotificationUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableNotificationUpdateV1.md)[]

The notification data to update (e.g., marking as read).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesNotification`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesNotification.md)\>

#### Deprecated

Use updateNotificationsV2 instead.

***

### updateNotificationsV2()

```ts
updateNotificationsV2(data): Promise<SystemNetHttpHttpResponseMessage>
```

Updates the personal notifications to be read (v2).

#### Parameters

##### data

[`ItslearningRestApiEntitiesUpdatableNotificationUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableNotificationUpdateV1.md)[]

The notification data to update (e.g., marking as read).

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>
