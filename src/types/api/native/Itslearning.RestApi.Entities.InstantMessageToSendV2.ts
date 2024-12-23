import type { ItslearningRestApiEntitiesReferencedInstantMessageType } from "./Itslearning.RestApi.Entities.ReferencedInstantMessageType";

export type ItslearningRestApiEntitiesInstantMessageToSendV2 = {
	CourseIds: Array<number>;
	ProjectIds: Array<number>;
	FileIds: Array<number>;
	InstantMessageIdToShare: number;
	OriginInstantMessageId: number;
	ReferencedInstantMessageType: ItslearningRestApiEntitiesReferencedInstantMessageType;
	OriginMessageThreadId: number;
	ToPersonIds: Array<number>;
	InstantMessageThreadId: number;
	SendAsIndividualMessages: boolean;
};
