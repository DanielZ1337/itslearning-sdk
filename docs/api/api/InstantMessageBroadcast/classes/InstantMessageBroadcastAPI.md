[itslearning-sdk](../../../modules.md) / [api/InstantMessageBroadcast](../index.md) / InstantMessageBroadcastAPI

# InstantMessageBroadcastAPI

InstantMessageBroadcastAPI

Overview:
Endpoint for internal instant message broadcasting for personal API.

Secured with OAuth2 and requires the OAuth2 API scope `InstantMessage`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new InstantMessageBroadcastAPI()

```ts
new InstantMessageBroadcastAPI(http): InstantMessageBroadcastAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`InstantMessageBroadcastAPI`](InstantMessageBroadcastAPI.md)

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

### deleteBroadcastThreads()

```ts
deleteBroadcastThreads(data): Promise<void>
```

Marks broadcast threads as deleted and creates an async task
to permanently delete them and all associated data.

#### Parameters

##### data

`number`[]

#### Returns

`Promise`\<`void`\>

***

### getBroadcastStatistics()

```ts
getBroadcastStatistics(threadId): Promise<ItsolutionsItslearningItslCoreBusinessLayerInstantMessageBroadcastBroadcastMessageStatisticsEntity>
```

Gets statistics on how many recipients read messages of specified thread.

#### Parameters

##### threadId

`number`

The unique ID of the broadcast thread.

#### Returns

`Promise`\<[`ItsolutionsItslearningItslCoreBusinessLayerInstantMessageBroadcastBroadcastMessageStatisticsEntity`](../../../types/type-aliases/ItsolutionsItslearningItslCoreBusinessLayerInstantMessageBroadcastBroadcastMessageStatisticsEntity.md)\>

***

### sendBroadcastMessage()

```ts
sendBroadcastMessage(data): Promise<unknown>
```

Sends a broadcast instant message.
Creates a new thread for a new broadcast message.

#### Parameters

##### data

[`ItslearningRestApiEntitiesBroadcastInstantMessageToSend`](../../../types/type-aliases/ItslearningRestApiEntitiesBroadcastInstantMessageToSend.md)

The data required to send the broadcast message.

#### Returns

`Promise`\<`unknown`\>
