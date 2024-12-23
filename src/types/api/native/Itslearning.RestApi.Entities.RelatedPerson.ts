import type { ItslearningRestApiEntitiesPersonSimple } from "./Itslearning.RestApi.Entities.PersonSimple";
import type { ItslearningRestApiEntitiesRelationInfo } from "./Itslearning.RestApi.Entities.RelationInfo";
import type { ItslearningRestApiEntitiesRelationType } from "./Itslearning.RestApi.Entities.RelationType";

export type ItslearningRestApiEntitiesRelatedPerson = {
  Person: ItslearningRestApiEntitiesPersonSimple;
  RelationType: ItslearningRestApiEntitiesRelationType;
  RelationInfo: ItslearningRestApiEntitiesRelationInfo;
};
