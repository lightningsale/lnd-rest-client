# lnd.LnrpcNodeUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **[String]** | Deprecated, use node_addresses. | [optional] 
**identityKey** | **String** |  | [optional] 
**globalFeatures** | **Blob** | Deprecated, use features. | [optional] 
**alias** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**nodeAddresses** | [**[LnrpcNodeAddress]**](LnrpcNodeAddress.md) |  | [optional] 
**features** | [**{String: LnrpcFeature}**](LnrpcFeature.md) | Features that the node has advertised in the init message, node announcements and invoices. | [optional] 


