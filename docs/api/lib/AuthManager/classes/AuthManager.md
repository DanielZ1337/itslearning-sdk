[itslearning-sdk](../../../modules.md) / [lib/AuthManager](../index.md) / AuthManager

# AuthManager

## Constructors

### Constructor

```ts
new AuthManager(config): AuthManager;
```

#### Parameters

##### config

[`ConfigManager`](../../ConfigManager/classes/ConfigManager.md)

#### Returns

`AuthManager`

## Methods

### exchangeCodeForToken()

```ts
exchangeCodeForToken(code): Promise<void>;
```

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`void`\>

***

### getAccessToken()

```ts
getAccessToken(): string | undefined;
```

#### Returns

`string` \| `undefined`

***

### getAuthorizationUrl()

```ts
getAuthorizationUrl(state, scope): string;
```

#### Parameters

##### state

`string`

##### scope

[`ItslearningScope`](../../../types/type-aliases/ItslearningScope.md) | [`ItslearningScope`](../../../types/type-aliases/ItslearningScope.md)[]

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

### handleRefreshToken()

```ts
handleRefreshToken(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

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

### setRefreshToken()

```ts
setRefreshToken(token): void;
```

#### Parameters

##### token

`string`

#### Returns

`void`
