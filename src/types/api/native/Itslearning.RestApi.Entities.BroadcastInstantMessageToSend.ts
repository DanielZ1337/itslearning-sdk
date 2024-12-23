import type { ItslearningRestApiEntitiesInstantMessageRecipientRole } from "./Itslearning.RestApi.Entities.InstantMessageRecipientRole";

export type ItslearningRestApiEntitiesBroadcastInstantMessageToSend = {
  SenderName: string;
  SenderHierarchyId: number;
  CourseIds: Array<number>;
  ProjectIds: Array<number>;
  HierarchyIds: Array<number>;
  RecipientRoles: Array<ItslearningRestApiEntitiesInstantMessageRecipientRole>;
  ProfileIds: Array<number>;
  FileIds: Array<number>;
  ToPersonIds: Array<number>;
  InstantMessageThreadId: number;
  Text: string;
  SendAsIndividualMessages: boolean;
};
