# lnd.LnrpcChannelFeeReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanId** | **String** | The short channel id that this fee report belongs to. | [optional] 
**channelPoint** | **String** | The channel that this fee report belongs to. | [optional] 
**baseFeeMsat** | **String** | The base fee charged regardless of the number of milli-satoshis sent. | [optional] 
**feePerMil** | **String** | The amount charged per milli-satoshis transferred expressed in millionths of a satoshi. | [optional] 
**feeRate** | **Number** | The effective fee rate in milli-satoshis. Computed by dividing the fee_per_mil value by 1 million. | [optional] 


