# lnd.LnrpcAddInvoiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rHash** | **Blob** |  | [optional] 
**paymentRequest** | **String** | A bare-bones invoice for a payment within the Lightning Network. With the details of the invoice, the sender has all the data necessary to send a payment to the recipient. | [optional] 
**addIndex** | **String** | The \&quot;add\&quot; index of this invoice. Each newly created invoice will increment this index making it monotonically increasing. Callers to the SubscribeInvoices call can use this to instantly get notified of all added invoices with an add_index greater than this one. | [optional] 
**paymentAddr** | **Blob** | The payment address of the generated invoice. This value should be used in all payments for this invoice as we require it for end to end security. | [optional] 


