[itslearning-sdk](../../../modules.md) / [api/Messages](../index.md) / MessagesAPI

# MessagesAPI

MessagesAPI

Overview:
Endpoint for internal messages for personal API.

Secured with OAuth2 and requires the OAuth2 API scope `Messages`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new MessagesAPI()

```ts
new MessagesAPI(http): MessagesAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`MessagesAPI`](MessagesAPI.md)

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

### deleteMessage()

```ts
deleteMessage(messageId, messageOrigin): Promise<void>
```

Deletes a message by moving it to the deleted folder.

#### Parameters

##### messageId

`number`

The unique ID of the message.

##### messageOrigin

`string`

The origin of the message.

#### Returns

`Promise`\<`void`\>

***

### getMessage()

```ts
getMessage(messageId): Promise<unknown>
```

Gets a single message by its ID.

#### Parameters

##### messageId

`number`

The unique ID of the message.

#### Returns

`Promise`\<`unknown`\>

***

### getMessageAttachment()

```ts
getMessageAttachment(fileId): Promise<unknown>
```

Gets an attachment from a message.

#### Parameters

##### fileId

`string`

The unique ID of the attachment file.

#### Returns

`Promise`\<`unknown`\>

***

### getMessages()

```ts
getMessages(
   useNewerThan?, 
   fromId?, 
   pageIndex?, 
pageSize?): Promise<unknown>
```

Gets the user's messages. Supports paging with UseNewerThan & FromId.

#### Parameters

##### useNewerThan?

`boolean`

If true, retrieve messages newer than FromId.

##### fromId?

`number`

MessageId to page from if useNewerThan is true.

##### pageIndex?

`number` = `0`

Which page to retrieve (default = 0).

##### pageSize?

`number` = `20`

The size of the page (default = 20).

#### Returns

`Promise`\<`unknown`\>

***

### getUnreadCount()

```ts
getUnreadCount(): Promise<number>
```

Returns the number of unread messages for the user.

#### Returns

`Promise`\<`number`\>

***

### getUnreadMessages()

```ts
getUnreadMessages(pageIndex, pageSize): Promise<unknown>
```

Gets the user's unread messages, supports paging.

#### Parameters

##### pageIndex

`number` = `0`

The page index (default = 0).

##### pageSize

`number` = `20`

The page size (default = 20, for example).

#### Returns

`Promise`\<`unknown`\>

***

### searchMessageRecipients()

```ts
searchMessageRecipients(searchText): Promise<unknown>
```

Searches for message recipients, given esafety rules.

#### Parameters

##### searchText

`string`

The text to search for recipients (min 3 chars).

#### Returns

`Promise`\<`unknown`\>

***

### sendMessage()

```ts
sendMessage(data): Promise<unknown>
```

Sends a message to recipients.

#### Parameters

##### data

`unknown`

Message details, including recipients and optional ReplyToMessageId.

#### Returns

`Promise`\<`unknown`\>

***

### setPushNotifications()

```ts
setPushNotifications(data): Promise<void>
```

(Obsolete) Sets push notifications for a device in itslearning.
Use `restapi/personal/person/push/v1` instead.

#### Parameters

##### data

`unknown`

The push configuration data.

#### Returns

`Promise`\<`void`\>

***

### toggleFavorite()

```ts
toggleFavorite(
   messageId, 
   isFavorite?, 
messageOrigin?): Promise<SystemNetHttpHttpResponseMessage>
```

Toggles a message's favorite status.

#### Parameters

##### messageId

`number`

The unique ID of the message.

##### isFavorite?

`boolean`

Whether the message is marked as favorite.

##### messageOrigin?

[`ItsolutionsItslUtilsConstantsMessageOrigin`](../../../types/type-aliases/ItsolutionsItslUtilsConstantsMessageOrigin.md)

The origin of the message.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

***

### updateMessage()

```ts
updateMessage(
   messageId, 
   messageOrigin, 
updateData): Promise<void>
```

Updates a message's properties (only supports updating IsRead).

#### Parameters

##### messageId

`number`

The unique ID of the message.

##### messageOrigin

`string`

The origin of the message.

##### updateData

`unknown`

The data to update (e.g., { IsRead: true }).

#### Returns

`Promise`\<`void`\>

***

### updateMessages()

```ts
updateMessages(data): Promise<void>
```

Updates messages (only supports updating IsRead field).

#### Parameters

##### data

`unknown`

The data containing message IDs and IsRead values to update.

#### Returns

`Promise`\<`void`\>
