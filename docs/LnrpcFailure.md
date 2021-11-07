# lnd.LnrpcFailure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | [**FailureFailureCode**](FailureFailureCode.md) |  | [optional] 
**channelUpdate** | [**LnrpcChannelUpdate**](LnrpcChannelUpdate.md) |  | [optional] 
**htlcMsat** | **String** | A failure type-dependent htlc value. | [optional] 
**onionSha256** | **Blob** | The sha256 sum of the onion payload. | [optional] 
**cltvExpiry** | **Number** | A failure type-dependent cltv expiry value. | [optional] 
**flags** | **Number** | A failure type-dependent flags value. | [optional] 
**failureSourceIndex** | **Number** | The position in the path of the intermediate or final node that generated the failure message. Position zero is the sender node. | [optional] 
**height** | **Number** | A failure type-dependent block height. | [optional] 


