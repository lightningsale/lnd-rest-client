# lnd.PendingChannelsResponsePendingChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteNodePub** | **String** |  | [optional] 
**channelPoint** | **String** |  | [optional] 
**capacity** | **String** |  | [optional] 
**localBalance** | **String** |  | [optional] 
**remoteBalance** | **String** |  | [optional] 
**localChanReserveSat** | **String** | The minimum satoshis this node is required to reserve in its balance. | [optional] 
**remoteChanReserveSat** | **String** | The minimum satoshis the other node is required to reserve in its balance. | [optional] 
**initiator** | [**LnrpcInitiator**](LnrpcInitiator.md) |  | [optional] 
**commitmentType** | [**LnrpcCommitmentType**](LnrpcCommitmentType.md) |  | [optional] 


