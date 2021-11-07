# lnd.LnrpcAMP

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rootShare** | **Blob** | An n-of-n secret share of the root seed from which child payment hashes and preimages are derived. | [optional] 
**setId** | **Blob** | An identifier for the HTLC set that this HTLC belongs to. | [optional] 
**childIndex** | **Number** | A nonce used to randomize the child preimage and child hash from a given root_share. | [optional] 
**hash** | **Blob** | The payment hash of the AMP HTLC. | [optional] 
**preimage** | **Blob** | The preimage used to settle this AMP htlc. This field will only be populated if the invoice is in InvoiceState_ACCEPTED or InvoiceState_SETTLED. | [optional] 


