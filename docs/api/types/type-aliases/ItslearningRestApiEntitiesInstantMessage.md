[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesInstantMessage

# ItslearningRestApiEntitiesInstantMessage

```ts
type ItslearningRestApiEntitiesInstantMessage = object;
```

Represents a instance of an Instant Message

## Properties

### AdditionalHeading

```ts
AdditionalHeading: string;
```

Additional heading to display. Extra information about where the message had its origin if a message was shared or replied to.

***

### AttachmentName

```ts
AttachmentName: string;
```

File name of the attached file

***

### AttachmentUrl

```ts
AttachmentUrl: string;
```

The url to the attached file

***

### CanDelete

```ts
CanDelete: boolean;
```

If the current user is allowed to delete the message

***

### CanEdit

```ts
CanEdit: boolean;
```

If the current user is allowed to edit the message

***

### ChildMessage

```ts
ChildMessage: ItslearningRestApiEntitiesInstantMessage;
```

The child message is shared by the message.

***

### Created

```ts
Created: Date;
```

DateTime when the message was created

***

### CreatedBy

```ts
CreatedBy: number;
```

Id of the author of the message

***

### CreatedByAvatar

```ts
CreatedByAvatar: string;
```

Url to the avatar of the author

***

### CreatedByName

```ts
CreatedByName: string;
```

Name of the author of the message

***

### CreatedByShortName

```ts
CreatedByShortName: string;
```

First name of the author.

***

### CreatedFormatted

```ts
CreatedFormatted: string;
```

Formatted DateTime when the message was created

***

### CreatedLocal

```ts
CreatedLocal: Date;
```

DateTime when the message was created converted to user's timezone

***

### CreatedLocalDateStamp

```ts
CreatedLocalDateStamp: string;
```

Date when the message was created in user's timezone formatted considering culture.

***

### CreatedLocalShortNumericDate

```ts
CreatedLocalShortNumericDate: string;
```

Date when the message was created in user's timezone formatted as short numeric date without year.

***

### CreatedLocalTimeStamp

```ts
CreatedLocalTimeStamp: string;
```

Time when the message was created in user's timezone.

***

### CreatedRelative

```ts
CreatedRelative: string;
```

How long ago the message was created

***

### DeletedBy

```ts
DeletedBy: number;
```

Id of the person, who deleted this message.

***

### EditedRelative

```ts
EditedRelative: string;
```

How long ago the message was edited

***

### HasAbuseReported

```ts
HasAbuseReported: boolean;
```

The message is an abuse report. It has a child message that was marked as abusive message.

***

### HasAbuseThreadReported

```ts
HasAbuseThreadReported: boolean;
```

The message is an report for abusive thread.

***

### HasRepliedTo

```ts
HasRepliedTo: boolean;
```

The message is used to reply to another message.

***

### HasShared

```ts
HasShared: boolean;
```

The message is used to share another message.

***

### HomeOrganization

```ts
HomeOrganization: string;
```

Home organization of the author of the message.

***

### InstantMessageThreadId

```ts
InstantMessageThreadId: number;
```

The unique id for the thread in scope of a site

***

### IsAbuse

```ts
IsAbuse: boolean;
```

This message was reported as abusive by the current user.

***

### IsBroadcastMassMessage

```ts
IsBroadcastMassMessage: boolean;
```

This message was sent as broadcast mass message.

***

### IsChildMessageDeletedPermanently

```ts
IsChildMessageDeletedPermanently: boolean;
```

Defines that child message has been deleted permanently

***

### IsDeleted

```ts
IsDeleted: boolean;
```

Is the message deleted

***

### IsEdited

```ts
IsEdited: boolean;
```

Is the message edited

***

### IsSilent

```ts
IsSilent: boolean;
```

Flag used for messages we should not update the UI for

***

### IsStarred

```ts
IsStarred: boolean;
```

If this message has been marked as starred by the user

***

### IsSystemMessage

```ts
IsSystemMessage: boolean;
```

Is the message a system message

***

### Link

```ts
Link: string;
```

The link to combine together with the message text

***

### LinkTarget

```ts
LinkTarget: string;
```

The target to the link eg. _blank

***

### LinkTitle

```ts
LinkTitle: string;
```

Link title to create a friendly name for the link

***

### MessageId

```ts
MessageId: number;
```

The unique id for the message, in scope of a site (itslearning customer)

***

### MessageThreadId

```ts
MessageThreadId: number;
```

Obsolete use InstantMessageThreadId instead

***

### MessageThreadParticipants

```ts
MessageThreadParticipants: ItslearningRestApiEntitiesInstantMessageParticipant[];
```

Recipients for new message threads - does not need to be filled if not used when posting a new thread

***

### OriginInstantMessage

```ts
OriginInstantMessage: ItslearningRestApiEntitiesInstantMessage;
```

The origin message for child message.

***

### OriginInstantMessageThreadDeletedBy

```ts
OriginInstantMessageThreadDeletedBy: number;
```

Id of the person, who delete original instant message thread.

***

### OriginInstantMessageThreadId

```ts
OriginInstantMessageThreadId: number;
```

The origin instant message thread identifier.

***

### OriginInstantMessageThreadName

```ts
OriginInstantMessageThreadName: string;
```

The origin instant message thread name.

***

### Text

```ts
Text: string;
```

The message text
