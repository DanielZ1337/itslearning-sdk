import { CalendarAPI } from "./api/Calendar";
import { CoursesAPI } from "./api/Courses";
import { SitesAPI } from "./api/Sites";
import { SsoAPI } from "./api/Sso";
import { TokenAPI } from "./api/Token";
import { HttpClient } from "./lib/HttpClient";
import { defaultConfig } from "./types/config";
import { GrantType } from "./types/grantTypes";
import { ApiService } from "./utils/api-service";

export interface SDKConfig {
	clientId: string;
	redirectUri: string;
	baseURL: string;
	accessToken?: string;
}

export class ItsLearningSDK {
	private clientId: string;
	private redirectUri: string;
	private baseURL: string;
	private accessToken?: string;
	private http: HttpClient;

	public token: TokenAPI;
	public calendar: CalendarAPI;
	public courses: CoursesAPI;
	public sites: SitesAPI;
	public sso: SsoAPI;

	constructor(config: SDKConfig) {
		this.clientId = config.clientId;
		this.redirectUri = config.redirectUri;
		this.baseURL = config.baseURL;
		this.accessToken = config.accessToken;
		this.http = new HttpClient(this.baseURL, this.accessToken);
		this.token = new TokenAPI(this.http);
		this.calendar = new CalendarAPI(this.http);
		this.courses = new CoursesAPI(this.http);
		this.sites = new SitesAPI(this.http);
		this.sso = new SsoAPI(this.http);
	}
}

const sdk = new ItsLearningSDK({
	clientId: defaultConfig.clientId,
	redirectUri: defaultConfig.redirectUri,
	baseURL: defaultConfig.baseURL,
	accessToken: process.env.ACCESS_TOKEN,
});

const courses = await sdk.courses.getCoursesV3();

console.log(courses);

console.log(await sdk.sites.getSites());
