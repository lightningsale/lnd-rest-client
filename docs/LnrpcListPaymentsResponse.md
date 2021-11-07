# lnd.LnrpcListPaymentsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**[LnrpcPayment]**](LnrpcPayment.md) |  | [optional] 
**firstIndexOffset** | **String** | The index of the first item in the set of returned payments. This can be used as the index_offset to continue seeking backwards in the next request. | [optional] 
**lastIndexOffset** | **String** | The index of the last item in the set of returned payments. This can be used as the index_offset to continue seeking forwards in the next request. | [optional] 


