[itslearning-sdk](../../../modules.md) / [lib/HttpClient](../index.md) / HttpClient

# HttpClient

## Constructors

### Constructor

```ts
new HttpClient(config, authManager): HttpClient;
```

#### Parameters

##### config

[`ConfigManager`](../../ConfigManager/classes/ConfigManager.md)

##### authManager

[`AuthManager`](../../AuthManager/classes/AuthManager.md)

#### Returns

`HttpClient`

## Methods

### delete()

```ts
delete<T>(endpoint, options?): Promise<T>;
```

#### Type Parameters

##### T

`T`

#### Parameters

##### endpoint

`string`

##### options?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`T`\>

***

### get()

```ts
get<T>(endpoint, options?): Promise<T>;
```

#### Type Parameters

##### T

`T`

#### Parameters

##### endpoint

`string`

##### options?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`T`\>

***

### patch()

```ts
patch<T>(endpoint, options?): Promise<T>;
```

#### Type Parameters

##### T

`T`

#### Parameters

##### endpoint

`string`

##### options?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`T`\>

***

### post()

```ts
post<T>(endpoint, options?): Promise<T>;
```

#### Type Parameters

##### T

`T`

#### Parameters

##### endpoint

`string`

##### options?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`T`\>

***

### put()

```ts
put<T>(endpoint, options?): Promise<T>;
```

#### Type Parameters

##### T

`T`

#### Parameters

##### endpoint

`string`

##### options?

`AxiosRequestConfig`\<`any`\>

#### Returns

`Promise`\<`T`\>
