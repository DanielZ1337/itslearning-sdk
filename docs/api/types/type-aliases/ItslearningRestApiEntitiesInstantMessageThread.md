[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesInstantMessageThread

# ItslearningRestApiEntitiesInstantMessageThread

```ts
type ItslearningRestApiEntitiesInstantMessageThread = object;
```

## Type declaration

### CanDelete

```ts
CanDelete: boolean;
```

### ColorScheme

```ts
ColorScheme: string;
```

### Created

```ts
Created: Date;
```

### CreatedBy

```ts
CreatedBy: number;
```

### CreatedByTeacher

```ts
CreatedByTeacher: boolean;
```

### InstantMessageLocationId

```ts
InstantMessageLocationId: number;
```

### InstantMessageThreadId

```ts
InstantMessageThreadId: number;
```

### IsAbuse

```ts
IsAbuse: boolean;
```

### IsAbuseReportedByCurrentUser

```ts
IsAbuseReportedByCurrentUser: boolean;
```

### IsBlocked

```ts
IsBlocked: boolean;
```

### IsThreadAdministrator

```ts
IsThreadAdministrator: boolean;
```

### IsThreadModerator

```ts
IsThreadModerator: boolean;
```

### LastMessage

```ts
LastMessage: ItslearningRestApiEntitiesInstantMessage;
```

### LastReadInstantMessageId

```ts
LastReadInstantMessageId: number;
```

### LocationRecipients

```ts
LocationRecipients: ItslearningRestApiEntitiesLocationRecipient[];
```

### MassMessageType

```ts
MassMessageType: ItslearningRestApiEntitiesInstantMessageMassMessageType;
```

### MatchingMessageIds

```ts
MatchingMessageIds: number[];
```

### Messages

```ts
Messages: EntityListOfItslearningRestApiEntitiesInstantMessage;
```

### Name

```ts
Name: string;
```

### OnlyThreadAdminCanSendToThread

```ts
OnlyThreadAdminCanSendToThread: boolean;
```

### Participants

```ts
Participants: ItslearningRestApiEntitiesThreadParticipant[];
```

### SortIndex

```ts
SortIndex: number;
```

### Tooltip

```ts
Tooltip: string;
```

### Type

```ts
Type: "Group" | "Course" | "Project" | "OneToOne" | "GroupPlaceHolder";
```

### UserAllowToBlockThread

```ts
UserAllowToBlockThread: boolean;
```
