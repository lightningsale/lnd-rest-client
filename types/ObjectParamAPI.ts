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

import { ObservableLightningApi } from "./ObservableAPI";
import { LightningApiRequestFactory, LightningApiResponseProcessor} from "../apis/LightningApi";

export interface LightningApiAbandonChannelRequest {
    /**
     * Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @type string
     * @memberof LightningApiabandonChannel
     */
    channelPointFundingTxidStr: string
    /**
     * The index of the output of the funding transaction
     * @type number
     * @memberof LightningApiabandonChannel
     */
    channelPointOutputIndex: number
    /**
     * Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @type string
     * @memberof LightningApiabandonChannel
     */
    channelPointFundingTxidBytes?: string
    /**
     * 
     * @type boolean
     * @memberof LightningApiabandonChannel
     */
    pendingFundingShimOnly?: boolean
    /**
     * Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
     * @type boolean
     * @memberof LightningApiabandonChannel
     */
    iKnowWhatIAmDoing?: boolean
}

export interface LightningApiAddInvoiceRequest {
    /**
     * 
     * @type LnrpcInvoice
     * @memberof LightningApiaddInvoice
     */
    body: LnrpcInvoice
}

export interface LightningApiBakeMacaroonRequest {
    /**
     * 
     * @type LnrpcBakeMacaroonRequest
     * @memberof LightningApibakeMacaroon
     */
    body: LnrpcBakeMacaroonRequest
}

export interface LightningApiChannelAcceptorRequest {
    /**
     *  (streaming inputs)
     * @type LnrpcChannelAcceptResponse
     * @memberof LightningApichannelAcceptor
     */
    body: LnrpcChannelAcceptResponse
}

export interface LightningApiChannelBalanceRequest {
}

export interface LightningApiCloseChannelRequest {
    /**
     * Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @type string
     * @memberof LightningApicloseChannel
     */
    channelPointFundingTxidStr: string
    /**
     * The index of the output of the funding transaction
     * @type number
     * @memberof LightningApicloseChannel
     */
    channelPointOutputIndex: number
    /**
     * Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @type string
     * @memberof LightningApicloseChannel
     */
    channelPointFundingTxidBytes?: string
    /**
     * If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast.
     * @type boolean
     * @memberof LightningApicloseChannel
     */
    force?: boolean
    /**
     * The target number of blocks that the closure transaction should be confirmed by.
     * @type number
     * @memberof LightningApicloseChannel
     */
    targetConf?: number
    /**
     * Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @type string
     * @memberof LightningApicloseChannel
     */
    satPerByte?: string
    /**
     * An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss.
     * @type string
     * @memberof LightningApicloseChannel
     */
    deliveryAddress?: string
    /**
     * A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @type string
     * @memberof LightningApicloseChannel
     */
    satPerVbyte?: string
}

export interface LightningApiClosedChannelsRequest {
    /**
     * 
     * @type boolean
     * @memberof LightningApiclosedChannels
     */
    cooperative?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApiclosedChannels
     */
    localForce?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApiclosedChannels
     */
    remoteForce?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApiclosedChannels
     */
    breach?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApiclosedChannels
     */
    fundingCanceled?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApiclosedChannels
     */
    abandoned?: boolean
}

export interface LightningApiConnectPeerRequest {
    /**
     * 
     * @type LnrpcConnectPeerRequest
     * @memberof LightningApiconnectPeer
     */
    body: LnrpcConnectPeerRequest
}

export interface LightningApiDebugLevelRequest {
    /**
     * 
     * @type LnrpcDebugLevelRequest
     * @memberof LightningApidebugLevel
     */
    body: LnrpcDebugLevelRequest
}

export interface LightningApiDecodePayReqRequest {
    /**
     * The payment request string to be decoded
     * @type string
     * @memberof LightningApidecodePayReq
     */
    payReq: string
}

export interface LightningApiDeleteAllPaymentsRequest {
    /**
     * Only delete failed payments.
     * @type boolean
     * @memberof LightningApideleteAllPayments
     */
    failedPaymentsOnly?: boolean
    /**
     * Only delete failed HTLCs from payments, not the payment itself.
     * @type boolean
     * @memberof LightningApideleteAllPayments
     */
    failedHtlcsOnly?: boolean
}

export interface LightningApiDeleteMacaroonIDRequest {
    /**
     * The root key ID to be removed.
     * @type string
     * @memberof LightningApideleteMacaroonID
     */
    rootKeyId: string
}

export interface LightningApiDescribeGraphRequest {
    /**
     * Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network.
     * @type boolean
     * @memberof LightningApidescribeGraph
     */
    includeUnannounced?: boolean
}

export interface LightningApiDisconnectPeerRequest {
    /**
     * The pubkey of the node to disconnect from
     * @type string
     * @memberof LightningApidisconnectPeer
     */
    pubKey: string
}

export interface LightningApiEstimateFeeRequest {
    /**
     * The target number of blocks that this transaction should be confirmed by.
     * @type number
     * @memberof LightningApiestimateFee
     */
    targetConf?: number
    /**
     * The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
     * @type number
     * @memberof LightningApiestimateFee
     */
    minConfs?: number
    /**
     * Whether unconfirmed outputs should be used as inputs for the transaction.
     * @type boolean
     * @memberof LightningApiestimateFee
     */
    spendUnconfirmed?: boolean
}

export interface LightningApiExportAllChannelBackupsRequest {
}

export interface LightningApiExportChannelBackupRequest {
    /**
     * Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @type string
     * @memberof LightningApiexportChannelBackup
     */
    chanPointFundingTxidStr: string
    /**
     * The index of the output of the funding transaction
     * @type number
     * @memberof LightningApiexportChannelBackup
     */
    chanPointOutputIndex: number
    /**
     * Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @type string
     * @memberof LightningApiexportChannelBackup
     */
    chanPointFundingTxidBytes?: string
}

export interface LightningApiFeeReportRequest {
}

export interface LightningApiForwardingHistoryRequest {
    /**
     * 
     * @type LnrpcForwardingHistoryRequest
     * @memberof LightningApiforwardingHistory
     */
    body: LnrpcForwardingHistoryRequest
}

export interface LightningApiFundingStateStepRequest {
    /**
     * 
     * @type LnrpcFundingTransitionMsg
     * @memberof LightningApifundingStateStep
     */
    body: LnrpcFundingTransitionMsg
}

export interface LightningApiGetChanInfoRequest {
    /**
     * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
     * @type string
     * @memberof LightningApigetChanInfo
     */
    chanId: string
}

export interface LightningApiGetInfoRequest {
}

export interface LightningApiGetNetworkInfoRequest {
}

export interface LightningApiGetNodeInfoRequest {
    /**
     * The 33-byte hex-encoded compressed public of the target node
     * @type string
     * @memberof LightningApigetNodeInfo
     */
    pubKey: string
    /**
     * If true, will include all known channels associated with the node.
     * @type boolean
     * @memberof LightningApigetNodeInfo
     */
    includeChannels?: boolean
}

export interface LightningApiGetNodeMetricsRequest {
    /**
     * The requested node metrics.
     * @type Array&lt;&#39;UNKNOWN&#39; | &#39;BETWEENNESS_CENTRALITY&#39;&gt;
     * @memberof LightningApigetNodeMetrics
     */
    types?: Array<'UNKNOWN' | 'BETWEENNESS_CENTRALITY'>
}

export interface LightningApiGetRecoveryInfoRequest {
}

export interface LightningApiGetTransactionsRequest {
    /**
     * The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @type number
     * @memberof LightningApigetTransactions
     */
    startHeight?: number
    /**
     * The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @type number
     * @memberof LightningApigetTransactions
     */
    endHeight?: number
    /**
     * An optional filter to only include transactions relevant to an account.
     * @type string
     * @memberof LightningApigetTransactions
     */
    account?: string
}

export interface LightningApiListChannelsRequest {
    /**
     * 
     * @type boolean
     * @memberof LightningApilistChannels
     */
    activeOnly?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApilistChannels
     */
    inactiveOnly?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApilistChannels
     */
    publicOnly?: boolean
    /**
     * 
     * @type boolean
     * @memberof LightningApilistChannels
     */
    privateOnly?: boolean
    /**
     * Filters the response for channels with a target peer&#39;s pubkey. If peer is empty, all channels will be returned.
     * @type string
     * @memberof LightningApilistChannels
     */
    peer?: string
}

export interface LightningApiListInvoicesRequest {
    /**
     * If set, only invoices that are not settled and not canceled will be returned in the response.
     * @type boolean
     * @memberof LightningApilistInvoices
     */
    pendingOnly?: boolean
    /**
     * The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response.
     * @type string
     * @memberof LightningApilistInvoices
     */
    indexOffset?: string
    /**
     * The max number of invoices to return in the response to this query.
     * @type string
     * @memberof LightningApilistInvoices
     */
    numMaxInvoices?: string
    /**
     * If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards.
     * @type boolean
     * @memberof LightningApilistInvoices
     */
    reversed?: boolean
}

export interface LightningApiListMacaroonIDsRequest {
}

export interface LightningApiListPaymentsRequest {
    /**
     * If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn&#39;t change the meaning of the indices, which are tied to individual payments.
     * @type boolean
     * @memberof LightningApilistPayments
     */
    includeIncomplete?: boolean
    /**
     * The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards.
     * @type string
     * @memberof LightningApilistPayments
     */
    indexOffset?: string
    /**
     * The maximal number of payments returned in the response to this query.
     * @type string
     * @memberof LightningApilistPayments
     */
    maxPayments?: string
    /**
     * If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order).
     * @type boolean
     * @memberof LightningApilistPayments
     */
    reversed?: boolean
}

export interface LightningApiListPeersRequest {
    /**
     * If true, only the last error that our peer sent us will be returned with the peer&#39;s information, rather than the full set of historic errors we have stored.
     * @type boolean
     * @memberof LightningApilistPeers
     */
    latestError?: boolean
}

export interface LightningApiListPermissionsRequest {
}

export interface LightningApiListUnspentRequest {
    /**
     * The minimum number of confirmations to be included.
     * @type number
     * @memberof LightningApilistUnspent
     */
    minConfs?: number
    /**
     * The maximum number of confirmations to be included.
     * @type number
     * @memberof LightningApilistUnspent
     */
    maxConfs?: number
    /**
     * An optional filter to only include outputs belonging to an account.
     * @type string
     * @memberof LightningApilistUnspent
     */
    account?: string
}

export interface LightningApiLookupInvoiceRequest {
    /**
     * The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
     * @type string
     * @memberof LightningApilookupInvoice
     */
    rHashStr: string
    /**
     * The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64.
     * @type string
     * @memberof LightningApilookupInvoice
     */
    rHash?: string
}

export interface LightningApiNewAddressRequest {
    /**
     * The type of address to generate.
     * @type &#39;WITNESS_PUBKEY_HASH&#39; | &#39;NESTED_PUBKEY_HASH&#39; | &#39;UNUSED_WITNESS_PUBKEY_HASH&#39; | &#39;UNUSED_NESTED_PUBKEY_HASH&#39;
     * @memberof LightningApinewAddress
     */
    type?: 'WITNESS_PUBKEY_HASH' | 'NESTED_PUBKEY_HASH' | 'UNUSED_WITNESS_PUBKEY_HASH' | 'UNUSED_NESTED_PUBKEY_HASH'
    /**
     * The name of the account to generate a new address for. If empty, the default wallet account is used.
     * @type string
     * @memberof LightningApinewAddress
     */
    account?: string
}

export interface LightningApiOpenChannelRequest {
    /**
     * 
     * @type LnrpcOpenChannelRequest
     * @memberof LightningApiopenChannel
     */
    body: LnrpcOpenChannelRequest
}

export interface LightningApiOpenChannelSyncRequest {
    /**
     * 
     * @type LnrpcOpenChannelRequest
     * @memberof LightningApiopenChannelSync
     */
    body: LnrpcOpenChannelRequest
}

export interface LightningApiPendingChannelsRequest {
}

export interface LightningApiQueryRoutesRequest {
    /**
     * The 33-byte hex-encoded public key for the payment destination
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    pubKey: string
    /**
     * The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    amt: string
    /**
     * The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    amtMsat?: string
    /**
     * An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight.
     * @type number
     * @memberof LightningApiqueryRoutes
     */
    finalCltvDelta?: number
    /**
     * The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    feeLimitFixed?: string
    /**
     * The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    feeLimitFixedMsat?: string
    /**
     * The fee limit expressed as a percentage of the payment amount.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    feeLimitPercent?: string
    /**
     * A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64.
     * @type Array&lt;string&gt;
     * @memberof LightningApiqueryRoutes
     */
    ignoredNodes?: Array<string>
    /**
     * The source node where the request route should originated from. If empty, self is assumed.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    sourcePubKey?: string
    /**
     * If set to true, edge probabilities from mission control will be used to get the optimal route.
     * @type boolean
     * @memberof LightningApiqueryRoutes
     */
    useMissionControl?: boolean
    /**
     * An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd&#39;s &#x60;--max-cltv-expiry&#x60; setting. If zero, then the value of &#x60;--max-cltv-expiry&#x60; is used as the limit.
     * @type number
     * @memberof LightningApiqueryRoutes
     */
    cltvLimit?: number
    /**
     * The channel id of the channel that must be taken to the first hop. If zero, any channel may be used.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    outgoingChanId?: string
    /**
     * The pubkey of the last hop of the route. If empty, any hop may be used.
     * @type string
     * @memberof LightningApiqueryRoutes
     */
    lastHopPubkey?: string
    /**
     * Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback.
     * @type Array&lt;&#39;DATALOSS_PROTECT_REQ&#39; | &#39;DATALOSS_PROTECT_OPT&#39; | &#39;INITIAL_ROUING_SYNC&#39; | &#39;UPFRONT_SHUTDOWN_SCRIPT_REQ&#39; | &#39;UPFRONT_SHUTDOWN_SCRIPT_OPT&#39; | &#39;GOSSIP_QUERIES_REQ&#39; | &#39;GOSSIP_QUERIES_OPT&#39; | &#39;TLV_ONION_REQ&#39; | &#39;TLV_ONION_OPT&#39; | &#39;EXT_GOSSIP_QUERIES_REQ&#39; | &#39;EXT_GOSSIP_QUERIES_OPT&#39; | &#39;STATIC_REMOTE_KEY_REQ&#39; | &#39;STATIC_REMOTE_KEY_OPT&#39; | &#39;PAYMENT_ADDR_REQ&#39; | &#39;PAYMENT_ADDR_OPT&#39; | &#39;MPP_REQ&#39; | &#39;MPP_OPT&#39; | &#39;WUMBO_CHANNELS_REQ&#39; | &#39;WUMBO_CHANNELS_OPT&#39; | &#39;ANCHORS_REQ&#39; | &#39;ANCHORS_OPT&#39; | &#39;ANCHORS_ZERO_FEE_HTLC_REQ&#39; | &#39;ANCHORS_ZERO_FEE_HTLC_OPT&#39; | &#39;AMP_REQ&#39; | &#39;AMP_OPT&#39;&gt;
     * @memberof LightningApiqueryRoutes
     */
    destFeatures?: Array<'DATALOSS_PROTECT_REQ' | 'DATALOSS_PROTECT_OPT' | 'INITIAL_ROUING_SYNC' | 'UPFRONT_SHUTDOWN_SCRIPT_REQ' | 'UPFRONT_SHUTDOWN_SCRIPT_OPT' | 'GOSSIP_QUERIES_REQ' | 'GOSSIP_QUERIES_OPT' | 'TLV_ONION_REQ' | 'TLV_ONION_OPT' | 'EXT_GOSSIP_QUERIES_REQ' | 'EXT_GOSSIP_QUERIES_OPT' | 'STATIC_REMOTE_KEY_REQ' | 'STATIC_REMOTE_KEY_OPT' | 'PAYMENT_ADDR_REQ' | 'PAYMENT_ADDR_OPT' | 'MPP_REQ' | 'MPP_OPT' | 'WUMBO_CHANNELS_REQ' | 'WUMBO_CHANNELS_OPT' | 'ANCHORS_REQ' | 'ANCHORS_OPT' | 'ANCHORS_ZERO_FEE_HTLC_REQ' | 'ANCHORS_ZERO_FEE_HTLC_OPT' | 'AMP_REQ' | 'AMP_OPT'>
}

export interface LightningApiRestoreChannelBackupsRequest {
    /**
     * 
     * @type LnrpcRestoreChanBackupRequest
     * @memberof LightningApirestoreChannelBackups
     */
    body: LnrpcRestoreChanBackupRequest
}

export interface LightningApiSendCoinsRequest {
    /**
     * 
     * @type LnrpcSendCoinsRequest
     * @memberof LightningApisendCoins
     */
    body: LnrpcSendCoinsRequest
}

export interface LightningApiSendManyRequest {
    /**
     * 
     * @type LnrpcSendManyRequest
     * @memberof LightningApisendMany
     */
    body: LnrpcSendManyRequest
}

export interface LightningApiSendPaymentRequest {
    /**
     *  (streaming inputs)
     * @type LnrpcSendRequest
     * @memberof LightningApisendPayment
     */
    body: LnrpcSendRequest
}

export interface LightningApiSendPaymentSyncRequest {
    /**
     * 
     * @type LnrpcSendRequest
     * @memberof LightningApisendPaymentSync
     */
    body: LnrpcSendRequest
}

export interface LightningApiSendToRouteSyncRequest {
    /**
     * 
     * @type LnrpcSendToRouteRequest
     * @memberof LightningApisendToRouteSync
     */
    body: LnrpcSendToRouteRequest
}

export interface LightningApiSignMessageRequest {
    /**
     * 
     * @type LnrpcSignMessageRequest
     * @memberof LightningApisignMessage
     */
    body: LnrpcSignMessageRequest
}

export interface LightningApiStopDaemonRequest {
    /**
     * 
     * @type any
     * @memberof LightningApistopDaemon
     */
    body: any
}

export interface LightningApiSubscribeChannelBackupsRequest {
}

export interface LightningApiSubscribeChannelEventsRequest {
}

export interface LightningApiSubscribeChannelGraphRequest {
}

export interface LightningApiSubscribeInvoicesRequest {
    /**
     * If specified (non-zero), then we&#39;ll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC.
     * @type string
     * @memberof LightningApisubscribeInvoices
     */
    addIndex?: string
    /**
     * If specified (non-zero), then we&#39;ll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC.
     * @type string
     * @memberof LightningApisubscribeInvoices
     */
    settleIndex?: string
}

export interface LightningApiSubscribePeerEventsRequest {
}

export interface LightningApiSubscribeTransactionsRequest {
    /**
     * The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @type number
     * @memberof LightningApisubscribeTransactions
     */
    startHeight?: number
    /**
     * The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @type number
     * @memberof LightningApisubscribeTransactions
     */
    endHeight?: number
    /**
     * An optional filter to only include transactions relevant to an account.
     * @type string
     * @memberof LightningApisubscribeTransactions
     */
    account?: string
}

export interface LightningApiUpdateChannelPolicyRequest {
    /**
     * 
     * @type LnrpcPolicyUpdateRequest
     * @memberof LightningApiupdateChannelPolicy
     */
    body: LnrpcPolicyUpdateRequest
}

export interface LightningApiVerifyChanBackupRequest {
    /**
     * 
     * @type LnrpcChanBackupSnapshot
     * @memberof LightningApiverifyChanBackup
     */
    body: LnrpcChanBackupSnapshot
}

export interface LightningApiVerifyMessageRequest {
    /**
     * 
     * @type LnrpcVerifyMessageRequest
     * @memberof LightningApiverifyMessage
     */
    body: LnrpcVerifyMessageRequest
}

export interface LightningApiWalletBalanceRequest {
}

export class ObjectLightningApi {
    private api: ObservableLightningApi

    public constructor(configuration: Configuration, requestFactory?: LightningApiRequestFactory, responseProcessor?: LightningApiResponseProcessor) {
        this.api = new ObservableLightningApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * lncli: `abandonchannel` AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
     * @param param the request object
     */
    public abandonChannel(param: LightningApiAbandonChannelRequest, options?: Configuration): Promise<any> {
        return this.api.abandonChannel(param.channelPointFundingTxidStr, param.channelPointOutputIndex, param.channelPointFundingTxidBytes, param.pendingFundingShimOnly, param.iKnowWhatIAmDoing,  options).toPromise();
    }

    /**
     * lncli: `addinvoice` AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
     * @param param the request object
     */
    public addInvoice(param: LightningApiAddInvoiceRequest, options?: Configuration): Promise<LnrpcAddInvoiceResponse> {
        return this.api.addInvoice(param.body,  options).toPromise();
    }

    /**
     * lncli: `bakemacaroon` BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
     * @param param the request object
     */
    public bakeMacaroon(param: LightningApiBakeMacaroonRequest, options?: Configuration): Promise<LnrpcBakeMacaroonResponse> {
        return this.api.bakeMacaroon(param.body,  options).toPromise();
    }

    /**
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
     * @param param the request object
     */
    public channelAcceptor(param: LightningApiChannelAcceptorRequest, options?: Configuration): Promise<StreamResultOfLnrpcChannelAcceptRequest> {
        return this.api.channelAcceptor(param.body,  options).toPromise();
    }

    /**
     * lncli: `channelbalance` ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
     * @param param the request object
     */
    public channelBalance(param: LightningApiChannelBalanceRequest, options?: Configuration): Promise<LnrpcChannelBalanceResponse> {
        return this.api.channelBalance( options).toPromise();
    }

    /**
     * lncli: `closechannel` CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.
     * @param param the request object
     */
    public closeChannel(param: LightningApiCloseChannelRequest, options?: Configuration): Promise<StreamResultOfLnrpcCloseStatusUpdate> {
        return this.api.closeChannel(param.channelPointFundingTxidStr, param.channelPointOutputIndex, param.channelPointFundingTxidBytes, param.force, param.targetConf, param.satPerByte, param.deliveryAddress, param.satPerVbyte,  options).toPromise();
    }

    /**
     * lncli: `closedchannels` ClosedChannels returns a description of all the closed channels that this node was a participant in.
     * @param param the request object
     */
    public closedChannels(param: LightningApiClosedChannelsRequest, options?: Configuration): Promise<LnrpcClosedChannelsResponse> {
        return this.api.closedChannels(param.cooperative, param.localForce, param.remoteForce, param.breach, param.fundingCanceled, param.abandoned,  options).toPromise();
    }

    /**
     * lncli: `connect` ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
     * @param param the request object
     */
    public connectPeer(param: LightningApiConnectPeerRequest, options?: Configuration): Promise<any> {
        return this.api.connectPeer(param.body,  options).toPromise();
    }

    /**
     * lncli: `debuglevel` DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
     * @param param the request object
     */
    public debugLevel(param: LightningApiDebugLevelRequest, options?: Configuration): Promise<LnrpcDebugLevelResponse> {
        return this.api.debugLevel(param.body,  options).toPromise();
    }

    /**
     * lncli: `decodepayreq` DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
     * @param param the request object
     */
    public decodePayReq(param: LightningApiDecodePayReqRequest, options?: Configuration): Promise<LnrpcPayReq> {
        return this.api.decodePayReq(param.payReq,  options).toPromise();
    }

    /**
     * DeleteAllPayments deletes all outgoing payments from DB.
     * @param param the request object
     */
    public deleteAllPayments(param: LightningApiDeleteAllPaymentsRequest, options?: Configuration): Promise<any> {
        return this.api.deleteAllPayments(param.failedPaymentsOnly, param.failedHtlcsOnly,  options).toPromise();
    }

    /**
     * lncli: `deletemacaroonid` DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
     * @param param the request object
     */
    public deleteMacaroonID(param: LightningApiDeleteMacaroonIDRequest, options?: Configuration): Promise<LnrpcDeleteMacaroonIDResponse> {
        return this.api.deleteMacaroonID(param.rootKeyId,  options).toPromise();
    }

    /**
     * lncli: `describegraph` DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
     * @param param the request object
     */
    public describeGraph(param: LightningApiDescribeGraphRequest, options?: Configuration): Promise<LnrpcChannelGraph> {
        return this.api.describeGraph(param.includeUnannounced,  options).toPromise();
    }

    /**
     * lncli: `disconnect` DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
     * @param param the request object
     */
    public disconnectPeer(param: LightningApiDisconnectPeerRequest, options?: Configuration): Promise<any> {
        return this.api.disconnectPeer(param.pubKey,  options).toPromise();
    }

    /**
     * When using REST, the `AddrToAmount` map type can be set by appending `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * lncli: `estimatefee` EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
     * @param param the request object
     */
    public estimateFee(param: LightningApiEstimateFeeRequest, options?: Configuration): Promise<LnrpcEstimateFeeResponse> {
        return this.api.estimateFee(param.targetConf, param.minConfs, param.spendUnconfirmed,  options).toPromise();
    }

    /**
     * ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
     * @param param the request object
     */
    public exportAllChannelBackups(param: LightningApiExportAllChannelBackupsRequest, options?: Configuration): Promise<LnrpcChanBackupSnapshot> {
        return this.api.exportAllChannelBackups( options).toPromise();
    }

    /**
     * lncli: `exportchanbackup` ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
     * @param param the request object
     */
    public exportChannelBackup(param: LightningApiExportChannelBackupRequest, options?: Configuration): Promise<LnrpcChannelBackup> {
        return this.api.exportChannelBackup(param.chanPointFundingTxidStr, param.chanPointOutputIndex, param.chanPointFundingTxidBytes,  options).toPromise();
    }

    /**
     * lncli: `feereport` FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
     * @param param the request object
     */
    public feeReport(param: LightningApiFeeReportRequest, options?: Configuration): Promise<LnrpcFeeReportResponse> {
        return this.api.feeReport( options).toPromise();
    }

    /**
     * A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.
     * lncli: `fwdinghistory` ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
     * @param param the request object
     */
    public forwardingHistory(param: LightningApiForwardingHistoryRequest, options?: Configuration): Promise<LnrpcForwardingHistoryResponse> {
        return this.api.forwardingHistory(param.body,  options).toPromise();
    }

    /**
     * FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we're expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
     * @param param the request object
     */
    public fundingStateStep(param: LightningApiFundingStateStepRequest, options?: Configuration): Promise<any> {
        return this.api.fundingStateStep(param.body,  options).toPromise();
    }

    /**
     * lncli: `getchaninfo` GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction's funding output within the blockchain.
     * @param param the request object
     */
    public getChanInfo(param: LightningApiGetChanInfoRequest, options?: Configuration): Promise<LnrpcChannelEdge> {
        return this.api.getChanInfo(param.chanId,  options).toPromise();
    }

    /**
     * lncli: `getinfo` GetInfo returns general information concerning the lightning node including it's identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
     * @param param the request object
     */
    public getInfo(param: LightningApiGetInfoRequest, options?: Configuration): Promise<LnrpcGetInfoResponse> {
        return this.api.getInfo( options).toPromise();
    }

    /**
     * lncli: `getnetworkinfo` GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
     * @param param the request object
     */
    public getNetworkInfo(param: LightningApiGetNetworkInfoRequest, options?: Configuration): Promise<LnrpcNetworkInfo> {
        return this.api.getNetworkInfo( options).toPromise();
    }

    /**
     * lncli: `getnodeinfo` GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
     * @param param the request object
     */
    public getNodeInfo(param: LightningApiGetNodeInfoRequest, options?: Configuration): Promise<LnrpcNodeInfo> {
        return this.api.getNodeInfo(param.pubKey, param.includeChannels,  options).toPromise();
    }

    /**
     * lncli: `getnodemetrics` GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
     * @param param the request object
     */
    public getNodeMetrics(param: LightningApiGetNodeMetricsRequest, options?: Configuration): Promise<LnrpcNodeMetricsResponse> {
        return this.api.getNodeMetrics(param.types,  options).toPromise();
    }

    /**
     * * lncli: `getrecoveryinfo` GetRecoveryInfo returns information concerning the recovery mode including whether it's in a recovery mode, whether the recovery is finished, and the progress made so far.
     * @param param the request object
     */
    public getRecoveryInfo(param: LightningApiGetRecoveryInfoRequest, options?: Configuration): Promise<LnrpcGetRecoveryInfoResponse> {
        return this.api.getRecoveryInfo( options).toPromise();
    }

    /**
     * lncli: `listchaintxns` GetTransactions returns a list describing all the known transactions relevant to the wallet.
     * @param param the request object
     */
    public getTransactions(param: LightningApiGetTransactionsRequest, options?: Configuration): Promise<LnrpcTransactionDetails> {
        return this.api.getTransactions(param.startHeight, param.endHeight, param.account,  options).toPromise();
    }

    /**
     * lncli: `listchannels` ListChannels returns a description of all the open channels that this node is a participant in.
     * @param param the request object
     */
    public listChannels(param: LightningApiListChannelsRequest, options?: Configuration): Promise<LnrpcListChannelsResponse> {
        return this.api.listChannels(param.activeOnly, param.inactiveOnly, param.publicOnly, param.privateOnly, param.peer,  options).toPromise();
    }

    /**
     * lncli: `listinvoices` ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
     * @param param the request object
     */
    public listInvoices(param: LightningApiListInvoicesRequest, options?: Configuration): Promise<LnrpcListInvoiceResponse> {
        return this.api.listInvoices(param.pendingOnly, param.indexOffset, param.numMaxInvoices, param.reversed,  options).toPromise();
    }

    /**
     * lncli: `listmacaroonids` ListMacaroonIDs returns all root key IDs that are in use.
     * @param param the request object
     */
    public listMacaroonIDs(param: LightningApiListMacaroonIDsRequest, options?: Configuration): Promise<LnrpcListMacaroonIDsResponse> {
        return this.api.listMacaroonIDs( options).toPromise();
    }

    /**
     * lncli: `listpayments` ListPayments returns a list of all outgoing payments.
     * @param param the request object
     */
    public listPayments(param: LightningApiListPaymentsRequest, options?: Configuration): Promise<LnrpcListPaymentsResponse> {
        return this.api.listPayments(param.includeIncomplete, param.indexOffset, param.maxPayments, param.reversed,  options).toPromise();
    }

    /**
     * lncli: `listpeers` ListPeers returns a verbose listing of all currently active peers.
     * @param param the request object
     */
    public listPeers(param: LightningApiListPeersRequest, options?: Configuration): Promise<LnrpcListPeersResponse> {
        return this.api.listPeers(param.latestError,  options).toPromise();
    }

    /**
     * lncli: `listpermissions` ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
     * @param param the request object
     */
    public listPermissions(param: LightningApiListPermissionsRequest, options?: Configuration): Promise<LnrpcListPermissionsResponse> {
        return this.api.listPermissions( options).toPromise();
    }

    /**
     * ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.
     * lncli: `listunspent` Deprecated, use walletrpc.ListUnspent instead.
     * @param param the request object
     */
    public listUnspent(param: LightningApiListUnspentRequest, options?: Configuration): Promise<LnrpcListUnspentResponse> {
        return this.api.listUnspent(param.minConfs, param.maxConfs, param.account,  options).toPromise();
    }

    /**
     * lncli: `lookupinvoice` LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
     * @param param the request object
     */
    public lookupInvoice(param: LightningApiLookupInvoiceRequest, options?: Configuration): Promise<LnrpcInvoice> {
        return this.api.lookupInvoice(param.rHashStr, param.rHash,  options).toPromise();
    }

    /**
     * lncli: `newaddress` NewAddress creates a new address under control of the local wallet.
     * @param param the request object
     */
    public newAddress(param: LightningApiNewAddressRequest, options?: Configuration): Promise<LnrpcNewAddressResponse> {
        return this.api.newAddress(param.type, param.account,  options).toPromise();
    }

    /**
     * lncli: `openchannel` OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
     * @param param the request object
     */
    public openChannel(param: LightningApiOpenChannelRequest, options?: Configuration): Promise<StreamResultOfLnrpcOpenStatusUpdate> {
        return this.api.openChannel(param.body,  options).toPromise();
    }

    /**
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
     * @param param the request object
     */
    public openChannelSync(param: LightningApiOpenChannelSyncRequest, options?: Configuration): Promise<LnrpcChannelPoint> {
        return this.api.openChannelSync(param.body,  options).toPromise();
    }

    /**
     * lncli: `pendingchannels` PendingChannels returns a list of all the channels that are currently considered \"pending\". A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
     * @param param the request object
     */
    public pendingChannels(param: LightningApiPendingChannelsRequest, options?: Configuration): Promise<LnrpcPendingChannelsResponse> {
        return this.api.pendingChannels( options).toPromise();
    }

    /**
     * When using REST, the `dest_custom_records` map type can be set by appending `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * lncli: `queryroutes` QueryRoutes attempts to query the daemon's Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.
     * @param param the request object
     */
    public queryRoutes(param: LightningApiQueryRoutesRequest, options?: Configuration): Promise<LnrpcQueryRoutesResponse> {
        return this.api.queryRoutes(param.pubKey, param.amt, param.amtMsat, param.finalCltvDelta, param.feeLimitFixed, param.feeLimitFixedMsat, param.feeLimitPercent, param.ignoredNodes, param.sourcePubKey, param.useMissionControl, param.cltvLimit, param.outgoingChanId, param.lastHopPubkey, param.destFeatures,  options).toPromise();
    }

    /**
     * lncli: `restorechanbackup` RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
     * @param param the request object
     */
    public restoreChannelBackups(param: LightningApiRestoreChannelBackupsRequest, options?: Configuration): Promise<any> {
        return this.api.restoreChannelBackups(param.body,  options).toPromise();
    }

    /**
     * lncli: `sendcoins` SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param param the request object
     */
    public sendCoins(param: LightningApiSendCoinsRequest, options?: Configuration): Promise<LnrpcSendCoinsResponse> {
        return this.api.sendCoins(param.body,  options).toPromise();
    }

    /**
     * lncli: `sendmany` SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param param the request object
     */
    public sendMany(param: LightningApiSendManyRequest, options?: Configuration): Promise<LnrpcSendManyResponse> {
        return this.api.sendMany(param.body,  options).toPromise();
    }

    /**
     * lncli: `sendpayment` Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
     * @param param the request object
     */
    public sendPayment(param: LightningApiSendPaymentRequest, options?: Configuration): Promise<StreamResultOfLnrpcSendResponse> {
        return this.api.sendPayment(param.body,  options).toPromise();
    }

    /**
     * SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination's public key and the payment hash (if any) to be encoded as hex strings.
     * @param param the request object
     */
    public sendPaymentSync(param: LightningApiSendPaymentSyncRequest, options?: Configuration): Promise<LnrpcSendResponse> {
        return this.api.sendPaymentSync(param.body,  options).toPromise();
    }

    /**
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
     * @param param the request object
     */
    public sendToRouteSync(param: LightningApiSendToRouteSyncRequest, options?: Configuration): Promise<LnrpcSendResponse> {
        return this.api.sendToRouteSync(param.body,  options).toPromise();
    }

    /**
     * lncli: `signmessage` SignMessage signs a message with this node's private key. The returned signature string is `zbase32` encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
     * @param param the request object
     */
    public signMessage(param: LightningApiSignMessageRequest, options?: Configuration): Promise<LnrpcSignMessageResponse> {
        return this.api.signMessage(param.body,  options).toPromise();
    }

    /**
     * lncli: `stop` StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
     * @param param the request object
     */
    public stopDaemon(param: LightningApiStopDaemonRequest, options?: Configuration): Promise<any> {
        return this.api.stopDaemon(param.body,  options).toPromise();
    }

    /**
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
     * @param param the request object
     */
    public subscribeChannelBackups(param: LightningApiSubscribeChannelBackupsRequest, options?: Configuration): Promise<StreamResultOfLnrpcChanBackupSnapshot> {
        return this.api.subscribeChannelBackups( options).toPromise();
    }

    /**
     * SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
     * @param param the request object
     */
    public subscribeChannelEvents(param: LightningApiSubscribeChannelEventsRequest, options?: Configuration): Promise<StreamResultOfLnrpcChannelEventUpdate> {
        return this.api.subscribeChannelEvents( options).toPromise();
    }

    /**
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
     * @param param the request object
     */
    public subscribeChannelGraph(param: LightningApiSubscribeChannelGraphRequest, options?: Configuration): Promise<StreamResultOfLnrpcGraphTopologyUpdate> {
        return this.api.subscribeChannelGraph( options).toPromise();
    }

    /**
     * SubscribeInvoices returns a uni-directional stream (server -> client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we'll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we'll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we'll only send out the latest add/settle events.
     * @param param the request object
     */
    public subscribeInvoices(param: LightningApiSubscribeInvoicesRequest, options?: Configuration): Promise<StreamResultOfLnrpcInvoice> {
        return this.api.subscribeInvoices(param.addIndex, param.settleIndex,  options).toPromise();
    }

    /**
     * SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
     * @param param the request object
     */
    public subscribePeerEvents(param: LightningApiSubscribePeerEventsRequest, options?: Configuration): Promise<StreamResultOfLnrpcPeerEvent> {
        return this.api.subscribePeerEvents( options).toPromise();
    }

    /**
     * SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
     * @param param the request object
     */
    public subscribeTransactions(param: LightningApiSubscribeTransactionsRequest, options?: Configuration): Promise<StreamResultOfLnrpcTransaction> {
        return this.api.subscribeTransactions(param.startHeight, param.endHeight, param.account,  options).toPromise();
    }

    /**
     * lncli: `updatechanpolicy` UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
     * @param param the request object
     */
    public updateChannelPolicy(param: LightningApiUpdateChannelPolicyRequest, options?: Configuration): Promise<any> {
        return this.api.updateChannelPolicy(param.body,  options).toPromise();
    }

    /**
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
     * @param param the request object
     */
    public verifyChanBackup(param: LightningApiVerifyChanBackupRequest, options?: Configuration): Promise<any> {
        return this.api.verifyChanBackup(param.body,  options).toPromise();
    }

    /**
     * lncli: `verifymessage` VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node's channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
     * @param param the request object
     */
    public verifyMessage(param: LightningApiVerifyMessageRequest, options?: Configuration): Promise<LnrpcVerifyMessageResponse> {
        return this.api.verifyMessage(param.body,  options).toPromise();
    }

    /**
     * lncli: `walletbalance` WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.
     * @param param the request object
     */
    public walletBalance(param: LightningApiWalletBalanceRequest, options?: Configuration): Promise<LnrpcWalletBalanceResponse> {
        return this.api.walletBalance( options).toPromise();
    }

}
