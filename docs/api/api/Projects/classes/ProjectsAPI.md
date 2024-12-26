[itslearning-sdk](../../../modules.md) / [api/Projects](../index.md) / ProjectsAPI

# ProjectsAPI

ProjectsAPI

Overview:
Endpoint to Projects API.

Secured with OAuth2, requires OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new ProjectsAPI()

```ts
new ProjectsAPI(http): ProjectsAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`ProjectsAPI`](ProjectsAPI.md)

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

### toggleFavoriteProject()

```ts
toggleFavoriteProject(projectId): Promise<void>
```

Toggles the user's favorite status for the specified project.

#### Parameters

##### projectId

`number`

The unique ID of the project.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the favorite status is toggled.
