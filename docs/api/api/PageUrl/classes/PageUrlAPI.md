[itslearning-sdk](../../../modules.md) / [api/PageUrl](../index.md) / PageUrlAPI

# PageUrlAPI

PageUrlAPI

Overview:
Endpoint to get URLs from itslearning.

This API does not require authentication.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new PageUrlAPI()

```ts
new PageUrlAPI(http): PageUrlAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`PageUrlAPI`](PageUrlAPI.md)

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

### getCkEditorConfigUrls()

```ts
getCkEditorConfigUrls(): Promise<Record<string, string>>
```

Gets the URLs required to configure the CkEditor.

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

A promise that resolves to the CkEditor configuration URLs.

***

### getCourseElementPageUrl()

```ts
getCourseElementPageUrl(
   courseId, 
   elementId, 
elementType?): Promise<string>
```

Gets the 'course element' page URL.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### elementId

`number`

The unique ID of the course element.

##### elementType?

`number`

The type of the course element.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the URL of the specified course element.

***

### getServicesBaseUrl()

```ts
getServicesBaseUrl(): Promise<Record<string, string>>
```

Gets the base URLs for different customer-specific services.

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

A promise that resolves to the base URLs of various services.

***

### getTreeLinkBaseUrl()

```ts
getTreeLinkBaseUrl(): Promise<string>
```

Gets the base URL to build tree link navigation URLs.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the base URL for tree link navigation.

***

### getViewLearningToolElementPageUrl()

```ts
getViewLearningToolElementPageUrl(elementId): Promise<string>
```

Gets the 'view learning tool element' page URL.

#### Parameters

##### elementId

`number`

The unique ID of the learning tool element.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the URL of the specified learning tool element.
