# lnd.LnrpcPolicyUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global** | **Boolean** | If set, then this update applies to all currently active channels. | [optional] 
**chanPoint** | [**LnrpcChannelPoint**](LnrpcChannelPoint.md) |  | [optional] 
**baseFeeMsat** | **String** | The base fee charged regardless of the number of milli-satoshis sent. | [optional] 
**feeRate** | **Number** | The effective fee rate in milli-satoshis. The precision of this value goes up to 6 decimal places, so 1e-6. | [optional] 
**timeLockDelta** | **Number** | The required timelock delta for HTLCs forwarded over the channel. | [optional] 
**maxHtlcMsat** | **String** | If set, the maximum HTLC size in milli-satoshis. If unset, the maximum HTLC will be unchanged. | [optional] 
**minHtlcMsat** | **String** | The minimum HTLC size in milli-satoshis. Only applied if min_htlc_msat_specified is true. | [optional] 
**minHtlcMsatSpecified** | **Boolean** | If true, min_htlc_msat is applied. | [optional] 


