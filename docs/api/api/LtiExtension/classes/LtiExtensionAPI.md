[itslearning-sdk](../../../modules.md) / [api/LtiExtension](../index.md) / LtiExtensionAPI

# LtiExtensionAPI

LtiExtensionAPI

Overview:
API controller for LTI extensions.

Secured with OAuth2, requires OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new LtiExtensionAPI()

```ts
new LtiExtensionAPI(http): LtiExtensionAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`LtiExtensionAPI`](LtiExtensionAPI.md)

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

### getLtiDetailsV1()

```ts
getLtiDetailsV1(extensionId, courseId): Promise<ItslearningRestApiEntitiesPersonalLtiExtensionDetails>
```

Gets the LTI details for the user and for the given course (if defined).

#### Parameters

##### extensionId

`number`

The unique ID of the LTI extension.

##### courseId

`number` = `0`

(Optional) The unique ID of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalLtiExtensionDetails`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalLtiExtensionDetails.md)\>

A promise that resolves to the LTI details.

***

### getLtiDetailsV2()

```ts
getLtiDetailsV2(extensionId, courseId): Promise<ItslearningRestApiEntitiesPersonalLtiExtensionCustomerSetup>
```

Gets the LTI customer setup for the user and for the given course (if defined).

#### Parameters

##### extensionId

`number`

The unique ID of the LTI extension.

##### courseId

`number` = `0`

(Optional) The unique ID of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalLtiExtensionCustomerSetup`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalLtiExtensionCustomerSetup.md)\>

A promise that resolves to the LTI customer setup details.
