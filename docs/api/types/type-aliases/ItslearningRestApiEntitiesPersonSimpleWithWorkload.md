[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesPersonSimpleWithWorkload

# ItslearningRestApiEntitiesPersonSimpleWithWorkload

```ts
type ItslearningRestApiEntitiesPersonSimpleWithWorkload = object;
```

A simplified structure to represent a person in itslearning together with their workload

## Properties

### AdditionalInfo

```ts
AdditionalInfo: string;
```

Additional information about the person. This can be context-sensitive and help distinguish between persons with identical names.

***

### FirstName

```ts
FirstName: string;
```

The person's first name. Should only be used when the first name is displayed alone, without the last name.

***

### FullName

```ts
FullName: string;
```

The person's full name, formatted according to the site's regional settings.

***

### LastName

```ts
LastName: string;
```

The person's last name. Should only be used when the last name is displayed alone, without the first name.

***

### PersonId

```ts
PersonId: number;
```

The unique identifier for the person, scoped to a site (itslearning customer).

***

### ProfileImageUrl

```ts
ProfileImageUrl: string;
```

The absolute URL to the person's profile image. May be null or empty if no profile image exists.

***

### ProfileImageUrlSmall

```ts
ProfileImageUrlSmall: string;
```

The absolute URL to a small version of the person's profile image. May be null or empty if no profile image exists.

***

### ProfileUrl

```ts
ProfileUrl: string;
```

The URL to view the person's profile in itslearning.

***

### Workload

```ts
Workload: ItslearningRestApiEntitiesWorkload;
```

The workload information for this person.
