[itslearning-sdk](../../../modules.md) / [api/NotificationsPost](../index.md) / NotificationsPostAPI

# NotificationsPostAPI

NotificationsPostAPI

Overview:
Endpoint for posting new notifications for the personal API.

The notifications you get access to are the same that are shown under the bell in itslearning.

Secured with OAuth2, requires the OAuth2 API scope `Notifications`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new NotificationsPostAPI()

```ts
new NotificationsPostAPI(http): NotificationsPostAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`NotificationsPostAPI`](NotificationsPostAPI.md)

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

### deleteNotificationsByLocation()

```ts
deleteNotificationsByLocation(location): Promise<SystemNetHttpHttpResponseMessage>
```

Deletes all personal notifications related to a specific location.

#### Parameters

##### location

[`ItslearningRestApiEntitiesDeletePersonalNotificationsForLocationTriggerV1`](../../../types/type-aliases/ItslearningRestApiEntitiesDeletePersonalNotificationsForLocationTriggerV1.md)

The location identifier related to the notifications to delete.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves when the notifications are successfully deleted.

***

### deleteNotificationsByObject()

```ts
deleteNotificationsByObject(object): Promise<SystemNetHttpHttpResponseMessage>
```

Deletes all personal notifications related to a specific object.

#### Parameters

##### object

[`ItslearningRestApiEntitiesDeletePersonalNotificationsForObjectTriggerV1`](../../../types/type-aliases/ItslearningRestApiEntitiesDeletePersonalNotificationsForObjectTriggerV1.md)

The object identifier related to the notifications to delete.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves when the notifications are successfully deleted.

***

### sendImportCompletedNotification()

```ts
sendImportCompletedNotification(
   courseId, 
   moduleId, 
   section, 
   state, 
   folders, 
resources): Promise<SystemNetHttpHttpResponseMessage>
```

Sends an "Import Completed" notification for a specific course and module.

The current user will be set as the author and a recipient of the notification.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### moduleId

`number`

The unique ID of the module.

##### section

[`ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsItslearningSectionUrlParameter.md)

The section related to the import.

##### state

`string`

The state of the import.

##### folders

`number`

The folders related to the import.

##### resources

`number`

The resources related to the import.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves when the notification is successfully sent.

***

### sendPersonalNotifications()

```ts
sendPersonalNotifications(notifications): Promise<SystemNetHttpHttpResponseMessage>
```

Sends personal notifications. The current user will be set as the author of all notifications.

#### Parameters

##### notifications

[`ItslearningRestApiEntitiesPersonalNotificationsPostV1`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalNotificationsPostV1.md)[]

An array of notification objects to send.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

A promise that resolves when the notifications are successfully sent.
