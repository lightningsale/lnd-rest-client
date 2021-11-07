# lnd.LnrpcChannelCloseSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelPoint** | **String** | The outpoint (txid:index) of the funding transaction. | [optional] 
**chanId** | **String** | The unique channel ID for the channel. | [optional] 
**chainHash** | **String** | The hash of the genesis block that this channel resides within. | [optional] 
**closingTxHash** | **String** | The txid of the transaction which ultimately closed this channel. | [optional] 
**remotePubkey** | **String** | Public key of the remote peer that we formerly had a channel with. | [optional] 
**capacity** | **String** | Total capacity of the channel. | [optional] 
**closeHeight** | **Number** | Height at which the funding transaction was spent. | [optional] 
**settledBalance** | **String** |  | [optional] 
**timeLockedBalance** | **String** |  | [optional] 
**closeType** | [**ChannelCloseSummaryClosureType**](ChannelCloseSummaryClosureType.md) |  | [optional] 
**openInitiator** | [**LnrpcInitiator**](LnrpcInitiator.md) |  | [optional] 
**closeInitiator** | [**LnrpcInitiator**](LnrpcInitiator.md) |  | [optional] 
**resolutions** | [**[LnrpcResolution]**](LnrpcResolution.md) |  | [optional] 


