import { AiAPI } from "./api/Ai";
import { ApplicationInitialisationCacheWarmUpAPI } from "./api/ApplicationInitialisationCacheWarmUp";
import { AssessmentRecordAPI } from "./api/AssessmentRecord";
import { CalendarAPI } from "./api/Calendar";
import { ChildrenAPI } from "./api/Children";
import { ChildrenCalendarAPI } from "./api/ChildrenCalendar";
import { ChildrenCoursesAPI } from "./api/ChildrenCourses";
import { ChildrenOrganisationAPI } from "./api/ChildrenOrganisation";
import { ChildrenPlansAPI } from "./api/ChildrenPlans";
import { CourseCardsAPI } from "./api/CourseCards";
import { CourseFeaturesAPI } from "./api/CourseFeatures";
import { CoursesAPI } from "./api/Courses";
import { CoursesGroupsAPI } from "./api/CoursesGroups";
import { CustomerSettingsAPI } from "./api/CustomerSettings";
import { HierarchiesAPI } from "./api/Hierarchies";
import { ImmersiveReaderAPI } from "./api/ImmersiveReader";
import { InstantMessagesAPI } from "./api/InstantMessage";
import { InstantMessageBroadcastAPI } from "./api/InstantMessageBroadcast";
import { LearningObjectiveRepositoryAPI } from "./api/LearningObjectiveRepository";
import { LearningObjectivesReportsAPI } from "./api/LearningObjectivesReports";
import { LightBulletinAPI } from "./api/LightBulletin";
import { LightBulletinCourseAPI } from "./api/LightBulletinCourse";
import { LtiExtensionAPI } from "./api/LtiExtension";
import { MediaRecorderAPI } from "./api/MediaRecorder";
import { MessagesAPI } from "./api/Messages";
import { NativeAppAPI } from "./api/NativeApp";
import { NotificationsAPI } from "./api/Notifications";
import { NotificationsPostAPI } from "./api/NotificationsPost";
import { PageUrlAPI } from "./api/PageUrl";
import { PersonAPI } from "./api/Person";
import { PersonRelationAPI } from "./api/PersonRelation";
import { PlannerAPI } from "./api/Planner";
import { ProjectsAPI } from "./api/Projects";
import { SearchDataAPI } from "./api/SearchData";
import { SiteLinksAPI } from "./api/SiteLinks";
import { SitesAPI } from "./api/Sites";
import { SsoAPI } from "./api/Sso";
import { StatisticsAPI } from "./api/Statistics";
import { StudentPlanAPI } from "./api/StudentPlan";
import { SupervisorAPI } from "./api/Supervisor";
import { TaskListDailyWorkflowAPI } from "./api/TaskListDailyWorkflow";
import { TasksAPI } from "./api/Tasks";
import { TokenAPI } from "./api/Token";
import { WorkloadAPI } from "./api/Workload";
import { YourFilesAPI } from "./api/YourFiles";
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
	public notificationsPost: NotificationsPostAPI;
	public pageUrl: PageUrlAPI;
	public person: PersonAPI;
	public planner: PlannerAPI;
	public searchData: SearchDataAPI;
	public studentPlan: StudentPlanAPI;
	public taskListDailyWorkflow: TaskListDailyWorkflowAPI;
	public tasks: TasksAPI;
	public workload: WorkloadAPI;
	public auth: AuthManager;
	public ai: AiAPI;
	public applicationInitialisationCacheWarmUp: ApplicationInitialisationCacheWarmUpAPI;
	public assessmentRecord: AssessmentRecordAPI;
	public children: ChildrenAPI;
	public childrenCalendar: ChildrenCalendarAPI;
	public childrenCourses: ChildrenCoursesAPI;
	public childrenOrganisation: ChildrenOrganisationAPI;
	public childrenPlans: ChildrenPlansAPI;
	public courseFeatures: CourseFeaturesAPI;
	public coursesGroups: CoursesGroupsAPI;
	public customerSettings: CustomerSettingsAPI;
	public hierarchies: HierarchiesAPI;
	public immersiveReader: ImmersiveReaderAPI;
	public learningObjectiveRepository: LearningObjectiveRepositoryAPI;
	public learningObjectivesReports: LearningObjectivesReportsAPI;
	public yourFiles: YourFilesAPI;
	public mediaRecorder: MediaRecorderAPI;
	public messages: MessagesAPI;
	public notifications: NotificationsAPI;
	public personRelation: PersonRelationAPI;
	public projects: ProjectsAPI;
	public siteLinks: SiteLinksAPI;
	public statistics: StatisticsAPI;
	public supervisor: SupervisorAPI;

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
		this.notificationsPost = new NotificationsPostAPI(this.http);
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
		this.ai = new AiAPI(this.http);
		this.applicationInitialisationCacheWarmUp =
			new ApplicationInitialisationCacheWarmUpAPI(this.http);
		this.assessmentRecord = new AssessmentRecordAPI(this.http);
		this.children = new ChildrenAPI(this.http);
		this.childrenCalendar = new ChildrenCalendarAPI(this.http);
		this.childrenCourses = new ChildrenCoursesAPI(this.http);
		this.childrenOrganisation = new ChildrenOrganisationAPI(this.http);
		this.childrenPlans = new ChildrenPlansAPI(this.http);
		this.courseFeatures = new CourseFeaturesAPI(this.http);
		this.coursesGroups = new CoursesGroupsAPI(this.http);
		this.customerSettings = new CustomerSettingsAPI(this.http);
		this.hierarchies = new HierarchiesAPI(this.http);
		this.immersiveReader = new ImmersiveReaderAPI(this.http);
		this.learningObjectiveRepository = new LearningObjectiveRepositoryAPI(
			this.http,
		);
		this.learningObjectivesReports = new LearningObjectivesReportsAPI(
			this.http,
		);
		this.yourFiles = new YourFilesAPI(this.http);
		this.mediaRecorder = new MediaRecorderAPI(this.http);
		this.messages = new MessagesAPI(this.http);
		this.notifications = new NotificationsAPI(this.http);
		this.personRelation = new PersonRelationAPI(this.http);
		this.projects = new ProjectsAPI(this.http);
		this.siteLinks = new SiteLinksAPI(this.http);
		this.statistics = new StatisticsAPI(this.http);
		this.supervisor = new SupervisorAPI(this.http);
	}
}
