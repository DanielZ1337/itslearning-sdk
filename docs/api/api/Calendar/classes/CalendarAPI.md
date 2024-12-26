[itslearning-sdk](../../../modules.md) / [api/Calendar](../index.md) / CalendarAPI

# CalendarAPI

CalendarAPI

Overview:
Calendar endpoint for the personal API.

Secured with OAuth2 and requires the OAuth2 API scope `Calendar`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new CalendarAPI()

```ts
new CalendarAPI(http): CalendarAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`CalendarAPI`](CalendarAPI.md)

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

### getEventById()

```ts
getEventById(eventId): Promise<ItslearningRestApiEntitiesPersonalCalendarEvent>
```

Retrieves a single calendar event by its unique identifier.

#### Parameters

##### eventId

`number`

The unique identifier of the calendar event.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCalendarEvent`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCalendarEvent.md)\>

A promise that resolves to the requested CalendarEvent.

***

### getEvents()

```ts
getEvents(
   fromDate, 
   pageIndex, 
pageSize): Promise<ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2>
```

Retrieves a paginated list of calendar events starting from a specific date.

#### Parameters

##### fromDate

The start date to filter events, in ISO 8601 format.

`string` | `Date`

##### pageIndex

`number` = `0`

The index of the page to retrieve (default is 0).

##### pageSize

`number` = `10`

The number of events per page (default is 10).

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2`](../../../types/type-aliases/ItslearningRestApiEntitiesPersonalCalendarCalendarEventV2.md)\>

A promise that resolves to a CalendarEventList containing the events.
