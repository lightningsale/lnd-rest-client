# lnd.LnrpcHop

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanId** | **String** | The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel. | [optional] 
**chanCapacity** | **String** |  | [optional] 
**amtToForward** | **String** |  | [optional] 
**fee** | **String** |  | [optional] 
**expiry** | **Number** |  | [optional] 
**amtToForwardMsat** | **String** |  | [optional] 
**feeMsat** | **String** |  | [optional] 
**pubKey** | **String** | An optional public key of the hop. If the public key is given, the payment can be executed without relying on a copy of the channel graph. | [optional] 
**tlvPayload** | **Boolean** | If set to true, then this hop will be encoded using the new variable length TLV format. Note that if any custom tlv_records below are specified, then this field MUST be set to true for them to be encoded properly. | [optional] 
**mppRecord** | [**LnrpcMPPRecord**](LnrpcMPPRecord.md) |  | [optional] 
**ampRecord** | [**LnrpcAMPRecord**](LnrpcAMPRecord.md) |  | [optional] 
**customRecords** | **{String: Blob}** | An optional set of key-value TLV records. This is useful within the context of the SendToRoute call as it allows callers to specify arbitrary K-V pairs to drop off at each hop within the onion. | [optional] 


