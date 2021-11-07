# lnd.LnrpcInvoiceHTLC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanId** | **String** | Short channel id over which the htlc was received. | [optional] 
**htlcIndex** | **String** | Index identifying the htlc on the channel. | [optional] 
**amtMsat** | **String** | The amount of the htlc in msat. | [optional] 
**acceptHeight** | **Number** | Block height at which this htlc was accepted. | [optional] 
**acceptTime** | **String** | Time at which this htlc was accepted. | [optional] 
**resolveTime** | **String** | Time at which this htlc was settled or canceled. | [optional] 
**expiryHeight** | **Number** | Block height at which this htlc expires. | [optional] 
**state** | [**LnrpcInvoiceHTLCState**](LnrpcInvoiceHTLCState.md) |  | [optional] 
**customRecords** | **{String: Blob}** | Custom tlv records. | [optional] 
**mppTotalAmtMsat** | **String** | The total amount of the mpp payment in msat. | [optional] 
**amp** | [**LnrpcAMP**](LnrpcAMP.md) |  | [optional] 


