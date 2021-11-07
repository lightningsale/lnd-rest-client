# lnd.LnrpcFundingPsbtFinalize

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signedPsbt** | **Blob** | The funded PSBT that contains all witness data to send the exact channel capacity amount to the PK script returned in the open channel message in a previous step. Cannot be set at the same time as final_raw_tx. | [optional] 
**pendingChanId** | **Blob** | The pending channel ID of the channel to get the PSBT for. | [optional] 
**finalRawTx** | **Blob** | As an alternative to the signed PSBT with all witness data, the final raw wire format transaction can also be specified directly. Cannot be set at the same time as signed_psbt. | [optional] 


