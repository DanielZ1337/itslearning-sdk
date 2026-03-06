[itslearning-sdk](../../../modules.md) / [api/CustomerSettings](../index.md) / CustomerSettingsAPI

# CustomerSettingsAPI

CustomerSettingsAPI

Overview:
Endpoint for Customer Settings API.
Provides access to customer-specific configuration settings.

Secured with OAuth2.

## Extends

- [`Manager`](../../../lib/Manager/classes/Manager.md)

## Constructors

### Constructor

```ts
new CustomerSettingsAPI(http): CustomerSettingsAPI;
```

#### Parameters

##### http

[`HttpClient`](../../../lib/HttpClient/classes/HttpClient.md)

#### Returns

`CustomerSettingsAPI`

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`constructor`](../../../lib/Manager/classes/Manager.md#constructor)

## Properties

### http

```ts
protected readonly http: HttpClient;
```

#### Inherited from

[`Manager`](../../../lib/Manager/classes/Manager.md).[`http`](../../../lib/Manager/classes/Manager.md#http)

## Methods

### getCustomerSetting()

```ts
getCustomerSetting(key): Promise<string>;
```

Gets a customer setting by its key.

#### Parameters

##### key

`string`

The key of the customer setting to retrieve.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the value of the customer setting.
