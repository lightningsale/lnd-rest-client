# lnd.LnrpcMultiChanBackup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chanPoints** | [**[LnrpcChannelPoint]**](LnrpcChannelPoint.md) | Is the set of all channels that are included in this multi-channel backup. | [optional] 
**multiChanBackup** | **Blob** | A single encrypted blob containing all the static channel backups of the channel listed above. This can be stored as a single file or blob, and safely be replaced with any prior/future versions. When using REST, this field must be encoded as base64. | [optional] 


