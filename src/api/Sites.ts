import { Manager } from "../lib/Manager";
import type { EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite } from "../types/api/native/EntityListOfItslearning.RestApi.Entities.AggregatedOrganisationLite";
import type { ItslearningRestApiEntitiesSite } from "../types/api/native/Itslearning.RestApi.Entities.Site";
import type { ItslearningRestApiEntitiesSiteBase } from "../types/api/native/Itslearning.RestApi.Entities.SiteBase";
import type { ItslearningRestApiEntitiesSiteLoginDetails } from "../types/api/native/Itslearning.RestApi.Entities.SiteLoginDetails";
import type { ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter } from "../types/api/native/Itsolutions.Itslearning.Web.RestApi.Public.Unauthenticated.SitesFilter";

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
    pageIndex?: number,
    pageSize?: number,
    sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
  ): Promise<EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite> {
    return this.http.get(
      `/restapi/sites/all/organisations/search/v1?searchText=${searchText}&PageIndex=${pageIndex}&PageSize=${pageSize}&sitesFilter=${sitesFilter}`,
    );
  }
  public async getAllOrganisations(
    sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
  ): Promise<EntityListOfItslearningRestApiEntitiesAggregatedOrganisationLite> {
    return this.http.get(
      `/restapi/sites/all/organisations/v1?sitesFilter=${sitesFilter}`,
    );
  }
  public async getAllCustomerSites(
    sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
  ): Promise<ItslearningRestApiEntitiesSite> {
    return this.http.get(`/restapi/sites/all/v1?sitesFilter=${sitesFilter}`);
  }
  public async getSiteByShortname(
    shortname: string,
  ): Promise<ItslearningRestApiEntitiesSite> {
    return this.http.get(`/restapi/sites/shortnames/${shortname}/v1`);
  }
  public async getSites(
    startsWith?: string,
    pageIndex?: number,
    pageSize?: number,
    sitesFilter?: ItsolutionsItslearningWebRestApiPublicUnauthenticatedSitesFilter,
  ): Promise<ItslearningRestApiEntitiesSiteBase> {
    return this.http.get(
      `/restapi/sites/v1?startsWith=${startsWith}&PageIndex=${pageIndex}&PageSize=${pageSize}&sitesFilter=${sitesFilter}`,
    );
  }
}
