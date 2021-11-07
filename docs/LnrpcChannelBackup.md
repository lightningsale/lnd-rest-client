# lnd.LnrpcChannelBackup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanPoint** | [**LnrpcChannelPoint**](LnrpcChannelPoint.md) |  | [optional] 
**chanBackup** | **Blob** | Is an encrypted single-chan backup. this can be passed to RestoreChannelBackups, or the WalletUnlocker Init and Unlock methods in order to trigger the recovery protocol. When using REST, this field must be encoded as base64. | [optional] 


