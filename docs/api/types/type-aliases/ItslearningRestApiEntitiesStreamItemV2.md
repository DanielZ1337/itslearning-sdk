[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesStreamItemV2

# ItslearningRestApiEntitiesStreamItemV2

```ts
type ItslearningRestApiEntitiesStreamItemV2 = object;
```

Represents data for a single item in stream feed.

## Properties

### ContentUrl

```ts
ContentUrl: string;
```

URL to the location in itslearning connected to the notification that opens without the master page.

***

### ElementId

```ts
ElementId: number;
```

Identifier of the related element. If multiple elements are related, fetch them separately and use ElementsCount to get the exact count.

***

### ElementsCount

```ts
ElementsCount: number;
```

The count of elements related to this notification.

***

### ElementType

```ts
ElementType: ItslearningRestApiEntitiesElementType;
```

Type of the related element. Will be Unknown if not element-related. If multiple elements are related, fetch them separately and use ElementsCount to get the exact count.

***

### ~~HasMoreElements~~

```ts
HasMoreElements: boolean;
```

#### Deprecated

Use ElementsCount instead. Indicates whether the notification is about operations on multiple elements.

***

### IconUrl

```ts
IconUrl: string;
```

URL to the icon used by itslearning for the stream item.

***

### LearningToolId

```ts
LearningToolId: number;
```

Identifier of the learning tool (e.g., Assignment extension, test extension). Zero (0) for native itslearning elements. If multiple elements are related, fetch them separately and use ElementsCount to get the exact count.

***

### LightBulletin

```ts
LightBulletin: ItslearningRestApiEntitiesLightBulletinsLightBulletinV2;
```

Related light bulletin, if the current stream item is bulletin-related.

***

### LocationId

```ts
LocationId: number;
```

The location identifier associated with the stream item.

***

### LocationTitle

```ts
LocationTitle: string;
```

The project or course title associated with the item.

***

### LocationType

```ts
LocationType: ItslearningRestApiEntitiesLocationType;
```

The location type associated with the stream item.

***

### NotificationId

```ts
NotificationId: number;
```

The unique identifier for the stream item, which is the same as the notification item ID, scoped to a site (itslearning customer).

***

### PublishedBy

```ts
PublishedBy: ItslearningRestApiEntitiesPersonSimple;
```

The person who published the stream item.

***

### PublishedDate

```ts
PublishedDate: Date;
```

Date and time when the news feed item was published, in UTC timezone.

***

### Text

```ts
Text: string;
```

Descriptive text for the stream item.

***

### Url

```ts
Url: string;
```

URL to the location in itslearning connected to the notification.
