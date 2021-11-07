# lnd.LnrpcSendCoinsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addr** | **String** |  | [optional] 
**amount** | **String** |  | [optional] 
**targetConf** | **Number** | The target number of blocks that this transaction should be confirmed by. | [optional] 
**satPerVbyte** | **String** | A manual fee rate set in sat/vbyte that should be used when crafting the transaction. | [optional] 
**satPerByte** | **String** | Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the transaction. | [optional] 
**sendAll** | **Boolean** | If set, then the amount field will be ignored, and lnd will attempt to send all the coins under control of the internal wallet to the specified address. | [optional] 
**label** | **String** | An optional label for the transaction, limited to 500 characters. | [optional] 
**minConfs** | **Number** | The minimum number of confirmations each one of your outputs used for the transaction must satisfy. | [optional] 
**spendUnconfirmed** | **Boolean** | Whether unconfirmed outputs should be used as inputs for the transaction. | [optional] 


