[itslearning-sdk](../../../modules.md) / [api/YourFiles](../index.md) / YourFilesAPI

# YourFilesAPI

YourFilesAPI

Overview:
Endpoint for Your Files API.
Provides access to personal file storage: browsing, uploading, copying,
moving, deleting files and folders, and generating zip archives.

Secured with OAuth2 and requires the OAuth2 API scope `MyFiles`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new YourFilesAPI(http): YourFilesAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`YourFilesAPI`

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

### copyOrMoveFiles()

```ts
copyOrMoveFiles(request): Promise<void>;
```

Copies or moves files to a new location.

#### Parameters

##### request

The copy or move request.

[`ItslearningRestApiEntitiesYourFilesCopyRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesCopyRequest.md) | [`ItslearningRestApiEntitiesYourFilesMoveRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesMoveRequest.md)

#### Returns

`Promise`\<`void`\>

***

### createPrivateFolder()

```ts
createPrivateFolder(parentFolderId, name): Promise<ItslearningRestApiEntitiesYourFilesFileModel>;
```

Creates a new private folder inside a parent folder.

#### Parameters

##### parentFolderId

`number`

The parent folder identifier.

##### name

`string`

The name of the new folder.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesYourFilesFileModel`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesFileModel.md)\>

The created folder file model.

***

### createZip()

```ts
createZip(request): Promise<ItslearningRestApiEntitiesYourFilesZipFileJobModel>;
```

Creates a zip archive from specified files and folders.

#### Parameters

##### request

[`ItslearningRestApiEntitiesYourFilesZipRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesZipRequest.md)

The zip request with file and folder IDs.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesYourFilesZipFileJobModel`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesZipFileJobModel.md)\>

The zip job model with status and download URL.

***

### deletePrivateFiles()

```ts
deletePrivateFiles(fileIds): Promise<void>;
```

Deletes private files.

#### Parameters

##### fileIds

`number`[]

Array of file identifiers to delete.

#### Returns

`Promise`\<`void`\>

***

### deletePrivateFolders()

```ts
deletePrivateFolders(folderIds): Promise<void>;
```

Deletes private folders.

#### Parameters

##### folderIds

`number`[]

Array of folder identifiers to delete.

#### Returns

`Promise`\<`void`\>

***

### getCourses()

```ts
getCourses(options?): Promise<EntityListOfItslearningRestApiEntitiesYourFilesCourseModel>;
```

Returns a paginated list of courses with files.

#### Parameters

##### options?

Paging and search options.

###### pageIndex?

`number`

###### pageSize?

`number`

###### searchPhrase?

`string`

###### sortField?

`string`

###### sortOrder?

`string`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesYourFilesCourseModel`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesYourFilesCourseModel.md)\>

Paginated list of course models.

***

### getFolder()

```ts
getFolder(folderId): Promise<ItslearningRestApiEntitiesYourFilesFileModel>;
```

Returns the contents of a folder (private or public).

#### Parameters

##### folderId

`number`

The folder identifier.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesYourFilesFileModel`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesFileModel.md)\>

Folder file model.

***

### getMessageAttachments()

```ts
getMessageAttachments(options?): Promise<EntityListOfItslearningRestApiEntitiesYourFilesMessageAttachmentModel>;
```

Returns a paginated list of message attachments.

#### Parameters

##### options?

Paging and search options.

###### pageIndex?

`number`

###### pageSize?

`number`

###### searchPhrase?

`string`

###### sortField?

`string`

###### sortOrder?

`string`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesYourFilesMessageAttachmentModel`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesYourFilesMessageAttachmentModel.md)\>

Paginated list of message attachment models.

***

### getPrivateFolder()

```ts
getPrivateFolder(folderId, searchPhrase?): Promise<ItslearningRestApiEntitiesYourFilesFileModel>;
```

Returns the contents of a private folder.

#### Parameters

##### folderId

`number`

The folder identifier.

##### searchPhrase?

`string`

Optional search phrase to filter files.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesYourFilesFileModel`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesFileModel.md)\>

Folder file model.

***

### getPublicFolder()

```ts
getPublicFolder(folderId, searchPhrase?): Promise<ItslearningRestApiEntitiesYourFilesFileModel>;
```

Returns the contents of a public folder.

#### Parameters

##### folderId

`number`

The folder identifier.

##### searchPhrase?

`string`

Optional search phrase to filter files.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesYourFilesFileModel`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesFileModel.md)\>

Folder file model.

***

### getZipStatus()

```ts
getZipStatus(zipJobId): Promise<ItslearningRestApiEntitiesYourFilesZipFileJobModel>;
```

Returns the status of a zip job.

#### Parameters

##### zipJobId

`string`

The zip job identifier.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesYourFilesZipFileJobModel`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesZipFileJobModel.md)\>

The zip job model with current status.

***

### updatePrivateFile()

```ts
updatePrivateFile(fileId, updateRequest): Promise<void>;
```

Updates metadata for a private file.

#### Parameters

##### fileId

`number`

The file identifier.

##### updateRequest

[`ItslearningRestApiEntitiesYourFilesUpdateRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesUpdateRequest.md)

The update request with new metadata.

#### Returns

`Promise`\<`void`\>

***

### updatePrivateFolder()

```ts
updatePrivateFolder(folderId, updateRequest): Promise<void>;
```

Updates metadata for a private folder.

#### Parameters

##### folderId

`number`

The folder identifier.

##### updateRequest

[`ItslearningRestApiEntitiesYourFilesUpdateRequest`](../../../types/type-aliases/ItslearningRestApiEntitiesYourFilesUpdateRequest.md)

The update request with new metadata.

#### Returns

`Promise`\<`void`\>
