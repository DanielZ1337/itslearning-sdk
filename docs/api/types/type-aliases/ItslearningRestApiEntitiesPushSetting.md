[itslearning-sdk](../../modules.md) / [types](../index.md) / ItslearningRestApiEntitiesPushSetting

# ItslearningRestApiEntitiesPushSetting

```ts
type ItslearningRestApiEntitiesPushSetting = object;
```

## Properties

### DeviceId

```ts
DeviceId: string;
```

Current (or new) unique DeviceId for the application on the phone or the tablet.

***

### IsEnabled

```ts
IsEnabled: boolean;
```

If push notifications should be enabled or not.

***

### OldDeviceId

```ts
OldDeviceId: string | null;
```

Old DeviceId for the application (provide when changing DeviceId).

***

### PushProvider

```ts
PushProvider: string;
```

Type of push provider, e.g. "Google" or "Apple".
