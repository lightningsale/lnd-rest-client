# lnd.PendingChannelsResponsePendingOpenChannel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**PendingChannelsResponsePendingChannel**](PendingChannelsResponsePendingChannel.md) |  | [optional] 
**confirmationHeight** | **Number** |  | [optional] 
**commitFee** | **String** | The amount calculated to be paid in fees for the current set of commitment transactions. The fee amount is persisted with the channel in order to allow the fee amount to be removed and recalculated with each channel state update, including updates that happen after a system restart. | [optional] 
**commitWeight** | **String** |  | [optional] 
**feePerKw** | **String** | The required number of satoshis per kilo-weight that the requester will pay at all times, for both the funding transaction and commitment transaction. This value can later be updated once the channel is open. | [optional] 


