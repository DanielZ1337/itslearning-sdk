import { Manager } from "../lib/Manager";

/**
 * MediaRecorderAPI
 *
 * Overview:
 * Endpoint to Video Recording API.
 *
 * Secured with OAuth2, requires OAuth2 API scope `MediaRecorder`.
 */
export class MediaRecorderAPI extends Manager {
	/**
	 * Creates a player for media recording.
	 *
	 * **Note**: No documentation available for this endpoint.
	 *
	 * @param applicationKey - The unique key identifying the application.
	 * @param settings - (Optional) Additional settings for the player.
	 * @returns A promise that resolves to the player creation response.
	 */
	public async createPlayer(
		applicationKey: string,
		settings?: Record<string, unknown>,
	): Promise<unknown> {
		return this.http.post("/restapi/personal/mediarecorder/createplayer/v1", {
			applicationKey,
			settings,
		});
	}

	/**
	 * Marks a recording as complete and saves it to the server with the provided name.
	 *
	 * @param recordingId - The unique ID of the recording.
	 * @param name - The name to assign to the saved recording.
	 * @returns A promise that resolves to the recording completion response.
	 */
	public async recordingComplete(
		recordingId: string,
		name: string,
	): Promise<unknown> {
		return this.http.post(
			"/restapi/personal/mediarecorder/recordingcomplete/v1",
			{ recordingId, name },
		);
	}

	/**
	 * Saves a Ziggeo recorded video or audio clip to the server with the provided name.
	 *
	 * **Note**: This method seems similar to `recordingComplete`. Ensure that both are required.
	 *
	 * @param recordingId - The unique ID of the Ziggeo recording.
	 * @param name - The name to assign to the saved recording.
	 * @returns A promise that resolves to the Ziggeo recording save response.
	 */
	public async saveZiggeoRecording(
		recordingId: string,
		name: string,
	): Promise<unknown> {
		return this.http.post(
			"/restapi/personal/mediarecorder/saveziggeorecording/v1",
			{ recordingId, name },
		);
	}

	/**
	 * Uploads a recording to the server.
	 *
	 * **Note**: No documentation available for this endpoint.
	 *
	 * @param recordingData - The binary data of the recording to upload.
	 * @param metadata - (Optional) Additional metadata for the recording.
	 * @returns A promise that resolves to the upload response.
	 */
	public async uploadRecording(
		recordingData: Blob | Buffer,
		metadata?: Record<string, unknown>,
	): Promise<unknown> {
		const formData = new FormData();
		formData.append("recording", recordingData as Blob);
		if (metadata) {
			for (const [key, value] of Object.entries(metadata)) {
				formData.append(key, String(value));
			}
		}
		return this.http.post(
			"/restapi/personal/mediarecorder/uploadrecording/v1",
			formData,
		);
	}

	/**
	 * Retrieves the streams for a specific video.
	 *
	 * **Note**: No documentation available for this endpoint.
	 *
	 * @param videoId - The unique ID of the video.
	 * @returns A promise that resolves to the video streams.
	 */
	public async getVideoStreams(videoId: string): Promise<unknown> {
		return this.http.get(
			`/restapi/personal/mediarecorder/video/${videoId}/streams/v1`,
		);
	}

	/**
	 * Retrieves the streams for a Ziggeo video. The `region` parameter is left only for backwards compatibility and is not in use.
	 *
	 * @param videoId - The unique ID of the Ziggeo video.
	 * @returns A promise that resolves to the Ziggeo video streams.
	 */
	public async getZiggeoVideoStreams(videoId: string): Promise<unknown> {
		return this.http.get(
			`/restapi/personal/mediarecorder/ziggeo/video/${videoId}/streams/v1`,
		);
	}
}
