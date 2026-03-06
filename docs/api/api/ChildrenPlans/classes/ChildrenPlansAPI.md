[itslearning-sdk](../../../modules.md) / [api/ChildrenPlans](../index.md) / ChildrenPlansAPI

# ChildrenPlansAPI

ChildrenPlansAPI

Overview:
Endpoint for Children Plans API.
Provides access to planner plans for a guardian's children.

Secured with OAuth2 and requires the OAuth2 API scope `Children`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ChildrenPlansAPI(http): ChildrenPlansAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ChildrenPlansAPI`

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

### getChildPlan()

```ts
getChildPlan(childId, planId): Promise<ItslearningRestApiEntitiesPlannerPlanPreviewV2>;
```

Gets a specific plan for a child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### planId

`number`

The unique identifier of the plan.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPlannerPlanPreviewV2`](../../../types/type-aliases/ItslearningRestApiEntitiesPlannerPlanPreviewV2.md)\>

A promise that resolves to the plan preview.

***

### getChildPlans()

```ts
getChildPlans(
   childId, 
   startDate?, 
   stopDate?, 
   onlyWithoutDates?, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesPlannerPlanPreviewV2>;
```

Gets plans for a specific child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### startDate?

`Date`

The start date of the plans range.

##### stopDate?

`Date`

The stop date of the plans range.

##### onlyWithoutDates?

`boolean`

Whether to include only plans without dates.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `10`

The number of results per page (default = 10).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPlannerPlanPreviewV2`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPlannerPlanPreviewV2.md)\>

A promise that resolves to a paginated list of plan previews.
