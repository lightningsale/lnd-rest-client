import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ChannelCloseSummaryClosureType } from '../models/ChannelCloseSummaryClosureType';
import { ChannelEventUpdateUpdateType } from '../models/ChannelEventUpdateUpdateType';
import { FailureFailureCode } from '../models/FailureFailureCode';
import { ForceClosedChannelAnchorState } from '../models/ForceClosedChannelAnchorState';
import { HTLCAttemptHTLCStatus } from '../models/HTLCAttemptHTLCStatus';
import { InvoiceInvoiceState } from '../models/InvoiceInvoiceState';
import { LnrpcAMP } from '../models/LnrpcAMP';
import { LnrpcAMPRecord } from '../models/LnrpcAMPRecord';
import { LnrpcAddInvoiceResponse } from '../models/LnrpcAddInvoiceResponse';
import { LnrpcAddressType } from '../models/LnrpcAddressType';
import { LnrpcAmount } from '../models/LnrpcAmount';
import { LnrpcBakeMacaroonRequest } from '../models/LnrpcBakeMacaroonRequest';
import { LnrpcBakeMacaroonResponse } from '../models/LnrpcBakeMacaroonResponse';
import { LnrpcChain } from '../models/LnrpcChain';
import { LnrpcChanBackupSnapshot } from '../models/LnrpcChanBackupSnapshot';
import { LnrpcChanPointShim } from '../models/LnrpcChanPointShim';
import { LnrpcChannel } from '../models/LnrpcChannel';
import { LnrpcChannelAcceptRequest } from '../models/LnrpcChannelAcceptRequest';
import { LnrpcChannelAcceptResponse } from '../models/LnrpcChannelAcceptResponse';
import { LnrpcChannelBackup } from '../models/LnrpcChannelBackup';
import { LnrpcChannelBackups } from '../models/LnrpcChannelBackups';
import { LnrpcChannelBalanceResponse } from '../models/LnrpcChannelBalanceResponse';
import { LnrpcChannelCloseSummary } from '../models/LnrpcChannelCloseSummary';
import { LnrpcChannelCloseUpdate } from '../models/LnrpcChannelCloseUpdate';
import { LnrpcChannelConstraints } from '../models/LnrpcChannelConstraints';
import { LnrpcChannelEdge } from '../models/LnrpcChannelEdge';
import { LnrpcChannelEdgeUpdate } from '../models/LnrpcChannelEdgeUpdate';
import { LnrpcChannelEventUpdate } from '../models/LnrpcChannelEventUpdate';
import { LnrpcChannelFeeReport } from '../models/LnrpcChannelFeeReport';
import { LnrpcChannelGraph } from '../models/LnrpcChannelGraph';
import { LnrpcChannelOpenUpdate } from '../models/LnrpcChannelOpenUpdate';
import { LnrpcChannelPoint } from '../models/LnrpcChannelPoint';
import { LnrpcChannelUpdate } from '../models/LnrpcChannelUpdate';
import { LnrpcCloseStatusUpdate } from '../models/LnrpcCloseStatusUpdate';
import { LnrpcClosedChannelUpdate } from '../models/LnrpcClosedChannelUpdate';
import { LnrpcClosedChannelsResponse } from '../models/LnrpcClosedChannelsResponse';
import { LnrpcCommitmentType } from '../models/LnrpcCommitmentType';
import { LnrpcConnectPeerRequest } from '../models/LnrpcConnectPeerRequest';
import { LnrpcDebugLevelRequest } from '../models/LnrpcDebugLevelRequest';
import { LnrpcDebugLevelResponse } from '../models/LnrpcDebugLevelResponse';
import { LnrpcDeleteMacaroonIDResponse } from '../models/LnrpcDeleteMacaroonIDResponse';
import { LnrpcEdgeLocator } from '../models/LnrpcEdgeLocator';
import { LnrpcEstimateFeeResponse } from '../models/LnrpcEstimateFeeResponse';
import { LnrpcFailure } from '../models/LnrpcFailure';
import { LnrpcFeature } from '../models/LnrpcFeature';
import { LnrpcFeatureBit } from '../models/LnrpcFeatureBit';
import { LnrpcFeeLimit } from '../models/LnrpcFeeLimit';
import { LnrpcFeeReportResponse } from '../models/LnrpcFeeReportResponse';
import { LnrpcFloatMetric } from '../models/LnrpcFloatMetric';
import { LnrpcForwardingEvent } from '../models/LnrpcForwardingEvent';
import { LnrpcForwardingHistoryRequest } from '../models/LnrpcForwardingHistoryRequest';
import { LnrpcForwardingHistoryResponse } from '../models/LnrpcForwardingHistoryResponse';
import { LnrpcFundingPsbtFinalize } from '../models/LnrpcFundingPsbtFinalize';
import { LnrpcFundingPsbtVerify } from '../models/LnrpcFundingPsbtVerify';
import { LnrpcFundingShim } from '../models/LnrpcFundingShim';
import { LnrpcFundingShimCancel } from '../models/LnrpcFundingShimCancel';
import { LnrpcFundingTransitionMsg } from '../models/LnrpcFundingTransitionMsg';
import { LnrpcGetInfoResponse } from '../models/LnrpcGetInfoResponse';
import { LnrpcGetRecoveryInfoResponse } from '../models/LnrpcGetRecoveryInfoResponse';
import { LnrpcGraphTopologyUpdate } from '../models/LnrpcGraphTopologyUpdate';
import { LnrpcHTLC } from '../models/LnrpcHTLC';
import { LnrpcHTLCAttempt } from '../models/LnrpcHTLCAttempt';
import { LnrpcHop } from '../models/LnrpcHop';
import { LnrpcHopHint } from '../models/LnrpcHopHint';
import { LnrpcInitiator } from '../models/LnrpcInitiator';
import { LnrpcInvoice } from '../models/LnrpcInvoice';
import { LnrpcInvoiceHTLC } from '../models/LnrpcInvoiceHTLC';
import { LnrpcInvoiceHTLCState } from '../models/LnrpcInvoiceHTLCState';
import { LnrpcKeyDescriptor } from '../models/LnrpcKeyDescriptor';
import { LnrpcKeyLocator } from '../models/LnrpcKeyLocator';
import { LnrpcLightningAddress } from '../models/LnrpcLightningAddress';
import { LnrpcLightningNode } from '../models/LnrpcLightningNode';
import { LnrpcListChannelsResponse } from '../models/LnrpcListChannelsResponse';
import { LnrpcListInvoiceResponse } from '../models/LnrpcListInvoiceResponse';
import { LnrpcListMacaroonIDsResponse } from '../models/LnrpcListMacaroonIDsResponse';
import { LnrpcListPaymentsResponse } from '../models/LnrpcListPaymentsResponse';
import { LnrpcListPeersResponse } from '../models/LnrpcListPeersResponse';
import { LnrpcListPermissionsResponse } from '../models/LnrpcListPermissionsResponse';
import { LnrpcListUnspentResponse } from '../models/LnrpcListUnspentResponse';
import { LnrpcMPPRecord } from '../models/LnrpcMPPRecord';
import { LnrpcMacaroonPermission } from '../models/LnrpcMacaroonPermission';
import { LnrpcMacaroonPermissionList } from '../models/LnrpcMacaroonPermissionList';
import { LnrpcMultiChanBackup } from '../models/LnrpcMultiChanBackup';
import { LnrpcNetworkInfo } from '../models/LnrpcNetworkInfo';
import { LnrpcNewAddressResponse } from '../models/LnrpcNewAddressResponse';
import { LnrpcNodeAddress } from '../models/LnrpcNodeAddress';
import { LnrpcNodeInfo } from '../models/LnrpcNodeInfo';
import { LnrpcNodeMetricType } from '../models/LnrpcNodeMetricType';
import { LnrpcNodeMetricsResponse } from '../models/LnrpcNodeMetricsResponse';
import { LnrpcNodePair } from '../models/LnrpcNodePair';
import { LnrpcNodeUpdate } from '../models/LnrpcNodeUpdate';
import { LnrpcOpenChannelRequest } from '../models/LnrpcOpenChannelRequest';
import { LnrpcOpenStatusUpdate } from '../models/LnrpcOpenStatusUpdate';
import { LnrpcOutPoint } from '../models/LnrpcOutPoint';
import { LnrpcPayReq } from '../models/LnrpcPayReq';
import { LnrpcPayment } from '../models/LnrpcPayment';
import { LnrpcPaymentFailureReason } from '../models/LnrpcPaymentFailureReason';
import { LnrpcPeer } from '../models/LnrpcPeer';
import { LnrpcPeerEvent } from '../models/LnrpcPeerEvent';
import { LnrpcPendingChannelsResponse } from '../models/LnrpcPendingChannelsResponse';
import { LnrpcPendingHTLC } from '../models/LnrpcPendingHTLC';
import { LnrpcPendingUpdate } from '../models/LnrpcPendingUpdate';
import { LnrpcPolicyUpdateRequest } from '../models/LnrpcPolicyUpdateRequest';
import { LnrpcPsbtShim } from '../models/LnrpcPsbtShim';
import { LnrpcQueryRoutesResponse } from '../models/LnrpcQueryRoutesResponse';
import { LnrpcReadyForPsbtFunding } from '../models/LnrpcReadyForPsbtFunding';
import { LnrpcResolution } from '../models/LnrpcResolution';
import { LnrpcResolutionOutcome } from '../models/LnrpcResolutionOutcome';
import { LnrpcResolutionType } from '../models/LnrpcResolutionType';
import { LnrpcRestoreChanBackupRequest } from '../models/LnrpcRestoreChanBackupRequest';
import { LnrpcRoute } from '../models/LnrpcRoute';
import { LnrpcRouteHint } from '../models/LnrpcRouteHint';
import { LnrpcRoutingPolicy } from '../models/LnrpcRoutingPolicy';
import { LnrpcSendCoinsRequest } from '../models/LnrpcSendCoinsRequest';
import { LnrpcSendCoinsResponse } from '../models/LnrpcSendCoinsResponse';
import { LnrpcSendManyRequest } from '../models/LnrpcSendManyRequest';
import { LnrpcSendManyResponse } from '../models/LnrpcSendManyResponse';
import { LnrpcSendRequest } from '../models/LnrpcSendRequest';
import { LnrpcSendResponse } from '../models/LnrpcSendResponse';
import { LnrpcSendToRouteRequest } from '../models/LnrpcSendToRouteRequest';
import { LnrpcSignMessageRequest } from '../models/LnrpcSignMessageRequest';
import { LnrpcSignMessageResponse } from '../models/LnrpcSignMessageResponse';
import { LnrpcTimestampedError } from '../models/LnrpcTimestampedError';
import { LnrpcTransaction } from '../models/LnrpcTransaction';
import { LnrpcTransactionDetails } from '../models/LnrpcTransactionDetails';
import { LnrpcUtxo } from '../models/LnrpcUtxo';
import { LnrpcVerifyMessageRequest } from '../models/LnrpcVerifyMessageRequest';
import { LnrpcVerifyMessageResponse } from '../models/LnrpcVerifyMessageResponse';
import { LnrpcWalletAccountBalance } from '../models/LnrpcWalletAccountBalance';
import { LnrpcWalletBalanceResponse } from '../models/LnrpcWalletBalanceResponse';
import { PaymentPaymentStatus } from '../models/PaymentPaymentStatus';
import { PeerEventEventType } from '../models/PeerEventEventType';
import { PeerSyncType } from '../models/PeerSyncType';
import { PendingChannelsResponseClosedChannel } from '../models/PendingChannelsResponseClosedChannel';
import { PendingChannelsResponseCommitments } from '../models/PendingChannelsResponseCommitments';
import { PendingChannelsResponseForceClosedChannel } from '../models/PendingChannelsResponseForceClosedChannel';
import { PendingChannelsResponsePendingChannel } from '../models/PendingChannelsResponsePendingChannel';
import { PendingChannelsResponsePendingOpenChannel } from '../models/PendingChannelsResponsePendingOpenChannel';
import { PendingChannelsResponseWaitingCloseChannel } from '../models/PendingChannelsResponseWaitingCloseChannel';
import { ProtobufAny } from '../models/ProtobufAny';
import { RuntimeError } from '../models/RuntimeError';
import { RuntimeStreamError } from '../models/RuntimeStreamError';
import { StreamResultOfLnrpcChanBackupSnapshot } from '../models/StreamResultOfLnrpcChanBackupSnapshot';
import { StreamResultOfLnrpcChannelAcceptRequest } from '../models/StreamResultOfLnrpcChannelAcceptRequest';
import { StreamResultOfLnrpcChannelEventUpdate } from '../models/StreamResultOfLnrpcChannelEventUpdate';
import { StreamResultOfLnrpcCloseStatusUpdate } from '../models/StreamResultOfLnrpcCloseStatusUpdate';
import { StreamResultOfLnrpcGraphTopologyUpdate } from '../models/StreamResultOfLnrpcGraphTopologyUpdate';
import { StreamResultOfLnrpcInvoice } from '../models/StreamResultOfLnrpcInvoice';
import { StreamResultOfLnrpcOpenStatusUpdate } from '../models/StreamResultOfLnrpcOpenStatusUpdate';
import { StreamResultOfLnrpcPeerEvent } from '../models/StreamResultOfLnrpcPeerEvent';
import { StreamResultOfLnrpcSendResponse } from '../models/StreamResultOfLnrpcSendResponse';
import { StreamResultOfLnrpcTransaction } from '../models/StreamResultOfLnrpcTransaction';
import { ObservableLightningApi } from './ObservableAPI';

import { LightningApiRequestFactory, LightningApiResponseProcessor} from "../apis/LightningApi";
export class PromiseLightningApi {
    private api: ObservableLightningApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LightningApiRequestFactory,
        responseProcessor?: LightningApiResponseProcessor
    ) {
        this.api = new ObservableLightningApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * lncli: `abandonchannel` AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
     * @param channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param channelPointOutputIndex The index of the output of the funding transaction
     * @param channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @param pendingFundingShimOnly 
     * @param iKnowWhatIAmDoing Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
     */
    public abandonChannel(channelPointFundingTxidStr: string, channelPointOutputIndex: number, channelPointFundingTxidBytes?: string, pendingFundingShimOnly?: boolean, iKnowWhatIAmDoing?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.abandonChannel(channelPointFundingTxidStr, channelPointOutputIndex, channelPointFundingTxidBytes, pendingFundingShimOnly, iKnowWhatIAmDoing, _options);
        return result.toPromise();
    }

    /**
     * lncli: `addinvoice` AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
     * @param body 
     */
    public addInvoice(body: LnrpcInvoice, _options?: Configuration): Promise<LnrpcAddInvoiceResponse> {
        const result = this.api.addInvoice(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `bakemacaroon` BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
     * @param body 
     */
    public bakeMacaroon(body: LnrpcBakeMacaroonRequest, _options?: Configuration): Promise<LnrpcBakeMacaroonResponse> {
        const result = this.api.bakeMacaroon(body, _options);
        return result.toPromise();
    }

    /**
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
     * @param body  (streaming inputs)
     */
    public channelAcceptor(body: LnrpcChannelAcceptResponse, _options?: Configuration): Promise<StreamResultOfLnrpcChannelAcceptRequest> {
        const result = this.api.channelAcceptor(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `channelbalance` ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
     */
    public channelBalance(_options?: Configuration): Promise<LnrpcChannelBalanceResponse> {
        const result = this.api.channelBalance(_options);
        return result.toPromise();
    }

    /**
     * lncli: `closechannel` CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.
     * @param channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param channelPointOutputIndex The index of the output of the funding transaction
     * @param channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @param force If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast.
     * @param targetConf The target number of blocks that the closure transaction should be confirmed by.
     * @param satPerByte Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @param deliveryAddress An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss.
     * @param satPerVbyte A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     */
    public closeChannel(channelPointFundingTxidStr: string, channelPointOutputIndex: number, channelPointFundingTxidBytes?: string, force?: boolean, targetConf?: number, satPerByte?: string, deliveryAddress?: string, satPerVbyte?: string, _options?: Configuration): Promise<StreamResultOfLnrpcCloseStatusUpdate> {
        const result = this.api.closeChannel(channelPointFundingTxidStr, channelPointOutputIndex, channelPointFundingTxidBytes, force, targetConf, satPerByte, deliveryAddress, satPerVbyte, _options);
        return result.toPromise();
    }

    /**
     * lncli: `closedchannels` ClosedChannels returns a description of all the closed channels that this node was a participant in.
     * @param cooperative 
     * @param localForce 
     * @param remoteForce 
     * @param breach 
     * @param fundingCanceled 
     * @param abandoned 
     */
    public closedChannels(cooperative?: boolean, localForce?: boolean, remoteForce?: boolean, breach?: boolean, fundingCanceled?: boolean, abandoned?: boolean, _options?: Configuration): Promise<LnrpcClosedChannelsResponse> {
        const result = this.api.closedChannels(cooperative, localForce, remoteForce, breach, fundingCanceled, abandoned, _options);
        return result.toPromise();
    }

    /**
     * lncli: `connect` ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
     * @param body 
     */
    public connectPeer(body: LnrpcConnectPeerRequest, _options?: Configuration): Promise<any> {
        const result = this.api.connectPeer(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `debuglevel` DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
     * @param body 
     */
    public debugLevel(body: LnrpcDebugLevelRequest, _options?: Configuration): Promise<LnrpcDebugLevelResponse> {
        const result = this.api.debugLevel(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `decodepayreq` DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
     * @param payReq The payment request string to be decoded
     */
    public decodePayReq(payReq: string, _options?: Configuration): Promise<LnrpcPayReq> {
        const result = this.api.decodePayReq(payReq, _options);
        return result.toPromise();
    }

    /**
     * DeleteAllPayments deletes all outgoing payments from DB.
     * @param failedPaymentsOnly Only delete failed payments.
     * @param failedHtlcsOnly Only delete failed HTLCs from payments, not the payment itself.
     */
    public deleteAllPayments(failedPaymentsOnly?: boolean, failedHtlcsOnly?: boolean, _options?: Configuration): Promise<any> {
        const result = this.api.deleteAllPayments(failedPaymentsOnly, failedHtlcsOnly, _options);
        return result.toPromise();
    }

    /**
     * lncli: `deletemacaroonid` DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
     * @param rootKeyId The root key ID to be removed.
     */
    public deleteMacaroonID(rootKeyId: string, _options?: Configuration): Promise<LnrpcDeleteMacaroonIDResponse> {
        const result = this.api.deleteMacaroonID(rootKeyId, _options);
        return result.toPromise();
    }

    /**
     * lncli: `describegraph` DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
     * @param includeUnannounced Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network.
     */
    public describeGraph(includeUnannounced?: boolean, _options?: Configuration): Promise<LnrpcChannelGraph> {
        const result = this.api.describeGraph(includeUnannounced, _options);
        return result.toPromise();
    }

    /**
     * lncli: `disconnect` DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
     * @param pubKey The pubkey of the node to disconnect from
     */
    public disconnectPeer(pubKey: string, _options?: Configuration): Promise<any> {
        const result = this.api.disconnectPeer(pubKey, _options);
        return result.toPromise();
    }

    /**
     * When using REST, the `AddrToAmount` map type can be set by appending `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * lncli: `estimatefee` EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
     * @param targetConf The target number of blocks that this transaction should be confirmed by.
     * @param minConfs The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
     * @param spendUnconfirmed Whether unconfirmed outputs should be used as inputs for the transaction.
     */
    public estimateFee(targetConf?: number, minConfs?: number, spendUnconfirmed?: boolean, _options?: Configuration): Promise<LnrpcEstimateFeeResponse> {
        const result = this.api.estimateFee(targetConf, minConfs, spendUnconfirmed, _options);
        return result.toPromise();
    }

    /**
     * ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
     */
    public exportAllChannelBackups(_options?: Configuration): Promise<LnrpcChanBackupSnapshot> {
        const result = this.api.exportAllChannelBackups(_options);
        return result.toPromise();
    }

    /**
     * lncli: `exportchanbackup` ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
     * @param chanPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param chanPointOutputIndex The index of the output of the funding transaction
     * @param chanPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     */
    public exportChannelBackup(chanPointFundingTxidStr: string, chanPointOutputIndex: number, chanPointFundingTxidBytes?: string, _options?: Configuration): Promise<LnrpcChannelBackup> {
        const result = this.api.exportChannelBackup(chanPointFundingTxidStr, chanPointOutputIndex, chanPointFundingTxidBytes, _options);
        return result.toPromise();
    }

    /**
     * lncli: `feereport` FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
     */
    public feeReport(_options?: Configuration): Promise<LnrpcFeeReportResponse> {
        const result = this.api.feeReport(_options);
        return result.toPromise();
    }

    /**
     * A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.
     * lncli: `fwdinghistory` ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
     * @param body 
     */
    public forwardingHistory(body: LnrpcForwardingHistoryRequest, _options?: Configuration): Promise<LnrpcForwardingHistoryResponse> {
        const result = this.api.forwardingHistory(body, _options);
        return result.toPromise();
    }

    /**
     * FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we're expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
     * @param body 
     */
    public fundingStateStep(body: LnrpcFundingTransitionMsg, _options?: Configuration): Promise<any> {
        const result = this.api.fundingStateStep(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `getchaninfo` GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction's funding output within the blockchain.
     * @param chanId The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
     */
    public getChanInfo(chanId: string, _options?: Configuration): Promise<LnrpcChannelEdge> {
        const result = this.api.getChanInfo(chanId, _options);
        return result.toPromise();
    }

    /**
     * lncli: `getinfo` GetInfo returns general information concerning the lightning node including it's identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
     */
    public getInfo(_options?: Configuration): Promise<LnrpcGetInfoResponse> {
        const result = this.api.getInfo(_options);
        return result.toPromise();
    }

    /**
     * lncli: `getnetworkinfo` GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
     */
    public getNetworkInfo(_options?: Configuration): Promise<LnrpcNetworkInfo> {
        const result = this.api.getNetworkInfo(_options);
        return result.toPromise();
    }

    /**
     * lncli: `getnodeinfo` GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
     * @param pubKey The 33-byte hex-encoded compressed public of the target node
     * @param includeChannels If true, will include all known channels associated with the node.
     */
    public getNodeInfo(pubKey: string, includeChannels?: boolean, _options?: Configuration): Promise<LnrpcNodeInfo> {
        const result = this.api.getNodeInfo(pubKey, includeChannels, _options);
        return result.toPromise();
    }

    /**
     * lncli: `getnodemetrics` GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
     * @param types The requested node metrics.
     */
    public getNodeMetrics(types?: Array<'UNKNOWN' | 'BETWEENNESS_CENTRALITY'>, _options?: Configuration): Promise<LnrpcNodeMetricsResponse> {
        const result = this.api.getNodeMetrics(types, _options);
        return result.toPromise();
    }

    /**
     * * lncli: `getrecoveryinfo` GetRecoveryInfo returns information concerning the recovery mode including whether it's in a recovery mode, whether the recovery is finished, and the progress made so far.
     */
    public getRecoveryInfo(_options?: Configuration): Promise<LnrpcGetRecoveryInfoResponse> {
        const result = this.api.getRecoveryInfo(_options);
        return result.toPromise();
    }

    /**
     * lncli: `listchaintxns` GetTransactions returns a list describing all the known transactions relevant to the wallet.
     * @param startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param account An optional filter to only include transactions relevant to an account.
     */
    public getTransactions(startHeight?: number, endHeight?: number, account?: string, _options?: Configuration): Promise<LnrpcTransactionDetails> {
        const result = this.api.getTransactions(startHeight, endHeight, account, _options);
        return result.toPromise();
    }

    /**
     * lncli: `listchannels` ListChannels returns a description of all the open channels that this node is a participant in.
     * @param activeOnly 
     * @param inactiveOnly 
     * @param publicOnly 
     * @param privateOnly 
     * @param peer Filters the response for channels with a target peer&#39;s pubkey. If peer is empty, all channels will be returned.
     */
    public listChannels(activeOnly?: boolean, inactiveOnly?: boolean, publicOnly?: boolean, privateOnly?: boolean, peer?: string, _options?: Configuration): Promise<LnrpcListChannelsResponse> {
        const result = this.api.listChannels(activeOnly, inactiveOnly, publicOnly, privateOnly, peer, _options);
        return result.toPromise();
    }

    /**
     * lncli: `listinvoices` ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
     * @param pendingOnly If set, only invoices that are not settled and not canceled will be returned in the response.
     * @param indexOffset The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response.
     * @param numMaxInvoices The max number of invoices to return in the response to this query.
     * @param reversed If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards.
     */
    public listInvoices(pendingOnly?: boolean, indexOffset?: string, numMaxInvoices?: string, reversed?: boolean, _options?: Configuration): Promise<LnrpcListInvoiceResponse> {
        const result = this.api.listInvoices(pendingOnly, indexOffset, numMaxInvoices, reversed, _options);
        return result.toPromise();
    }

    /**
     * lncli: `listmacaroonids` ListMacaroonIDs returns all root key IDs that are in use.
     */
    public listMacaroonIDs(_options?: Configuration): Promise<LnrpcListMacaroonIDsResponse> {
        const result = this.api.listMacaroonIDs(_options);
        return result.toPromise();
    }

    /**
     * lncli: `listpayments` ListPayments returns a list of all outgoing payments.
     * @param includeIncomplete If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn&#39;t change the meaning of the indices, which are tied to individual payments.
     * @param indexOffset The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards.
     * @param maxPayments The maximal number of payments returned in the response to this query.
     * @param reversed If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order).
     */
    public listPayments(includeIncomplete?: boolean, indexOffset?: string, maxPayments?: string, reversed?: boolean, _options?: Configuration): Promise<LnrpcListPaymentsResponse> {
        const result = this.api.listPayments(includeIncomplete, indexOffset, maxPayments, reversed, _options);
        return result.toPromise();
    }

    /**
     * lncli: `listpeers` ListPeers returns a verbose listing of all currently active peers.
     * @param latestError If true, only the last error that our peer sent us will be returned with the peer&#39;s information, rather than the full set of historic errors we have stored.
     */
    public listPeers(latestError?: boolean, _options?: Configuration): Promise<LnrpcListPeersResponse> {
        const result = this.api.listPeers(latestError, _options);
        return result.toPromise();
    }

    /**
     * lncli: `listpermissions` ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
     */
    public listPermissions(_options?: Configuration): Promise<LnrpcListPermissionsResponse> {
        const result = this.api.listPermissions(_options);
        return result.toPromise();
    }

    /**
     * ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.
     * lncli: `listunspent` Deprecated, use walletrpc.ListUnspent instead.
     * @param minConfs The minimum number of confirmations to be included.
     * @param maxConfs The maximum number of confirmations to be included.
     * @param account An optional filter to only include outputs belonging to an account.
     */
    public listUnspent(minConfs?: number, maxConfs?: number, account?: string, _options?: Configuration): Promise<LnrpcListUnspentResponse> {
        const result = this.api.listUnspent(minConfs, maxConfs, account, _options);
        return result.toPromise();
    }

    /**
     * lncli: `lookupinvoice` LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
     * @param rHashStr The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
     * @param rHash The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64.
     */
    public lookupInvoice(rHashStr: string, rHash?: string, _options?: Configuration): Promise<LnrpcInvoice> {
        const result = this.api.lookupInvoice(rHashStr, rHash, _options);
        return result.toPromise();
    }

    /**
     * lncli: `newaddress` NewAddress creates a new address under control of the local wallet.
     * @param type The type of address to generate.
     * @param account The name of the account to generate a new address for. If empty, the default wallet account is used.
     */
    public newAddress(type?: 'WITNESS_PUBKEY_HASH' | 'NESTED_PUBKEY_HASH' | 'UNUSED_WITNESS_PUBKEY_HASH' | 'UNUSED_NESTED_PUBKEY_HASH', account?: string, _options?: Configuration): Promise<LnrpcNewAddressResponse> {
        const result = this.api.newAddress(type, account, _options);
        return result.toPromise();
    }

    /**
     * lncli: `openchannel` OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
     * @param body 
     */
    public openChannel(body: LnrpcOpenChannelRequest, _options?: Configuration): Promise<StreamResultOfLnrpcOpenStatusUpdate> {
        const result = this.api.openChannel(body, _options);
        return result.toPromise();
    }

    /**
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
     * @param body 
     */
    public openChannelSync(body: LnrpcOpenChannelRequest, _options?: Configuration): Promise<LnrpcChannelPoint> {
        const result = this.api.openChannelSync(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `pendingchannels` PendingChannels returns a list of all the channels that are currently considered \"pending\". A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
     */
    public pendingChannels(_options?: Configuration): Promise<LnrpcPendingChannelsResponse> {
        const result = this.api.pendingChannels(_options);
        return result.toPromise();
    }

    /**
     * When using REST, the `dest_custom_records` map type can be set by appending `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * lncli: `queryroutes` QueryRoutes attempts to query the daemon's Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.
     * @param pubKey The 33-byte hex-encoded public key for the payment destination
     * @param amt The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
     * @param amtMsat The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive.
     * @param finalCltvDelta An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight.
     * @param feeLimitFixed The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @param feeLimitFixedMsat The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @param feeLimitPercent The fee limit expressed as a percentage of the payment amount.
     * @param ignoredNodes A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64.
     * @param sourcePubKey The source node where the request route should originated from. If empty, self is assumed.
     * @param useMissionControl If set to true, edge probabilities from mission control will be used to get the optimal route.
     * @param cltvLimit An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd&#39;s &#x60;--max-cltv-expiry&#x60; setting. If zero, then the value of &#x60;--max-cltv-expiry&#x60; is used as the limit.
     * @param outgoingChanId The channel id of the channel that must be taken to the first hop. If zero, any channel may be used.
     * @param lastHopPubkey The pubkey of the last hop of the route. If empty, any hop may be used.
     * @param destFeatures Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback.
     */
    public queryRoutes(pubKey: string, amt: string, amtMsat?: string, finalCltvDelta?: number, feeLimitFixed?: string, feeLimitFixedMsat?: string, feeLimitPercent?: string, ignoredNodes?: Array<string>, sourcePubKey?: string, useMissionControl?: boolean, cltvLimit?: number, outgoingChanId?: string, lastHopPubkey?: string, destFeatures?: Array<'DATALOSS_PROTECT_REQ' | 'DATALOSS_PROTECT_OPT' | 'INITIAL_ROUING_SYNC' | 'UPFRONT_SHUTDOWN_SCRIPT_REQ' | 'UPFRONT_SHUTDOWN_SCRIPT_OPT' | 'GOSSIP_QUERIES_REQ' | 'GOSSIP_QUERIES_OPT' | 'TLV_ONION_REQ' | 'TLV_ONION_OPT' | 'EXT_GOSSIP_QUERIES_REQ' | 'EXT_GOSSIP_QUERIES_OPT' | 'STATIC_REMOTE_KEY_REQ' | 'STATIC_REMOTE_KEY_OPT' | 'PAYMENT_ADDR_REQ' | 'PAYMENT_ADDR_OPT' | 'MPP_REQ' | 'MPP_OPT' | 'WUMBO_CHANNELS_REQ' | 'WUMBO_CHANNELS_OPT' | 'ANCHORS_REQ' | 'ANCHORS_OPT' | 'ANCHORS_ZERO_FEE_HTLC_REQ' | 'ANCHORS_ZERO_FEE_HTLC_OPT' | 'AMP_REQ' | 'AMP_OPT'>, _options?: Configuration): Promise<LnrpcQueryRoutesResponse> {
        const result = this.api.queryRoutes(pubKey, amt, amtMsat, finalCltvDelta, feeLimitFixed, feeLimitFixedMsat, feeLimitPercent, ignoredNodes, sourcePubKey, useMissionControl, cltvLimit, outgoingChanId, lastHopPubkey, destFeatures, _options);
        return result.toPromise();
    }

    /**
     * lncli: `restorechanbackup` RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
     * @param body 
     */
    public restoreChannelBackups(body: LnrpcRestoreChanBackupRequest, _options?: Configuration): Promise<any> {
        const result = this.api.restoreChannelBackups(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `sendcoins` SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param body 
     */
    public sendCoins(body: LnrpcSendCoinsRequest, _options?: Configuration): Promise<LnrpcSendCoinsResponse> {
        const result = this.api.sendCoins(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `sendmany` SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param body 
     */
    public sendMany(body: LnrpcSendManyRequest, _options?: Configuration): Promise<LnrpcSendManyResponse> {
        const result = this.api.sendMany(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `sendpayment` Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
     * @param body  (streaming inputs)
     */
    public sendPayment(body: LnrpcSendRequest, _options?: Configuration): Promise<StreamResultOfLnrpcSendResponse> {
        const result = this.api.sendPayment(body, _options);
        return result.toPromise();
    }

    /**
     * SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination's public key and the payment hash (if any) to be encoded as hex strings.
     * @param body 
     */
    public sendPaymentSync(body: LnrpcSendRequest, _options?: Configuration): Promise<LnrpcSendResponse> {
        const result = this.api.sendPaymentSync(body, _options);
        return result.toPromise();
    }

    /**
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
     * @param body 
     */
    public sendToRouteSync(body: LnrpcSendToRouteRequest, _options?: Configuration): Promise<LnrpcSendResponse> {
        const result = this.api.sendToRouteSync(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `signmessage` SignMessage signs a message with this node's private key. The returned signature string is `zbase32` encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
     * @param body 
     */
    public signMessage(body: LnrpcSignMessageRequest, _options?: Configuration): Promise<LnrpcSignMessageResponse> {
        const result = this.api.signMessage(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `stop` StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
     * @param body 
     */
    public stopDaemon(body: any, _options?: Configuration): Promise<any> {
        const result = this.api.stopDaemon(body, _options);
        return result.toPromise();
    }

    /**
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
     */
    public subscribeChannelBackups(_options?: Configuration): Promise<StreamResultOfLnrpcChanBackupSnapshot> {
        const result = this.api.subscribeChannelBackups(_options);
        return result.toPromise();
    }

    /**
     * SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
     */
    public subscribeChannelEvents(_options?: Configuration): Promise<StreamResultOfLnrpcChannelEventUpdate> {
        const result = this.api.subscribeChannelEvents(_options);
        return result.toPromise();
    }

    /**
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
     */
    public subscribeChannelGraph(_options?: Configuration): Promise<StreamResultOfLnrpcGraphTopologyUpdate> {
        const result = this.api.subscribeChannelGraph(_options);
        return result.toPromise();
    }

    /**
     * SubscribeInvoices returns a uni-directional stream (server -> client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we'll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we'll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we'll only send out the latest add/settle events.
     * @param addIndex If specified (non-zero), then we&#39;ll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC.
     * @param settleIndex If specified (non-zero), then we&#39;ll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC.
     */
    public subscribeInvoices(addIndex?: string, settleIndex?: string, _options?: Configuration): Promise<StreamResultOfLnrpcInvoice> {
        const result = this.api.subscribeInvoices(addIndex, settleIndex, _options);
        return result.toPromise();
    }

    /**
     * SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
     */
    public subscribePeerEvents(_options?: Configuration): Promise<StreamResultOfLnrpcPeerEvent> {
        const result = this.api.subscribePeerEvents(_options);
        return result.toPromise();
    }

    /**
     * SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
     * @param startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param account An optional filter to only include transactions relevant to an account.
     */
    public subscribeTransactions(startHeight?: number, endHeight?: number, account?: string, _options?: Configuration): Promise<StreamResultOfLnrpcTransaction> {
        const result = this.api.subscribeTransactions(startHeight, endHeight, account, _options);
        return result.toPromise();
    }

    /**
     * lncli: `updatechanpolicy` UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
     * @param body 
     */
    public updateChannelPolicy(body: LnrpcPolicyUpdateRequest, _options?: Configuration): Promise<any> {
        const result = this.api.updateChannelPolicy(body, _options);
        return result.toPromise();
    }

    /**
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
     * @param body 
     */
    public verifyChanBackup(body: LnrpcChanBackupSnapshot, _options?: Configuration): Promise<any> {
        const result = this.api.verifyChanBackup(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `verifymessage` VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node's channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
     * @param body 
     */
    public verifyMessage(body: LnrpcVerifyMessageRequest, _options?: Configuration): Promise<LnrpcVerifyMessageResponse> {
        const result = this.api.verifyMessage(body, _options);
        return result.toPromise();
    }

    /**
     * lncli: `walletbalance` WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.
     */
    public walletBalance(_options?: Configuration): Promise<LnrpcWalletBalanceResponse> {
        const result = this.api.walletBalance(_options);
        return result.toPromise();
    }


}



