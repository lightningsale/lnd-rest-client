# lnd.LnrpcConnectPeerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addr** | [**LnrpcLightningAddress**](LnrpcLightningAddress.md) |  | [optional] 
**perm** | **Boolean** | If set, the daemon will attempt to persistently connect to the target peer. Otherwise, the call will be synchronous. | [optional] 
**timeout** | **String** | The connection timeout value (in seconds) for this request. It won&#39;t affect other requests. | [optional] 


