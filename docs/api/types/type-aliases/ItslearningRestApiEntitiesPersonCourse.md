[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesPersonCourse

# ItslearningRestApiEntitiesPersonCourse

```ts
type ItslearningRestApiEntitiesPersonCourse = object;
```

Represents the course with personalized data.

## Properties

### CourseCode

```ts
CourseCode: string;
```

Code for the course.

***

### CourseColorClass

```ts
CourseColorClass: string;
```

Color code for the course.

***

### CourseFillColor

```ts
CourseFillColor: string;
```

Fill color code for the course.

***

### CourseId

```ts
CourseId: number;
```

The unique id for the course, in scope of a site (itslearning customer).

***

### FriendlyName

```ts
FriendlyName: string;
```

The course friendly name.

***

### HasAdminPermissions

```ts
HasAdminPermissions: boolean;
```

Defines if person has administration permissions in the course.

***

### HasStudentPermissions

```ts
HasStudentPermissions: boolean;
```

Defines if person has student permissions in the course.

***

### LastUpdatedUtc

```ts
LastUpdatedUtc: Date;
```

The course last updated date. Time zone is UTC. Can be null if it was never updated.

***

### NewBulletinsCount

```ts
NewBulletinsCount: number;
```

The new bulletins in course for person.

***

### NewNotificationsCount

```ts
NewNotificationsCount: number;
```

The new notifications count in course for person.

***

### Title

```ts
Title: string;
```

The course title.

***

### Url

```ts
Url: string;
```

The itslearning internal URL for the course.
