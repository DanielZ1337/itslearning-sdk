import { Manager } from "../lib/Manager";
import { createSearchParams } from "../utils/search-params";

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
		settings?: Record<string, any>,
	): Promise<unknown> {
		throw new Error("Not implemented");
		if (!applicationKey || typeof applicationKey !== "string") {
			throw new Error(
				"Parameter 'applicationKey' is required and must be a string.",
			);
		}

		const requestData = { applicationKey, settings };

		try {
			const response = await this.http.post(
				"/restapi/personal/mediarecorder/createplayer/v1",
				{ data: requestData },
			);
			return response;
		} catch (error) {
			console.error("Failed to create media recorder player:", error);
			throw error;
		}
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
		throw new Error("Not implemented");
		if (!recordingId || typeof recordingId !== "string") {
			throw new Error(
				"Parameter 'recordingId' is required and must be a string.",
			);
		}

		if (!name || typeof name !== "string") {
			throw new Error("Parameter 'name' is required and must be a string.");
		}

		const requestData = { recordingId, name };

		try {
			const response = await this.http.post(
				"/restapi/personal/mediarecorder/recordingcomplete/v1",
				{ data: requestData },
			);
			return response;
		} catch (error) {
			console.error("Failed to mark recording as complete:", error);
			throw error;
		}
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
		throw new Error("Not implemented");
		if (!recordingId || typeof recordingId !== "string") {
			throw new Error(
				"Parameter 'recordingId' is required and must be a string.",
			);
		}

		if (!name || typeof name !== "string") {
			throw new Error("Parameter 'name' is required and must be a string.");
		}

		const requestData = { recordingId, name };

		try {
			const response = await this.http.post(
				"/restapi/personal/mediarecorder/saveziggeorecording/v1",
				{ data: requestData },
			);
			return response;
		} catch (error) {
			console.error("Failed to save Ziggeo recording:", error);
			throw error;
		}
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
		metadata?: Record<string, any>,
	): Promise<unknown> {
		throw new Error("Not implemented");
		// if (!recordingData) {
		//   throw new Error("Parameter 'recordingData' is required.");
		// }

		// const formData = new FormData();
		// formData.append("recording", recordingData);
		// if (metadata) {
		//   Object.entries(metadata).forEach(([key, value]) => {
		//     formData.append(key, value);
		//   });
		// }

		// try {
		//   const response = await this.http.post(
		//     `/restapi/personal/mediarecorder/uploadrecording/v1`,
		//     { data: formData },
		//   );
		//   return response;
		// } catch (error) {
		//   console.error("Failed to upload recording:", error);
		//   throw error;
		// }
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
		throw new Error("Not implemented");
		if (!videoId || typeof videoId !== "string") {
			throw new Error("Parameter 'videoId' is required and must be a string.");
		}

		try {
			const response = await this.http.get(
				`/restapi/personal/mediarecorder/video/${videoId}/streams/v1`,
			);
			return response;
		} catch (error) {
			console.error("Failed to retrieve video streams:", error);
			throw error;
		}
	}

	/**
	 * Retrieves the streams for a Ziggeo video. The `region` parameter is left only for backwards compatibility and is not in use.
	 *
	 * @param videoId - The unique ID of the Ziggeo video.
	 * @returns A promise that resolves to the Ziggeo video streams.
	 */
	public async getZiggeoVideoStreams(videoId: string): Promise<unknown> {
		throw new Error("Not implemented");
		if (!videoId || typeof videoId !== "string") {
			throw new Error("Parameter 'videoId' is required and must be a string.");
		}

		try {
			const response = await this.http.get(
				`/restapi/personal/mediarecorder/ziggeo/video/${videoId}/streams/v1`,
			);
			return response;
		} catch (error) {
			console.error("Failed to retrieve Ziggeo video streams:", error);
			throw error;
		}
	}
}
