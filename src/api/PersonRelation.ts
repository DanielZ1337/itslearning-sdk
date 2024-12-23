import { Manager } from "../lib/Manager";
import type { ItslearningRestApiEntitiesRelatedPerson } from "../types/api/native/Itslearning.RestApi.Entities.RelatedPerson";
import type { ItslearningRestApiEntitiesRelationType } from "../types/api/native/Itslearning.RestApi.Entities.RelationType";
import { createSearchParams } from "../utils/search-params";

/**
 * PersonRelationAPI
 *
 * Overview:
 * Endpoint to get the person relations.
 *
 * Secured with OAuth2, requires the OAuth2 API scope `Person`.
 */
export class PersonRelationAPI extends Manager {
  /**
   * Gets the relation between persons with detailed info
   * about the related person and the relation type.
   *
   * @param personId - The unique ID of the person.
   * @param relationType - The type of relation to filter by (e.g. 'Student', 'Guardian').
   */
  public async getRelatedPersons(
    personId: number,
    relationType?: ItslearningRestApiEntitiesRelationType,
  ): Promise<Array<ItslearningRestApiEntitiesRelatedPerson>> {
    const queryParams = createSearchParams({ relationType });
    return this.http.get(
      `/restapi/personal/person/${personId}/relatedpersons/v1`,
      { params: queryParams },
    );
  }
}
