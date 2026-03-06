[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesInstantMessageToSend

# ItslearningRestApiEntitiesInstantMessageToSend

```ts
type ItslearningRestApiEntitiesInstantMessageToSend = object;
```

## Properties

### CourseId?

```ts
optional CourseId: number;
```

CourseId to send instant message to.

***

### FileId?

```ts
optional FileId: string[];
```

Guids of files already uploaded to temporary file repo storage.

***

### InstantMessageThreadId?

```ts
optional InstantMessageThreadId: number;
```

The thread to send to; if null or zero a new thread is assumed.

***

### ProjectId?

```ts
optional ProjectId: number;
```

ProjectId to send instant message to.

***

### SendAsIndividualMessages?

```ts
optional SendAsIndividualMessages: boolean;
```

Gets whether a message to multiple recipients should be sent as individual messages.

***

### Text

```ts
Text: string;
```

The text of the message.

***

### ToPersonIds?

```ts
optional ToPersonIds: number[];
```

PersonIds to send instant message to. A new thread will be created if the persons
don't have an existing thread already. The ToPersonIds or the InstantMessageThreadId
or CourseIds or ProjectIds need to have a valid value.
