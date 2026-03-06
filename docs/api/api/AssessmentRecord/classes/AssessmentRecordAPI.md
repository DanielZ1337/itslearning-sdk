[itslearning-sdk](../../../modules.md) / [api/AssessmentRecord](../index.md) / AssessmentRecordAPI

# AssessmentRecordAPI

AssessmentRecordAPI

Overview:
Endpoint for Assessment Record API.
Provides access to gradebook/assessment data for a course.

Secured with OAuth2 and requires the OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new AssessmentRecordAPI(http): AssessmentRecordAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`AssessmentRecordAPI`

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

### clearPersonAssessmentOverwritten()

```ts
clearPersonAssessmentOverwritten(
   courseId, 
   gradebookItemId, 
personId): Promise<void>;
```

Clears the overwritten assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

#### Returns

`Promise`\<`void`\>

***

### deletePersonAssessmentGrade()

```ts
deletePersonAssessmentGrade(
   courseId, 
   gradebookItemId, 
personId): Promise<void>;
```

Removes a grade assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

#### Returns

`Promise`\<`void`\>

***

### deletePersonAssessmentScore()

```ts
deletePersonAssessmentScore(
   courseId, 
   gradebookItemId, 
personId): Promise<void>;
```

Removes a numeric score assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

#### Returns

`Promise`\<`void`\>

***

### getAssessmentRecordElements()

```ts
getAssessmentRecordElements(courseId, termId?): Promise<ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordElements>;
```

Returns the assessment record elements (gradebook columns) for a course.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

##### termId?

`number`

Optional term identifier to filter by.

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordElements`](../../../types/type-aliases/ItslearningRestApiEntitiesAssessmentRecordAssessmentRecordElements.md)\>

Assessment record elements with scale info.

***

### getAssessmentRecordPersonItems()

```ts
getAssessmentRecordPersonItems(courseId, options?): Promise<EntityListOfItslearningRestApiEntitiesAssessmentRecordAssessmentRecordPerson>;
```

Returns a paginated list of persons with their assessment values for a course.

#### Parameters

##### courseId

`number`

The course identifier.

##### options?

Filtering and paging options.

###### groupIds?

`number`[]

###### includePersonsNotInAnyGroups?

`boolean`

###### pageIndex?

`number`

###### pageSize?

`number`

###### searchText?

`string`

###### termId?

`number`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesAssessmentRecordAssessmentRecordPerson`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesAssessmentRecordAssessmentRecordPerson.md)\>

Paginated list of assessment record persons.

***

### getSettings()

```ts
getSettings(courseId): Promise<unknown>;
```

Gets the setup for the assessment record page, including language, settings, paths, and permissions.

#### Parameters

##### courseId

`number`

The unique identifier of the course.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the assessment record page setup.

***

### setPersonAssessmentGrade()

```ts
setPersonAssessmentGrade(
   courseId, 
   gradebookItemId, 
   personId, 
   assessmentId, 
assessmentItemId): Promise<void>;
```

Sets a grade assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

##### assessmentId

`number`

The assessment identifier.

##### assessmentItemId

`number`

The assessment item identifier.

#### Returns

`Promise`\<`void`\>

***

### setPersonAssessmentOverwrittenGrade()

```ts
setPersonAssessmentOverwrittenGrade(
   courseId, 
   gradebookItemId, 
   personId, 
   oldAssessmentItemId, 
   assessmentId, 
overwrittenAssessmentItemId): Promise<void>;
```

Sets an overwritten grade assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

##### oldAssessmentItemId

`number`

The previous assessment item identifier.

##### assessmentId

`number`

The new assessment identifier.

##### overwrittenAssessmentItemId

`number`

The overwritten assessment item identifier.

#### Returns

`Promise`\<`void`\>

***

### setPersonAssessmentOverwrittenScore()

```ts
setPersonAssessmentOverwrittenScore(
   courseId, 
   gradebookItemId, 
   personId, 
   overwrittenScore, 
oldScore): Promise<void>;
```

Sets an overwritten score assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

##### overwrittenScore

`number`

The overwritten score value.

##### oldScore

`number`

The old score value.

#### Returns

`Promise`\<`void`\>

***

### setPersonAssessmentScore()

```ts
setPersonAssessmentScore(
   courseId, 
   gradebookItemId, 
   personId, 
score): Promise<void>;
```

Sets a numeric score assessment for a person on a gradebook item.

#### Parameters

##### courseId

`number`

The course identifier.

##### gradebookItemId

`number`

The gradebook item identifier.

##### personId

`number`

The person identifier.

##### score

`number`

The numeric score to set.

#### Returns

`Promise`\<`void`\>
