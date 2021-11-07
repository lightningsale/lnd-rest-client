# lnd.PendingChannelsResponseForceClosedChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**PendingChannelsResponsePendingChannel**](PendingChannelsResponsePendingChannel.md) |  | [optional] 
**closingTxid** | **String** |  | [optional] 
**limboBalance** | **String** |  | [optional] 
**maturityHeight** | **Number** |  | [optional] 
**blocksTilMaturity** | **Number** | Remaining # of blocks until the commitment output can be swept. Negative values indicate how many blocks have passed since becoming mature. | [optional] 
**recoveredBalance** | **String** |  | [optional] 
**pendingHtlcs** | [**[LnrpcPendingHTLC]**](LnrpcPendingHTLC.md) |  | [optional] 
**anchor** | [**ForceClosedChannelAnchorState**](ForceClosedChannelAnchorState.md) |  | [optional] 


