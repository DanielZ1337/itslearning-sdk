import type { ItslearningRestApiEntitiesFederatedLoginProvider } from "./Itslearning.RestApi.Entities.FederatedLoginProvider";
import type { ItsolutionsItslUtilsConstantsCustomerEducationSegment } from "./Itsolutions.ItslUtils.Constants.CustomerEducationSegment";

export type ItslearningRestApiEntitiesSiteLoginDetails = {
  IsNativeLoginDefault: boolean;
  FederatedLoginProviders: Array<ItslearningRestApiEntitiesFederatedLoginProvider>;
  DisableForgottenPasswordLink: boolean;
  IsParentPortalEnabled: boolean;
  IsFronterUpgradedSite: boolean;
  IsParentAppEnabled: boolean;
  OrgApiBaseUrl: string;
  CustomerId: string;
  Title: string;
  ShortName: string;
  CultureName: string;
  BaseUrl: string;
  IsPersonalRestApiEnabled: boolean;
  ShowCustomerInDropdownList: boolean;
  CountryCode: string;
  StateCode: string;
  Segment: ItsolutionsItslUtilsConstantsCustomerEducationSegment;
};
