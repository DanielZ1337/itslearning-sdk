[itslearning-sdk](../../../modules.md) / [api/PersonRelation](../index.md) / PersonRelationAPI

# PersonRelationAPI

PersonRelationAPI

Overview:
Endpoint to get the person relations.

Secured with OAuth2, requires the OAuth2 API scope `Person`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new PersonRelationAPI()

```ts
new PersonRelationAPI(http): PersonRelationAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`PersonRelationAPI`](PersonRelationAPI.md)

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

### getRelatedPersons()

```ts
getRelatedPersons(personId, relationType?): Promise<ItslearningRestApiEntitiesRelatedPerson[]>
```

Gets the relation between persons with detailed info
about the related person and the relation type.

#### Parameters

##### personId

`number`

The unique ID of the person.

##### relationType?

[`ItslearningRestApiEntitiesRelationType`](../../../types/type-aliases/ItslearningRestApiEntitiesRelationType.md)

The type of relation to filter by (e.g. 'Student', 'Guardian').

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesRelatedPerson`](../../../types/type-aliases/ItslearningRestApiEntitiesRelatedPerson.md)[]\>
