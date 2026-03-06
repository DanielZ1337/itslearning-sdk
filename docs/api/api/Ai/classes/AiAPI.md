[itslearning-sdk](../../../modules.md) / [api/Ai](../index.md) / AiAPI

# AiAPI

AiAPI

Overview:
Endpoint for AI (Artificial Intelligence) API.
Provides access to AI-powered features such as text summarization, translation,
chat, and element creation.

Secured with OAuth2 and requires appropriate OAuth2 API scopes.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new AiAPI(http): AiAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`AiAPI`

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

### addLinkToStore()

```ts
addLinkToStore(storeToken, request): Promise<void>;
```

Adds a link as a resource to an AI store.

#### Parameters

##### storeToken

`string`

The store token identifier.

##### request

[`ItslearningRestApiEntitiesPersonalAiAddLinkRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalAiAddLinkRequest.md)

The link request containing the URL.

#### Returns

`Promise`\<`void`\>

***

### addResourcesToStore()

```ts
addResourcesToStore(storeToken, resourceIds): Promise<void>;
```

Adds course resources to an AI store.

#### Parameters

##### storeToken

`string`

The store token identifier.

##### resourceIds

`number`[]

Array of resource identifiers to add.

#### Returns

`Promise`\<`void`\>

***

### createElement()

```ts
createElement(request): Promise<unknown>;
```

Creates a new course element using AI-generated content.

#### Parameters

##### request

[`ItslearningRestApiEntitiesPersonalAiCreateElementRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalAiCreateElementRequest.md)

The element creation request.

#### Returns

`Promise`\<`unknown`\>

The created element.

***

### getStoreStatus()

```ts
getStoreStatus(storeToken): Promise<ItslearningRestApiEntitiesPersonalAiStoreStatusResponse>;
```

Returns the status of a file store (used for AI context uploads).

#### Parameters

##### storeToken

`string`

The store token identifier.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalAiStoreStatusResponse`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalAiStoreStatusResponse.md)\>

The store status response.

***

### removeFileFromStore()

```ts
removeFileFromStore(storeToken, fileId): Promise<void>;
```

Removes a file from an AI store.

#### Parameters

##### storeToken

`string`

The store token identifier.

##### fileId

`string`

The file identifier to remove.

#### Returns

`Promise`\<`void`\>

***

### sendRequest()

```ts
sendRequest(request): Promise<ItslearningRestApiEntitiesAiResponse>;
```

Sends an AI request and returns the AI-generated response.

#### Parameters

##### request

[`ItslearningRestApiEntitiesPersonalAiAiRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalAiAiRequest.md)

The AI request body.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesAiResponse`](../../../types/type-aliases/ItslearningRestApiEntitiesAiResponse.md)\>

The AI response.

***

### sendResponseRequest()

```ts
sendResponseRequest(request): Promise<ItslearningRestApiEntitiesAiResponse>;
```

Sends a follow-up response request (continuing a conversation).

#### Parameters

##### request

[`ItslearningRestApiEntitiesPersonalAiAiResponseRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalAiAiResponseRequest.md)

The response request with previous response ID.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesAiResponse`](../../../types/type-aliases/ItslearningRestApiEntitiesAiResponse.md)\>

The AI response.

***

### updateGuidelines()

```ts
updateGuidelines(guidelines): Promise<void>;
```

Updates the AI guidelines for the current user or organisation.

#### Parameters

##### guidelines

`string`

The guidelines text to set.

#### Returns

`Promise`\<`void`\>
