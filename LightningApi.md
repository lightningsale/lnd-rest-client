# .LightningApi

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


# **abandonChannel**
> any abandonChannel()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiAbandonChannelRequest = {
  // string | Hex-encoded string representing the byte-reversed hash of the funding transaction.
  channelPointFundingTxidStr: "channel_point.funding_txid_str_example",
  // number | The index of the output of the funding transaction
  channelPointOutputIndex: 1,
  // string | Txid of the funding transaction. When using REST, this field must be encoded as base64. (optional)
  channelPointFundingTxidBytes: 'YQ==',
  // boolean (optional)
  pendingFundingShimOnly: true,
  // boolean | Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels. (optional)
  iKnowWhatIAmDoing: true,
};

apiInstance.abandonChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelPointFundingTxidStr** | [**string**] | Hex-encoded string representing the byte-reversed hash of the funding transaction. | defaults to undefined
 **channelPointOutputIndex** | [**number**] | The index of the output of the funding transaction | defaults to undefined
 **channelPointFundingTxidBytes** | [**string**] | Txid of the funding transaction. When using REST, this field must be encoded as base64. | (optional) defaults to undefined
 **pendingFundingShimOnly** | [**boolean**] |  | (optional) defaults to undefined
 **iKnowWhatIAmDoing** | [**boolean**] | Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels. | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addInvoice**
> LnrpcAddInvoiceResponse addInvoice(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiAddInvoiceRequest = {
  // LnrpcInvoice
  body: {
    memo: "memo_example",
    rPreimage: 'YQ==',
    rHash: 'YQ==',
    value: "value_example",
    valueMsat: "valueMsat_example",
    settled: true,
    creationDate: "creationDate_example",
    settleDate: "settleDate_example",
    paymentRequest: "paymentRequest_example",
    descriptionHash: 'YQ==',
    expiry: "expiry_example",
    fallbackAddr: "fallbackAddr_example",
    cltvExpiry: "cltvExpiry_example",
    routeHints: [
      {
        hopHints: [
          {
            nodeId: "nodeId_example",
            chanId: "chanId_example",
            feeBaseMsat: 1,
            feeProportionalMillionths: 1,
            cltvExpiryDelta: 1,
          },
        ],
      },
    ],
    _private: true,
    addIndex: "addIndex_example",
    settleIndex: "settleIndex_example",
    amtPaid: "amtPaid_example",
    amtPaidSat: "amtPaidSat_example",
    amtPaidMsat: "amtPaidMsat_example",
    state: "OPEN",
    htlcs: [
      {
        chanId: "chanId_example",
        htlcIndex: "htlcIndex_example",
        amtMsat: "amtMsat_example",
        acceptHeight: 1,
        acceptTime: "acceptTime_example",
        resolveTime: "resolveTime_example",
        expiryHeight: 1,
        state: "ACCEPTED",
        customRecords: {
          "key": 'YQ==',
        },
        mppTotalAmtMsat: "mppTotalAmtMsat_example",
        amp: {
          rootShare: 'YQ==',
          setId: 'YQ==',
          childIndex: 1,
          hash: 'YQ==',
          preimage: 'YQ==',
        },
      },
    ],
    features: {
      "key": {
        name: "name_example",
        isRequired: true,
        isKnown: true,
      },
    },
    isKeysend: true,
    paymentAddr: 'YQ==',
    isAmp: true,
  },
};

apiInstance.addInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcInvoice**|  |


### Return type

**LnrpcAddInvoiceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bakeMacaroon**
> LnrpcBakeMacaroonResponse bakeMacaroon(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiBakeMacaroonRequest = {
  // LnrpcBakeMacaroonRequest
  body: {
    permissions: [
      {
        entity: "entity_example",
        action: "action_example",
      },
    ],
    rootKeyId: "rootKeyId_example",
  },
};

apiInstance.bakeMacaroon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcBakeMacaroonRequest**|  |


### Return type

**LnrpcBakeMacaroonResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelAcceptor**
> StreamResultOfLnrpcChannelAcceptRequest channelAcceptor(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiChannelAcceptorRequest = {
  // LnrpcChannelAcceptResponse |  (streaming inputs)
  body: {
    accept: true,
    pendingChanId: 'YQ==',
    error: "error_example",
    upfrontShutdown: "upfrontShutdown_example",
    csvDelay: 1,
    reserveSat: "reserveSat_example",
    inFlightMaxMsat: "inFlightMaxMsat_example",
    maxHtlcCount: 1,
    minHtlcIn: "minHtlcIn_example",
    minAcceptDepth: 1,
  },
};

apiInstance.channelAcceptor(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcChannelAcceptResponse**|  (streaming inputs) |


### Return type

**StreamResultOfLnrpcChannelAcceptRequest**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **channelBalance**
> LnrpcChannelBalanceResponse channelBalance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.channelBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcChannelBalanceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **closeChannel**
> StreamResultOfLnrpcCloseStatusUpdate closeChannel()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiCloseChannelRequest = {
  // string | Hex-encoded string representing the byte-reversed hash of the funding transaction.
  channelPointFundingTxidStr: "channel_point.funding_txid_str_example",
  // number | The index of the output of the funding transaction
  channelPointOutputIndex: 1,
  // string | Txid of the funding transaction. When using REST, this field must be encoded as base64. (optional)
  channelPointFundingTxidBytes: 'YQ==',
  // boolean | If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast. (optional)
  force: true,
  // number | The target number of blocks that the closure transaction should be confirmed by. (optional)
  targetConf: 1,
  // string | Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction. (optional)
  satPerByte: "sat_per_byte_example",
  // string | An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss. (optional)
  deliveryAddress: "delivery_address_example",
  // string | A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction. (optional)
  satPerVbyte: "sat_per_vbyte_example",
};

apiInstance.closeChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelPointFundingTxidStr** | [**string**] | Hex-encoded string representing the byte-reversed hash of the funding transaction. | defaults to undefined
 **channelPointOutputIndex** | [**number**] | The index of the output of the funding transaction | defaults to undefined
 **channelPointFundingTxidBytes** | [**string**] | Txid of the funding transaction. When using REST, this field must be encoded as base64. | (optional) defaults to undefined
 **force** | [**boolean**] | If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast. | (optional) defaults to undefined
 **targetConf** | [**number**] | The target number of blocks that the closure transaction should be confirmed by. | (optional) defaults to undefined
 **satPerByte** | [**string**] | Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction. | (optional) defaults to undefined
 **deliveryAddress** | [**string**] | An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss. | (optional) defaults to undefined
 **satPerVbyte** | [**string**] | A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction. | (optional) defaults to undefined


### Return type

**StreamResultOfLnrpcCloseStatusUpdate**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **closedChannels**
> LnrpcClosedChannelsResponse closedChannels()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiClosedChannelsRequest = {
  // boolean (optional)
  cooperative: true,
  // boolean (optional)
  localForce: true,
  // boolean (optional)
  remoteForce: true,
  // boolean (optional)
  breach: true,
  // boolean (optional)
  fundingCanceled: true,
  // boolean (optional)
  abandoned: true,
};

apiInstance.closedChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cooperative** | [**boolean**] |  | (optional) defaults to undefined
 **localForce** | [**boolean**] |  | (optional) defaults to undefined
 **remoteForce** | [**boolean**] |  | (optional) defaults to undefined
 **breach** | [**boolean**] |  | (optional) defaults to undefined
 **fundingCanceled** | [**boolean**] |  | (optional) defaults to undefined
 **abandoned** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**LnrpcClosedChannelsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **connectPeer**
> any connectPeer(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiConnectPeerRequest = {
  // LnrpcConnectPeerRequest
  body: {
    addr: {
      pubkey: "pubkey_example",
      host: "host_example",
    },
    perm: true,
    timeout: "timeout_example",
  },
};

apiInstance.connectPeer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcConnectPeerRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **debugLevel**
> LnrpcDebugLevelResponse debugLevel(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiDebugLevelRequest = {
  // LnrpcDebugLevelRequest
  body: {
    show: true,
    levelSpec: "levelSpec_example",
  },
};

apiInstance.debugLevel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcDebugLevelRequest**|  |


### Return type

**LnrpcDebugLevelResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **decodePayReq**
> LnrpcPayReq decodePayReq()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiDecodePayReqRequest = {
  // string | The payment request string to be decoded
  payReq: "pay_req_example",
};

apiInstance.decodePayReq(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payReq** | [**string**] | The payment request string to be decoded | defaults to undefined


### Return type

**LnrpcPayReq**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAllPayments**
> any deleteAllPayments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiDeleteAllPaymentsRequest = {
  // boolean | Only delete failed payments. (optional)
  failedPaymentsOnly: true,
  // boolean | Only delete failed HTLCs from payments, not the payment itself. (optional)
  failedHtlcsOnly: true,
};

apiInstance.deleteAllPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failedPaymentsOnly** | [**boolean**] | Only delete failed payments. | (optional) defaults to undefined
 **failedHtlcsOnly** | [**boolean**] | Only delete failed HTLCs from payments, not the payment itself. | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMacaroonID**
> LnrpcDeleteMacaroonIDResponse deleteMacaroonID()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiDeleteMacaroonIDRequest = {
  // string | The root key ID to be removed.
  rootKeyId: "root_key_id_example",
};

apiInstance.deleteMacaroonID(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rootKeyId** | [**string**] | The root key ID to be removed. | defaults to undefined


### Return type

**LnrpcDeleteMacaroonIDResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **describeGraph**
> LnrpcChannelGraph describeGraph()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiDescribeGraphRequest = {
  // boolean | Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network. (optional)
  includeUnannounced: true,
};

apiInstance.describeGraph(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeUnannounced** | [**boolean**] | Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network. | (optional) defaults to undefined


### Return type

**LnrpcChannelGraph**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disconnectPeer**
> any disconnectPeer()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiDisconnectPeerRequest = {
  // string | The pubkey of the node to disconnect from
  pubKey: "pub_key_example",
};

apiInstance.disconnectPeer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubKey** | [**string**] | The pubkey of the node to disconnect from | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **estimateFee**
> LnrpcEstimateFeeResponse estimateFee()

When using REST, the `AddrToAmount` map type can be set by appending `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiEstimateFeeRequest = {
  // number | The target number of blocks that this transaction should be confirmed by. (optional)
  targetConf: 1,
  // number | The minimum number of confirmations each one of your outputs used for the transaction must satisfy. (optional)
  minConfs: 1,
  // boolean | Whether unconfirmed outputs should be used as inputs for the transaction. (optional)
  spendUnconfirmed: true,
};

apiInstance.estimateFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **targetConf** | [**number**] | The target number of blocks that this transaction should be confirmed by. | (optional) defaults to undefined
 **minConfs** | [**number**] | The minimum number of confirmations each one of your outputs used for the transaction must satisfy. | (optional) defaults to undefined
 **spendUnconfirmed** | [**boolean**] | Whether unconfirmed outputs should be used as inputs for the transaction. | (optional) defaults to undefined


### Return type

**LnrpcEstimateFeeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportAllChannelBackups**
> LnrpcChanBackupSnapshot exportAllChannelBackups()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.exportAllChannelBackups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcChanBackupSnapshot**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **exportChannelBackup**
> LnrpcChannelBackup exportChannelBackup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiExportChannelBackupRequest = {
  // string | Hex-encoded string representing the byte-reversed hash of the funding transaction.
  chanPointFundingTxidStr: "chan_point.funding_txid_str_example",
  // number | The index of the output of the funding transaction
  chanPointOutputIndex: 1,
  // string | Txid of the funding transaction. When using REST, this field must be encoded as base64. (optional)
  chanPointFundingTxidBytes: 'YQ==',
};

apiInstance.exportChannelBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chanPointFundingTxidStr** | [**string**] | Hex-encoded string representing the byte-reversed hash of the funding transaction. | defaults to undefined
 **chanPointOutputIndex** | [**number**] | The index of the output of the funding transaction | defaults to undefined
 **chanPointFundingTxidBytes** | [**string**] | Txid of the funding transaction. When using REST, this field must be encoded as base64. | (optional) defaults to undefined


### Return type

**LnrpcChannelBackup**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **feeReport**
> LnrpcFeeReportResponse feeReport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.feeReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcFeeReportResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **forwardingHistory**
> LnrpcForwardingHistoryResponse forwardingHistory(body)

A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiForwardingHistoryRequest = {
  // LnrpcForwardingHistoryRequest
  body: {
    startTime: "startTime_example",
    endTime: "endTime_example",
    indexOffset: 1,
    numMaxEvents: 1,
  },
};

apiInstance.forwardingHistory(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcForwardingHistoryRequest**|  |


### Return type

**LnrpcForwardingHistoryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **fundingStateStep**
> any fundingStateStep(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiFundingStateStepRequest = {
  // LnrpcFundingTransitionMsg
  body: {
    shimRegister: {
      chanPointShim: {
        amt: "amt_example",
        chanPoint: {
          fundingTxidBytes: 'YQ==',
          fundingTxidStr: "fundingTxidStr_example",
          outputIndex: 1,
        },
        localKey: {
          rawKeyBytes: 'YQ==',
          keyLoc: {
            keyFamily: 1,
            keyIndex: 1,
          },
        },
        remoteKey: 'YQ==',
        pendingChanId: 'YQ==',
        thawHeight: 1,
      },
      psbtShim: {
        pendingChanId: 'YQ==',
        basePsbt: 'YQ==',
        noPublish: true,
      },
    },
    shimCancel: {
      pendingChanId: 'YQ==',
    },
    psbtVerify: {
      fundedPsbt: 'YQ==',
      pendingChanId: 'YQ==',
    },
    psbtFinalize: {
      signedPsbt: 'YQ==',
      pendingChanId: 'YQ==',
      finalRawTx: 'YQ==',
    },
  },
};

apiInstance.fundingStateStep(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcFundingTransitionMsg**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChanInfo**
> LnrpcChannelEdge getChanInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiGetChanInfoRequest = {
  // string | The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
  chanId: "chan_id_example",
};

apiInstance.getChanInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chanId** | [**string**] | The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel. | defaults to undefined


### Return type

**LnrpcChannelEdge**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getInfo**
> LnrpcGetInfoResponse getInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.getInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcGetInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNetworkInfo**
> LnrpcNetworkInfo getNetworkInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.getNetworkInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcNetworkInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNodeInfo**
> LnrpcNodeInfo getNodeInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiGetNodeInfoRequest = {
  // string | The 33-byte hex-encoded compressed public of the target node
  pubKey: "pub_key_example",
  // boolean | If true, will include all known channels associated with the node. (optional)
  includeChannels: true,
};

apiInstance.getNodeInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubKey** | [**string**] | The 33-byte hex-encoded compressed public of the target node | defaults to undefined
 **includeChannels** | [**boolean**] | If true, will include all known channels associated with the node. | (optional) defaults to undefined


### Return type

**LnrpcNodeInfo**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNodeMetrics**
> LnrpcNodeMetricsResponse getNodeMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiGetNodeMetricsRequest = {
  // Array<'UNKNOWN' | 'BETWEENNESS_CENTRALITY'> | The requested node metrics. (optional)
  types: [
    "UNKNOWN",
  ],
};

apiInstance.getNodeMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **types** | **Array<&#39;UNKNOWN&#39; &#124; &#39;BETWEENNESS_CENTRALITY&#39;>** | The requested node metrics. | (optional) defaults to undefined


### Return type

**LnrpcNodeMetricsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRecoveryInfo**
> LnrpcGetRecoveryInfoResponse getRecoveryInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.getRecoveryInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcGetRecoveryInfoResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTransactions**
> LnrpcTransactionDetails getTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiGetTransactionsRequest = {
  // number | The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse. (optional)
  startHeight: 1,
  // number | The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option. (optional)
  endHeight: 1,
  // string | An optional filter to only include transactions relevant to an account. (optional)
  account: "account_example",
};

apiInstance.getTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHeight** | [**number**] | The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse. | (optional) defaults to undefined
 **endHeight** | [**number**] | The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option. | (optional) defaults to undefined
 **account** | [**string**] | An optional filter to only include transactions relevant to an account. | (optional) defaults to undefined


### Return type

**LnrpcTransactionDetails**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listChannels**
> LnrpcListChannelsResponse listChannels()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiListChannelsRequest = {
  // boolean (optional)
  activeOnly: true,
  // boolean (optional)
  inactiveOnly: true,
  // boolean (optional)
  publicOnly: true,
  // boolean (optional)
  privateOnly: true,
  // string | Filters the response for channels with a target peer's pubkey. If peer is empty, all channels will be returned. (optional)
  peer: 'YQ==',
};

apiInstance.listChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activeOnly** | [**boolean**] |  | (optional) defaults to undefined
 **inactiveOnly** | [**boolean**] |  | (optional) defaults to undefined
 **publicOnly** | [**boolean**] |  | (optional) defaults to undefined
 **privateOnly** | [**boolean**] |  | (optional) defaults to undefined
 **peer** | [**string**] | Filters the response for channels with a target peer&#39;s pubkey. If peer is empty, all channels will be returned. | (optional) defaults to undefined


### Return type

**LnrpcListChannelsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listInvoices**
> LnrpcListInvoiceResponse listInvoices()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiListInvoicesRequest = {
  // boolean | If set, only invoices that are not settled and not canceled will be returned in the response. (optional)
  pendingOnly: true,
  // string | The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response. (optional)
  indexOffset: "index_offset_example",
  // string | The max number of invoices to return in the response to this query. (optional)
  numMaxInvoices: "num_max_invoices_example",
  // boolean | If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. (optional)
  reversed: true,
};

apiInstance.listInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pendingOnly** | [**boolean**] | If set, only invoices that are not settled and not canceled will be returned in the response. | (optional) defaults to undefined
 **indexOffset** | [**string**] | The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response. | (optional) defaults to undefined
 **numMaxInvoices** | [**string**] | The max number of invoices to return in the response to this query. | (optional) defaults to undefined
 **reversed** | [**boolean**] | If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. | (optional) defaults to undefined


### Return type

**LnrpcListInvoiceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMacaroonIDs**
> LnrpcListMacaroonIDsResponse listMacaroonIDs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.listMacaroonIDs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcListMacaroonIDsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPayments**
> LnrpcListPaymentsResponse listPayments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiListPaymentsRequest = {
  // boolean | If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn't change the meaning of the indices, which are tied to individual payments. (optional)
  includeIncomplete: true,
  // string | The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards. (optional)
  indexOffset: "index_offset_example",
  // string | The maximal number of payments returned in the response to this query. (optional)
  maxPayments: "max_payments_example",
  // boolean | If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order). (optional)
  reversed: true,
};

apiInstance.listPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeIncomplete** | [**boolean**] | If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn&#39;t change the meaning of the indices, which are tied to individual payments. | (optional) defaults to undefined
 **indexOffset** | [**string**] | The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards. | (optional) defaults to undefined
 **maxPayments** | [**string**] | The maximal number of payments returned in the response to this query. | (optional) defaults to undefined
 **reversed** | [**boolean**] | If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order). | (optional) defaults to undefined


### Return type

**LnrpcListPaymentsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPeers**
> LnrpcListPeersResponse listPeers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiListPeersRequest = {
  // boolean | If true, only the last error that our peer sent us will be returned with the peer's information, rather than the full set of historic errors we have stored. (optional)
  latestError: true,
};

apiInstance.listPeers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latestError** | [**boolean**] | If true, only the last error that our peer sent us will be returned with the peer&#39;s information, rather than the full set of historic errors we have stored. | (optional) defaults to undefined


### Return type

**LnrpcListPeersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPermissions**
> LnrpcListPermissionsResponse listPermissions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.listPermissions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcListPermissionsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listUnspent**
> LnrpcListUnspentResponse listUnspent()

ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiListUnspentRequest = {
  // number | The minimum number of confirmations to be included. (optional)
  minConfs: 1,
  // number | The maximum number of confirmations to be included. (optional)
  maxConfs: 1,
  // string | An optional filter to only include outputs belonging to an account. (optional)
  account: "account_example",
};

apiInstance.listUnspent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minConfs** | [**number**] | The minimum number of confirmations to be included. | (optional) defaults to undefined
 **maxConfs** | [**number**] | The maximum number of confirmations to be included. | (optional) defaults to undefined
 **account** | [**string**] | An optional filter to only include outputs belonging to an account. | (optional) defaults to undefined


### Return type

**LnrpcListUnspentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **lookupInvoice**
> LnrpcInvoice lookupInvoice()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiLookupInvoiceRequest = {
  // string | The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
  rHashStr: "r_hash_str_example",
  // string | The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64. (optional)
  rHash: 'YQ==',
};

apiInstance.lookupInvoice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rHashStr** | [**string**] | The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields. | defaults to undefined
 **rHash** | [**string**] | The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64. | (optional) defaults to undefined


### Return type

**LnrpcInvoice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **newAddress**
> LnrpcNewAddressResponse newAddress()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiNewAddressRequest = {
  // 'WITNESS_PUBKEY_HASH' | 'NESTED_PUBKEY_HASH' | 'UNUSED_WITNESS_PUBKEY_HASH' | 'UNUSED_NESTED_PUBKEY_HASH' | The type of address to generate. (optional)
  type: "WITNESS_PUBKEY_HASH",
  // string | The name of the account to generate a new address for. If empty, the default wallet account is used. (optional)
  account: "account_example",
};

apiInstance.newAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**&#39;WITNESS_PUBKEY_HASH&#39; | &#39;NESTED_PUBKEY_HASH&#39; | &#39;UNUSED_WITNESS_PUBKEY_HASH&#39; | &#39;UNUSED_NESTED_PUBKEY_HASH&#39;**]**Array<&#39;WITNESS_PUBKEY_HASH&#39; &#124; &#39;NESTED_PUBKEY_HASH&#39; &#124; &#39;UNUSED_WITNESS_PUBKEY_HASH&#39; &#124; &#39;UNUSED_NESTED_PUBKEY_HASH&#39;>** | The type of address to generate. | (optional) defaults to 'WITNESS_PUBKEY_HASH'
 **account** | [**string**] | The name of the account to generate a new address for. If empty, the default wallet account is used. | (optional) defaults to undefined


### Return type

**LnrpcNewAddressResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **openChannel**
> StreamResultOfLnrpcOpenStatusUpdate openChannel(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiOpenChannelRequest = {
  // LnrpcOpenChannelRequest
  body: {
    satPerVbyte: "satPerVbyte_example",
    nodePubkey: 'YQ==',
    nodePubkeyString: "nodePubkeyString_example",
    localFundingAmount: "localFundingAmount_example",
    pushSat: "pushSat_example",
    targetConf: 1,
    satPerByte: "satPerByte_example",
    _private: true,
    minHtlcMsat: "minHtlcMsat_example",
    remoteCsvDelay: 1,
    minConfs: 1,
    spendUnconfirmed: true,
    closeAddress: "closeAddress_example",
    fundingShim: {
      chanPointShim: {
        amt: "amt_example",
        chanPoint: {
          fundingTxidBytes: 'YQ==',
          fundingTxidStr: "fundingTxidStr_example",
          outputIndex: 1,
        },
        localKey: {
          rawKeyBytes: 'YQ==',
          keyLoc: {
            keyFamily: 1,
            keyIndex: 1,
          },
        },
        remoteKey: 'YQ==',
        pendingChanId: 'YQ==',
        thawHeight: 1,
      },
      psbtShim: {
        pendingChanId: 'YQ==',
        basePsbt: 'YQ==',
        noPublish: true,
      },
    },
    remoteMaxValueInFlightMsat: "remoteMaxValueInFlightMsat_example",
    remoteMaxHtlcs: 1,
    maxLocalCsv: 1,
  },
};

apiInstance.openChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcOpenChannelRequest**|  |


### Return type

**StreamResultOfLnrpcOpenStatusUpdate**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **openChannelSync**
> LnrpcChannelPoint openChannelSync(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiOpenChannelSyncRequest = {
  // LnrpcOpenChannelRequest
  body: {
    satPerVbyte: "satPerVbyte_example",
    nodePubkey: 'YQ==',
    nodePubkeyString: "nodePubkeyString_example",
    localFundingAmount: "localFundingAmount_example",
    pushSat: "pushSat_example",
    targetConf: 1,
    satPerByte: "satPerByte_example",
    _private: true,
    minHtlcMsat: "minHtlcMsat_example",
    remoteCsvDelay: 1,
    minConfs: 1,
    spendUnconfirmed: true,
    closeAddress: "closeAddress_example",
    fundingShim: {
      chanPointShim: {
        amt: "amt_example",
        chanPoint: {
          fundingTxidBytes: 'YQ==',
          fundingTxidStr: "fundingTxidStr_example",
          outputIndex: 1,
        },
        localKey: {
          rawKeyBytes: 'YQ==',
          keyLoc: {
            keyFamily: 1,
            keyIndex: 1,
          },
        },
        remoteKey: 'YQ==',
        pendingChanId: 'YQ==',
        thawHeight: 1,
      },
      psbtShim: {
        pendingChanId: 'YQ==',
        basePsbt: 'YQ==',
        noPublish: true,
      },
    },
    remoteMaxValueInFlightMsat: "remoteMaxValueInFlightMsat_example",
    remoteMaxHtlcs: 1,
    maxLocalCsv: 1,
  },
};

apiInstance.openChannelSync(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcOpenChannelRequest**|  |


### Return type

**LnrpcChannelPoint**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pendingChannels**
> LnrpcPendingChannelsResponse pendingChannels()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.pendingChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcPendingChannelsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **queryRoutes**
> LnrpcQueryRoutesResponse queryRoutes()

When using REST, the `dest_custom_records` map type can be set by appending `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiQueryRoutesRequest = {
  // string | The 33-byte hex-encoded public key for the payment destination
  pubKey: "pub_key_example",
  // string | The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
  amt: "amt_example",
  // string | The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive. (optional)
  amtMsat: "amt_msat_example",
  // number | An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight. (optional)
  finalCltvDelta: 1,
  // string | The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive. (optional)
  feeLimitFixed: "fee_limit.fixed_example",
  // string | The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive. (optional)
  feeLimitFixedMsat: "fee_limit.fixed_msat_example",
  // string | The fee limit expressed as a percentage of the payment amount. (optional)
  feeLimitPercent: "fee_limit.percent_example",
  // Array<string> | A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64. (optional)
  ignoredNodes: [
    'YQ==',
  ],
  // string | The source node where the request route should originated from. If empty, self is assumed. (optional)
  sourcePubKey: "source_pub_key_example",
  // boolean | If set to true, edge probabilities from mission control will be used to get the optimal route. (optional)
  useMissionControl: true,
  // number | An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd's `--max-cltv-expiry` setting. If zero, then the value of `--max-cltv-expiry` is used as the limit. (optional)
  cltvLimit: 1,
  // string | The channel id of the channel that must be taken to the first hop. If zero, any channel may be used. (optional)
  outgoingChanId: "outgoing_chan_id_example",
  // string | The pubkey of the last hop of the route. If empty, any hop may be used. (optional)
  lastHopPubkey: 'YQ==',
  // Array<'DATALOSS_PROTECT_REQ' | 'DATALOSS_PROTECT_OPT' | 'INITIAL_ROUING_SYNC' | 'UPFRONT_SHUTDOWN_SCRIPT_REQ' | 'UPFRONT_SHUTDOWN_SCRIPT_OPT' | 'GOSSIP_QUERIES_REQ' | 'GOSSIP_QUERIES_OPT' | 'TLV_ONION_REQ' | 'TLV_ONION_OPT' | 'EXT_GOSSIP_QUERIES_REQ' | 'EXT_GOSSIP_QUERIES_OPT' | 'STATIC_REMOTE_KEY_REQ' | 'STATIC_REMOTE_KEY_OPT' | 'PAYMENT_ADDR_REQ' | 'PAYMENT_ADDR_OPT' | 'MPP_REQ' | 'MPP_OPT' | 'WUMBO_CHANNELS_REQ' | 'WUMBO_CHANNELS_OPT' | 'ANCHORS_REQ' | 'ANCHORS_OPT' | 'ANCHORS_ZERO_FEE_HTLC_REQ' | 'ANCHORS_ZERO_FEE_HTLC_OPT' | 'AMP_REQ' | 'AMP_OPT'> | Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback. (optional)
  destFeatures: [
    "DATALOSS_PROTECT_REQ",
  ],
};

apiInstance.queryRoutes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubKey** | [**string**] | The 33-byte hex-encoded public key for the payment destination | defaults to undefined
 **amt** | [**string**] | The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive. | defaults to undefined
 **amtMsat** | [**string**] | The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive. | (optional) defaults to undefined
 **finalCltvDelta** | [**number**] | An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight. | (optional) defaults to undefined
 **feeLimitFixed** | [**string**] | The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive. | (optional) defaults to undefined
 **feeLimitFixedMsat** | [**string**] | The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive. | (optional) defaults to undefined
 **feeLimitPercent** | [**string**] | The fee limit expressed as a percentage of the payment amount. | (optional) defaults to undefined
 **ignoredNodes** | **Array&lt;string&gt;** | A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64. | (optional) defaults to undefined
 **sourcePubKey** | [**string**] | The source node where the request route should originated from. If empty, self is assumed. | (optional) defaults to undefined
 **useMissionControl** | [**boolean**] | If set to true, edge probabilities from mission control will be used to get the optimal route. | (optional) defaults to undefined
 **cltvLimit** | [**number**] | An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd&#39;s &#x60;--max-cltv-expiry&#x60; setting. If zero, then the value of &#x60;--max-cltv-expiry&#x60; is used as the limit. | (optional) defaults to undefined
 **outgoingChanId** | [**string**] | The channel id of the channel that must be taken to the first hop. If zero, any channel may be used. | (optional) defaults to undefined
 **lastHopPubkey** | [**string**] | The pubkey of the last hop of the route. If empty, any hop may be used. | (optional) defaults to undefined
 **destFeatures** | **Array<&#39;DATALOSS_PROTECT_REQ&#39; &#124; &#39;DATALOSS_PROTECT_OPT&#39; &#124; &#39;INITIAL_ROUING_SYNC&#39; &#124; &#39;UPFRONT_SHUTDOWN_SCRIPT_REQ&#39; &#124; &#39;UPFRONT_SHUTDOWN_SCRIPT_OPT&#39; &#124; &#39;GOSSIP_QUERIES_REQ&#39; &#124; &#39;GOSSIP_QUERIES_OPT&#39; &#124; &#39;TLV_ONION_REQ&#39; &#124; &#39;TLV_ONION_OPT&#39; &#124; &#39;EXT_GOSSIP_QUERIES_REQ&#39; &#124; &#39;EXT_GOSSIP_QUERIES_OPT&#39; &#124; &#39;STATIC_REMOTE_KEY_REQ&#39; &#124; &#39;STATIC_REMOTE_KEY_OPT&#39; &#124; &#39;PAYMENT_ADDR_REQ&#39; &#124; &#39;PAYMENT_ADDR_OPT&#39; &#124; &#39;MPP_REQ&#39; &#124; &#39;MPP_OPT&#39; &#124; &#39;WUMBO_CHANNELS_REQ&#39; &#124; &#39;WUMBO_CHANNELS_OPT&#39; &#124; &#39;ANCHORS_REQ&#39; &#124; &#39;ANCHORS_OPT&#39; &#124; &#39;ANCHORS_ZERO_FEE_HTLC_REQ&#39; &#124; &#39;ANCHORS_ZERO_FEE_HTLC_OPT&#39; &#124; &#39;AMP_REQ&#39; &#124; &#39;AMP_OPT&#39;>** | Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback. | (optional) defaults to undefined


### Return type

**LnrpcQueryRoutesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **restoreChannelBackups**
> any restoreChannelBackups(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiRestoreChannelBackupsRequest = {
  // LnrpcRestoreChanBackupRequest
  body: {
    chanBackups: {
      chanBackups: [
        {
          chanPoint: {
            fundingTxidBytes: 'YQ==',
            fundingTxidStr: "fundingTxidStr_example",
            outputIndex: 1,
          },
          chanBackup: 'YQ==',
        },
      ],
    },
    multiChanBackup: 'YQ==',
  },
};

apiInstance.restoreChannelBackups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcRestoreChanBackupRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendCoins**
> LnrpcSendCoinsResponse sendCoins(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSendCoinsRequest = {
  // LnrpcSendCoinsRequest
  body: {
    addr: "addr_example",
    amount: "amount_example",
    targetConf: 1,
    satPerVbyte: "satPerVbyte_example",
    satPerByte: "satPerByte_example",
    sendAll: true,
    label: "label_example",
    minConfs: 1,
    spendUnconfirmed: true,
  },
};

apiInstance.sendCoins(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcSendCoinsRequest**|  |


### Return type

**LnrpcSendCoinsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendMany**
> LnrpcSendManyResponse sendMany(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSendManyRequest = {
  // LnrpcSendManyRequest
  body: {
    addrToAmount: {
      "key": "key_example",
    },
    targetConf: 1,
    satPerVbyte: "satPerVbyte_example",
    satPerByte: "satPerByte_example",
    label: "label_example",
    minConfs: 1,
    spendUnconfirmed: true,
  },
};

apiInstance.sendMany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcSendManyRequest**|  |


### Return type

**LnrpcSendManyResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendPayment**
> StreamResultOfLnrpcSendResponse sendPayment(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSendPaymentRequest = {
  // LnrpcSendRequest |  (streaming inputs)
  body: {
    dest: 'YQ==',
    destString: "destString_example",
    amt: "amt_example",
    amtMsat: "amtMsat_example",
    paymentHash: 'YQ==',
    paymentHashString: "paymentHashString_example",
    paymentRequest: "paymentRequest_example",
    finalCltvDelta: 1,
    feeLimit: {
      fixed: "fixed_example",
      fixedMsat: "fixedMsat_example",
      percent: "percent_example",
    },
    outgoingChanId: "outgoingChanId_example",
    lastHopPubkey: 'YQ==',
    cltvLimit: 1,
    destCustomRecords: {
      "key": 'YQ==',
    },
    allowSelfPayment: true,
    destFeatures: [
      "DATALOSS_PROTECT_REQ",
    ],
    paymentAddr: 'YQ==',
  },
};

apiInstance.sendPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcSendRequest**|  (streaming inputs) |


### Return type

**StreamResultOfLnrpcSendResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendPaymentSync**
> LnrpcSendResponse sendPaymentSync(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSendPaymentSyncRequest = {
  // LnrpcSendRequest
  body: {
    dest: 'YQ==',
    destString: "destString_example",
    amt: "amt_example",
    amtMsat: "amtMsat_example",
    paymentHash: 'YQ==',
    paymentHashString: "paymentHashString_example",
    paymentRequest: "paymentRequest_example",
    finalCltvDelta: 1,
    feeLimit: {
      fixed: "fixed_example",
      fixedMsat: "fixedMsat_example",
      percent: "percent_example",
    },
    outgoingChanId: "outgoingChanId_example",
    lastHopPubkey: 'YQ==',
    cltvLimit: 1,
    destCustomRecords: {
      "key": 'YQ==',
    },
    allowSelfPayment: true,
    destFeatures: [
      "DATALOSS_PROTECT_REQ",
    ],
    paymentAddr: 'YQ==',
  },
};

apiInstance.sendPaymentSync(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcSendRequest**|  |


### Return type

**LnrpcSendResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendToRouteSync**
> LnrpcSendResponse sendToRouteSync(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSendToRouteSyncRequest = {
  // LnrpcSendToRouteRequest
  body: {
    paymentHash: 'YQ==',
    paymentHashString: "paymentHashString_example",
    route: {
      totalTimeLock: 1,
      totalFees: "totalFees_example",
      totalAmt: "totalAmt_example",
      hops: [
        {
          chanId: "chanId_example",
          chanCapacity: "chanCapacity_example",
          amtToForward: "amtToForward_example",
          fee: "fee_example",
          expiry: 1,
          amtToForwardMsat: "amtToForwardMsat_example",
          feeMsat: "feeMsat_example",
          pubKey: "pubKey_example",
          tlvPayload: true,
          mppRecord: {
            paymentAddr: 'YQ==',
            totalAmtMsat: "totalAmtMsat_example",
          },
          ampRecord: {
            rootShare: 'YQ==',
            setId: 'YQ==',
            childIndex: 1,
          },
          customRecords: {
            "key": 'YQ==',
          },
        },
      ],
      totalFeesMsat: "totalFeesMsat_example",
      totalAmtMsat: "totalAmtMsat_example",
    },
  },
};

apiInstance.sendToRouteSync(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcSendToRouteRequest**|  |


### Return type

**LnrpcSendResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signMessage**
> LnrpcSignMessageResponse signMessage(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSignMessageRequest = {
  // LnrpcSignMessageRequest
  body: {
    msg: 'YQ==',
  },
};

apiInstance.signMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcSignMessageRequest**|  |


### Return type

**LnrpcSignMessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stopDaemon**
> any stopDaemon(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiStopDaemonRequest = {
  // any
  body: {},
};

apiInstance.stopDaemon(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscribeChannelBackups**
> StreamResultOfLnrpcChanBackupSnapshot subscribeChannelBackups()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.subscribeChannelBackups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**StreamResultOfLnrpcChanBackupSnapshot**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscribeChannelEvents**
> StreamResultOfLnrpcChannelEventUpdate subscribeChannelEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.subscribeChannelEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**StreamResultOfLnrpcChannelEventUpdate**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscribeChannelGraph**
> StreamResultOfLnrpcGraphTopologyUpdate subscribeChannelGraph()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.subscribeChannelGraph(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**StreamResultOfLnrpcGraphTopologyUpdate**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscribeInvoices**
> StreamResultOfLnrpcInvoice subscribeInvoices()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSubscribeInvoicesRequest = {
  // string | If specified (non-zero), then we'll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC. (optional)
  addIndex: "add_index_example",
  // string | If specified (non-zero), then we'll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC. (optional)
  settleIndex: "settle_index_example",
};

apiInstance.subscribeInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addIndex** | [**string**] | If specified (non-zero), then we&#39;ll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC. | (optional) defaults to undefined
 **settleIndex** | [**string**] | If specified (non-zero), then we&#39;ll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC. | (optional) defaults to undefined


### Return type

**StreamResultOfLnrpcInvoice**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscribePeerEvents**
> StreamResultOfLnrpcPeerEvent subscribePeerEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.subscribePeerEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**StreamResultOfLnrpcPeerEvent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **subscribeTransactions**
> StreamResultOfLnrpcTransaction subscribeTransactions()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiSubscribeTransactionsRequest = {
  // number | The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse. (optional)
  startHeight: 1,
  // number | The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option. (optional)
  endHeight: 1,
  // string | An optional filter to only include transactions relevant to an account. (optional)
  account: "account_example",
};

apiInstance.subscribeTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHeight** | [**number**] | The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse. | (optional) defaults to undefined
 **endHeight** | [**number**] | The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option. | (optional) defaults to undefined
 **account** | [**string**] | An optional filter to only include transactions relevant to an account. | (optional) defaults to undefined


### Return type

**StreamResultOfLnrpcTransaction**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response.(streaming responses) |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateChannelPolicy**
> any updateChannelPolicy(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiUpdateChannelPolicyRequest = {
  // LnrpcPolicyUpdateRequest
  body: {
    global: true,
    chanPoint: {
      fundingTxidBytes: 'YQ==',
      fundingTxidStr: "fundingTxidStr_example",
      outputIndex: 1,
    },
    baseFeeMsat: "baseFeeMsat_example",
    feeRate: 3.14,
    timeLockDelta: 1,
    maxHtlcMsat: "maxHtlcMsat_example",
    minHtlcMsat: "minHtlcMsat_example",
    minHtlcMsatSpecified: true,
  },
};

apiInstance.updateChannelPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcPolicyUpdateRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyChanBackup**
> any verifyChanBackup(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiVerifyChanBackupRequest = {
  // LnrpcChanBackupSnapshot
  body: {
    singleChanBackups: {
      chanBackups: [
        {
          chanPoint: {
            fundingTxidBytes: 'YQ==',
            fundingTxidStr: "fundingTxidStr_example",
            outputIndex: 1,
          },
          chanBackup: 'YQ==',
        },
      ],
    },
    multiChanBackup: {
      chanPoints: [
        {
          fundingTxidBytes: 'YQ==',
          fundingTxidStr: "fundingTxidStr_example",
          outputIndex: 1,
        },
      ],
      multiChanBackup: 'YQ==',
    },
  },
};

apiInstance.verifyChanBackup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcChanBackupSnapshot**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyMessage**
> LnrpcVerifyMessageResponse verifyMessage(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:.LightningApiVerifyMessageRequest = {
  // LnrpcVerifyMessageRequest
  body: {
    msg: 'YQ==',
    signature: "signature_example",
  },
};

apiInstance.verifyMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LnrpcVerifyMessageRequest**|  |


### Return type

**LnrpcVerifyMessageResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **walletBalance**
> LnrpcWalletBalanceResponse walletBalance()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LightningApi(configuration);

let body:any = {};

apiInstance.walletBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LnrpcWalletBalanceResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


