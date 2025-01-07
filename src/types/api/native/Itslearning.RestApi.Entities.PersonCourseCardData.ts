import type { ItslearningRestApiEntitiesPersonContextRole } from "./Itslearning.RestApi.Entities.PersonContextRole.ts";
import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple.ts";

export type ItslearningRestApiEntitiesPersonCourseCardData = {
	FollowUpTaskCount: number;
	TaskCount: number;
	TeachersInCourse: ItslearningRestApiEntitiesPersonSimple[];
	Role: ItslearningRestApiEntitiesPersonContextRole;
	LastUpdatedUtc: Date;
	NewNotificationsCount: number;
	NewBulletinsCount: number;
	Url: string;
	HasAdminPermissions: boolean;
	HasStudentPermissions: boolean;
	CourseId: number;
	Title: string;
	FriendlyName: string;
	CourseColor: string;
	CourseFillColor: string;
	CourseCode: string;
};
