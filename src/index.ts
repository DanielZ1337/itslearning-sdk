import { CalendarAPI } from "./api/Calendar";
import { CoursesAPI } from "./api/Courses";
import { LtiExtensionAPI } from "./api/LtiExtension";
import { NativeAppAPI } from "./api/NativeApp";
import { NotificationsPostAPI } from "./api/NotificationsPost";
import { PageUrlAPI } from "./api/PageUrl";
import { PersonAPI } from "./api/Person";
import { PlannerAPI } from "./api/Planner";
import { SearchDataAPI } from "./api/SearchData";
import { SitesAPI } from "./api/Sites";
import { SsoAPI } from "./api/Sso";
import { StudentPlanAPI } from "./api/StudentPlan";
import { TaskListDailyWorkflowAPI } from "./api/TaskListDailyWorkflow";
import { TasksAPI } from "./api/Tasks";
import { TokenAPI } from "./api/Token";
import { WorkloadAPI } from "./api/Workload";
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
  public lti: LtiExtensionAPI;
  public nativeApp: NativeAppAPI;
  public notifications: NotificationsPostAPI;
  public pageUrl: PageUrlAPI;
  public person: PersonAPI;
  public planner: PlannerAPI;
  public searchData: SearchDataAPI;
  public studentPlan: StudentPlanAPI;
  public taskListDailyWorkflow: TaskListDailyWorkflowAPI;
  public tasks: TasksAPI;
  public workload: WorkloadAPI;

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
    this.lti = new LtiExtensionAPI(this.http);
    this.nativeApp = new NativeAppAPI(this.http);
    this.notifications = new NotificationsPostAPI(this.http);
    this.pageUrl = new PageUrlAPI(this.http);
    this.person = new PersonAPI(this.http);
    this.planner = new PlannerAPI(this.http);
    this.searchData = new SearchDataAPI(this.http);
    this.studentPlan = new StudentPlanAPI(this.http);
    this.taskListDailyWorkflow = new TaskListDailyWorkflowAPI(this.http);
    this.tasks = new TasksAPI(this.http);
    this.workload = new WorkloadAPI(this.http);
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

sdk.planner.getPlansInfo([1, 23, 123]).then((data) => data[0].CourseName);
