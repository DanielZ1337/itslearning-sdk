[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesTask

# ItslearningRestApiEntitiesTask

```ts
type ItslearningRestApiEntitiesTask = object;
```

Represents the task.

## Properties

### ContentUrl

```ts
ContentUrl: string;
```

The itslearning content URL for the task.

***

### Deadline

```ts
Deadline: Date | null;
```

Task deadline. Time zone is UTC. Can be null if there is no deadline.

***

### Description

```ts
Description: string;
```

Task description.

***

### ElementId

```ts
ElementId: number;
```

The identifier of related element.

***

### ElementType

```ts
ElementType: ItslearningRestApiEntitiesElementType;
```

Type of related element.

***

### Homework

```ts
Homework: boolean;
```

Marks the task as homework.

***

### IconUrl

```ts
IconUrl: string;
```

Url to related element icon.

***

### LearningToolId

```ts
LearningToolId: number;
```

Identifier of learning tool (Assignment extension, test extension etc.). It's 0 for native itslearning elements. It is applicable only if ElementType is LearningToolElement.

***

### LocationFriendlyName

```ts
LocationFriendlyName: string;
```

Friendly name of event location. Can be used instead of LocationTitle which is usually more official.

***

### LocationId

```ts
LocationId: number;
```

The task location identifier.

***

### LocationTitle

```ts
LocationTitle: string;
```

The name of the course or project that the task belong. Empty if the task is part of a individual learning plan.

***

### LocationType

```ts
LocationType: ItsolutionsItslUtilsConstantsLocationType;
```

The task location type.

***

### Status

```ts
Status: keyof typeof ItslearningRestApiEntitiesTaskStatus;
```

Task status.

***

### TaskId

```ts
TaskId: number;
```

The unique id for for the task, in scope of a site (itslearning customer).

***

### Title

```ts
Title: string;
```

Task title.

***

### Url

```ts
Url: string;
```

The itslearning internal URL for the task.
