[itslearning-sdk](../../../modules.md) / [api/ImmersiveReader](../index.md) / ImmersiveReaderAPI

# ImmersiveReaderAPI

ImmersiveReaderAPI

Overview:
Endpoint for Immersive Reader API.
Provides access tokens and configuration for the Microsoft Immersive Reader.

Secured with OAuth2.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ImmersiveReaderAPI(http): ImmersiveReaderAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ImmersiveReaderAPI`

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

### getImmersiveReaderInfo()

```ts
getImmersiveReaderInfo(
   resourceId, 
   resourceType, 
contentBlockId?): Promise<ItslearningRestApiEntitiesImmersiveReaderInfo>;
```

Gets the immersive reader info for a specific resource.

#### Parameters

##### resourceId

`number`

The unique identifier of the resource.

##### resourceType

`number`

The type of the resource.

##### contentBlockId?

`number`

The optional content block ID within the resource.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesImmersiveReaderInfo`](../../../types/type-aliases/ItslearningRestApiEntitiesImmersiveReaderInfo.md)\>

A promise that resolves to the immersive reader info including access token.
