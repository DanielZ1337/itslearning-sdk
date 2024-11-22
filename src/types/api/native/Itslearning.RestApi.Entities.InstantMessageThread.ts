import type { ItslearningRestApiEntitiesInstantMessage } from "./Itslearning.RestApi.Entities.InstantMessage.ts";
import type { ItslearningRestApiEntitiesInstantMessageMassMessageType } from "./Itslearning.RestApi.Entities.InstantMessageMassMessageType.ts";
import type { ItslearningRestApiEntitiesLocationRecipient } from "./Itslearning.RestApi.Entities.LocationRecipient.ts";
import type { ItslearningRestApiEntitiesThreadParticipant } from "./Itslearning.RestApi.Entities.ThreadParticipant.ts";

export type ItslearningRestApiEntitiesInstantMessageThread = {
	InstantMessageThreadId: number;
	Name: string;
	Created: Date;
	CreatedByTeacher: boolean;
	CreatedBy: number;
	Type: "Group" | "Course" | "Project" | "OneToOne" | "GroupPlaceHolder";
	ColorScheme: string;
	Messages: {
		EntityArray: ItslearningRestApiEntitiesInstantMessage[];
		Total: number;
		CurrentPageIndex: number;
		PageSize: number;
	};
	LastMessage: ItslearningRestApiEntitiesInstantMessage;
	MatchingMessageIds: number[];
	Participants: ItslearningRestApiEntitiesThreadParticipant[];
	LocationRecipients: ItslearningRestApiEntitiesLocationRecipient[];
	LastReadInstantMessageId: number;
	SortIndex: number;
	OnlyThreadAdminCanSendToThread: boolean;
	IsThreadAdministrator: boolean;
	IsThreadModerator: boolean;
	InstantMessageLocationId: number;
	IsBlocked: boolean;
	UserAllowToBlockThread: boolean;
	IsAbuse: boolean;
	IsAbuseReportedByCurrentUser: boolean;
	MassMessageType: ItslearningRestApiEntitiesInstantMessageMassMessageType;
	Tooltip: string;
	CanDelete: boolean;
};
