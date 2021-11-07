# lnd.LnrpcPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentHash** | **String** |  | [optional] 
**value** | **String** | Deprecated, use value_sat or value_msat. | [optional] 
**creationDate** | **String** |  | [optional] 
**fee** | **String** | Deprecated, use fee_sat or fee_msat. | [optional] 
**paymentPreimage** | **String** |  | [optional] 
**valueSat** | **String** |  | [optional] 
**valueMsat** | **String** |  | [optional] 
**paymentRequest** | **String** | The optional payment request being fulfilled. | [optional] 
**status** | [**PaymentPaymentStatus**](PaymentPaymentStatus.md) |  | [optional] 
**feeSat** | **String** |  | [optional] 
**feeMsat** | **String** |  | [optional] 
**creationTimeNs** | **String** | The time in UNIX nanoseconds at which the payment was created. | [optional] 
**htlcs** | [**[LnrpcHTLCAttempt]**](LnrpcHTLCAttempt.md) | The HTLCs made in attempt to settle the payment. | [optional] 
**paymentIndex** | **String** | The creation index of this payment. Each payment can be uniquely identified by this index, which may not strictly increment by 1 for payments made in older versions of lnd. | [optional] 
**failureReason** | [**LnrpcPaymentFailureReason**](LnrpcPaymentFailureReason.md) |  | [optional] 


