[itslearning-sdk](../../../modules.md) / [api/ChildrenOrganisation](../index.md) / ChildrenOrganisationAPI

# ChildrenOrganisationAPI

ChildrenOrganisationAPI

Overview:
Endpoint for Children Organisation API.
Provides access to organisation permissions for a guardian's children.

Secured with OAuth2 and requires the OAuth2 API scope `Children`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ChildrenOrganisationAPI(http): ChildrenOrganisationAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ChildrenOrganisationAPI`

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

### getChildPermissions()

```ts
getChildPermissions(childId): Promise<ItslearningRestApiEntitiesChildOrganisationPermissions>;
```

Gets the organisation permissions for a specific child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesChildOrganisationPermissions`](../../../types/type-aliases/ItslearningRestApiEntitiesChildOrganisationPermissions.md)\>

A promise that resolves to the child's organisation permissions.
