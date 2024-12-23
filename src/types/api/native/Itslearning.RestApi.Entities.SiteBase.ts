import type { ItsolutionsItslUtilsConstantsCustomerEducationSegment } from "./Itsolutions.ItslUtils.Constants.CustomerEducationSegment";

export type ItslearningRestApiEntitiesSiteBase = {
	CustomerId: number;
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
