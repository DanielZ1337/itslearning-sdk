[itslearning-sdk](../../../modules.md) / [api/MediaRecorder](../index.md) / MediaRecorderAPI

# MediaRecorderAPI

MediaRecorderAPI

Overview:
Endpoint to Video Recording API.

Secured with OAuth2, requires OAuth2 API scope `MediaRecorder`.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### new MediaRecorderAPI()

```ts
new MediaRecorderAPI(http): MediaRecorderAPI
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

[`MediaRecorderAPI`](MediaRecorderAPI.md)

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

### createPlayer()

```ts
createPlayer(applicationKey, settings?): Promise<unknown>
```

Creates a player for media recording.

**Note**: No documentation available for this endpoint.

#### Parameters

##### applicationKey

`string`

The unique key identifying the application.

##### settings?

`Record`\<`string`, `any`\>

(Optional) Additional settings for the player.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the player creation response.

***

### getVideoStreams()

```ts
getVideoStreams(videoId): Promise<unknown>
```

Retrieves the streams for a specific video.

**Note**: No documentation available for this endpoint.

#### Parameters

##### videoId

`string`

The unique ID of the video.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the video streams.

***

### getZiggeoVideoStreams()

```ts
getZiggeoVideoStreams(videoId): Promise<unknown>
```

Retrieves the streams for a Ziggeo video. The `region` parameter is left only for backwards compatibility and is not in use.

#### Parameters

##### videoId

`string`

The unique ID of the Ziggeo video.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the Ziggeo video streams.

***

### recordingComplete()

```ts
recordingComplete(recordingId, name): Promise<unknown>
```

Marks a recording as complete and saves it to the server with the provided name.

#### Parameters

##### recordingId

`string`

The unique ID of the recording.

##### name

`string`

The name to assign to the saved recording.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the recording completion response.

***

### saveZiggeoRecording()

```ts
saveZiggeoRecording(recordingId, name): Promise<unknown>
```

Saves a Ziggeo recorded video or audio clip to the server with the provided name.

**Note**: This method seems similar to `recordingComplete`. Ensure that both are required.

#### Parameters

##### recordingId

`string`

The unique ID of the Ziggeo recording.

##### name

`string`

The name to assign to the saved recording.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the Ziggeo recording save response.

***

### uploadRecording()

```ts
uploadRecording(recordingData, metadata?): Promise<unknown>
```

Uploads a recording to the server.

**Note**: No documentation available for this endpoint.

#### Parameters

##### recordingData

The binary data of the recording to upload.

`Blob` | `Buffer`

##### metadata?

`Record`\<`string`, `any`\>

(Optional) Additional metadata for the recording.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the upload response.
