[itslearning-sdk](../../../modules.md) / [api/InstantMessage](../index.md) / InstantMessagesAPI

# InstantMessagesAPI

InstantMessagesAPI

Overview:
Endpoint for internal instant messages for personal API.

Secured with OAuth2 and requires the OAuth2 API scope `InstantMessage`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new InstantMessagesAPI()

```ts
new InstantMessagesAPI(http): InstantMessagesAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`InstantMessagesAPI`](InstantMessagesAPI.md)

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

### addModeratorToThread()

```ts
addModeratorToThread(threadId, moderatorData): Promise<void>
```

Adds a moderator to an instant message thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### moderatorData

`unknown`

The moderator data (e.g., participant IDs).

#### Returns

`Promise`\<`void`\>

***

### addParticipantsToThread()

```ts
addParticipantsToThread(threadId, participants): Promise<ItslearningRestApiEntitiesInstantMessageThread>
```

Adds participants to an instant message thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### participants

[`ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1.md)

The participants to add.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### cancelAbuseReport()

```ts
cancelAbuseReport(instantMessageId): Promise<ItslearningRestApiEntitiesInstantMessage>
```

Cancels abuse report for an instant message.

#### Parameters

##### instantMessageId

`number`

The unique ID of the instant message.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessage`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessage.md)\>

***

### cancelAbuseThreadReport()

```ts
cancelAbuseThreadReport(threadId): Promise<void>
```

Cancels abuse report for a thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

#### Returns

`Promise`\<`void`\>

***

### checkPrivacyRules()

```ts
checkPrivacyRules(personId): Promise<unknown>
```

Checks privacy rules to determine if the user is allowed to initiate communication with a person.

#### Parameters

##### personId

`number`

The unique ID of the person.

#### Returns

`Promise`\<`unknown`\>

***

### deleteAttachment()

```ts
deleteAttachment(fileId): Promise<SystemNetHttpHttpResponseMessage>
```

Deletes temporary files that were uploaded.

#### Parameters

##### fileId

`string`

The ID of the file to delete.

#### Returns

`Promise`\<[`SystemNetHttpHttpResponseMessage`](../../../types/type-aliases/SystemNetHttpHttpResponseMessage.md)\>

***

### deleteInstantMessage()

```ts
deleteInstantMessage(instantMessageId): Promise<ItslearningRestApiEntitiesInstantMessage>
```

Deletes an instant message.

#### Parameters

##### instantMessageId

`number`

The unique ID of the instant message to delete.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessage`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessage.md)\>

***

### deleteThread()

```ts
deleteThread(threadId): Promise<void>
```

Deletes a thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread to delete.

#### Returns

`Promise`\<`void`\>

***

### getCollaborationThreadId()

```ts
getCollaborationThreadId(collaborationId): Promise<unknown>
```

Gets the instant message thread ID for group answer. Creates it if not present.

#### Parameters

##### collaborationId

`number`

The unique ID of the collaboration.

#### Returns

`Promise`\<`unknown`\>

***

### getInstantMessagePermissions()

```ts
getInstantMessagePermissions(): Promise<ItslearningRestApiEntitiesInstantMessagePermissions>
```

Gets permissions for the instant message system.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessagePermissions`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessagePermissions.md)\>

***

### ~~getMessageThreadsV1()~~

```ts
getMessageThreadsV1(
   maxThreadCount?, 
   threadPage?, 
maxMessages?): Promise<EntityListOfItslearningRestApiEntitiesInstantMessageThread>
```

Gets the user's message threads (v1).

#### Parameters

##### maxThreadCount?

`number`

The maximum number of threads to retrieve.

##### threadPage?

`number`

The page number of threads.

##### maxMessages?

`number`

The max number of messages to retrieve for each thread.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesInstantMessageThread.md)\>

#### Deprecated

Use v2 or v3 instead.

***

### getMessageThreadsV2()

```ts
getMessageThreadsV2(
   maxThreadCount?, 
   threadPage?, 
maxMessages?): Promise<EntityListOfItslearningRestApiEntitiesInstantMessageThread>
```

Gets the user's message threads (v2).

#### Parameters

##### maxThreadCount?

`number`

The maximum number of threads to retrieve.

##### threadPage?

`number`

The page number of threads.

##### maxMessages?

`number`

The max number of messages to retrieve per thread.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### getMessageThreadsV3()

```ts
getMessageThreadsV3(fromSortIndex?, pageSize?): Promise<ItslearningRestApiEntitiesInstantMessageThreadListModel>
```

Gets a collection of threads for the user, extended with a hasMore field (v3).

#### Parameters

##### fromSortIndex?

`number`

The sort index to start from.

##### pageSize?

`number` = `100`

The number of threads to retrieve.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThreadListModel`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThreadListModel.md)\>

***

### getOneToOneThreadId()

```ts
getOneToOneThreadId(personId): Promise<number>
```

Gets the instant message thread ID for a one-to-one conversation between the current user and another user.

#### Parameters

##### personId

`number`

The unique ID of the other user.

#### Returns

`Promise`\<`number`\>

***

### getParticipantsWithDisabledMessages()

```ts
getParticipantsWithDisabledMessages(threadId): Promise<ItslearningRestApiEntitiesMessagesDisabledThreadParticipants>
```

Gets a collection of thread participants who cannot see messages.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesMessagesDisabledThreadParticipants`](../../../types/type-aliases/ItslearningRestApiEntitiesMessagesDisabledThreadParticipants.md)\>

***

### getRecipientPersons()

```ts
getRecipientPersons(requestData): Promise<unknown>
```

Gets recipient persons requested (bulk lookup).

#### Parameters

##### requestData

`unknown`

The request body containing criteria for recipients.

#### Returns

`Promise`\<`unknown`\>

***

### getRecipientsV1()

```ts
getRecipientsV1(
   personIds, 
   courseId?, 
projectId?): Promise<unknown>
```

Gets recipients (persons, course or project) requested (v1).

#### Parameters

##### personIds

`number`[]

Array of person IDs.

##### courseId?

`number`

Optional course ID.

##### projectId?

`number`

Optional project ID.

#### Returns

`Promise`\<`unknown`\>

***

### getRecipientsV2()

```ts
getRecipientsV2(
   personIds, 
   courseIds, 
projectIds): Promise<unknown>
```

Gets recipients (persons, courses, or projects) requested (v2).

#### Parameters

##### personIds

`number`[]

Array of person IDs.

##### courseIds

`number`[]

Array of course IDs.

##### projectIds

`number`[]

Array of project IDs.

#### Returns

`Promise`\<`unknown`\>

***

### getSettingsV1()

```ts
getSettingsV1(): Promise<unknown>
```

Gets the settings for the instant message system (v1).

#### Returns

`Promise`\<`unknown`\>

***

### getSettingsV2()

```ts
getSettingsV2(): Promise<unknown>
```

Gets the settings for the instant message system (v2).

#### Returns

`Promise`\<`unknown`\>

***

### getStarredMessagesCount()

```ts
getStarredMessagesCount(): Promise<number>
```

Gets the number of starred messages for the current user.

#### Returns

`Promise`\<`number`\>

***

### getSuggestions()

```ts
getSuggestions(searchText, maxSuggestions): Promise<ItslearningRestApiEntitiesInstantMessageFilterSuggestion[]>
```

Searches for suggestions of person names or thread names matching the input.

#### Parameters

##### searchText

`string`

The text to search for.

##### maxSuggestions

`number` = `10`

The max number of suggestions to return.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageFilterSuggestion`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageFilterSuggestion.md)[]\>

***

### getThreadAndMessagesV2()

```ts
getThreadAndMessagesV2(
   threadId, 
   maxMessages, 
   upperBoundInstantMessageId?, 
lowerBoundInstantMessageId?): Promise<ItslearningRestApiEntitiesInstantMessageThread>
```

Gets an instant message thread and messages (v2).
One cannot use both lowerBoundInstantMessageId and upperBoundInstantMessageId.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### maxMessages

`number` = `100`

The max number of messages to retrieve.

##### upperBoundInstantMessageId?

`number`

The message ID to retrieve before.

##### lowerBoundInstantMessageId?

`number`

The message ID to retrieve after.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### ~~getThreadMessagesV1()~~

```ts
getThreadMessagesV1(
   threadId, 
   maxMessages?, 
   upperBoundInstantMessageId?, 
lowerBoundInstantMessageId?): Promise<EntityListOfItslearningRestApiEntitiesInstantMessage>
```

Gets messages in a specific thread (v1).

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### maxMessages?

`number`

The max number of messages to retrieve.

##### upperBoundInstantMessageId?

`number`

The message ID to retrieve messages before.

##### lowerBoundInstantMessageId?

`number`

The message ID to retrieve messages after.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesInstantMessage`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesInstantMessage.md)\>

#### Deprecated

Use getThreadMessagesV2 instead.

***

### ~~getThreadMessagesV2()~~

```ts
getThreadMessagesV2(
   threadId, 
   maxMessages?, 
   upperBoundInstantMessageId?, 
lowerBoundInstantMessageId?): Promise<unknown>
```

Gets the messages in a specific thread (v2).
One cannot use both `lowerBoundInstantMessageId` and `upperBoundInstantMessageId`.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### maxMessages?

`number`

The max number of messages to retrieve.

##### upperBoundInstantMessageId?

`number`

The message ID to retrieve messages before.

##### lowerBoundInstantMessageId?

`number`

The message ID to retrieve messages after.

#### Returns

`Promise`\<`unknown`\>

#### Deprecated

Use getThreadMessagesV3 instead.

***

### getThreadMessagesV3()

```ts
getThreadMessagesV3(
   threadId, 
   pageSize?, 
fromId?): Promise<ItslearningRestApiEntitiesInstantMessageListModel>
```

Gets a collection of instant messages extended with a `hasMore` field (v3).

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### pageSize?

`number`

How many messages to fetch.

##### fromId?

`number`

The ID from which to start fetching.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageListModel`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageListModel.md)\>

***

### getThreadSuggestions()

```ts
getThreadSuggestions(searchText): Promise<ItslearningRestApiEntitiesInstantMessageThread[]>
```

Suggests conversations whose names contain the given search text.

#### Parameters

##### searchText

`string`

The text to search within thread names.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThread.md)[]\>

***

### getThreadUnreadCount()

```ts
getThreadUnreadCount(threadId): Promise<number>
```

Gets the number of unread messages in a specific thread for the current user.

#### Parameters

##### threadId

`number`

The unique ID of the instant message thread.

#### Returns

`Promise`\<`number`\>

The count of unread messages.

***

### getUnreadThreadsCount()

```ts
getUnreadThreadsCount(): Promise<number>
```

Gets the number of threads that contain unread messages.

#### Returns

`Promise`\<`number`\>

***

### registerCommunicationChannel()

```ts
registerCommunicationChannel(channelId, unregister): Promise<void>
```

Registers or unregisters a (SignalR) communication channel.

#### Parameters

##### channelId

`string`

The unique ID of the communication channel.

##### unregister

`boolean` = `false`

True to unregister, false to register.

#### Returns

`Promise`\<`void`\>

***

### removeParticipantsFromThread()

```ts
removeParticipantsFromThread(threadId, participants): Promise<ItslearningRestApiEntitiesInstantMessageThread>
```

Removes participants from an instant message thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### participants

[`ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1.md)

The participants to remove.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### restoreInstantMessage()

```ts
restoreInstantMessage(instantMessageId): Promise<ItslearningRestApiEntitiesInstantMessage>
```

Undelete (restore) an instant message.

#### Parameters

##### instantMessageId

`number`

The unique ID of the instant message to restore.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessage`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessage.md)\>

***

### restoreThread()

```ts
restoreThread(threadId): Promise<void>
```

Restores deletion for a thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread to restore.

#### Returns

`Promise`\<`void`\>

***

### searchMessagesInThread()

```ts
searchMessagesInThread(threadId, searchText): Promise<number[]>
```

Searches inside a given thread for messages matching the provided search text.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### searchText

`string`

The text to search for.

#### Returns

`Promise`\<`number`[]\>

***

### searchMessageThreads()

```ts
searchMessageThreads(searchData): Promise<EntityListOfItslearningRestApiEntitiesInstantMessageThread>
```

Searches the logged-in user's message threads.

#### Parameters

##### searchData

[`ItslearningRestApiEntitiesInstantMessageThreadSearchParams`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThreadSearchParams.md)

The data for the search (e.g. searchText, paging, etc.).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### searchRecipients()

```ts
searchRecipients(
   searchText, 
   instantMessageThreadId?, 
recipientRoles?): Promise<unknown>
```

Gets persons that the user is allowed to communicate with, given eSafety rules.

#### Parameters

##### searchText

`string`

The search text to filter persons.

##### instantMessageThreadId?

`number`

Optional thread ID to narrow down.

##### recipientRoles?

`string`[]

Optional array of roles to filter.

#### Returns

`Promise`\<`unknown`\>

***

### ~~sendInstantMessageV1()~~

```ts
sendInstantMessageV1(data): Promise<void>
```

Sends an instant message (v1). Use v2 instead.

#### Parameters

##### data

`unknown`

The data required to send the message.

#### Returns

`Promise`\<`void`\>

#### Deprecated

Use sendInstantMessageV2 instead.

***

### sendInstantMessageV2()

```ts
sendInstantMessageV2(data): Promise<ItslearningRestApiEntitiesInstantMessageThread>
```

Sends an instant message (v2).
Creates a new thread or reuses an old one. Returns the thread the message was sent to.

#### Parameters

##### data

[`ItslearningRestApiEntitiesInstantMessageToSendV2`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageToSendV2.md)

The data required to send the message.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### toggleMessageStar()

```ts
toggleMessageStar(instantMessageId): Promise<void>
```

Toggles whether the given message is starred or not.

#### Parameters

##### instantMessageId

`number`

The unique ID of the instant message.

#### Returns

`Promise`\<`void`\>

***

### togglePersonBlock()

```ts
togglePersonBlock(personId): Promise<boolean>
```

Toggles blocking a specific person.

#### Parameters

##### personId

`number`

The unique ID of the person to block/unblock.

#### Returns

`Promise`\<`boolean`\>

***

### toggleThreadReplies()

```ts
toggleThreadReplies(threadId): Promise<void>
```

Toggles whether students can send replies to this thread or not.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

#### Returns

`Promise`\<`void`\>

***

### updateInstantMessageText()

```ts
updateInstantMessageText(data): Promise<ItslearningRestApiEntitiesInstantMessage>
```

Updates the text for an instant message.

#### Parameters

##### data

[`ItslearningRestApiEntitiesInstantMessageToPatch`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageToPatch.md)

The data with updated message text.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessage`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessage.md)\>

***

### updateLastRead()

```ts
updateLastRead(
   threadId, 
   lastReadInstantMessageId, 
sortIndex?): Promise<void>
```

Updates the last read instant message ID for a thread.

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### lastReadInstantMessageId

`number`

The message ID to mark as last read.

##### sortIndex?

`number`

The sort index of the message (optional).

#### Returns

`Promise`\<`void`\>

***

### updateThread()

```ts
updateThread(threadId, updateData): Promise<ItslearningRestApiEntitiesInstantMessageThread>
```

Updates an instant message thread (e.g. name or participants).

#### Parameters

##### threadId

`number`

The unique ID of the thread.

##### updateData

[`ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1`](../../../types/type-aliases/ItslearningRestApiEntitiesUpdatableInstantMessageThreadUpdateV1.md)

The data for updating the thread.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesInstantMessageThread`](../../../types/type-aliases/ItslearningRestApiEntitiesInstantMessageThread.md)\>

***

### uploadAttachment()

```ts
uploadAttachment(fileData): Promise<unknown>
```

Uploads a file attachment to temporary storage.

#### Parameters

##### fileData

`FormData`

The file to upload, wrapped in FormData.

#### Returns

`Promise`\<`unknown`\>
