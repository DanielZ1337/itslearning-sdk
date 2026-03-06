[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesAttachment

# ItslearningRestApiEntitiesAttachment

```ts
type ItslearningRestApiEntitiesAttachment = object;
```

Represents a file attachment included in a message or other entity.

## Properties

### DisplayName

```ts
DisplayName: string;
```

The display name of the file attached to the message.

***

### FileId

```ts
FileId: number;
```

The unique identifier of the file that was attached to the message.

***

### FileSizeInKiloBytes

```ts
FileSizeInKiloBytes: number;
```

The size of the attachment in kilobytes.

***

### Url

```ts
Url: string;
```

The URL to access the attached file. An access token must be added to the request to gain access to the file.
