[itslearning-sdk](../../../modules.md) / [api/Supervisor](../index.md) / SupervisorAPI

# SupervisorAPI

SupervisorAPI

Overview:
Endpoint for retrieving data for supervisors - mentors and headteachers.

Secured with OAuth2, requires OAuth2 API scope `Supervisor`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new SupervisorAPI()

```ts
new SupervisorAPI(http): SupervisorAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`SupervisorAPI`](SupervisorAPI.md)

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

### getSupervisedPersons()

```ts
getSupervisedPersons(
   supervisorType, 
   pageIndex, 
pageSize): Promise<unknown>
```

Gets a list of all persons the current user is a supervisor for (mentorees).

#### Parameters

##### supervisorType

`string`

The type of supervisor (e.g., 'Mentor', 'HeadTeacher').

##### pageIndex

`number` = `0`

The index of the page to retrieve (default = 0).

##### pageSize

`number` = `10`

The number of persons per page (default = 10).

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to a list of supervised persons.
