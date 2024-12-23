import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.AggregatedOrganisationLite";
import type { ItslearningRestApiEntitiesSite } from "../types/api/native/Itslearning.RestApi.Entities.Site";
import type { ItslearningRestApiEntitiesSiteBase } from "../types/api/native/Itslearning.RestApi.Entities.SiteBase";
import type { ItslearningRestApiEntitiesSiteLoginDetails } from "../types/api/native/Itslearning.RestApi.Entities.SiteLoginDetails";
import { ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter } from "../types/api/native/Itsolutions.Itslearning.Web.RestApi.Public.Unauthenticated.SitesFilter";
import { createSearchParams } from "../utils/search-params";

export class SitesAPI extends Manager {
	public async getLoginDetails(
		customerId: number,
	): Promise<ItslearningRestApiEntitiesSiteLoginDetails> {
		return this.http.get(`/restapi/sites/${customerId}/logindetails/v1`);
	}

	public async getSiteByCustomerId(
		customerId: number,
	): Promise<ItslearningRestApiEntitiesSite> {
		return this.http.get(`/restapi/sites/${customerId}`);
	}

	public async searchOrganisations(
		searchText: string,
		pageIndex = 0,
		pageSize = 100,
		sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
	): Promise<EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite> {
		const queryParams = createSearchParams({
			searchText,
			PageIndex: pageIndex,
			PageSize: pageSize,
			sitesFilter: sitesFilter,
		});

		return this.http.get(`/restapi/sites/all/organisations/search/v1`, {
			params: queryParams,
		});
	}

	public async getAllOrganisations(
		sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
	): Promise<EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite> {
		const queryParams = createSearchParams({ sitesFilter });

		return this.http.get(`/restapi/sites/all/organisations/v1`, {
			params: queryParams,
		});
	}

	public async getAllCustomerSites(
		sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
	): Promise<ItslearningRestApiEntitiesSite> {
		const queryParams = createSearchParams({ sitesFilter });

		return this.http.get(`/restapi/sites/all/v1`, {
			params: queryParams,
		});
	}

	public async getSiteByShortname(
		shortname: string,
	): Promise<ItslearningRestApiEntitiesSite> {
		return this.http.get(`/restapi/sites/shortnames/${shortname}/v1`);
	}

	public async getSites(
		startsWith?: string,
		pageIndex = 0,
		pageSize = 100,
		sitesFilter: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter = ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter.All,
	): Promise<ItslearningRestApiEntitiesSiteBase> {
		const queryParams = createSearchParams({
			PageIndex: pageIndex,
			PageSize: pageSize,
			startsWith,
			sitesFilter,
		});

		return this.http.get(`/restapi/sites/v1`, {
			params: queryParams,
		});
	}
}
