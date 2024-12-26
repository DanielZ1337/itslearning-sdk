[itslearning-sdk](../../../modules.md) / [api/Planner](../index.md) / PlannerAPI

# PlannerAPI

PlannerAPI

Overview:
Endpoint to get planner information.

Secured with OAuth2, requires OAuth2 API scope `Planner`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new PlannerAPI()

```ts
new PlannerAPI(http): PlannerAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`PlannerAPI`](PlannerAPI.md)

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`constructor`](../../../lib/Manager/classes/Manager.md#constructors)

## Properties

### http

```ts
protected readonly http: HttpClient;
```

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`http`](../../../lib/Manager/classes/Manager.md#http-1)

## Methods

### addSharedPlanElements()

```ts
addSharedPlanElements(
   targetCourseId, 
   targetTopicId, 
   targetPlanId, 
data): Promise<ItsolutionsItslearningWebRestApiInternalModelsPlannerShareablePlannerAddSharedResourcesToCoursePlanRequest>
```

Adds shared plan elements to the course plan.

#### Parameters

##### targetCourseId

`number`

The unique ID of the target course.

##### targetTopicId

`number`

The unique ID of the target topic.

##### targetPlanId

`number`

The unique ID of the target plan.

##### data

`unknown`

Any additional data (e.g., list of elements) to be added.

#### Returns

`Promise`\<[`ItsolutionsItslearningWebRestApiInternalModelsPlannerShareablePlannerAddSharedResourcesToCoursePlanRequest`](../../../types/type-aliases/ItsolutionsItslearningWebRestApiInternalModelsPlannerShareablePlannerAddSharedResourcesToCoursePlanRequest.md)\>

***

### getCoursePlans()

```ts
getCoursePlans(
   courseId, 
   startDate?, 
stopDate?): Promise<EntityListOfItslearningRestApiEntitiesPlannerPlanPreview>
```

Gets previews of plans for the specified course. Can filter by date range.

If the plan starts or ends within the provided period, it will be included.
If no period is supplied, all course plans are returned.

#### Parameters

##### courseId

`number`

The unique ID of the course.

##### startDate?

(Optional) The start date (ISO 8601).

`string` | `Date`

##### stopDate?

(Optional) The end date (ISO 8601).

`string` | `Date`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPlannerPlanPreview`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPlannerPlanPreview.md)\>

***

### getPlansInfo()

```ts
getPlansInfo(plansIds): Promise<ItslearningRestApiEntitiesPersonalPlanWithObjectivesAndElements[]>
```

Gets a list of plans, with learning objectives and elements attached.

#### Parameters

##### plansIds

`number`[]

An array of plan IDs to retrieve.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalPlanWithObjectivesAndElements`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalPlanWithObjectivesAndElements.md)[]\>
