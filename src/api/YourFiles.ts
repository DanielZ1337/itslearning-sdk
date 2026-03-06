import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesYourFilesCourseModel } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.YourFiles.CourseModel";
import type { EntityListOfItslearningRestApiEntitiesYourFilesMessageAttachmentModel } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.YourFiles.MessageAttachmentModel";
import type { ItslearningRestApiEntitiesYourFilesFileModel } from "../types/api/native/Itslearning.RestApi.Entities.YourFiles.FileModel";
import type {
	ItslearningRestApiEntitiesYourFilesCopyRequest,
	ItslearningRestApiEntitiesYourFilesMoveRequest,
	ItslearningRestApiEntitiesYourFilesUpdateRequest,
	ItslearningRestApiEntitiesYourFilesZipFileJobModel,
	ItslearningRestApiEntitiesYourFilesZipRequest,
} from "../types/api/native/Itslearning.RestApi.Entities.YourFiles.Requests";
import { createSearchParams } from "../utils/search-params";

/**
 * YourFilesAPI
 *
 * Overview:
 * Endpoint for Your Files API.
 * Provides access to personal file storage: browsing, uploading, copying,
 * moving, deleting files and folders, and generating zip archives.
 *
 * Secured with OAuth2 and requires the OAuth2 API scope `MyFiles`.
 */
export class YourFilesAPI extends Manager {
	/**
	 * Returns the contents of a private folder.
	 *
	 * @param folderId - The folder identifier.
	 * @param searchPhrase - Optional search phrase to filter files.
	 * @returns Folder file model.
	 */
	public async getPrivateFolder(
		folderId: number,
		searchPhrase?: string,
	): Promise<ItslearningRestApiEntitiesYourFilesFileModel> {
		const params = createSearchParams({ searchPhrase });
		return this.http.get(
			`/restapi/personal/yourfiles/private/folders/${folderId}/v1?${params}`,
		);
	}

	/**
	 * Returns the contents of a public folder.
	 *
	 * @param folderId - The folder identifier.
	 * @param searchPhrase - Optional search phrase to filter files.
	 * @returns Folder file model.
	 */
	public async getPublicFolder(
		folderId: number,
		searchPhrase?: string,
	): Promise<ItslearningRestApiEntitiesYourFilesFileModel> {
		const params = createSearchParams({ searchPhrase });
		return this.http.get(
			`/restapi/personal/yourfiles/public/folders/${folderId}/v1?${params}`,
		);
	}

	/**
	 * Returns the contents of a folder (private or public).
	 *
	 * @param folderId - The folder identifier.
	 * @returns Folder file model.
	 */
	public async getFolder(
		folderId: number,
	): Promise<ItslearningRestApiEntitiesYourFilesFileModel> {
		return this.http.get(`/restapi/personal/yourfiles/folders/${folderId}/v1`);
	}

	/**
	 * Returns a paginated list of courses with files.
	 *
	 * @param options - Paging and search options.
	 * @returns Paginated list of course models.
	 */
	public async getCourses(options?: {
		pageIndex?: number;
		pageSize?: number;
		searchPhrase?: string;
		sortField?: string;
		sortOrder?: string;
	}): Promise<EntityListOfItslearningRestApiEntitiesYourFilesCourseModel> {
		const params = createSearchParams({
			PageIndex: options?.pageIndex,
			PageSize: options?.pageSize,
			searchPhrase: options?.searchPhrase,
			sortField: options?.sortField,
			sortOrder: options?.sortOrder,
		});
		return this.http.get(`/restapi/personal/yourfiles/courses/v1?${params}`);
	}

	/**
	 * Returns a paginated list of message attachments.
	 *
	 * @param options - Paging and search options.
	 * @returns Paginated list of message attachment models.
	 */
	public async getMessageAttachments(options?: {
		pageIndex?: number;
		pageSize?: number;
		searchPhrase?: string;
		sortField?: string;
		sortOrder?: string;
	}): Promise<EntityListOfItslearningRestApiEntitiesYourFilesMessageAttachmentModel> {
		const params = createSearchParams({
			PageIndex: options?.pageIndex,
			PageSize: options?.pageSize,
			searchPhrase: options?.searchPhrase,
			sortField: options?.sortField,
			sortOrder: options?.sortOrder,
		});
		return this.http.get(
			`/restapi/personal/yourfiles/attachments/v1?${params}`,
		);
	}

	/**
	 * Creates a new private folder inside a parent folder.
	 *
	 * @param parentFolderId - The parent folder identifier.
	 * @param name - The name of the new folder.
	 * @returns The created folder file model.
	 */
	public async createPrivateFolder(
		parentFolderId: number,
		name: string,
	): Promise<ItslearningRestApiEntitiesYourFilesFileModel> {
		return this.http.post(`/restapi/personal/yourfiles/private/folders/v1`, {
			data: { parentFolderId, name },
		});
	}

	/**
	 * Creates a zip archive from specified files and folders.
	 *
	 * @param request - The zip request with file and folder IDs.
	 * @returns The zip job model with status and download URL.
	 */
	public async createZip(
		request: ItslearningRestApiEntitiesYourFilesZipRequest,
	): Promise<ItslearningRestApiEntitiesYourFilesZipFileJobModel> {
		return this.http.post(`/restapi/personal/yourfiles/files/zip/v1`, {
			data: request,
		});
	}

	/**
	 * Returns the status of a zip job.
	 *
	 * @param zipJobId - The zip job identifier.
	 * @returns The zip job model with current status.
	 */
	public async getZipStatus(
		zipJobId: string,
	): Promise<ItslearningRestApiEntitiesYourFilesZipFileJobModel> {
		return this.http.get(
			`/restapi/personal/yourfiles/files/zip/${zipJobId}/v1`,
		);
	}

	/**
	 * Updates metadata for a private file.
	 *
	 * @param fileId - The file identifier.
	 * @param updateRequest - The update request with new metadata.
	 */
	public async updatePrivateFile(
		fileId: number,
		updateRequest: ItslearningRestApiEntitiesYourFilesUpdateRequest,
	): Promise<void> {
		return this.http.put(
			`/restapi/personal/yourfiles/private/files/${fileId}/v1`,
			{ data: updateRequest },
		);
	}

	/**
	 * Updates metadata for a private folder.
	 *
	 * @param folderId - The folder identifier.
	 * @param updateRequest - The update request with new metadata.
	 */
	public async updatePrivateFolder(
		folderId: number,
		updateRequest: ItslearningRestApiEntitiesYourFilesUpdateRequest,
	): Promise<void> {
		return this.http.put(
			`/restapi/personal/yourfiles/private/folders/${folderId}/v1`,
			{ data: updateRequest },
		);
	}

	/**
	 * Copies or moves files to a new location.
	 *
	 * @param request - The copy or move request.
	 */
	public async copyOrMoveFiles(
		request:
			| ItslearningRestApiEntitiesYourFilesCopyRequest
			| ItslearningRestApiEntitiesYourFilesMoveRequest,
	): Promise<void> {
		return this.http.put(`/restapi/personal/yourfiles/files/v1`, {
			data: request,
		});
	}

	/**
	 * Deletes private files.
	 *
	 * @param fileIds - Array of file identifiers to delete.
	 */
	public async deletePrivateFiles(fileIds: number[]): Promise<void> {
		const params = createSearchParams({ "fileIds[]": fileIds });
		return this.http.delete(
			`/restapi/personal/yourfiles/private/files/v1?${params}`,
		);
	}

	/**
	 * Deletes private folders.
	 *
	 * @param folderIds - Array of folder identifiers to delete.
	 */
	public async deletePrivateFolders(folderIds: number[]): Promise<void> {
		const params = createSearchParams({ "folderIds[]": folderIds });
		return this.http.delete(
			`/restapi/personal/yourfiles/private/folders/v1?${params}`,
		);
	}
}
