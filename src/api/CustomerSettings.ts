import { Manager } from "../lib/Manager";

/**
 * CustomerSettingsAPI
 *
 * Overview:
 * Endpoint for Customer Settings API.
 * Provides access to customer-specific configuration settings.
 *
 * Secured with OAuth2.
 */
export class CustomerSettingsAPI extends Manager {
	/**
	 * Gets a customer setting by its key.
	 *
	 * @param key - The key of the customer setting to retrieve.
	 * @returns A promise that resolves to the value of the customer setting.
	 */
	public async getCustomerSetting(key: string): Promise<string> {
		return this.http.get(`/restapi/customersettings/${key}/v1`);
	}
}
