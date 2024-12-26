[itslearning-sdk](../../../modules.md) / [api/NativeApp](../index.md) / NativeAppAPI

# NativeAppAPI

NativeAppAPI

Overview:
Some utility methods for native apps.

Secured with OAuth2, requires OAuth2 API scope `Courses`.

**Note**: According to the API description, authentication is not required.
However, if authentication is needed in the future, consider implementing it accordingly.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new NativeAppAPI()

```ts
new NativeAppAPI(http): NativeAppAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`NativeAppAPI`](NativeAppAPI.md)

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

### checkVersion()

```ts
checkVersion(
   applicationKey, 
   currentVersion, 
operatingSystem): Promise<ItslearningCommonRestApiEntitiesVersionResponse>
```

Checks if the current version of the application is up to date.

This method verifies whether the provided `currentVersion` of the application
meets the minimum required version and whether it is the latest version.

#### Parameters

##### applicationKey

`string`

Application key for the native app (same as client_id used for oauth2)

##### currentVersion

`string`

Current version of the native app containing only . and numbers. For example: 2.3.44.114

##### operatingSystem

`string`

A string for the operating system the native app runs on. For example: Android

#### Returns

`Promise`\<[`ItslearningCommonRestApiEntitiesVersionResponse`](../../../types/type-aliases/ItslearningCommonRestApiEntitiesVersionResponse.md)\>

A promise that resolves to the version check result.
