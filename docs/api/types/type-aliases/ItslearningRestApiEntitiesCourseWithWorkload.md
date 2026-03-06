[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesCourseWithWorkload

# ItslearningRestApiEntitiesCourseWithWorkload

```ts
type ItslearningRestApiEntitiesCourseWithWorkload = object;
```

A structure to represent a course in itslearning together with the workload for a particular student

## Properties

### CanAccessAssignmentList

```ts
CanAccessAssignmentList: boolean;
```

Indicates whether the user can access the course assignment list.

***

### CourseId

```ts
CourseId: number;
```

Unique identifier for the course.

***

### Title

```ts
Title: string;
```

Title of the course.

***

### Workload

```ts
Workload: ItslearningRestApiEntitiesWorkload;
```

Workload information and statistics for this course for the student.
