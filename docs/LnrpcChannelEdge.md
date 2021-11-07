# lnd.LnrpcChannelEdge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **String** | The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel. | [optional] 
**chanPoint** | **String** |  | [optional] 
**lastUpdate** | **Number** |  | [optional] 
**node1Pub** | **String** |  | [optional] 
**node2Pub** | **String** |  | [optional] 
**capacity** | **String** |  | [optional] 
**node1Policy** | [**LnrpcRoutingPolicy**](LnrpcRoutingPolicy.md) |  | [optional] 
**node2Policy** | [**LnrpcRoutingPolicy**](LnrpcRoutingPolicy.md) |  | [optional] 


