[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesPersonCourseCardData

# ItslearningRestApiEntitiesPersonCourseCardData

```ts
type ItslearningRestApiEntitiesPersonCourseCardData = object;
```

Represents the course with personalized data.

## Properties

### CourseCode

```ts
CourseCode: string;
```

Official course code identifier.

***

### CourseColor

```ts
CourseColor: string;
```

Hex color code or color name associated with the course.

***

### CourseFillColor

```ts
CourseFillColor: string;
```

Fill color used for course styling elements.

***

### CourseId

```ts
CourseId: number;
```

Unique identifier for the course.

***

### FollowUpTaskCount

```ts
FollowUpTaskCount: number;
```

Number of follow-up tasks assigned to the user in this course.

***

### FriendlyName

```ts
FriendlyName: string;
```

Friendly name of the course for display purposes.

***

### HasAdminPermissions

```ts
HasAdminPermissions: boolean;
```

Indicates whether the user has administrative permissions in the course.

***

### HasStudentPermissions

```ts
HasStudentPermissions: boolean;
```

Indicates whether the user has student permissions in the course.

***

### LastUpdatedUtc

```ts
LastUpdatedUtc: Date;
```

UTC timestamp of when this course data was last updated.

***

### NewBulletinsCount

```ts
NewBulletinsCount: number;
```

Number of new bulletins posted in this course.

***

### NewNotificationsCount

```ts
NewNotificationsCount: number;
```

Number of new notifications for the user in this course.

***

### Role

```ts
Role: ItslearningRestApiEntitiesPersonContextRole;
```

Role of the user in the course (student, teacher, administrator, etc.).

***

### TaskCount

```ts
TaskCount: number;
```

Total number of tasks assigned to the user in this course.

***

### TeachersInCourse

```ts
TeachersInCourse: ItslearningRestApiEntitiesPersonSimple[];
```

List of teachers in the course.

***

### Title

```ts
Title: string;
```

Official title of the course.

***

### Url

```ts
Url: string;
```

URL to access the course.
