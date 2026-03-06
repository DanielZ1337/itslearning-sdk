[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesFollowUpTask

# ItslearningRestApiEntitiesFollowUpTask

```ts
type ItslearningRestApiEntitiesFollowUpTask = object;
```

Represents a follow up task.

## Properties

### ContentUrl

```ts
ContentUrl: string;
```

URL to the task content or instructions.

***

### ElementId

```ts
ElementId: number;
```

Unique identifier of the learning element (task).

***

### ElementType

```ts
ElementType: ItslearningRestApiEntitiesElementType;
```

Type of the learning element (assignment, project, assessment, etc.).

***

### IconUrl

```ts
IconUrl: string;
```

URL to an icon representing the task type.

***

### LearningToolId

```ts
LearningToolId: number;
```

Unique identifier of the learning tool that provides this task.

***

### LocationTitle

```ts
LocationTitle: string;
```

Title of the location (course, project, or group) where the task resides.

***

### NumberOfNewOrUpdatedSubmissions

```ts
NumberOfNewOrUpdatedSubmissions: number;
```

Number of new or recently updated task submissions.

***

### NumberOfSubmissionsToAssess

```ts
NumberOfSubmissionsToAssess: number;
```

Number of task submissions that are awaiting assessment or grading.

***

### Title

```ts
Title: string;
```

Title of the follow-up task.

***

### TotalNumberOfEvaluateSubmissions

```ts
TotalNumberOfEvaluateSubmissions: number;
```

Total number of task submissions that require evaluation.

***

### Url

```ts
Url: string;
```

URL to access the follow-up task details.
