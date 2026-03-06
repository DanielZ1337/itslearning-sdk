[itslearning-sdk](../../../modules.md) / [api/LearningObjectivesReports](../index.md) / LearningObjectivesReportsAPI

# LearningObjectivesReportsAPI

LearningObjectivesReportsAPI

Overview:
Endpoint for Learning Objectives Progress Report API.
Provides access to learning objective progress reports and criteria assessments.

Secured with OAuth2 and requires the OAuth2 API scope `Courses`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new LearningObjectivesReportsAPI(http): LearningObjectivesReportsAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`LearningObjectivesReportsAPI`

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

### getCriteriaAssessmentReport()

```ts
getCriteriaAssessmentReport(personId, options?): Promise<ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReport>;
```

Returns criteria assessment report for a specific person.

#### Parameters

##### personId

`number`

The person identifier.

##### options?

Filtering options.

###### courseId?

`number`

###### criteriaIds?

`number`[]

###### fromDateTime?

`string`

###### toDateTime?

`string`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReport`](../../../types/type-aliases/ItslearningRestApiEntitiesCriteriaAssessmentReportCriteriaAssessmentReport.md)\>

Criteria assessment report.

***

### getProgressReport()

```ts
getProgressReport(options?): Promise<ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport>;
```

Returns aggregated learning objective progress report for the current user.

#### Parameters

##### options?

Filtering options.

###### fromDateTime?

`string`

###### personSyncKey?

`string`

###### statuses?

`string`[]

###### subjectId?

`number`

###### toDateTime?

`string`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport`](../../../types/type-aliases/ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport.md)\>

Aggregated progress report.

***

### getProgressReportForPerson()

```ts
getProgressReportForPerson(personId, options?): Promise<ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport>;
```

Returns aggregated learning objective progress report for a specific person.

#### Parameters

##### personId

`number`

The person identifier.

##### options?

Filtering options.

###### fromDateTime?

`string`

###### statuses?

`string`[]

###### subjectId?

`number`

###### toDateTime?

`string`

#### Returns

`Promise`\<[`ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport`](../../../types/type-aliases/ItslearningRestApiEntitiesLearningObjectiveProgressReportAggregatedReport.md)\>

Aggregated progress report for the person.

***

### getReportStatuses()

```ts
getReportStatuses(personSyncKey?): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus>;
```

Returns available assessment statuses for the current user.

#### Parameters

##### personSyncKey?

`string`

Optional sync key to identify person.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus.md)\>

List of report assessment statuses.

***

### getReportStatusesForPerson()

```ts
getReportStatusesForPerson(personId): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus>;
```

Returns available assessment statuses for a specific person.

#### Parameters

##### personId

`number`

The person identifier.

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportAssessmentStatus.md)\>

List of report assessment statuses for the person.

***

### getReportSubjects()

```ts
getReportSubjects(options?): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject>;
```

Returns available report subjects for the current user.

#### Parameters

##### options?

Filtering options.

###### fromDateTime?

`string`

###### personSyncKey?

`string`

###### subjectIds?

`number`[]

###### toDateTime?

`string`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject.md)\>

List of report subjects.

***

### getReportSubjectsForPerson()

```ts
getReportSubjectsForPerson(personId, options?): Promise<EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject>;
```

Returns available report subjects for a specific person.

#### Parameters

##### personId

`number`

The person identifier.

##### options?

Filtering options.

###### fromDateTime?

`string`

###### subjectIds?

`number`[]

###### toDateTime?

`string`

#### Returns

`Promise`\<[`EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject`](../../../types/type-aliases/EntityListOfItslearningRestApiEntitiesLearningObjectiveProgressReportReportSubject.md)\>

List of report subjects for the person.
