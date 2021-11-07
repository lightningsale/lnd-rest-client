# lnd.LnrpcGetInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** | The version of the LND software that the node is running. | [optional] 
**commitHash** | **String** | The SHA1 commit hash that the daemon is compiled with. | [optional] 
**identityPubkey** | **String** | The identity pubkey of the current node. | [optional] 
**alias** | **String** |  | [optional] 
**color** | **String** |  | [optional] 
**numPendingChannels** | **Number** |  | [optional] 
**numActiveChannels** | **Number** |  | [optional] 
**numInactiveChannels** | **Number** |  | [optional] 
**numPeers** | **Number** |  | [optional] 
**blockHeight** | **Number** |  | [optional] 
**blockHash** | **String** |  | [optional] 
**bestHeaderTimestamp** | **String** |  | [optional] 
**syncedToChain** | **Boolean** |  | [optional] 
**syncedToGraph** | **Boolean** | Whether we consider ourselves synced with the public channel graph. | [optional] 
**testnet** | **Boolean** |  | [optional] 
**chains** | [**[LnrpcChain]**](LnrpcChain.md) |  | [optional] 
**uris** | **[String]** | The URIs of the current node. | [optional] 
**features** | [**{String: LnrpcFeature}**](LnrpcFeature.md) | Features that our node has advertised in our init message, node announcements and invoices. | [optional] 


