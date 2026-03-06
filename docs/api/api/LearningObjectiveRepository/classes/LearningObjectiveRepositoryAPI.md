[itslearning-sdk](../../../modules.md) / [api/LearningObjectiveRepository](../index.md) / LearningObjectiveRepositoryAPI

# LearningObjectiveRepositoryAPI

LearningObjectiveRepositoryAPI

Overview:
Endpoint for Learning Objective Repository API.
Provides access to learning objective subjects by country.

Secured with OAuth2.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new LearningObjectiveRepositoryAPI(http): LearningObjectiveRepositoryAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`LearningObjectiveRepositoryAPI`

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

### getSubjectsByCountry()

```ts
getSubjectsByCountry(countryCode): Promise<ItslearningRestApiEntitiesLearningObjectiveRepositorySubjectLabel[]>;
```

Gets learning objective subjects for a country.

#### Parameters

##### countryCode

`string`

The ISO country code (e.g. "NO", "SE", "DK").

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLearningObjectiveRepositorySubjectLabel`](../../../types/type-aliases/ItslearningRestApiEntitiesLearningObjectiveRepositorySubjectLabel.md)[]\>

A promise that resolves to a list of subject labels for the given country.
