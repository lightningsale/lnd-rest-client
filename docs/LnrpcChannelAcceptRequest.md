# lnd.LnrpcChannelAcceptRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodePubkey** | **Blob** | The pubkey of the node that wishes to open an inbound channel. | [optional] 
**chainHash** | **Blob** | The hash of the genesis block that the proposed channel resides in. | [optional] 
**pendingChanId** | **Blob** | The pending channel id. | [optional] 
**fundingAmt** | **String** | The funding amount in satoshis that initiator wishes to use in the channel. | [optional] 
**pushAmt** | **String** | The push amount of the proposed channel in millisatoshis. | [optional] 
**dustLimit** | **String** | The dust limit of the initiator&#39;s commitment tx. | [optional] 
**maxValueInFlight** | **String** | The maximum amount of coins in millisatoshis that can be pending in this channel. | [optional] 
**channelReserve** | **String** | The minimum amount of satoshis the initiator requires us to have at all times. | [optional] 
**minHtlc** | **String** | The smallest HTLC in millisatoshis that the initiator will accept. | [optional] 
**feePerKw** | **String** | The initial fee rate that the initiator suggests for both commitment transactions. | [optional] 
**csvDelay** | **Number** | The number of blocks to use for the relative time lock in the pay-to-self output of both commitment transactions. | [optional] 
**maxAcceptedHtlcs** | **Number** | The total number of incoming HTLC&#39;s that the initiator will accept. | [optional] 
**channelFlags** | **Number** | A bit-field which the initiator uses to specify proposed channel behavior. | [optional] 


