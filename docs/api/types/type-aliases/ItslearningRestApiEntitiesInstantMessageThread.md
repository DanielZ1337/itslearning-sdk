[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesInstantMessageThread

# ItslearningRestApiEntitiesInstantMessageThread

```ts
type ItslearningRestApiEntitiesInstantMessageThread = object;
```

## Properties

### CanDelete

```ts
CanDelete: boolean;
```

***

### CanShowParticipantsPage

```ts
CanShowParticipantsPage: boolean;
```

***

### ColorSchema

```ts
ColorSchema: string;
```

***

### Created

```ts
Created: Date;
```

***

### CreatedBy

```ts
CreatedBy: number;
```

***

### CreatedByTeacher

```ts
CreatedByTeacher: boolean;
```

***

### HasActiveParticipants

```ts
HasActiveParticipants: boolean;
```

***

### HasCreatorInThread

```ts
HasCreatorInThread: boolean;
```

***

### HasInactiveParticipants

```ts
HasInactiveParticipants: boolean;
```

***

### InactiveParticipantFullName

```ts
InactiveParticipantFullName: string | null;
```

***

### InstantMessageLocationId

```ts
InstantMessageLocationId: number;
```

***

### InstantMessageThreadId

```ts
InstantMessageThreadId: number;
```

***

### IsAbuse

```ts
IsAbuse: boolean;
```

***

### IsAbuseReportedByCurrentUser

```ts
IsAbuseReportedByCurrentUser: boolean;
```

***

### IsBlocked

```ts
IsBlocked: boolean;
```

***

### IsCurrentUserARecipientWithSourceLocation

```ts
IsCurrentUserARecipientWithSourceLocation: boolean;
```

***

### IsThreadAdministrator

```ts
IsThreadAdministrator: boolean;
```

***

### IsThreadModerator

```ts
IsThreadModerator: boolean;
```

***

### LastMessage

```ts
LastMessage: ItslearningRestApiEntitiesInstantMessage;
```

***

### LastReadInstantMessageId

```ts
LastReadInstantMessageId: number;
```

***

### LocationRecipients

```ts
LocationRecipients: ItslearningRestApiEntitiesLocationRecipient[];
```

***

### MassMessageType

```ts
MassMessageType: ItslearningRestApiEntitiesInstantMessageMassMessageType;
```

***

### MatchingMessageIds

```ts
MatchingMessageIds: number[];
```

***

### Messages

```ts
Messages: EntityListOfItslearningRestApiEntitiesInstantMessage;
```

***

### Name

```ts
Name: string;
```

***

### NumberOfInactiveParticipants

```ts
NumberOfInactiveParticipants: number;
```

***

### OnlyThreadAdminCanSendToThread

```ts
OnlyThreadAdminCanSendToThread: boolean;
```

***

### Participants

```ts
Participants: ItslearningRestApiEntitiesThreadParticipant[];
```

***

### ParticipantsCount

```ts
ParticipantsCount: number;
```

***

### SortIndex

```ts
SortIndex: number;
```

***

### Tooltip

```ts
Tooltip: string;
```

***

### Type

```ts
Type: ItslearningRestApiEntitiesInstantMessageThreadType;
```

***

### UserAllowToBlockThread

```ts
UserAllowToBlockThread: boolean;
```
