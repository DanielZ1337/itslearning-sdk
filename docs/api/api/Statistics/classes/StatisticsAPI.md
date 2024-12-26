[itslearning-sdk](../../../modules.md) / [api/Statistics](../index.md) / StatisticsAPI

# StatisticsAPI

StatisticsAPI

Overview:
Endpoint for Statistics API.

Secured with OAuth2, requires the OAuth2 API scope `Statistics`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new StatisticsAPI()

```ts
new StatisticsAPI(http): StatisticsAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`StatisticsAPI`](StatisticsAPI.md)

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

### postUserEvent()

```ts
postUserEvent(eventData): Promise<unknown>
```

Posts a user event to the Statistics API.

#### Parameters

##### eventData

`unknown`

The data representing the user event to be posted.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the response from the API.
