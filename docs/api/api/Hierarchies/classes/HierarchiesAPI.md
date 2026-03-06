[itslearning-sdk](../../../modules.md) / [api/Hierarchies](../index.md) / HierarchiesAPI

# HierarchiesAPI

HierarchiesAPI

Overview:
Endpoint for Hierarchies API.
Provides access to organisation hierarchy data including children, members, and parents.

Secured with OAuth2 and requires the OAuth2 API scope `Hierarchies`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new HierarchiesAPI(http): HierarchiesAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`HierarchiesAPI`

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`constructor`](../../../lib/Manager/classes/Manager.md#constructor)

## Properties

### http

```ts
protected readonly http: HttpClient;
```

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`http`](../../../lib/Manager/classes/Manager.md#http)

## Methods

### getByRole()

```ts
getByRole(hierarchyId, role?): Promise<ItslearningRestApiEntitiesHierarchySimple>;
```

Gets a hierarchy node by role.

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

##### role?

`string`

The role to filter by.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimple`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimple.md)\>

A promise that resolves to the hierarchy node.

***

### getChildren()

```ts
getChildren(hierarchyId): Promise<ItslearningRestApiEntitiesHierarchySimple[]>;
```

Gets child hierarchies for a given hierarchy node.

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimple`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimple.md)[]\>

A promise that resolves to a list of child hierarchy nodes.

***

### getChildrenWithMemberCountForCourse()

```ts
getChildrenWithMemberCountForCourse(hierarchyId, courseId): Promise<ItslearningRestApiEntitiesHierarchySimpleWithMemberCount[]>;
```

Gets child hierarchies with member counts for a specific course.

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimpleWithMemberCount`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimpleWithMemberCount.md)[]\>

A promise that resolves to a list of child hierarchy nodes with member counts.

***

### getChildrenWithMemberCountForPerson()

```ts
getChildrenWithMemberCountForPerson(hierarchyId): Promise<ItslearningRestApiEntitiesHierarchySimpleWithMemberCount[]>;
```

Gets child hierarchies with member counts for the current person.

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimpleWithMemberCount`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimpleWithMemberCount.md)[]\>

A promise that resolves to a list of child hierarchy nodes with member counts.

***

### getDefault()

```ts
getDefault(): Promise<ItslearningRestApiEntitiesHierarchySimple>;
```

Gets the default hierarchy for the current person.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimple`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimple.md)\>

A promise that resolves to the default hierarchy node.

***

### getDefaultForCourse()

```ts
getDefaultForCourse(courseId): Promise<ItslearningRestApiEntitiesHierarchySimple>;
```

Gets the default hierarchy for a specific course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimple`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimple.md)\>

A promise that resolves to the default hierarchy for the course.

***

### getDefaultWithMemberCount()

```ts
getDefaultWithMemberCount(): Promise<ItslearningRestApiEntitiesHierarchySimpleWithMemberCount>;
```

Gets the default hierarchy with member count for the current person.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimpleWithMemberCount`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimpleWithMemberCount.md)\>

A promise that resolves to the default hierarchy node with member count.

***

### getMembers()

```ts
getMembers(
   hierarchyId, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRole>;
```

Gets members of a hierarchy node (v1).

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `25`

The number of results per page (default = 25).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRole`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRole.md)\>

A promise that resolves to a paginated list of members with hierarchy roles.

***

### getMembersWithCourseMembership()

```ts
getMembersWithCourseMembership(
   hierarchyId, 
   pageIndex?, 
   pageSize?, 
courseContext?): Promise<EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRoleAndCourseMembership>;
```

Gets members of a hierarchy node with course membership info (v2).

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `25`

The number of results per page (default = 25).

##### courseContext?

`number`

The course context ID for membership information.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRoleAndCourseMembership`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonSimpleWithHierarchyRoleAndCourseMembership.md)\>

A promise that resolves to a paginated list of members with hierarchy roles and course membership.

***

### getOrganisations()

```ts
getOrganisations(role?): Promise<EntityListOfItslearningRestApiEntitiesHierarchySimple>;
```

Gets organisation hierarchies for the current user by role.

#### Parameters

##### role?

`string`

The role to filter organisations by.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesHierarchySimple`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesHierarchySimple.md)\>

A promise that resolves to a paginated list of organisation hierarchy nodes.

***

### getParents()

```ts
getParents(hierarchyId, visibleInSearchOnly?): Promise<ItslearningRestApiEntitiesHierarchySimple[]>;
```

Gets parent hierarchies for a given hierarchy node.

#### Parameters

##### hierarchyId

`number`

The unique identifier of the hierarchy node.

##### visibleInSearchOnly?

`boolean`

Whether to include only hierarchies visible in search.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesHierarchySimple`](../../../types/type-aliases/ItslearningRestApiEntitiesHierarchySimple.md)[]\>

A promise that resolves to a list of parent hierarchy nodes.
