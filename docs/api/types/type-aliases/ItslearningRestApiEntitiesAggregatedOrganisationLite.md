[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesAggregatedOrganisationLite

# ItslearningRestApiEntitiesAggregatedOrganisationLite

```ts
type ItslearningRestApiEntitiesAggregatedOrganisationLite = object;
```

Represents a site or school.

## Properties

### CustomerId

```ts
CustomerId: number;
```

The customer id for the site.

***

### HierarchyId

```ts
HierarchyId: number;
```

The school id (hierarchy id). Will be 0 for sites.

***

### IsSite

```ts
IsSite: boolean;
```

True if Organisation is of type Site. False if Organisation is of type School.

***

### SchoolName

```ts
SchoolName: string;
```

The school name. Only set if IsSite=false.

***

### SiteName

```ts
SiteName: string;
```

The site name.
