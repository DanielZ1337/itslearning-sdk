[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesMessage

# ItslearningRestApiEntitiesMessage

```ts
type ItslearningRestApiEntitiesMessage = object;
```

## Properties

### Attachments

```ts
Attachments: ItslearningRestApiEntitiesAttachment[];
```

A list of attachments to this message.

***

### ContentUrl

```ts
ContentUrl: string;
```

The content URL of the complete message.

***

### DateReceived

```ts
DateReceived: string;
```

When the message was received. Time zone is UTC.

***

### From

```ts
From: ItslearningRestApiEntitiesPersonSimple;
```

Basic details of who sent the message.

***

### HasAttachments

```ts
HasAttachments: boolean;
```

True if this message has any attachments.

***

### IsForwarded

```ts
IsForwarded: boolean;
```

True if this message has been forwarded.

***

### IsRead

```ts
IsRead: boolean;
```

True if this message has been read.

***

### IsReplied

```ts
IsReplied: boolean;
```

True if this message has been replied.

***

### LastForwardedDateTime

```ts
LastForwardedDateTime: string | null;
```

The time and date the last time this message was forwarded.

***

### LastRepliedDateTime

```ts
LastRepliedDateTime: string | null;
```

The time and date the last time this message was replied.

***

### MessageId

```ts
MessageId: number;
```

The unique id for the message, in scope of a site (itslearning customer).

***

### MessageUrl

```ts
MessageUrl: string;
```

The URL of the complete message.

***

### PreviewText

```ts
PreviewText: string;
```

The preview text (the first part of the message, stripped for html and html entities).

***

### Subject

```ts
Subject: string;
```

The subject of the message.

***

### Text

```ts
Text: string;
```

The message text (can contain html).

***

### To

```ts
To: ItslearningRestApiEntitiesPersonSimple[];
```

The list of users this message was sent to.
