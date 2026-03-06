[itslearning-sdk](../../../modules.md) / [api/Statistics](../index.md) / StatisticsAPI

# StatisticsAPI

StatisticsAPI

Overview:
Endpoint for Statistics API.

Secured with OAuth2, requires the OAuth2 API scope `Statistics`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new StatisticsAPI(http): StatisticsAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`StatisticsAPI`

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

### postUserEvent()

```ts
postUserEvent(events): Promise<void>;
```

Posts a batch of user events to the Statistics API.

#### Parameters

##### events

[`ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventDto`](../../../types/type-aliases/ItsolutionsItslearningWebRestApiServiceLogicStatisticsEventsUserEventDto.md)[]

A collection of user event DTOs to be processed.

#### Returns

`Promise`\<`void`\>
