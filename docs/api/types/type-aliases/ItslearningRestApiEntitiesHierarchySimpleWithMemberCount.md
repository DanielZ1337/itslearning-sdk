[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesHierarchySimpleWithMemberCount

# ItslearningRestApiEntitiesHierarchySimpleWithMemberCount

```ts
type ItslearningRestApiEntitiesHierarchySimpleWithMemberCount = ItslearningRestApiEntitiesHierarchySimple & object;
```

Entity for get information about a hierarchy

## Type Declaration

### HasChildren

```ts
HasChildren: boolean;
```

Indicates whether this hierarchy level has child hierarchies.

### Inspectable

```ts
Inspectable: boolean;
```

Indicates whether this hierarchy can be inspected or audited.

### NumberOfMembers

```ts
NumberOfMembers: number;
```

The number of members in this hierarchy level.

### Synchable

```ts
Synchable: boolean;
```

Indicates whether this hierarchy can be synchronised with external systems.
