[itslearning-sdk](../../../modules.md) / [api/ApplicationInitialisationCacheWarmUp](../index.md) / ApplicationInitialisationCacheWarmUpAPI

# ApplicationInitialisationCacheWarmUpAPI

ApplicationInitialisationCacheWarmUpAPI

Overview:
Endpoint for Application Initialisation Cache Warm-Up API.
Used to warm up various internal caches.

Secured with OAuth2.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ApplicationInitialisationCacheWarmUpAPI(http): ApplicationInitialisationCacheWarmUpAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ApplicationInitialisationCacheWarmUpAPI`

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

### warmUpExtensionModule()

```ts
warmUpExtensionModule(): Promise<void>;
```

Warms up the extension module cache.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the extension module cache is warmed up.

***

### warmUpLearningTool()

```ts
warmUpLearningTool(): Promise<void>;
```

Warms up the learning tool cache.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the learning tool cache is warmed up.

***

### warmUpPlugin()

```ts
warmUpPlugin(): Promise<void>;
```

Warms up the plugin cache.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the plugin cache is warmed up.
