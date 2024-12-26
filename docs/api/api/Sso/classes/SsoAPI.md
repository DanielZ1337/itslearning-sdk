[itslearning-sdk](../../../modules.md) / [api/Sso](../index.md) / SsoAPI

# SsoAPI

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new SsoAPI()

```ts
new SsoAPI(http): SsoAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`SsoAPI`](SsoAPI.md)

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

### generateSSOUrl()

```ts
generateSSOUrl(url): Promise<string>
```

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`string`\>
