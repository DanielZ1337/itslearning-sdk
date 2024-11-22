export const ItslearningRestApiEntitiesLocationType = {
	Course: 0,
	Project: 1,
} as const

export type ItslearningRestApiEntitiesLocationType =
	(typeof ItslearningRestApiEntitiesLocationType)[keyof typeof ItslearningRestApiEntitiesLocationType]
