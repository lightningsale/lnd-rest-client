# lnd.LnrpcForwardingHistoryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwardingEvents** | [**[LnrpcForwardingEvent]**](LnrpcForwardingEvent.md) | A list of forwarding events from the time slice of the time series specified in the request. | [optional] 
**lastOffsetIndex** | **Number** | The index of the last time in the set of returned forwarding events. Can be used to seek further, pagination style. | [optional] 


