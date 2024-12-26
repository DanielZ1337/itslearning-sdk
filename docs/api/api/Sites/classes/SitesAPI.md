[itslearning-sdk](../../../modules.md) / [api/Sites](../index.md) / SitesAPI

# SitesAPI

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new SitesAPI()

```ts
new SitesAPI(http): SitesAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`SitesAPI`](SitesAPI.md)

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

### getAllCustomerSites()

```ts
getAllCustomerSites(sitesFilter?): Promise<ItslearningRestApiEntitiesSite>
```

#### Parameters

##### sitesFilter?

[`ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter`](../../../types/enumerations/ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter.md)

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesSite`](../../../types/type-aliases/ItslearningRestApiEntitiesSite.md)\>

***

### getAllOrganisations()

```ts
getAllOrganisations(sitesFilter?): Promise<EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite>
```

#### Parameters

##### sitesFilter?

[`ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter`](../../../types/enumerations/ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter.md)

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite.md)\>

***

### getLoginDetails()

```ts
getLoginDetails(customerId): Promise<ItslearningRestApiEntitiesSiteLoginDetails>
```

#### Parameters

##### customerId

`number`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesSiteLoginDetails`](../../../types/type-aliases/ItslearningRestApiEntitiesSiteLoginDetails.md)\>

***

### getSiteByCustomerId()

```ts
getSiteByCustomerId(customerId): Promise<ItslearningRestApiEntitiesSite>
```

#### Parameters

##### customerId

`number`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesSite`](../../../types/type-aliases/ItslearningRestApiEntitiesSite.md)\>

***

### getSiteByShortname()

```ts
getSiteByShortname(shortname): Promise<ItslearningRestApiEntitiesSite>
```

#### Parameters

##### shortname

`string`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesSite`](../../../types/type-aliases/ItslearningRestApiEntitiesSite.md)\>

***

### getSites()

```ts
getSites(
   startsWith?, 
   pageIndex?, 
   pageSize?, 
sitesFilter?): Promise<EntityListOfItslearningRestApiEntitiesSiteBase>
```

#### Parameters

##### startsWith?

`string`

##### pageIndex?

`number` = `0`

##### pageSize?

`number` = `100`

##### sitesFilter?

[`ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter`](../../../types/enumerations/ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter.md) = `ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter.All`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesSiteBase`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesSiteBase.md)\>

***

### searchOrganisations()

```ts
searchOrganisations(
   searchText, 
   pageIndex, 
   pageSize, 
sitesFilter?): Promise<EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite>
```

#### Parameters

##### searchText

`string`

##### pageIndex

`number` = `0`

##### pageSize

`number` = `100`

##### sitesFilter?

[`ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter`](../../../types/enumerations/ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter.md)

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite.md)\>
