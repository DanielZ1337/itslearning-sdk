[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesPersonSimple

# ItslearningRestApiEntitiesPersonSimple

```ts
type ItslearningRestApiEntitiesPersonSimple = object;
```

A simplified structure to represent a person (user) in itslearning.

## Properties

### AddttionalInfo

```ts
AddttionalInfo: string;
```

Additional information about the person. This can be context sensitive. For example when using the rest api method for message recipients search, this field can contain extra information about the person, that helps the user distinguish between persons with identical names.

***

### FirstName

```ts
FirstName: string;
```

The person's first name. It can only be used when first name is displayed without last name. Otherwise must be used.

***

### FullName

```ts
FullName: string;
```

The person's full name formatted according to regional settings of a site.

***

### LastName

```ts
LastName: string;
```

The person's last name. It can only be used when last name is displayed without first name. Otherwise must be used.

***

### PersonId

```ts
PersonId: number;
```

The unique id for the person, in scope of a site (itslearning customer).

***

### ProfileImageUrl

```ts
ProfileImageUrl: string;
```

The absolute URL to the person's profile image. This can be null or empty if the person does not have a profile image.

***

### ProfileImageUrlSmall

```ts
ProfileImageUrlSmall: string;
```

The absolute URL to the person's small profile image. This can be null or empty if the person does not have a profile image.

***

### ProfileUrl

```ts
ProfileUrl: string;
```

The url to view the person's profile in itslearning.
