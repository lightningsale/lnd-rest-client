# lnd.LnrpcChannelUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **Blob** | The signature that validates the announced data and proves the ownership of node id. | [optional] 
**chainHash** | **Blob** | The target chain that this channel was opened within. This value should be the genesis hash of the target chain. Along with the short channel ID, this uniquely identifies the channel globally in a blockchain. | [optional] 
**chanId** | **String** | The unique description of the funding transaction. | [optional] 
**timestamp** | **Number** | A timestamp that allows ordering in the case of multiple announcements. We should ignore the message if timestamp is not greater than the last-received. | [optional] 
**messageFlags** | **Number** | The bitfield that describes whether optional fields are present in this update. Currently, the least-significant bit must be set to 1 if the optional field MaxHtlc is present. | [optional] 
**channelFlags** | **Number** | The bitfield that describes additional meta-data concerning how the update is to be interpreted. Currently, the least-significant bit must be set to 0 if the creating node corresponds to the first node in the previously sent channel announcement and 1 otherwise. If the second bit is set, then the channel is set to be disabled. | [optional] 
**timeLockDelta** | **Number** | The minimum number of blocks this node requires to be added to the expiry of HTLCs. This is a security parameter determined by the node operator. This value represents the required gap between the time locks of the incoming and outgoing HTLC&#39;s set to this node. | [optional] 
**htlcMinimumMsat** | **String** | The minimum HTLC value which will be accepted. | [optional] 
**baseFee** | **Number** | The base fee that must be used for incoming HTLC&#39;s to this particular channel. This value will be tacked onto the required for a payment independent of the size of the payment. | [optional] 
**feeRate** | **Number** | The fee rate that will be charged per millionth of a satoshi. | [optional] 
**htlcMaximumMsat** | **String** | The maximum HTLC value which will be accepted. | [optional] 
**extraOpaqueData** | **Blob** | The set of data that was appended to this message, some of which we may not actually know how to iterate or parse. By holding onto this data, we ensure that we&#39;re able to properly validate the set of signatures that cover these new fields, and ensure we&#39;re able to make upgrades to the network in a forwards compatible manner. | [optional] 


