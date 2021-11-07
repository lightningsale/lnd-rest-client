# lnd.LnrpcForwardingEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **String** | Timestamp is the time (unix epoch offset) that this circuit was completed. Deprecated by timestamp_ns. | [optional] 
**chanIdIn** | **String** | The incoming channel ID that carried the HTLC that created the circuit. | [optional] 
**chanIdOut** | **String** | The outgoing channel ID that carried the preimage that completed the circuit. | [optional] 
**amtIn** | **String** | The total amount (in satoshis) of the incoming HTLC that created half the circuit. | [optional] 
**amtOut** | **String** | The total amount (in satoshis) of the outgoing HTLC that created the second half of the circuit. | [optional] 
**fee** | **String** | The total fee (in satoshis) that this payment circuit carried. | [optional] 
**feeMsat** | **String** | The total fee (in milli-satoshis) that this payment circuit carried. | [optional] 
**amtInMsat** | **String** | The total amount (in milli-satoshis) of the incoming HTLC that created half the circuit. | [optional] 
**amtOutMsat** | **String** | The total amount (in milli-satoshis) of the outgoing HTLC that created the second half of the circuit. | [optional] 
**timestampNs** | **String** | The number of nanoseconds elapsed since January 1, 1970 UTC when this circuit was completed. | [optional] 


