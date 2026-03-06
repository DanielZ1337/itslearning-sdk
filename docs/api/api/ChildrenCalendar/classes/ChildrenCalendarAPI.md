[itslearning-sdk](../../../modules.md) / [api/ChildrenCalendar](../index.md) / ChildrenCalendarAPI

# ChildrenCalendarAPI

ChildrenCalendarAPI

Overview:
Endpoint for Children Calendar API.
Provides access to calendar events for a guardian's children.

Secured with OAuth2 and requires the OAuth2 API scope `Children`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new ChildrenCalendarAPI(http): ChildrenCalendarAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`ChildrenCalendarAPI`

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

### getChildCourseEvents()

```ts
getChildCourseEvents(
   childId, 
   courseId, 
   fromDate?, 
   toDate?, 
   pageIndex?, 
pageSize?): Promise<EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent>;
```

Gets calendar events for a specific course of a child.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### courseId

`number`

The unique identifier of the course.

##### fromDate?

`Date`

The start date for calendar events.

##### toDate?

`Date`

The end date for calendar events.

##### pageIndex?

`number` = `0`

The page index (default = 0).

##### pageSize?

`number` = `20`

The number of results per page (default = 20).

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesPersonalCalendarEvent.md)\>

A promise that resolves to a paginated list of calendar events.

***

### getChildEventById()

```ts
getChildEventById(childId, eventId): Promise<ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2>;
```

Gets a specific calendar event for a child by event ID.

#### Parameters

##### childId

`number`

The unique identifier of the child.

##### eventId

`number`

The unique identifier of the event.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2.md)\>

A promise that resolves to the calendar event details.
