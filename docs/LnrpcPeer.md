# lnd.LnrpcPeer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubKey** | **String** |  | [optional] 
**address** | **String** |  | [optional] 
**bytesSent** | **String** |  | [optional] 
**bytesRecv** | **String** |  | [optional] 
**satSent** | **String** |  | [optional] 
**satRecv** | **String** |  | [optional] 
**inbound** | **Boolean** |  | [optional] 
**pingTime** | **String** |  | [optional] 
**syncType** | [**PeerSyncType**](PeerSyncType.md) |  | [optional] 
**features** | [**{String: LnrpcFeature}**](LnrpcFeature.md) | Features advertised by the remote peer in their init message. | [optional] 
**errors** | [**[LnrpcTimestampedError]**](LnrpcTimestampedError.md) | The latest errors received from our peer with timestamps, limited to the 10 most recent errors. These errors are tracked across peer connections, but are not persisted across lnd restarts. Note that these errors are only stored for peers that we have channels open with, to prevent peers from spamming us with errors at no cost. | [optional] 
**flapCount** | **Number** | The number of times we have recorded this peer going offline or coming online, recorded across restarts. Note that this value is decreased over time if the peer has not recently flapped, so that we can forgive peers with historically high flap counts. | [optional] 
**lastFlapNs** | **String** | The timestamp of the last flap we observed for this peer. If this value is zero, we have not observed any flaps for this peer. | [optional] 


