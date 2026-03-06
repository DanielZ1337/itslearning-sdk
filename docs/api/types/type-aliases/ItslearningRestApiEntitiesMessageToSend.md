[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesMessageToSend

# ItslearningRestApiEntitiesMessageToSend

```ts
type ItslearningRestApiEntitiesMessageToSend = object;
```

## Properties

### BccPersonIds?

```ts
optional BccPersonIds: number[];
```

PersonIds in the Bcc field.

***

### ForwardToMessageId?

```ts
optional ForwardToMessageId: number;
```

If set, the message is a forward of this MessageId.

***

### ReplyToMessageId?

```ts
optional ReplyToMessageId: number;
```

If set, the message is a reply to this MessageId.

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

The text of the message.

***

### ToPersonIds

```ts
ToPersonIds: number[];
```

PersonIds in the To field.
