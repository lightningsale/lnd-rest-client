# @lightningsale/lnd-rest-client

lnd - JavaScript client for @lightningsale/lnd-rest-client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: version not set
- Package version: version not set
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

- Generated with:
```shell
openapi-generator generate \
    -i https://raw.githubusercontent.com/lightningnetwork/lnd/0-13-1-branch/lnrpc/rpc.swagger.json \
    -g typescript-fetch \
    -o ./src/rpc \
    --additional-properties=npmName=lnd-rest-client \
    --additional-properties=npmRepository=@lightningsale \
    --additional-properties=npmVersion=0.13.1 \
    --additional-properties=supportsES6=true \
    --additional-properties=paramNaming=original
    
    
```

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @lightningsale/lnd-rest-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @lightningsale/lnd-rest-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var lnd = require('@lightningsale/lnd-rest-client');


var api = new lnd.LightningApi()
var channelPointFundingTxidStr = "channelPointFundingTxidStr_example"; // {String} Hex-encoded string representing the byte-reversed hash of the funding transaction.
var channelPointOutputIndex = 789; // {Number} The index of the output of the funding transaction
var opts = {
  'channelPointFundingTxidBytes': null, // {Blob} Txid of the funding transaction. When using REST, this field must be encoded as base64.
  'pendingFundingShimOnly': true, // {Boolean} 
  'iKnowWhatIAmDoing': true // {Boolean} Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
};
api.abandonChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*lnd.LightningApi* | [**abandonChannel**](docs/LightningApi.md#abandonChannel) | **DELETE** /v1/channels/abandon/{channel_point.funding_txid_str}/{channel_point.output_index} | lncli: &#x60;abandonchannel&#x60; AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
*lnd.LightningApi* | [**addInvoice**](docs/LightningApi.md#addInvoice) | **POST** /v1/invoices | lncli: &#x60;addinvoice&#x60; AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
*lnd.LightningApi* | [**bakeMacaroon**](docs/LightningApi.md#bakeMacaroon) | **POST** /v1/macaroon | lncli: &#x60;bakemacaroon&#x60; BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
*lnd.LightningApi* | [**channelAcceptor**](docs/LightningApi.md#channelAcceptor) | **POST** /v1/channels/acceptor | ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
*lnd.LightningApi* | [**channelBalance**](docs/LightningApi.md#channelBalance) | **GET** /v1/balance/channels | lncli: &#x60;channelbalance&#x60; ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
*lnd.LightningApi* | [**closeChannel**](docs/LightningApi.md#closeChannel) | **DELETE** /v1/channels/{channel_point.funding_txid_str}/{channel_point.output_index} | lncli: &#x60;closechannel&#x60; CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.
*lnd.LightningApi* | [**closedChannels**](docs/LightningApi.md#closedChannels) | **GET** /v1/channels/closed | lncli: &#x60;closedchannels&#x60; ClosedChannels returns a description of all the closed channels that this node was a participant in.
*lnd.LightningApi* | [**connectPeer**](docs/LightningApi.md#connectPeer) | **POST** /v1/peers | lncli: &#x60;connect&#x60; ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
*lnd.LightningApi* | [**debugLevel**](docs/LightningApi.md#debugLevel) | **POST** /v1/debuglevel | lncli: &#x60;debuglevel&#x60; DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
*lnd.LightningApi* | [**decodePayReq**](docs/LightningApi.md#decodePayReq) | **GET** /v1/payreq/{pay_req} | lncli: &#x60;decodepayreq&#x60; DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
*lnd.LightningApi* | [**deleteAllPayments**](docs/LightningApi.md#deleteAllPayments) | **DELETE** /v1/payments | DeleteAllPayments deletes all outgoing payments from DB.
*lnd.LightningApi* | [**deleteMacaroonID**](docs/LightningApi.md#deleteMacaroonID) | **DELETE** /v1/macaroon/{root_key_id} | lncli: &#x60;deletemacaroonid&#x60; DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
*lnd.LightningApi* | [**describeGraph**](docs/LightningApi.md#describeGraph) | **GET** /v1/graph | lncli: &#x60;describegraph&#x60; DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
*lnd.LightningApi* | [**disconnectPeer**](docs/LightningApi.md#disconnectPeer) | **DELETE** /v1/peers/{pub_key} | lncli: &#x60;disconnect&#x60; DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
*lnd.LightningApi* | [**estimateFee**](docs/LightningApi.md#estimateFee) | **GET** /v1/transactions/fee | lncli: &#x60;estimatefee&#x60; EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
*lnd.LightningApi* | [**exportAllChannelBackups**](docs/LightningApi.md#exportAllChannelBackups) | **GET** /v1/channels/backup | ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
*lnd.LightningApi* | [**exportChannelBackup**](docs/LightningApi.md#exportChannelBackup) | **GET** /v1/channels/backup/{chan_point.funding_txid_str}/{chan_point.output_index} | lncli: &#x60;exportchanbackup&#x60; ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
*lnd.LightningApi* | [**feeReport**](docs/LightningApi.md#feeReport) | **GET** /v1/fees | lncli: &#x60;feereport&#x60; FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
*lnd.LightningApi* | [**forwardingHistory**](docs/LightningApi.md#forwardingHistory) | **POST** /v1/switch | lncli: &#x60;fwdinghistory&#x60; ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
*lnd.LightningApi* | [**fundingStateStep**](docs/LightningApi.md#fundingStateStep) | **POST** /v1/funding/step | FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we&#39;re expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
*lnd.LightningApi* | [**getChanInfo**](docs/LightningApi.md#getChanInfo) | **GET** /v1/graph/edge/{chan_id} | lncli: &#x60;getchaninfo&#x60; GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction&#39;s funding output within the blockchain.
*lnd.LightningApi* | [**getInfo**](docs/LightningApi.md#getInfo) | **GET** /v1/getinfo | lncli: &#x60;getinfo&#x60; GetInfo returns general information concerning the lightning node including it&#39;s identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
*lnd.LightningApi* | [**getNetworkInfo**](docs/LightningApi.md#getNetworkInfo) | **GET** /v1/graph/info | lncli: &#x60;getnetworkinfo&#x60; GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
*lnd.LightningApi* | [**getNodeInfo**](docs/LightningApi.md#getNodeInfo) | **GET** /v1/graph/node/{pub_key} | lncli: &#x60;getnodeinfo&#x60; GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
*lnd.LightningApi* | [**getNodeMetrics**](docs/LightningApi.md#getNodeMetrics) | **GET** /v1/graph/nodemetrics | lncli: &#x60;getnodemetrics&#x60; GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
*lnd.LightningApi* | [**getRecoveryInfo**](docs/LightningApi.md#getRecoveryInfo) | **GET** /v1/getrecoveryinfo | * lncli: &#x60;getrecoveryinfo&#x60; GetRecoveryInfo returns information concerning the recovery mode including whether it&#39;s in a recovery mode, whether the recovery is finished, and the progress made so far.
*lnd.LightningApi* | [**getTransactions**](docs/LightningApi.md#getTransactions) | **GET** /v1/transactions | lncli: &#x60;listchaintxns&#x60; GetTransactions returns a list describing all the known transactions relevant to the wallet.
*lnd.LightningApi* | [**listChannels**](docs/LightningApi.md#listChannels) | **GET** /v1/channels | lncli: &#x60;listchannels&#x60; ListChannels returns a description of all the open channels that this node is a participant in.
*lnd.LightningApi* | [**listInvoices**](docs/LightningApi.md#listInvoices) | **GET** /v1/invoices | lncli: &#x60;listinvoices&#x60; ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
*lnd.LightningApi* | [**listMacaroonIDs**](docs/LightningApi.md#listMacaroonIDs) | **GET** /v1/macaroon/ids | lncli: &#x60;listmacaroonids&#x60; ListMacaroonIDs returns all root key IDs that are in use.
*lnd.LightningApi* | [**listPayments**](docs/LightningApi.md#listPayments) | **GET** /v1/payments | lncli: &#x60;listpayments&#x60; ListPayments returns a list of all outgoing payments.
*lnd.LightningApi* | [**listPeers**](docs/LightningApi.md#listPeers) | **GET** /v1/peers | lncli: &#x60;listpeers&#x60; ListPeers returns a verbose listing of all currently active peers.
*lnd.LightningApi* | [**listPermissions**](docs/LightningApi.md#listPermissions) | **GET** /v1/macaroon/permissions | lncli: &#x60;listpermissions&#x60; ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
*lnd.LightningApi* | [**listUnspent**](docs/LightningApi.md#listUnspent) | **GET** /v1/utxos | lncli: &#x60;listunspent&#x60; Deprecated, use walletrpc.ListUnspent instead.
*lnd.LightningApi* | [**lookupInvoice**](docs/LightningApi.md#lookupInvoice) | **GET** /v1/invoice/{r_hash_str} | lncli: &#x60;lookupinvoice&#x60; LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
*lnd.LightningApi* | [**newAddress**](docs/LightningApi.md#newAddress) | **GET** /v1/newaddress | lncli: &#x60;newaddress&#x60; NewAddress creates a new address under control of the local wallet.
*lnd.LightningApi* | [**openChannel**](docs/LightningApi.md#openChannel) | **POST** /v1/channels/stream | lncli: &#x60;openchannel&#x60; OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
*lnd.LightningApi* | [**openChannelSync**](docs/LightningApi.md#openChannelSync) | **POST** /v1/channels | OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
*lnd.LightningApi* | [**pendingChannels**](docs/LightningApi.md#pendingChannels) | **GET** /v1/channels/pending | lncli: &#x60;pendingchannels&#x60; PendingChannels returns a list of all the channels that are currently considered \&quot;pending\&quot;. A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
*lnd.LightningApi* | [**queryRoutes**](docs/LightningApi.md#queryRoutes) | **GET** /v1/graph/routes/{pub_key}/{amt} | lncli: &#x60;queryroutes&#x60; QueryRoutes attempts to query the daemon&#39;s Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.
*lnd.LightningApi* | [**restoreChannelBackups**](docs/LightningApi.md#restoreChannelBackups) | **POST** /v1/channels/backup/restore | lncli: &#x60;restorechanbackup&#x60; RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
*lnd.LightningApi* | [**sendCoins**](docs/LightningApi.md#sendCoins) | **POST** /v1/transactions | lncli: &#x60;sendcoins&#x60; SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
*lnd.LightningApi* | [**sendMany**](docs/LightningApi.md#sendMany) | **POST** /v1/transactions/many | lncli: &#x60;sendmany&#x60; SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
*lnd.LightningApi* | [**sendPayment**](docs/LightningApi.md#sendPayment) | **POST** /v1/channels/transaction-stream | lncli: &#x60;sendpayment&#x60; Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
*lnd.LightningApi* | [**sendPaymentSync**](docs/LightningApi.md#sendPaymentSync) | **POST** /v1/channels/transactions | SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination&#39;s public key and the payment hash (if any) to be encoded as hex strings.
*lnd.LightningApi* | [**sendToRouteSync**](docs/LightningApi.md#sendToRouteSync) | **POST** /v1/channels/transactions/route | SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
*lnd.LightningApi* | [**signMessage**](docs/LightningApi.md#signMessage) | **POST** /v1/signmessage | lncli: &#x60;signmessage&#x60; SignMessage signs a message with this node&#39;s private key. The returned signature string is &#x60;zbase32&#x60; encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
*lnd.LightningApi* | [**stopDaemon**](docs/LightningApi.md#stopDaemon) | **POST** /v1/stop | lncli: &#x60;stop&#x60; StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
*lnd.LightningApi* | [**subscribeChannelBackups**](docs/LightningApi.md#subscribeChannelBackups) | **GET** /v1/channels/backup/subscribe | SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
*lnd.LightningApi* | [**subscribeChannelEvents**](docs/LightningApi.md#subscribeChannelEvents) | **GET** /v1/channels/subscribe | SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
*lnd.LightningApi* | [**subscribeChannelGraph**](docs/LightningApi.md#subscribeChannelGraph) | **GET** /v1/graph/subscribe | SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
*lnd.LightningApi* | [**subscribeInvoices**](docs/LightningApi.md#subscribeInvoices) | **GET** /v1/invoices/subscribe | SubscribeInvoices returns a uni-directional stream (server -&gt; client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we&#39;ll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we&#39;ll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we&#39;ll only send out the latest add/settle events.
*lnd.LightningApi* | [**subscribePeerEvents**](docs/LightningApi.md#subscribePeerEvents) | **GET** /v1/peers/subscribe | SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
*lnd.LightningApi* | [**subscribeTransactions**](docs/LightningApi.md#subscribeTransactions) | **GET** /v1/transactions/subscribe | SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
*lnd.LightningApi* | [**updateChannelPolicy**](docs/LightningApi.md#updateChannelPolicy) | **POST** /v1/chanpolicy | lncli: &#x60;updatechanpolicy&#x60; UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
*lnd.LightningApi* | [**verifyChanBackup**](docs/LightningApi.md#verifyChanBackup) | **POST** /v1/channels/backup/verify | VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
*lnd.LightningApi* | [**verifyMessage**](docs/LightningApi.md#verifyMessage) | **POST** /v1/verifymessage | lncli: &#x60;verifymessage&#x60; VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node&#39;s channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
*lnd.LightningApi* | [**walletBalance**](docs/LightningApi.md#walletBalance) | **GET** /v1/balance/blockchain | lncli: &#x60;walletbalance&#x60; WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.


## Documentation for Models

 - [lnd.ChannelCloseSummaryClosureType](docs/ChannelCloseSummaryClosureType.md)
 - [lnd.ChannelEventUpdateUpdateType](docs/ChannelEventUpdateUpdateType.md)
 - [lnd.FailureFailureCode](docs/FailureFailureCode.md)
 - [lnd.ForceClosedChannelAnchorState](docs/ForceClosedChannelAnchorState.md)
 - [lnd.HTLCAttemptHTLCStatus](docs/HTLCAttemptHTLCStatus.md)
 - [lnd.InvoiceInvoiceState](docs/InvoiceInvoiceState.md)
 - [lnd.LnrpcAMP](docs/LnrpcAMP.md)
 - [lnd.LnrpcAMPRecord](docs/LnrpcAMPRecord.md)
 - [lnd.LnrpcAddInvoiceResponse](docs/LnrpcAddInvoiceResponse.md)
 - [lnd.LnrpcAddressType](docs/LnrpcAddressType.md)
 - [lnd.LnrpcAmount](docs/LnrpcAmount.md)
 - [lnd.LnrpcBakeMacaroonRequest](docs/LnrpcBakeMacaroonRequest.md)
 - [lnd.LnrpcBakeMacaroonResponse](docs/LnrpcBakeMacaroonResponse.md)
 - [lnd.LnrpcChain](docs/LnrpcChain.md)
 - [lnd.LnrpcChanBackupSnapshot](docs/LnrpcChanBackupSnapshot.md)
 - [lnd.LnrpcChanPointShim](docs/LnrpcChanPointShim.md)
 - [lnd.LnrpcChannel](docs/LnrpcChannel.md)
 - [lnd.LnrpcChannelAcceptRequest](docs/LnrpcChannelAcceptRequest.md)
 - [lnd.LnrpcChannelAcceptResponse](docs/LnrpcChannelAcceptResponse.md)
 - [lnd.LnrpcChannelBackup](docs/LnrpcChannelBackup.md)
 - [lnd.LnrpcChannelBackups](docs/LnrpcChannelBackups.md)
 - [lnd.LnrpcChannelBalanceResponse](docs/LnrpcChannelBalanceResponse.md)
 - [lnd.LnrpcChannelCloseSummary](docs/LnrpcChannelCloseSummary.md)
 - [lnd.LnrpcChannelCloseUpdate](docs/LnrpcChannelCloseUpdate.md)
 - [lnd.LnrpcChannelConstraints](docs/LnrpcChannelConstraints.md)
 - [lnd.LnrpcChannelEdge](docs/LnrpcChannelEdge.md)
 - [lnd.LnrpcChannelEdgeUpdate](docs/LnrpcChannelEdgeUpdate.md)
 - [lnd.LnrpcChannelEventUpdate](docs/LnrpcChannelEventUpdate.md)
 - [lnd.LnrpcChannelFeeReport](docs/LnrpcChannelFeeReport.md)
 - [lnd.LnrpcChannelGraph](docs/LnrpcChannelGraph.md)
 - [lnd.LnrpcChannelOpenUpdate](docs/LnrpcChannelOpenUpdate.md)
 - [lnd.LnrpcChannelPoint](docs/LnrpcChannelPoint.md)
 - [lnd.LnrpcChannelUpdate](docs/LnrpcChannelUpdate.md)
 - [lnd.LnrpcCloseStatusUpdate](docs/LnrpcCloseStatusUpdate.md)
 - [lnd.LnrpcClosedChannelUpdate](docs/LnrpcClosedChannelUpdate.md)
 - [lnd.LnrpcClosedChannelsResponse](docs/LnrpcClosedChannelsResponse.md)
 - [lnd.LnrpcCommitmentType](docs/LnrpcCommitmentType.md)
 - [lnd.LnrpcConnectPeerRequest](docs/LnrpcConnectPeerRequest.md)
 - [lnd.LnrpcDebugLevelRequest](docs/LnrpcDebugLevelRequest.md)
 - [lnd.LnrpcDebugLevelResponse](docs/LnrpcDebugLevelResponse.md)
 - [lnd.LnrpcDeleteMacaroonIDResponse](docs/LnrpcDeleteMacaroonIDResponse.md)
 - [lnd.LnrpcEdgeLocator](docs/LnrpcEdgeLocator.md)
 - [lnd.LnrpcEstimateFeeResponse](docs/LnrpcEstimateFeeResponse.md)
 - [lnd.LnrpcFailure](docs/LnrpcFailure.md)
 - [lnd.LnrpcFeature](docs/LnrpcFeature.md)
 - [lnd.LnrpcFeatureBit](docs/LnrpcFeatureBit.md)
 - [lnd.LnrpcFeeLimit](docs/LnrpcFeeLimit.md)
 - [lnd.LnrpcFeeReportResponse](docs/LnrpcFeeReportResponse.md)
 - [lnd.LnrpcFloatMetric](docs/LnrpcFloatMetric.md)
 - [lnd.LnrpcForwardingEvent](docs/LnrpcForwardingEvent.md)
 - [lnd.LnrpcForwardingHistoryRequest](docs/LnrpcForwardingHistoryRequest.md)
 - [lnd.LnrpcForwardingHistoryResponse](docs/LnrpcForwardingHistoryResponse.md)
 - [lnd.LnrpcFundingPsbtFinalize](docs/LnrpcFundingPsbtFinalize.md)
 - [lnd.LnrpcFundingPsbtVerify](docs/LnrpcFundingPsbtVerify.md)
 - [lnd.LnrpcFundingShim](docs/LnrpcFundingShim.md)
 - [lnd.LnrpcFundingShimCancel](docs/LnrpcFundingShimCancel.md)
 - [lnd.LnrpcFundingTransitionMsg](docs/LnrpcFundingTransitionMsg.md)
 - [lnd.LnrpcGetInfoResponse](docs/LnrpcGetInfoResponse.md)
 - [lnd.LnrpcGetRecoveryInfoResponse](docs/LnrpcGetRecoveryInfoResponse.md)
 - [lnd.LnrpcGraphTopologyUpdate](docs/LnrpcGraphTopologyUpdate.md)
 - [lnd.LnrpcHTLC](docs/LnrpcHTLC.md)
 - [lnd.LnrpcHTLCAttempt](docs/LnrpcHTLCAttempt.md)
 - [lnd.LnrpcHop](docs/LnrpcHop.md)
 - [lnd.LnrpcHopHint](docs/LnrpcHopHint.md)
 - [lnd.LnrpcInitiator](docs/LnrpcInitiator.md)
 - [lnd.LnrpcInvoice](docs/LnrpcInvoice.md)
 - [lnd.LnrpcInvoiceHTLC](docs/LnrpcInvoiceHTLC.md)
 - [lnd.LnrpcInvoiceHTLCState](docs/LnrpcInvoiceHTLCState.md)
 - [lnd.LnrpcKeyDescriptor](docs/LnrpcKeyDescriptor.md)
 - [lnd.LnrpcKeyLocator](docs/LnrpcKeyLocator.md)
 - [lnd.LnrpcLightningAddress](docs/LnrpcLightningAddress.md)
 - [lnd.LnrpcLightningNode](docs/LnrpcLightningNode.md)
 - [lnd.LnrpcListChannelsResponse](docs/LnrpcListChannelsResponse.md)
 - [lnd.LnrpcListInvoiceResponse](docs/LnrpcListInvoiceResponse.md)
 - [lnd.LnrpcListMacaroonIDsResponse](docs/LnrpcListMacaroonIDsResponse.md)
 - [lnd.LnrpcListPaymentsResponse](docs/LnrpcListPaymentsResponse.md)
 - [lnd.LnrpcListPeersResponse](docs/LnrpcListPeersResponse.md)
 - [lnd.LnrpcListPermissionsResponse](docs/LnrpcListPermissionsResponse.md)
 - [lnd.LnrpcListUnspentResponse](docs/LnrpcListUnspentResponse.md)
 - [lnd.LnrpcMPPRecord](docs/LnrpcMPPRecord.md)
 - [lnd.LnrpcMacaroonPermission](docs/LnrpcMacaroonPermission.md)
 - [lnd.LnrpcMacaroonPermissionList](docs/LnrpcMacaroonPermissionList.md)
 - [lnd.LnrpcMultiChanBackup](docs/LnrpcMultiChanBackup.md)
 - [lnd.LnrpcNetworkInfo](docs/LnrpcNetworkInfo.md)
 - [lnd.LnrpcNewAddressResponse](docs/LnrpcNewAddressResponse.md)
 - [lnd.LnrpcNodeAddress](docs/LnrpcNodeAddress.md)
 - [lnd.LnrpcNodeInfo](docs/LnrpcNodeInfo.md)
 - [lnd.LnrpcNodeMetricType](docs/LnrpcNodeMetricType.md)
 - [lnd.LnrpcNodeMetricsResponse](docs/LnrpcNodeMetricsResponse.md)
 - [lnd.LnrpcNodePair](docs/LnrpcNodePair.md)
 - [lnd.LnrpcNodeUpdate](docs/LnrpcNodeUpdate.md)
 - [lnd.LnrpcOpenChannelRequest](docs/LnrpcOpenChannelRequest.md)
 - [lnd.LnrpcOpenStatusUpdate](docs/LnrpcOpenStatusUpdate.md)
 - [lnd.LnrpcOutPoint](docs/LnrpcOutPoint.md)
 - [lnd.LnrpcPayReq](docs/LnrpcPayReq.md)
 - [lnd.LnrpcPayment](docs/LnrpcPayment.md)
 - [lnd.LnrpcPaymentFailureReason](docs/LnrpcPaymentFailureReason.md)
 - [lnd.LnrpcPeer](docs/LnrpcPeer.md)
 - [lnd.LnrpcPeerEvent](docs/LnrpcPeerEvent.md)
 - [lnd.LnrpcPendingChannelsResponse](docs/LnrpcPendingChannelsResponse.md)
 - [lnd.LnrpcPendingHTLC](docs/LnrpcPendingHTLC.md)
 - [lnd.LnrpcPendingUpdate](docs/LnrpcPendingUpdate.md)
 - [lnd.LnrpcPolicyUpdateRequest](docs/LnrpcPolicyUpdateRequest.md)
 - [lnd.LnrpcPsbtShim](docs/LnrpcPsbtShim.md)
 - [lnd.LnrpcQueryRoutesResponse](docs/LnrpcQueryRoutesResponse.md)
 - [lnd.LnrpcReadyForPsbtFunding](docs/LnrpcReadyForPsbtFunding.md)
 - [lnd.LnrpcResolution](docs/LnrpcResolution.md)
 - [lnd.LnrpcResolutionOutcome](docs/LnrpcResolutionOutcome.md)
 - [lnd.LnrpcResolutionType](docs/LnrpcResolutionType.md)
 - [lnd.LnrpcRestoreChanBackupRequest](docs/LnrpcRestoreChanBackupRequest.md)
 - [lnd.LnrpcRoute](docs/LnrpcRoute.md)
 - [lnd.LnrpcRouteHint](docs/LnrpcRouteHint.md)
 - [lnd.LnrpcRoutingPolicy](docs/LnrpcRoutingPolicy.md)
 - [lnd.LnrpcSendCoinsRequest](docs/LnrpcSendCoinsRequest.md)
 - [lnd.LnrpcSendCoinsResponse](docs/LnrpcSendCoinsResponse.md)
 - [lnd.LnrpcSendManyRequest](docs/LnrpcSendManyRequest.md)
 - [lnd.LnrpcSendManyResponse](docs/LnrpcSendManyResponse.md)
 - [lnd.LnrpcSendRequest](docs/LnrpcSendRequest.md)
 - [lnd.LnrpcSendResponse](docs/LnrpcSendResponse.md)
 - [lnd.LnrpcSendToRouteRequest](docs/LnrpcSendToRouteRequest.md)
 - [lnd.LnrpcSignMessageRequest](docs/LnrpcSignMessageRequest.md)
 - [lnd.LnrpcSignMessageResponse](docs/LnrpcSignMessageResponse.md)
 - [lnd.LnrpcTimestampedError](docs/LnrpcTimestampedError.md)
 - [lnd.LnrpcTransaction](docs/LnrpcTransaction.md)
 - [lnd.LnrpcTransactionDetails](docs/LnrpcTransactionDetails.md)
 - [lnd.LnrpcUtxo](docs/LnrpcUtxo.md)
 - [lnd.LnrpcVerifyMessageRequest](docs/LnrpcVerifyMessageRequest.md)
 - [lnd.LnrpcVerifyMessageResponse](docs/LnrpcVerifyMessageResponse.md)
 - [lnd.LnrpcWalletAccountBalance](docs/LnrpcWalletAccountBalance.md)
 - [lnd.LnrpcWalletBalanceResponse](docs/LnrpcWalletBalanceResponse.md)
 - [lnd.PaymentPaymentStatus](docs/PaymentPaymentStatus.md)
 - [lnd.PeerEventEventType](docs/PeerEventEventType.md)
 - [lnd.PeerSyncType](docs/PeerSyncType.md)
 - [lnd.PendingChannelsResponseClosedChannel](docs/PendingChannelsResponseClosedChannel.md)
 - [lnd.PendingChannelsResponseCommitments](docs/PendingChannelsResponseCommitments.md)
 - [lnd.PendingChannelsResponseForceClosedChannel](docs/PendingChannelsResponseForceClosedChannel.md)
 - [lnd.PendingChannelsResponsePendingChannel](docs/PendingChannelsResponsePendingChannel.md)
 - [lnd.PendingChannelsResponsePendingOpenChannel](docs/PendingChannelsResponsePendingOpenChannel.md)
 - [lnd.PendingChannelsResponseWaitingCloseChannel](docs/PendingChannelsResponseWaitingCloseChannel.md)
 - [lnd.ProtobufAny](docs/ProtobufAny.md)
 - [lnd.RuntimeError](docs/RuntimeError.md)
 - [lnd.RuntimeStreamError](docs/RuntimeStreamError.md)
 - [lnd.StreamResultOfLnrpcChanBackupSnapshot](docs/StreamResultOfLnrpcChanBackupSnapshot.md)
 - [lnd.StreamResultOfLnrpcChannelAcceptRequest](docs/StreamResultOfLnrpcChannelAcceptRequest.md)
 - [lnd.StreamResultOfLnrpcChannelEventUpdate](docs/StreamResultOfLnrpcChannelEventUpdate.md)
 - [lnd.StreamResultOfLnrpcCloseStatusUpdate](docs/StreamResultOfLnrpcCloseStatusUpdate.md)
 - [lnd.StreamResultOfLnrpcGraphTopologyUpdate](docs/StreamResultOfLnrpcGraphTopologyUpdate.md)
 - [lnd.StreamResultOfLnrpcInvoice](docs/StreamResultOfLnrpcInvoice.md)
 - [lnd.StreamResultOfLnrpcOpenStatusUpdate](docs/StreamResultOfLnrpcOpenStatusUpdate.md)
 - [lnd.StreamResultOfLnrpcPeerEvent](docs/StreamResultOfLnrpcPeerEvent.md)
 - [lnd.StreamResultOfLnrpcSendResponse](docs/StreamResultOfLnrpcSendResponse.md)
 - [lnd.StreamResultOfLnrpcTransaction](docs/StreamResultOfLnrpcTransaction.md)


## Documentation for Authorization

All endpoints do not require authorization.
