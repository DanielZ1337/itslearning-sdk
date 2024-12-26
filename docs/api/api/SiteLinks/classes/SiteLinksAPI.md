[itslearning-sdk](../../../modules.md) / [api/SiteLinks](../index.md) / SiteLinksAPI

# SiteLinksAPI

SiteLinksAPI

Overview:
Endpoint for retrieving the site links.

Secured with OAuth2, requires OAuth2 API scope `Person`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new SiteLinksAPI()

```ts
new SiteLinksAPI(http): SiteLinksAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`SiteLinksAPI`](SiteLinksAPI.md)

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

### getSiteLinks()

```ts
getSiteLinks(): Promise<unknown>
```

Gets the site links visible to the user.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of site links.
