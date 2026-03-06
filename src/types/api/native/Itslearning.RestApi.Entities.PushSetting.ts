export type ItslearningRestApiEntitiesPushSetting = {
	/** Current (or new) unique DeviceId for the application on the phone or the tablet. */
	DeviceId: string;
	/** Old DeviceId for the application (provide when changing DeviceId). */
	OldDeviceId: string | null;
	/** Type of push provider, e.g. "Google" or "Apple". */
	PushProvider: string;
	/** If push notifications should be enabled or not. */
	IsEnabled: boolean;
};
