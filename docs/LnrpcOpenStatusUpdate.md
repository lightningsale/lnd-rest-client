# lnd.LnrpcOpenStatusUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanPending** | [**LnrpcPendingUpdate**](LnrpcPendingUpdate.md) |  | [optional] 
**chanOpen** | [**LnrpcChannelOpenUpdate**](LnrpcChannelOpenUpdate.md) |  | [optional] 
**psbtFund** | [**LnrpcReadyForPsbtFunding**](LnrpcReadyForPsbtFunding.md) |  | [optional] 
**pendingChanId** | **Blob** | The pending channel ID of the created channel. This value may be used to further the funding flow manually via the FundingStateStep method. | [optional] 


