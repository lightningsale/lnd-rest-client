# lnd.LnrpcChannelConstraints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csvDelay** | **Number** | The CSV delay expressed in relative blocks. If the channel is force closed, we will need to wait for this many blocks before we can regain our funds. | [optional] 
**chanReserveSat** | **String** | The minimum satoshis this node is required to reserve in its balance. | [optional] 
**dustLimitSat** | **String** | The dust limit (in satoshis) of the initiator&#39;s commitment tx. | [optional] 
**maxPendingAmtMsat** | **String** | The maximum amount of coins in millisatoshis that can be pending in this channel. | [optional] 
**minHtlcMsat** | **String** | The smallest HTLC in millisatoshis that the initiator will accept. | [optional] 
**maxAcceptedHtlcs** | **Number** | The total number of incoming HTLC&#39;s that the initiator will accept. | [optional] 


