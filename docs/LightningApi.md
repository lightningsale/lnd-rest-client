# lnd.LightningApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**abandonChannel**](LightningApi.md#abandonChannel) | **DELETE** /v1/channels/abandon/{channel_point.funding_txid_str}/{channel_point.output_index} | lncli: &#x60;abandonchannel&#x60; AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
[**addInvoice**](LightningApi.md#addInvoice) | **POST** /v1/invoices | lncli: &#x60;addinvoice&#x60; AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
[**bakeMacaroon**](LightningApi.md#bakeMacaroon) | **POST** /v1/macaroon | lncli: &#x60;bakemacaroon&#x60; BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
[**channelAcceptor**](LightningApi.md#channelAcceptor) | **POST** /v1/channels/acceptor | ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
[**channelBalance**](LightningApi.md#channelBalance) | **GET** /v1/balance/channels | lncli: &#x60;channelbalance&#x60; ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
[**closeChannel**](LightningApi.md#closeChannel) | **DELETE** /v1/channels/{channel_point.funding_txid_str}/{channel_point.output_index} | lncli: &#x60;closechannel&#x60; CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.
[**closedChannels**](LightningApi.md#closedChannels) | **GET** /v1/channels/closed | lncli: &#x60;closedchannels&#x60; ClosedChannels returns a description of all the closed channels that this node was a participant in.
[**connectPeer**](LightningApi.md#connectPeer) | **POST** /v1/peers | lncli: &#x60;connect&#x60; ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
[**debugLevel**](LightningApi.md#debugLevel) | **POST** /v1/debuglevel | lncli: &#x60;debuglevel&#x60; DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
[**decodePayReq**](LightningApi.md#decodePayReq) | **GET** /v1/payreq/{pay_req} | lncli: &#x60;decodepayreq&#x60; DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
[**deleteAllPayments**](LightningApi.md#deleteAllPayments) | **DELETE** /v1/payments | DeleteAllPayments deletes all outgoing payments from DB.
[**deleteMacaroonID**](LightningApi.md#deleteMacaroonID) | **DELETE** /v1/macaroon/{root_key_id} | lncli: &#x60;deletemacaroonid&#x60; DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
[**describeGraph**](LightningApi.md#describeGraph) | **GET** /v1/graph | lncli: &#x60;describegraph&#x60; DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
[**disconnectPeer**](LightningApi.md#disconnectPeer) | **DELETE** /v1/peers/{pub_key} | lncli: &#x60;disconnect&#x60; DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
[**estimateFee**](LightningApi.md#estimateFee) | **GET** /v1/transactions/fee | lncli: &#x60;estimatefee&#x60; EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
[**exportAllChannelBackups**](LightningApi.md#exportAllChannelBackups) | **GET** /v1/channels/backup | ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
[**exportChannelBackup**](LightningApi.md#exportChannelBackup) | **GET** /v1/channels/backup/{chan_point.funding_txid_str}/{chan_point.output_index} | lncli: &#x60;exportchanbackup&#x60; ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
[**feeReport**](LightningApi.md#feeReport) | **GET** /v1/fees | lncli: &#x60;feereport&#x60; FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
[**forwardingHistory**](LightningApi.md#forwardingHistory) | **POST** /v1/switch | lncli: &#x60;fwdinghistory&#x60; ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
[**fundingStateStep**](LightningApi.md#fundingStateStep) | **POST** /v1/funding/step | FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we&#39;re expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
[**getChanInfo**](LightningApi.md#getChanInfo) | **GET** /v1/graph/edge/{chan_id} | lncli: &#x60;getchaninfo&#x60; GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction&#39;s funding output within the blockchain.
[**getInfo**](LightningApi.md#getInfo) | **GET** /v1/getinfo | lncli: &#x60;getinfo&#x60; GetInfo returns general information concerning the lightning node including it&#39;s identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
[**getNetworkInfo**](LightningApi.md#getNetworkInfo) | **GET** /v1/graph/info | lncli: &#x60;getnetworkinfo&#x60; GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
[**getNodeInfo**](LightningApi.md#getNodeInfo) | **GET** /v1/graph/node/{pub_key} | lncli: &#x60;getnodeinfo&#x60; GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
[**getNodeMetrics**](LightningApi.md#getNodeMetrics) | **GET** /v1/graph/nodemetrics | lncli: &#x60;getnodemetrics&#x60; GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
[**getRecoveryInfo**](LightningApi.md#getRecoveryInfo) | **GET** /v1/getrecoveryinfo | * lncli: &#x60;getrecoveryinfo&#x60; GetRecoveryInfo returns information concerning the recovery mode including whether it&#39;s in a recovery mode, whether the recovery is finished, and the progress made so far.
[**getTransactions**](LightningApi.md#getTransactions) | **GET** /v1/transactions | lncli: &#x60;listchaintxns&#x60; GetTransactions returns a list describing all the known transactions relevant to the wallet.
[**listChannels**](LightningApi.md#listChannels) | **GET** /v1/channels | lncli: &#x60;listchannels&#x60; ListChannels returns a description of all the open channels that this node is a participant in.
[**listInvoices**](LightningApi.md#listInvoices) | **GET** /v1/invoices | lncli: &#x60;listinvoices&#x60; ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
[**listMacaroonIDs**](LightningApi.md#listMacaroonIDs) | **GET** /v1/macaroon/ids | lncli: &#x60;listmacaroonids&#x60; ListMacaroonIDs returns all root key IDs that are in use.
[**listPayments**](LightningApi.md#listPayments) | **GET** /v1/payments | lncli: &#x60;listpayments&#x60; ListPayments returns a list of all outgoing payments.
[**listPeers**](LightningApi.md#listPeers) | **GET** /v1/peers | lncli: &#x60;listpeers&#x60; ListPeers returns a verbose listing of all currently active peers.
[**listPermissions**](LightningApi.md#listPermissions) | **GET** /v1/macaroon/permissions | lncli: &#x60;listpermissions&#x60; ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
[**listUnspent**](LightningApi.md#listUnspent) | **GET** /v1/utxos | lncli: &#x60;listunspent&#x60; Deprecated, use walletrpc.ListUnspent instead.
[**lookupInvoice**](LightningApi.md#lookupInvoice) | **GET** /v1/invoice/{r_hash_str} | lncli: &#x60;lookupinvoice&#x60; LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
[**newAddress**](LightningApi.md#newAddress) | **GET** /v1/newaddress | lncli: &#x60;newaddress&#x60; NewAddress creates a new address under control of the local wallet.
[**openChannel**](LightningApi.md#openChannel) | **POST** /v1/channels/stream | lncli: &#x60;openchannel&#x60; OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
[**openChannelSync**](LightningApi.md#openChannelSync) | **POST** /v1/channels | OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
[**pendingChannels**](LightningApi.md#pendingChannels) | **GET** /v1/channels/pending | lncli: &#x60;pendingchannels&#x60; PendingChannels returns a list of all the channels that are currently considered \&quot;pending\&quot;. A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
[**queryRoutes**](LightningApi.md#queryRoutes) | **GET** /v1/graph/routes/{pub_key}/{amt} | lncli: &#x60;queryroutes&#x60; QueryRoutes attempts to query the daemon&#39;s Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.
[**restoreChannelBackups**](LightningApi.md#restoreChannelBackups) | **POST** /v1/channels/backup/restore | lncli: &#x60;restorechanbackup&#x60; RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
[**sendCoins**](LightningApi.md#sendCoins) | **POST** /v1/transactions | lncli: &#x60;sendcoins&#x60; SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
[**sendMany**](LightningApi.md#sendMany) | **POST** /v1/transactions/many | lncli: &#x60;sendmany&#x60; SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
[**sendPayment**](LightningApi.md#sendPayment) | **POST** /v1/channels/transaction-stream | lncli: &#x60;sendpayment&#x60; Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
[**sendPaymentSync**](LightningApi.md#sendPaymentSync) | **POST** /v1/channels/transactions | SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination&#39;s public key and the payment hash (if any) to be encoded as hex strings.
[**sendToRouteSync**](LightningApi.md#sendToRouteSync) | **POST** /v1/channels/transactions/route | SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
[**signMessage**](LightningApi.md#signMessage) | **POST** /v1/signmessage | lncli: &#x60;signmessage&#x60; SignMessage signs a message with this node&#39;s private key. The returned signature string is &#x60;zbase32&#x60; encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
[**stopDaemon**](LightningApi.md#stopDaemon) | **POST** /v1/stop | lncli: &#x60;stop&#x60; StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
[**subscribeChannelBackups**](LightningApi.md#subscribeChannelBackups) | **GET** /v1/channels/backup/subscribe | SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
[**subscribeChannelEvents**](LightningApi.md#subscribeChannelEvents) | **GET** /v1/channels/subscribe | SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
[**subscribeChannelGraph**](LightningApi.md#subscribeChannelGraph) | **GET** /v1/graph/subscribe | SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
[**subscribeInvoices**](LightningApi.md#subscribeInvoices) | **GET** /v1/invoices/subscribe | SubscribeInvoices returns a uni-directional stream (server -&gt; client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we&#39;ll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we&#39;ll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we&#39;ll only send out the latest add/settle events.
[**subscribePeerEvents**](LightningApi.md#subscribePeerEvents) | **GET** /v1/peers/subscribe | SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
[**subscribeTransactions**](LightningApi.md#subscribeTransactions) | **GET** /v1/transactions/subscribe | SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
[**updateChannelPolicy**](LightningApi.md#updateChannelPolicy) | **POST** /v1/chanpolicy | lncli: &#x60;updatechanpolicy&#x60; UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
[**verifyChanBackup**](LightningApi.md#verifyChanBackup) | **POST** /v1/channels/backup/verify | VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
[**verifyMessage**](LightningApi.md#verifyMessage) | **POST** /v1/verifymessage | lncli: &#x60;verifymessage&#x60; VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node&#39;s channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
[**walletBalance**](LightningApi.md#walletBalance) | **GET** /v1/balance/blockchain | lncli: &#x60;walletbalance&#x60; WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.



## abandonChannel

> Object abandonChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts)

lncli: &#x60;abandonchannel&#x60; AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let channelPointFundingTxidStr = "channelPointFundingTxidStr_example"; // String | Hex-encoded string representing the byte-reversed hash of the funding transaction.
let channelPointOutputIndex = 789; // Number | The index of the output of the funding transaction
let opts = {
  'channelPointFundingTxidBytes': null, // Blob | Txid of the funding transaction. When using REST, this field must be encoded as base64.
  'pendingFundingShimOnly': true, // Boolean | 
  'iKnowWhatIAmDoing': true // Boolean | Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
};
apiInstance.abandonChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelPointFundingTxidStr** | **String**| Hex-encoded string representing the byte-reversed hash of the funding transaction. | 
 **channelPointOutputIndex** | **Number**| The index of the output of the funding transaction | 
 **channelPointFundingTxidBytes** | **Blob**| Txid of the funding transaction. When using REST, this field must be encoded as base64. | [optional] 
 **pendingFundingShimOnly** | **Boolean**|  | [optional] 
 **iKnowWhatIAmDoing** | **Boolean**| Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addInvoice

> LnrpcAddInvoiceResponse addInvoice(body)

lncli: &#x60;addinvoice&#x60; AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcInvoice(); // LnrpcInvoice | 
apiInstance.addInvoice(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcInvoice**](LnrpcInvoice.md)|  | 

### Return type

[**LnrpcAddInvoiceResponse**](LnrpcAddInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bakeMacaroon

> LnrpcBakeMacaroonResponse bakeMacaroon(body)

lncli: &#x60;bakemacaroon&#x60; BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcBakeMacaroonRequest(); // LnrpcBakeMacaroonRequest | 
apiInstance.bakeMacaroon(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcBakeMacaroonRequest**](LnrpcBakeMacaroonRequest.md)|  | 

### Return type

[**LnrpcBakeMacaroonResponse**](LnrpcBakeMacaroonResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## channelAcceptor

> StreamResultOfLnrpcChannelAcceptRequest channelAcceptor(body)

ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcChannelAcceptResponse(); // LnrpcChannelAcceptResponse |  (streaming inputs)
apiInstance.channelAcceptor(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcChannelAcceptResponse**](LnrpcChannelAcceptResponse.md)|  (streaming inputs) | 

### Return type

[**StreamResultOfLnrpcChannelAcceptRequest**](StreamResultOfLnrpcChannelAcceptRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## channelBalance

> LnrpcChannelBalanceResponse channelBalance()

lncli: &#x60;channelbalance&#x60; ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.channelBalance().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcChannelBalanceResponse**](LnrpcChannelBalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## closeChannel

> StreamResultOfLnrpcCloseStatusUpdate closeChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts)

lncli: &#x60;closechannel&#x60; CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let channelPointFundingTxidStr = "channelPointFundingTxidStr_example"; // String | Hex-encoded string representing the byte-reversed hash of the funding transaction.
let channelPointOutputIndex = 789; // Number | The index of the output of the funding transaction
let opts = {
  'channelPointFundingTxidBytes': null, // Blob | Txid of the funding transaction. When using REST, this field must be encoded as base64.
  'force': true, // Boolean | If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast.
  'targetConf': 56, // Number | The target number of blocks that the closure transaction should be confirmed by.
  'satPerByte': "satPerByte_example", // String | Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
  'deliveryAddress': "deliveryAddress_example", // String | An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss.
  'satPerVbyte': "satPerVbyte_example" // String | A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
};
apiInstance.closeChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelPointFundingTxidStr** | **String**| Hex-encoded string representing the byte-reversed hash of the funding transaction. | 
 **channelPointOutputIndex** | **Number**| The index of the output of the funding transaction | 
 **channelPointFundingTxidBytes** | **Blob**| Txid of the funding transaction. When using REST, this field must be encoded as base64. | [optional] 
 **force** | **Boolean**| If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast. | [optional] 
 **targetConf** | **Number**| The target number of blocks that the closure transaction should be confirmed by. | [optional] 
 **satPerByte** | **String**| Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction. | [optional] 
 **deliveryAddress** | **String**| An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss. | [optional] 
 **satPerVbyte** | **String**| A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction. | [optional] 

### Return type

[**StreamResultOfLnrpcCloseStatusUpdate**](StreamResultOfLnrpcCloseStatusUpdate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## closedChannels

> LnrpcClosedChannelsResponse closedChannels(opts)

lncli: &#x60;closedchannels&#x60; ClosedChannels returns a description of all the closed channels that this node was a participant in.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'cooperative': true, // Boolean | 
  'localForce': true, // Boolean | 
  'remoteForce': true, // Boolean | 
  'breach': true, // Boolean | 
  'fundingCanceled': true, // Boolean | 
  'abandoned': true // Boolean | 
};
apiInstance.closedChannels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cooperative** | **Boolean**|  | [optional] 
 **localForce** | **Boolean**|  | [optional] 
 **remoteForce** | **Boolean**|  | [optional] 
 **breach** | **Boolean**|  | [optional] 
 **fundingCanceled** | **Boolean**|  | [optional] 
 **abandoned** | **Boolean**|  | [optional] 

### Return type

[**LnrpcClosedChannelsResponse**](LnrpcClosedChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## connectPeer

> Object connectPeer(body)

lncli: &#x60;connect&#x60; ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcConnectPeerRequest(); // LnrpcConnectPeerRequest | 
apiInstance.connectPeer(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcConnectPeerRequest**](LnrpcConnectPeerRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## debugLevel

> LnrpcDebugLevelResponse debugLevel(body)

lncli: &#x60;debuglevel&#x60; DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcDebugLevelRequest(); // LnrpcDebugLevelRequest | 
apiInstance.debugLevel(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcDebugLevelRequest**](LnrpcDebugLevelRequest.md)|  | 

### Return type

[**LnrpcDebugLevelResponse**](LnrpcDebugLevelResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## decodePayReq

> LnrpcPayReq decodePayReq(payReq)

lncli: &#x60;decodepayreq&#x60; DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let payReq = "payReq_example"; // String | The payment request string to be decoded
apiInstance.decodePayReq(payReq).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payReq** | **String**| The payment request string to be decoded | 

### Return type

[**LnrpcPayReq**](LnrpcPayReq.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAllPayments

> Object deleteAllPayments(opts)

DeleteAllPayments deletes all outgoing payments from DB.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'failedPaymentsOnly': true, // Boolean | Only delete failed payments.
  'failedHtlcsOnly': true // Boolean | Only delete failed HTLCs from payments, not the payment itself.
};
apiInstance.deleteAllPayments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failedPaymentsOnly** | **Boolean**| Only delete failed payments. | [optional] 
 **failedHtlcsOnly** | **Boolean**| Only delete failed HTLCs from payments, not the payment itself. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteMacaroonID

> LnrpcDeleteMacaroonIDResponse deleteMacaroonID(rootKeyId)

lncli: &#x60;deletemacaroonid&#x60; DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let rootKeyId = "rootKeyId_example"; // String | The root key ID to be removed.
apiInstance.deleteMacaroonID(rootKeyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rootKeyId** | **String**| The root key ID to be removed. | 

### Return type

[**LnrpcDeleteMacaroonIDResponse**](LnrpcDeleteMacaroonIDResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## describeGraph

> LnrpcChannelGraph describeGraph(opts)

lncli: &#x60;describegraph&#x60; DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'includeUnannounced': true // Boolean | Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network.
};
apiInstance.describeGraph(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeUnannounced** | **Boolean**| Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network. | [optional] 

### Return type

[**LnrpcChannelGraph**](LnrpcChannelGraph.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## disconnectPeer

> Object disconnectPeer(pubKey)

lncli: &#x60;disconnect&#x60; DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let pubKey = "pubKey_example"; // String | The pubkey of the node to disconnect from
apiInstance.disconnectPeer(pubKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubKey** | **String**| The pubkey of the node to disconnect from | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## estimateFee

> LnrpcEstimateFeeResponse estimateFee(opts)

lncli: &#x60;estimatefee&#x60; EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.

When using REST, the &#x60;AddrToAmount&#x60; map type can be set by appending &#x60;&amp;AddrToAmount[&lt;address&gt;]&#x3D;&lt;amount_to_send&gt;&#x60; to the URL. Unfortunately this map type doesn&#39;t appear in the REST API documentation because of a bug in the grpc-gateway library.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'targetConf': 56, // Number | The target number of blocks that this transaction should be confirmed by.
  'minConfs': 56, // Number | The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
  'spendUnconfirmed': true // Boolean | Whether unconfirmed outputs should be used as inputs for the transaction.
};
apiInstance.estimateFee(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetConf** | **Number**| The target number of blocks that this transaction should be confirmed by. | [optional] 
 **minConfs** | **Number**| The minimum number of confirmations each one of your outputs used for the transaction must satisfy. | [optional] 
 **spendUnconfirmed** | **Boolean**| Whether unconfirmed outputs should be used as inputs for the transaction. | [optional] 

### Return type

[**LnrpcEstimateFeeResponse**](LnrpcEstimateFeeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportAllChannelBackups

> LnrpcChanBackupSnapshot exportAllChannelBackups()

ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.exportAllChannelBackups().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcChanBackupSnapshot**](LnrpcChanBackupSnapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportChannelBackup

> LnrpcChannelBackup exportChannelBackup(chanPointFundingTxidStr, chanPointOutputIndex, opts)

lncli: &#x60;exportchanbackup&#x60; ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let chanPointFundingTxidStr = "chanPointFundingTxidStr_example"; // String | Hex-encoded string representing the byte-reversed hash of the funding transaction.
let chanPointOutputIndex = 789; // Number | The index of the output of the funding transaction
let opts = {
  'chanPointFundingTxidBytes': null // Blob | Txid of the funding transaction. When using REST, this field must be encoded as base64.
};
apiInstance.exportChannelBackup(chanPointFundingTxidStr, chanPointOutputIndex, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chanPointFundingTxidStr** | **String**| Hex-encoded string representing the byte-reversed hash of the funding transaction. | 
 **chanPointOutputIndex** | **Number**| The index of the output of the funding transaction | 
 **chanPointFundingTxidBytes** | **Blob**| Txid of the funding transaction. When using REST, this field must be encoded as base64. | [optional] 

### Return type

[**LnrpcChannelBackup**](LnrpcChannelBackup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## feeReport

> LnrpcFeeReportResponse feeReport()

lncli: &#x60;feereport&#x60; FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.feeReport().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcFeeReportResponse**](LnrpcFeeReportResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## forwardingHistory

> LnrpcForwardingHistoryResponse forwardingHistory(body)

lncli: &#x60;fwdinghistory&#x60; ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.

A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcForwardingHistoryRequest(); // LnrpcForwardingHistoryRequest | 
apiInstance.forwardingHistory(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcForwardingHistoryRequest**](LnrpcForwardingHistoryRequest.md)|  | 

### Return type

[**LnrpcForwardingHistoryResponse**](LnrpcForwardingHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fundingStateStep

> Object fundingStateStep(body)

FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we&#39;re expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcFundingTransitionMsg(); // LnrpcFundingTransitionMsg | 
apiInstance.fundingStateStep(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcFundingTransitionMsg**](LnrpcFundingTransitionMsg.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getChanInfo

> LnrpcChannelEdge getChanInfo(chanId)

lncli: &#x60;getchaninfo&#x60; GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction&#39;s funding output within the blockchain.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let chanId = "chanId_example"; // String | The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
apiInstance.getChanInfo(chanId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chanId** | **String**| The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel. | 

### Return type

[**LnrpcChannelEdge**](LnrpcChannelEdge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInfo

> LnrpcGetInfoResponse getInfo()

lncli: &#x60;getinfo&#x60; GetInfo returns general information concerning the lightning node including it&#39;s identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.getInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcGetInfoResponse**](LnrpcGetInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNetworkInfo

> LnrpcNetworkInfo getNetworkInfo()

lncli: &#x60;getnetworkinfo&#x60; GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.getNetworkInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcNetworkInfo**](LnrpcNetworkInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeInfo

> LnrpcNodeInfo getNodeInfo(pubKey, opts)

lncli: &#x60;getnodeinfo&#x60; GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let pubKey = "pubKey_example"; // String | The 33-byte hex-encoded compressed public of the target node
let opts = {
  'includeChannels': true // Boolean | If true, will include all known channels associated with the node.
};
apiInstance.getNodeInfo(pubKey, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubKey** | **String**| The 33-byte hex-encoded compressed public of the target node | 
 **includeChannels** | **Boolean**| If true, will include all known channels associated with the node. | [optional] 

### Return type

[**LnrpcNodeInfo**](LnrpcNodeInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeMetrics

> LnrpcNodeMetricsResponse getNodeMetrics(opts)

lncli: &#x60;getnodemetrics&#x60; GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'types': ["null"] // [String] | The requested node metrics.
};
apiInstance.getNodeMetrics(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **types** | [**[String]**](String.md)| The requested node metrics. | [optional] 

### Return type

[**LnrpcNodeMetricsResponse**](LnrpcNodeMetricsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRecoveryInfo

> LnrpcGetRecoveryInfoResponse getRecoveryInfo()

* lncli: &#x60;getrecoveryinfo&#x60; GetRecoveryInfo returns information concerning the recovery mode including whether it&#39;s in a recovery mode, whether the recovery is finished, and the progress made so far.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.getRecoveryInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcGetRecoveryInfoResponse**](LnrpcGetRecoveryInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransactions

> LnrpcTransactionDetails getTransactions(opts)

lncli: &#x60;listchaintxns&#x60; GetTransactions returns a list describing all the known transactions relevant to the wallet.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'startHeight': 56, // Number | The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
  'endHeight': 56, // Number | The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
  'account': "account_example" // String | An optional filter to only include transactions relevant to an account.
};
apiInstance.getTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHeight** | **Number**| The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse. | [optional] 
 **endHeight** | **Number**| The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option. | [optional] 
 **account** | **String**| An optional filter to only include transactions relevant to an account. | [optional] 

### Return type

[**LnrpcTransactionDetails**](LnrpcTransactionDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listChannels

> LnrpcListChannelsResponse listChannels(opts)

lncli: &#x60;listchannels&#x60; ListChannels returns a description of all the open channels that this node is a participant in.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'activeOnly': true, // Boolean | 
  'inactiveOnly': true, // Boolean | 
  'publicOnly': true, // Boolean | 
  'privateOnly': true, // Boolean | 
  'peer': null // Blob | Filters the response for channels with a target peer's pubkey. If peer is empty, all channels will be returned.
};
apiInstance.listChannels(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activeOnly** | **Boolean**|  | [optional] 
 **inactiveOnly** | **Boolean**|  | [optional] 
 **publicOnly** | **Boolean**|  | [optional] 
 **privateOnly** | **Boolean**|  | [optional] 
 **peer** | **Blob**| Filters the response for channels with a target peer&#39;s pubkey. If peer is empty, all channels will be returned. | [optional] 

### Return type

[**LnrpcListChannelsResponse**](LnrpcListChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listInvoices

> LnrpcListInvoiceResponse listInvoices(opts)

lncli: &#x60;listinvoices&#x60; ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'pendingOnly': true, // Boolean | If set, only invoices that are not settled and not canceled will be returned in the response.
  'indexOffset': "indexOffset_example", // String | The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response.
  'numMaxInvoices': "numMaxInvoices_example", // String | The max number of invoices to return in the response to this query.
  'reversed': true // Boolean | If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards.
};
apiInstance.listInvoices(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pendingOnly** | **Boolean**| If set, only invoices that are not settled and not canceled will be returned in the response. | [optional] 
 **indexOffset** | **String**| The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response. | [optional] 
 **numMaxInvoices** | **String**| The max number of invoices to return in the response to this query. | [optional] 
 **reversed** | **Boolean**| If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. | [optional] 

### Return type

[**LnrpcListInvoiceResponse**](LnrpcListInvoiceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMacaroonIDs

> LnrpcListMacaroonIDsResponse listMacaroonIDs()

lncli: &#x60;listmacaroonids&#x60; ListMacaroonIDs returns all root key IDs that are in use.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.listMacaroonIDs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcListMacaroonIDsResponse**](LnrpcListMacaroonIDsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPayments

> LnrpcListPaymentsResponse listPayments(opts)

lncli: &#x60;listpayments&#x60; ListPayments returns a list of all outgoing payments.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'includeIncomplete': true, // Boolean | If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn't change the meaning of the indices, which are tied to individual payments.
  'indexOffset': "indexOffset_example", // String | The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards.
  'maxPayments': "maxPayments_example", // String | The maximal number of payments returned in the response to this query.
  'reversed': true // Boolean | If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order).
};
apiInstance.listPayments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeIncomplete** | **Boolean**| If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn&#39;t change the meaning of the indices, which are tied to individual payments. | [optional] 
 **indexOffset** | **String**| The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards. | [optional] 
 **maxPayments** | **String**| The maximal number of payments returned in the response to this query. | [optional] 
 **reversed** | **Boolean**| If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order). | [optional] 

### Return type

[**LnrpcListPaymentsResponse**](LnrpcListPaymentsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPeers

> LnrpcListPeersResponse listPeers(opts)

lncli: &#x60;listpeers&#x60; ListPeers returns a verbose listing of all currently active peers.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'latestError': true // Boolean | If true, only the last error that our peer sent us will be returned with the peer's information, rather than the full set of historic errors we have stored.
};
apiInstance.listPeers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latestError** | **Boolean**| If true, only the last error that our peer sent us will be returned with the peer&#39;s information, rather than the full set of historic errors we have stored. | [optional] 

### Return type

[**LnrpcListPeersResponse**](LnrpcListPeersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPermissions

> LnrpcListPermissionsResponse listPermissions()

lncli: &#x60;listpermissions&#x60; ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.listPermissions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcListPermissionsResponse**](LnrpcListPermissionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listUnspent

> LnrpcListUnspentResponse listUnspent(opts)

lncli: &#x60;listunspent&#x60; Deprecated, use walletrpc.ListUnspent instead.

ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'minConfs': 56, // Number | The minimum number of confirmations to be included.
  'maxConfs': 56, // Number | The maximum number of confirmations to be included.
  'account': "account_example" // String | An optional filter to only include outputs belonging to an account.
};
apiInstance.listUnspent(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minConfs** | **Number**| The minimum number of confirmations to be included. | [optional] 
 **maxConfs** | **Number**| The maximum number of confirmations to be included. | [optional] 
 **account** | **String**| An optional filter to only include outputs belonging to an account. | [optional] 

### Return type

[**LnrpcListUnspentResponse**](LnrpcListUnspentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lookupInvoice

> LnrpcInvoice lookupInvoice(rHashStr, opts)

lncli: &#x60;lookupinvoice&#x60; LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let rHashStr = "rHashStr_example"; // String | The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
let opts = {
  'rHash': null // Blob | The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64.
};
apiInstance.lookupInvoice(rHashStr, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rHashStr** | **String**| The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields. | 
 **rHash** | **Blob**| The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64. | [optional] 

### Return type

[**LnrpcInvoice**](LnrpcInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## newAddress

> LnrpcNewAddressResponse newAddress(opts)

lncli: &#x60;newaddress&#x60; NewAddress creates a new address under control of the local wallet.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'type': "'WITNESS_PUBKEY_HASH'", // String | The type of address to generate.
  'account': "account_example" // String | The name of the account to generate a new address for. If empty, the default wallet account is used.
};
apiInstance.newAddress(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| The type of address to generate. | [optional] [default to &#39;WITNESS_PUBKEY_HASH&#39;]
 **account** | **String**| The name of the account to generate a new address for. If empty, the default wallet account is used. | [optional] 

### Return type

[**LnrpcNewAddressResponse**](LnrpcNewAddressResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openChannel

> StreamResultOfLnrpcOpenStatusUpdate openChannel(body)

lncli: &#x60;openchannel&#x60; OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcOpenChannelRequest(); // LnrpcOpenChannelRequest | 
apiInstance.openChannel(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcOpenChannelRequest**](LnrpcOpenChannelRequest.md)|  | 

### Return type

[**StreamResultOfLnrpcOpenStatusUpdate**](StreamResultOfLnrpcOpenStatusUpdate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## openChannelSync

> LnrpcChannelPoint openChannelSync(body)

OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcOpenChannelRequest(); // LnrpcOpenChannelRequest | 
apiInstance.openChannelSync(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcOpenChannelRequest**](LnrpcOpenChannelRequest.md)|  | 

### Return type

[**LnrpcChannelPoint**](LnrpcChannelPoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## pendingChannels

> LnrpcPendingChannelsResponse pendingChannels()

lncli: &#x60;pendingchannels&#x60; PendingChannels returns a list of all the channels that are currently considered \&quot;pending\&quot;. A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.pendingChannels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcPendingChannelsResponse**](LnrpcPendingChannelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## queryRoutes

> LnrpcQueryRoutesResponse queryRoutes(pubKey, amt, opts)

lncli: &#x60;queryroutes&#x60; QueryRoutes attempts to query the daemon&#39;s Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.

When using REST, the &#x60;dest_custom_records&#x60; map type can be set by appending &#x60;&amp;dest_custom_records[&lt;record_number&gt;]&#x3D;&lt;record_data_base64_url_encoded&gt;&#x60; to the URL. Unfortunately this map type doesn&#39;t appear in the REST API documentation because of a bug in the grpc-gateway library.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let pubKey = "pubKey_example"; // String | The 33-byte hex-encoded public key for the payment destination
let amt = "amt_example"; // String | The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
let opts = {
  'amtMsat': "amtMsat_example", // String | The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive.
  'finalCltvDelta': 56, // Number | An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight.
  'feeLimitFixed': "feeLimitFixed_example", // String | The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
  'feeLimitFixedMsat': "feeLimitFixedMsat_example", // String | The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
  'feeLimitPercent': "feeLimitPercent_example", // String | The fee limit expressed as a percentage of the payment amount.
  'ignoredNodes': ["null"], // [Blob] | A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64.
  'sourcePubKey': "sourcePubKey_example", // String | The source node where the request route should originated from. If empty, self is assumed.
  'useMissionControl': true, // Boolean | If set to true, edge probabilities from mission control will be used to get the optimal route.
  'cltvLimit': 789, // Number | An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd's `--max-cltv-expiry` setting. If zero, then the value of `--max-cltv-expiry` is used as the limit.
  'outgoingChanId': "outgoingChanId_example", // String | The channel id of the channel that must be taken to the first hop. If zero, any channel may be used.
  'lastHopPubkey': null, // Blob | The pubkey of the last hop of the route. If empty, any hop may be used.
  'destFeatures': ["null"] // [String] | Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback.
};
apiInstance.queryRoutes(pubKey, amt, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubKey** | **String**| The 33-byte hex-encoded public key for the payment destination | 
 **amt** | **String**| The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive. | 
 **amtMsat** | **String**| The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive. | [optional] 
 **finalCltvDelta** | **Number**| An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight. | [optional] 
 **feeLimitFixed** | **String**| The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive. | [optional] 
 **feeLimitFixedMsat** | **String**| The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive. | [optional] 
 **feeLimitPercent** | **String**| The fee limit expressed as a percentage of the payment amount. | [optional] 
 **ignoredNodes** | [**[Blob]**](Blob.md)| A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64. | [optional] 
 **sourcePubKey** | **String**| The source node where the request route should originated from. If empty, self is assumed. | [optional] 
 **useMissionControl** | **Boolean**| If set to true, edge probabilities from mission control will be used to get the optimal route. | [optional] 
 **cltvLimit** | **Number**| An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd&#39;s &#x60;--max-cltv-expiry&#x60; setting. If zero, then the value of &#x60;--max-cltv-expiry&#x60; is used as the limit. | [optional] 
 **outgoingChanId** | **String**| The channel id of the channel that must be taken to the first hop. If zero, any channel may be used. | [optional] 
 **lastHopPubkey** | **Blob**| The pubkey of the last hop of the route. If empty, any hop may be used. | [optional] 
 **destFeatures** | [**[String]**](String.md)| Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback. | [optional] 

### Return type

[**LnrpcQueryRoutesResponse**](LnrpcQueryRoutesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restoreChannelBackups

> Object restoreChannelBackups(body)

lncli: &#x60;restorechanbackup&#x60; RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcRestoreChanBackupRequest(); // LnrpcRestoreChanBackupRequest | 
apiInstance.restoreChannelBackups(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcRestoreChanBackupRequest**](LnrpcRestoreChanBackupRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendCoins

> LnrpcSendCoinsResponse sendCoins(body)

lncli: &#x60;sendcoins&#x60; SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcSendCoinsRequest(); // LnrpcSendCoinsRequest | 
apiInstance.sendCoins(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcSendCoinsRequest**](LnrpcSendCoinsRequest.md)|  | 

### Return type

[**LnrpcSendCoinsResponse**](LnrpcSendCoinsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendMany

> LnrpcSendManyResponse sendMany(body)

lncli: &#x60;sendmany&#x60; SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcSendManyRequest(); // LnrpcSendManyRequest | 
apiInstance.sendMany(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcSendManyRequest**](LnrpcSendManyRequest.md)|  | 

### Return type

[**LnrpcSendManyResponse**](LnrpcSendManyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendPayment

> StreamResultOfLnrpcSendResponse sendPayment(body)

lncli: &#x60;sendpayment&#x60; Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcSendRequest(); // LnrpcSendRequest |  (streaming inputs)
apiInstance.sendPayment(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcSendRequest**](LnrpcSendRequest.md)|  (streaming inputs) | 

### Return type

[**StreamResultOfLnrpcSendResponse**](StreamResultOfLnrpcSendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendPaymentSync

> LnrpcSendResponse sendPaymentSync(body)

SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination&#39;s public key and the payment hash (if any) to be encoded as hex strings.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcSendRequest(); // LnrpcSendRequest | 
apiInstance.sendPaymentSync(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcSendRequest**](LnrpcSendRequest.md)|  | 

### Return type

[**LnrpcSendResponse**](LnrpcSendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendToRouteSync

> LnrpcSendResponse sendToRouteSync(body)

SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcSendToRouteRequest(); // LnrpcSendToRouteRequest | 
apiInstance.sendToRouteSync(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcSendToRouteRequest**](LnrpcSendToRouteRequest.md)|  | 

### Return type

[**LnrpcSendResponse**](LnrpcSendResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## signMessage

> LnrpcSignMessageResponse signMessage(body)

lncli: &#x60;signmessage&#x60; SignMessage signs a message with this node&#39;s private key. The returned signature string is &#x60;zbase32&#x60; encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcSignMessageRequest(); // LnrpcSignMessageRequest | 
apiInstance.signMessage(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcSignMessageRequest**](LnrpcSignMessageRequest.md)|  | 

### Return type

[**LnrpcSignMessageResponse**](LnrpcSignMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## stopDaemon

> Object stopDaemon(body)

lncli: &#x60;stop&#x60; StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = {key: null}; // Object | 
apiInstance.stopDaemon(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## subscribeChannelBackups

> StreamResultOfLnrpcChanBackupSnapshot subscribeChannelBackups()

SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.subscribeChannelBackups().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StreamResultOfLnrpcChanBackupSnapshot**](StreamResultOfLnrpcChanBackupSnapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeChannelEvents

> StreamResultOfLnrpcChannelEventUpdate subscribeChannelEvents()

SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.subscribeChannelEvents().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StreamResultOfLnrpcChannelEventUpdate**](StreamResultOfLnrpcChannelEventUpdate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeChannelGraph

> StreamResultOfLnrpcGraphTopologyUpdate subscribeChannelGraph()

SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.subscribeChannelGraph().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StreamResultOfLnrpcGraphTopologyUpdate**](StreamResultOfLnrpcGraphTopologyUpdate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeInvoices

> StreamResultOfLnrpcInvoice subscribeInvoices(opts)

SubscribeInvoices returns a uni-directional stream (server -&gt; client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we&#39;ll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we&#39;ll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we&#39;ll only send out the latest add/settle events.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'addIndex': "addIndex_example", // String | If specified (non-zero), then we'll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC.
  'settleIndex': "settleIndex_example" // String | If specified (non-zero), then we'll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC.
};
apiInstance.subscribeInvoices(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addIndex** | **String**| If specified (non-zero), then we&#39;ll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC. | [optional] 
 **settleIndex** | **String**| If specified (non-zero), then we&#39;ll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC. | [optional] 

### Return type

[**StreamResultOfLnrpcInvoice**](StreamResultOfLnrpcInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribePeerEvents

> StreamResultOfLnrpcPeerEvent subscribePeerEvents()

SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.subscribePeerEvents().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**StreamResultOfLnrpcPeerEvent**](StreamResultOfLnrpcPeerEvent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscribeTransactions

> StreamResultOfLnrpcTransaction subscribeTransactions(opts)

SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let opts = {
  'startHeight': 56, // Number | The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
  'endHeight': 56, // Number | The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
  'account': "account_example" // String | An optional filter to only include transactions relevant to an account.
};
apiInstance.subscribeTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHeight** | **Number**| The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse. | [optional] 
 **endHeight** | **Number**| The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option. | [optional] 
 **account** | **String**| An optional filter to only include transactions relevant to an account. | [optional] 

### Return type

[**StreamResultOfLnrpcTransaction**](StreamResultOfLnrpcTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateChannelPolicy

> Object updateChannelPolicy(body)

lncli: &#x60;updatechanpolicy&#x60; UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcPolicyUpdateRequest(); // LnrpcPolicyUpdateRequest | 
apiInstance.updateChannelPolicy(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcPolicyUpdateRequest**](LnrpcPolicyUpdateRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyChanBackup

> Object verifyChanBackup(body)

VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcChanBackupSnapshot(); // LnrpcChanBackupSnapshot | 
apiInstance.verifyChanBackup(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcChanBackupSnapshot**](LnrpcChanBackupSnapshot.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyMessage

> LnrpcVerifyMessageResponse verifyMessage(body)

lncli: &#x60;verifymessage&#x60; VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node&#39;s channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
let body = new lnd.LnrpcVerifyMessageRequest(); // LnrpcVerifyMessageRequest | 
apiInstance.verifyMessage(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LnrpcVerifyMessageRequest**](LnrpcVerifyMessageRequest.md)|  | 

### Return type

[**LnrpcVerifyMessageResponse**](LnrpcVerifyMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletBalance

> LnrpcWalletBalanceResponse walletBalance()

lncli: &#x60;walletbalance&#x60; WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.

### Example

```javascript
import lnd from '@lightningsale/lnd-rest-client';

let apiInstance = new lnd.LightningApi();
apiInstance.walletBalance().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LnrpcWalletBalanceResponse**](LnrpcWalletBalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

