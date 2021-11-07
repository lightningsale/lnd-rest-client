# lnd.LnrpcReadyForPsbtFunding

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundingAddress** | **String** | The P2WSH address of the channel funding multisig address that the below specified amount in satoshis needs to be sent to. | [optional] 
**fundingAmount** | **String** | The exact amount in satoshis that needs to be sent to the above address to fund the pending channel. | [optional] 
**psbt** | **Blob** | A raw PSBT that contains the pending channel output. If a base PSBT was provided in the PsbtShim, this is the base PSBT with one additional output. If no base PSBT was specified, this is an otherwise empty PSBT with exactly one output. | [optional] 


