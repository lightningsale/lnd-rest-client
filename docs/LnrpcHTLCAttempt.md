# lnd.LnrpcHTLCAttempt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attemptId** | **String** | The unique ID that is used for this attempt. | [optional] 
**status** | [**HTLCAttemptHTLCStatus**](HTLCAttemptHTLCStatus.md) |  | [optional] 
**route** | [**LnrpcRoute**](LnrpcRoute.md) |  | [optional] 
**attemptTimeNs** | **String** | The time in UNIX nanoseconds at which this HTLC was sent. | [optional] 
**resolveTimeNs** | **String** | The time in UNIX nanoseconds at which this HTLC was settled or failed. This value will not be set if the HTLC is still IN_FLIGHT. | [optional] 
**failure** | [**LnrpcFailure**](LnrpcFailure.md) |  | [optional] 
**preimage** | **Blob** | The preimage that was used to settle the HTLC. | [optional] 


