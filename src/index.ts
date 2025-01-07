import { CalendarAPI } from "./api/Calendar";
import { CourseCardsAPI } from "./api/CourseCards";
import { CoursesAPI } from "./api/Courses";
import { InstantMessagesAPI } from "./api/InstantMessage";
import { InstantMessageBroadcastAPI } from "./api/InstantMessageBroadcast";
import { LightBulletinAPI } from "./api/LightBulletin";
import { LightBulletinCourseAPI } from "./api/LightBulletinCourse";
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
import { AuthManager } from "./lib/AuthManager";
import { ConfigManager } from "./lib/ConfigManager";
import { HttpClient } from "./lib/HttpClient";
import { defaultConfig } from "./types/config";

export interface SDKConfig {
	clientId?: string;
	redirectUri?: string;
	baseURL?: string;
	accessToken?: string;
	refreshToken?: string;
}

export class ItsLearningSDK {
	private http: HttpClient;
	public config: ConfigManager;

	public token: TokenAPI;
	public calendar: CalendarAPI;
	public courses: CoursesAPI;
	public courseCards: CourseCardsAPI;
	public sites: SitesAPI;
	public sso: SsoAPI;
	public instantMessage: InstantMessagesAPI;
	public instantMessageBroadcast: InstantMessageBroadcastAPI;
	public lightBulletin: LightBulletinAPI;
	public lightBulletinCourse: LightBulletinCourseAPI;
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
	public auth: AuthManager;

	constructor(config?: SDKConfig) {
		this.config = new ConfigManager(
			config?.clientId ?? defaultConfig.clientId,
			config?.redirectUri ?? defaultConfig.redirectUri,
			config?.baseURL ?? defaultConfig.baseURL,
			config?.accessToken,
			config?.refreshToken,
		);

		this.auth = new AuthManager(this.config);
		this.http = new HttpClient(this.config, this.auth);
		this.token = new TokenAPI(this.http);
		this.calendar = new CalendarAPI(this.http);
		this.courses = new CoursesAPI(this.http);
		this.courseCards = new CourseCardsAPI(this.http);
		this.sites = new SitesAPI(this.http);
		this.sso = new SsoAPI(this.http);
		this.lightBulletin = new LightBulletinAPI(this.http);
		this.lightBulletinCourse = new LightBulletinCourseAPI(this.http);
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
		this.instantMessage = new InstantMessagesAPI(this.http);
		this.instantMessageBroadcast = new InstantMessageBroadcastAPI(this.http);
	}
}
