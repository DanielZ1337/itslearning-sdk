[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesCourseCard

# ItslearningRestApiEntitiesCourseCard

```ts
type ItslearningRestApiEntitiesCourseCard = object;
```

Represents the course card for course list.

## Properties

### CanAdminCourse

```ts
CanAdminCourse: boolean;
```

Indicates whether the current user has administrative rights in the course.

***

### CourseColorClass

```ts
CourseColorClass: string;
```

CSS class name used for styling the course color.

***

### CourseId

```ts
CourseId: number;
```

Unique identifier for the course.

***

### FriendlyName

```ts
FriendlyName: string | null;
```

Friendly name of the course, suitable for display.

***

### IsFavouriteCourse

```ts
IsFavouriteCourse: boolean;
```

Indicates whether the current user has marked this course as a favorite.

***

### LastOnline

```ts
LastOnline: string;
```

ISO 8601 timestamp of when someone was last online in the course.

***

### LastOnlineDisplayTime

```ts
LastOnlineDisplayTime: string;
```

Display-friendly timestamp of when someone was last active in the course.

***

### LastUpdated

```ts
LastUpdated: string;
```

ISO 8601 timestamp of when the course content was last updated.

***

### LastUpdatedDisplayTime

```ts
LastUpdatedDisplayTime: string;
```

Display-friendly timestamp of when the course was last updated.

***

### NumberOfAnnouncements

```ts
NumberOfAnnouncements: number;
```

Number of announcements posted in the course.

***

### NumberOfFollowUpTasks

```ts
NumberOfFollowUpTasks: number;
```

Number of follow-up tasks in the course.

***

### NumberOfTasks

```ts
NumberOfTasks: number;
```

Number of tasks assigned in the course.

***

### NumberOfTeachers

```ts
NumberOfTeachers: number;
```

Total number of teachers assigned to the course.

***

### TeacherName

```ts
TeacherName: string | null;
```

Name of the primary teacher for the course.

***

### TeacherPictureUrl

```ts
TeacherPictureUrl: string | null;
```

URL to the profile picture of the primary teacher.

***

### Teachers

```ts
Teachers: ItslearningRestApiEntitiesCourseCardTeacher[];
```

List of all teachers assigned to the course.

***

### Title

```ts
Title: string;
```

Title of the course.
