export const ItslearningRestApiEntitiesReferencedInstantMessageType = {
	None: 1,
	Shared: 2,
	Replied: 3,
	AbuseReported: 4,
	AbuseReportedThread: 5,
} as const

export type ItslearningRestApiEntitiesReferencedInstantMessageType =
	(typeof ItslearningRestApiEntitiesReferencedInstantMessageType)[keyof typeof ItslearningRestApiEntitiesReferencedInstantMessageType]
