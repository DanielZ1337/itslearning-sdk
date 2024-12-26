[itslearning-sdk](../../../modules.md) / [api/Token](../index.md) / TokenAPI

# TokenAPI

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new TokenAPI()

```ts
new TokenAPI(http, clientId): TokenAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

##### clientId

`string` = `defaultConfig.clientId`

#### Returns

[`TokenAPI`](TokenAPI.md)

#### Overrides

[`Manager`](../../../lib/Manager/classes/Manager.md).[`constructor`](../../../lib/Manager/classes/Manager.md#constructors)

## Properties

### http

```ts
protected readonly http: HttpClient;
```

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`http`](../../../lib/Manager/classes/Manager.md#http-1)

## Methods

### getAccessToken()

```ts
getAccessToken(code): Promise<ItsolutionsItslearningWebRestApiPersonalTokenResponse>
```

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ItsolutionsItslearningWebRestApiPersonalTokenResponse`](../../../types/type-aliases/ItsolutionsItslearningWebRestApiPersonalTokenResponse.md)\>

***

### refreshAccessToken()

```ts
refreshAccessToken(clientId, refreshToken): Promise<ItsolutionsItslearningWebRestApiPersonalTokenResponse>
```

#### Parameters

##### clientId

`string`

##### refreshToken

`string`

#### Returns

`Promise`\<[`ItsolutionsItslearningWebRestApiPersonalTokenResponse`](../../../types/type-aliases/ItsolutionsItslearningWebRestApiPersonalTokenResponse.md)\>

***

### revokeToken()

```ts
revokeToken(refreshToken): Promise<void>
```

#### Parameters

##### refreshToken

`string`

#### Returns

`Promise`\<`void`\>
