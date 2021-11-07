# lnd.LnrpcOpenChannelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**satPerVbyte** | **String** | A manual fee rate set in sat/vbyte that should be used when crafting the funding transaction. | [optional] 
**nodePubkey** | **Blob** | The pubkey of the node to open a channel with. When using REST, this field must be encoded as base64. | [optional] 
**nodePubkeyString** | **String** | The hex encoded pubkey of the node to open a channel with. Deprecated now that the REST gateway supports base64 encoding of bytes fields. | [optional] 
**localFundingAmount** | **String** |  | [optional] 
**pushSat** | **String** |  | [optional] 
**targetConf** | **Number** | The target number of blocks that the funding transaction should be confirmed by. | [optional] 
**satPerByte** | **String** | Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the funding transaction. | [optional] 
**_private** | **Boolean** | Whether this channel should be private, not announced to the greater network. | [optional] 
**minHtlcMsat** | **String** | The minimum value in millisatoshi we will require for incoming HTLCs on the channel. | [optional] 
**remoteCsvDelay** | **Number** | The delay we require on the remote&#39;s commitment transaction. If this is not set, it will be scaled automatically with the channel size. | [optional] 
**minConfs** | **Number** | The minimum number of confirmations each one of your outputs used for the funding transaction must satisfy. | [optional] 
**spendUnconfirmed** | **Boolean** | Whether unconfirmed outputs should be used as inputs for the funding transaction. | [optional] 
**closeAddress** | **String** | Close address is an optional address which specifies the address to which funds should be paid out to upon cooperative close. This field may only be set if the peer supports the option upfront feature bit (call listpeers to check). The remote peer will only accept cooperative closes to this address if it is set.  Note: If this value is set on channel creation, you will *not* be able to cooperatively close out to a different address. | [optional] 
**fundingShim** | [**LnrpcFundingShim**](LnrpcFundingShim.md) |  | [optional] 
**remoteMaxValueInFlightMsat** | **String** | The maximum amount of coins in millisatoshi that can be pending within the channel. It only applies to the remote party. | [optional] 
**remoteMaxHtlcs** | **Number** | The maximum number of concurrent HTLCs we will allow the remote party to add to the commitment transaction. | [optional] 
**maxLocalCsv** | **Number** | Max local csv is the maximum csv delay we will allow for our own commitment transaction. | [optional] 


