[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesNotification

# ItslearningRestApiEntitiesNotification

```ts
type ItslearningRestApiEntitiesNotification = object;
```

Represents a notification in itslearning.

## Properties

### ContentUrl

```ts
ContentUrl: string;
```

Url to the location in itslearning connected to the notification that open without master page.

***

### IsAnonymous

```ts
IsAnonymous: boolean;
```

True if notification is anonymous

***

### IsRead

```ts
IsRead: boolean;
```

True if the user has read the notification.

***

### NotificationId

```ts
NotificationId: number;
```

The unique id for for the notification, in scope of a site (itslearning customer).

***

### PublishedBy

```ts
PublishedBy: ItslearningRestApiEntitiesPersonSimple;
```

The person who published the notification.

***

### PublishedDate

```ts
PublishedDate: Date;
```

Date time when the notification was published. Time zone is UTC.

***

### Text

```ts
Text: string;
```

Descriptive text for the notification

***

### Type

```ts
Type: ItslearningRestApiEntitiesNotificationType;
```

The type of notification.

***

### Url

```ts
Url: string;
```

Url to the location in itslearning connected to the notification.
