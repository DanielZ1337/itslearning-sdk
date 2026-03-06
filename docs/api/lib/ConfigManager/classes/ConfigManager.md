[itslearning-sdk](../../../modules.md) / [lib/ConfigManager](../index.md) / ConfigManager

# ConfigManager

## Constructors

### Constructor

```ts
new ConfigManager(
   clientId, 
   redirectUri, 
   baseURL, 
   accessToken?, 
   refreshToken?): ConfigManager;
```

#### Parameters

##### clientId

`string`

##### redirectUri

`string`

##### baseURL

`string`

##### accessToken?

`string`

##### refreshToken?

`string`

#### Returns

`ConfigManager`

## Methods

### getAccessToken()

```ts
getAccessToken(): string | undefined;
```

#### Returns

`string` \| `undefined`

***

### getBaseURL()

```ts
getBaseURL(): string;
```

#### Returns

`string`

***

### getClientId()

```ts
getClientId(): string;
```

#### Returns

`string`

***

### getRedirectUri()

```ts
getRedirectUri(): string;
```

#### Returns

`string`

***

### getRefreshToken()

```ts
getRefreshToken(): string | undefined;
```

#### Returns

`string` \| `undefined`

***

### setAccessToken()

```ts
setAccessToken(token): void;
```

#### Parameters

##### token

`string`

#### Returns

`void`

***

### setBaseURL()

```ts
setBaseURL(url): void;
```

#### Parameters

##### url

`string`

#### Returns

`void`

***

### setClientId()

```ts
setClientId(id): void;
```

#### Parameters

##### id

`string`

#### Returns

`void`

***

### setRedirectUri()

```ts
setRedirectUri(uri): void;
```

#### Parameters

##### uri

`string`

#### Returns

`void`

***

### setRefreshToken()

```ts
setRefreshToken(token): void;
```

#### Parameters

##### token

`string`

#### Returns

`void`
