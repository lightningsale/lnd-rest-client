# lnd.LnrpcSendToRouteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentHash** | **Blob** | The payment hash to use for the HTLC. When using REST, this field must be encoded as base64. | [optional] 
**paymentHashString** | **String** | An optional hex-encoded payment hash to be used for the HTLC. Deprecated now that the REST gateway supports base64 encoding of bytes fields. | [optional] 
**route** | [**LnrpcRoute**](LnrpcRoute.md) |  | [optional] 


