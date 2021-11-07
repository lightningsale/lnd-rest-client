# lnd.LnrpcChannelEdgeUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanId** | **String** | The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel. | [optional] 
**chanPoint** | [**LnrpcChannelPoint**](LnrpcChannelPoint.md) |  | [optional] 
**capacity** | **String** |  | [optional] 
**routingPolicy** | [**LnrpcRoutingPolicy**](LnrpcRoutingPolicy.md) |  | [optional] 
**advertisingNode** | **String** |  | [optional] 
**connectingNode** | **String** |  | [optional] 


