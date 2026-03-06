import { Manager } from "../lib/Manager";

/**
 * ApplicationInitialisationCacheWarmUpAPI
 *
 * Overview:
 * Endpoint for Application Initialisation Cache Warm-Up API.
 * Used to warm up various internal caches.
 *
 * Secured with OAuth2.
 */
export class ApplicationInitialisationCacheWarmUpAPI extends Manager {
	/**
	 * Warms up the extension module cache.
	 *
	 * @returns A promise that resolves when the extension module cache is warmed up.
	 */
	public async warmUpExtensionModule(): Promise<void> {
		return this.http.get("/restapi/warmup/cache/extensionmodule/v1");
	}

	/**
	 * Warms up the learning tool cache.
	 *
	 * @returns A promise that resolves when the learning tool cache is warmed up.
	 */
	public async warmUpLearningTool(): Promise<void> {
		return this.http.get("/restapi/warmup/cache/learningtool/v1");
	}

	/**
	 * Warms up the plugin cache.
	 *
	 * @returns A promise that resolves when the plugin cache is warmed up.
	 */
	public async warmUpPlugin(): Promise<void> {
		return this.http.get("/restapi/warmup/cache/plugin/v1");
	}
}
