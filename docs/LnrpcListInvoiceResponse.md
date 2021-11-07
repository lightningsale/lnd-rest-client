# lnd.LnrpcListInvoiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoices** | [**[LnrpcInvoice]**](LnrpcInvoice.md) | A list of invoices from the time slice of the time series specified in the request. | [optional] 
**lastIndexOffset** | **String** | The index of the last item in the set of returned invoices. This can be used to seek further, pagination style. | [optional] 
**firstIndexOffset** | **String** | The index of the last item in the set of returned invoices. This can be used to seek backwards, pagination style. | [optional] 


