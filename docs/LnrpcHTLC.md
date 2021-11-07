# lnd.LnrpcHTLC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incoming** | **Boolean** |  | [optional] 
**amount** | **String** |  | [optional] 
**hashLock** | **Blob** |  | [optional] 
**expirationHeight** | **Number** |  | [optional] 
**htlcIndex** | **String** | Index identifying the htlc on the channel. | [optional] 
**forwardingChannel** | **String** | If this HTLC is involved in a forwarding operation, this field indicates the forwarding channel. For an outgoing htlc, it is the incoming channel. For an incoming htlc, it is the outgoing channel. When the htlc originates from this node or this node is the final destination, forwarding_channel will be zero. The forwarding channel will also be zero for htlcs that need to be forwarded but don&#39;t have a forwarding decision persisted yet. | [optional] 
**forwardingHtlcIndex** | **String** | Index identifying the htlc on the forwarding channel. | [optional] 


