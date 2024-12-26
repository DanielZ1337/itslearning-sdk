[itslearning-sdk](../../../modules.md) / [api/Person](../index.md) / PersonAPI

# PersonAPI

PersonAPI

Overview:
Endpoint to get and modify a user's profile.

Secured with OAuth2, requires OAuth2 API scope `Person`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new PersonAPI()

```ts
new PersonAPI(http): PersonAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`PersonAPI`](PersonAPI.md)

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

### getExtraUserInfo()

```ts
getExtraUserInfo(personId): Promise<ItsolutionsItslearningItslCoreBusinessLayerPersonCustomInfoExtraUserInformationField>
```

Gets extra user information for a given person (if configured and accessible).

#### Parameters

##### personId

`number`

The unique ID of the person.

#### Returns

`Promise`\<[`ItsolutionsItslearningItslCoreBusinessLayerPersonCustomInfoExtraUserInformationField`](../../../types/type-aliases/ItsolutionsItslearningItslCoreBusinessLayerPersonCustomInfoExtraUserInformationField.md)\>

***

### getImageDimensions()

```ts
getImageDimensions(): Promise<ItslearningRestApiEntitiesPersonImageDimensions>
```

Gets the max image dimensions allowed for a profile image upload.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonImageDimensions`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonImageDimensions.md)\>

***

### getMyProfile()

```ts
getMyProfile(): Promise<ItslearningRestApiEntitiesPersonProfile>
```

Gets the user's profile details (language codes, etc.).

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonProfile`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonProfile.md)\>

***

### getPersonFeatures()

```ts
getPersonFeatures(): Promise<ItslearningRestApiEntitiesPersonalFeature>
```

Gets available features for the current person.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalFeature`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalFeature.md)\>

***

### getPersonInfo()

```ts
getPersonInfo(personId): Promise<ItslearningRestApiEntitiesPersonSimple>
```

Gets basic information about the requested person (subject to eSafety rules).

#### Parameters

##### personId

`number`

The unique ID of the person.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonSimple`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonSimple.md)\>

***

### getPersonRelations()

```ts
getPersonRelations(personId): Promise<ItslearningRestApiEntitiesRelation[]>
```

Gets list of relations for the specified person.

#### Parameters

##### personId

`number`

The unique ID of the person.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesRelation`](../../../types/type-aliases/ItslearningRestApiEntitiesRelation.md)[]\>

***

### getPersonRoles()

```ts
getPersonRoles(): Promise<ItslearningRestApiEntitiesPersonRole[]>
```

Gets list of roles for the current person.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonRole`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonRole.md)[]\>

***

### getServiceAccessToken()

```ts
getServiceAccessToken(serviceName): Promise<unknown>
```

Gets an access token for the specified service on behalf of the user.

#### Parameters

##### serviceName

`string`

The name of the service.

#### Returns

`Promise`\<`unknown`\>

***

### setOnlineStatus()

```ts
setOnlineStatus(): Promise<number>
```

Marks the user as online.
The response contains a timeout, before which this endpoint should be called again to stay online.

#### Returns

`Promise`\<`number`\>

the interval in seconds before you should call this method again

***

### setPushNotifications()

```ts
setPushNotifications(pushData): Promise<void>
```

Sets push notifications in itslearning (on/off) for a device.
Also registers the device for push notifications (if needed).

#### Parameters

##### pushData

`unknown`

The configuration data for push notifications.

#### Returns

`Promise`\<`void`\>

***

### setRemindConnectGoogleOnLogin()

```ts
setRemindConnectGoogleOnLogin(remind): Promise<void>
```

Sets the person setting "RemindConnectGoogleOnLogin".

#### Parameters

##### remind

`boolean`

Boolean to enable or disable the reminder.

#### Returns

`Promise`\<`void`\>

***

### uploadProfileImage()

```ts
uploadProfileImage(imageData): Promise<void>
```

Uploads/updates the person's profile image.

#### Parameters

##### imageData

The image file. Content-Type can be 'image/jpeg' or 'image/png',
                  or sent as multipart/form-data.

`ArrayBuffer` | `FormData`

#### Returns

`Promise`\<`void`\>
