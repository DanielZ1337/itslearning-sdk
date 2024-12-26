[itslearning-sdk](../../../modules.md) / [api/SearchData](../index.md) / SearchDataAPI

# SearchDataAPI

SearchDataAPI

Overview:
Endpoint for SearchData API.

Secured with OAuth2, requires OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new SearchDataAPI()

```ts
new SearchDataAPI(http): SearchDataAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`SearchDataAPI`](SearchDataAPI.md)

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

### postSearchData()

```ts
postSearchData(data): Promise<unknown>
```

Posts search data to the SearchData API.

**Note**: No documentation available for this endpoint.

#### Parameters

##### data

`unknown`

The search data to post.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the response from the API.
