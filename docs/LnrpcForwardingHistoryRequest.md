# lnd.LnrpcForwardingHistoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **String** | Start time is the starting point of the forwarding history request. All records beyond this point will be included, respecting the end time, and the index offset. | [optional] 
**endTime** | **String** | End time is the end point of the forwarding history request. The response will carry at most 50k records between the start time and the end time. The index offset can be used to implement pagination. | [optional] 
**indexOffset** | **Number** | Index offset is the offset in the time series to start at. As each response can only contain 50k records, callers can use this to skip around within a packed time series. | [optional] 
**numMaxEvents** | **Number** | The max number of events to return in the response to this query. | [optional] 


