import type { ItslearningRestApiEntitiesPersonalAiAiRequest } from "./Itslearning.RestApi.Entities.Personal.Ai.AiRequest";

export type ItslearningRestApiEntitiesPersonalAiAiResponseRequest =
	ItslearningRestApiEntitiesPersonalAiAiRequest & {
		PreviousResponseId: string | null;
		StoreToken: string | null;
	};
