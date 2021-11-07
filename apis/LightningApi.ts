// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { LnrpcAddInvoiceResponse } from '../models/LnrpcAddInvoiceResponse';
import { LnrpcBakeMacaroonRequest } from '../models/LnrpcBakeMacaroonRequest';
import { LnrpcBakeMacaroonResponse } from '../models/LnrpcBakeMacaroonResponse';
import { LnrpcChanBackupSnapshot } from '../models/LnrpcChanBackupSnapshot';
import { LnrpcChannelAcceptResponse } from '../models/LnrpcChannelAcceptResponse';
import { LnrpcChannelBackup } from '../models/LnrpcChannelBackup';
import { LnrpcChannelBalanceResponse } from '../models/LnrpcChannelBalanceResponse';
import { LnrpcChannelEdge } from '../models/LnrpcChannelEdge';
import { LnrpcChannelGraph } from '../models/LnrpcChannelGraph';
import { LnrpcChannelPoint } from '../models/LnrpcChannelPoint';
import { LnrpcClosedChannelsResponse } from '../models/LnrpcClosedChannelsResponse';
import { LnrpcConnectPeerRequest } from '../models/LnrpcConnectPeerRequest';
import { LnrpcDebugLevelRequest } from '../models/LnrpcDebugLevelRequest';
import { LnrpcDebugLevelResponse } from '../models/LnrpcDebugLevelResponse';
import { LnrpcDeleteMacaroonIDResponse } from '../models/LnrpcDeleteMacaroonIDResponse';
import { LnrpcEstimateFeeResponse } from '../models/LnrpcEstimateFeeResponse';
import { LnrpcFeeReportResponse } from '../models/LnrpcFeeReportResponse';
import { LnrpcForwardingHistoryRequest } from '../models/LnrpcForwardingHistoryRequest';
import { LnrpcForwardingHistoryResponse } from '../models/LnrpcForwardingHistoryResponse';
import { LnrpcFundingTransitionMsg } from '../models/LnrpcFundingTransitionMsg';
import { LnrpcGetInfoResponse } from '../models/LnrpcGetInfoResponse';
import { LnrpcGetRecoveryInfoResponse } from '../models/LnrpcGetRecoveryInfoResponse';
import { LnrpcInvoice } from '../models/LnrpcInvoice';
import { LnrpcListChannelsResponse } from '../models/LnrpcListChannelsResponse';
import { LnrpcListInvoiceResponse } from '../models/LnrpcListInvoiceResponse';
import { LnrpcListMacaroonIDsResponse } from '../models/LnrpcListMacaroonIDsResponse';
import { LnrpcListPaymentsResponse } from '../models/LnrpcListPaymentsResponse';
import { LnrpcListPeersResponse } from '../models/LnrpcListPeersResponse';
import { LnrpcListPermissionsResponse } from '../models/LnrpcListPermissionsResponse';
import { LnrpcListUnspentResponse } from '../models/LnrpcListUnspentResponse';
import { LnrpcNetworkInfo } from '../models/LnrpcNetworkInfo';
import { LnrpcNewAddressResponse } from '../models/LnrpcNewAddressResponse';
import { LnrpcNodeInfo } from '../models/LnrpcNodeInfo';
import { LnrpcNodeMetricsResponse } from '../models/LnrpcNodeMetricsResponse';
import { LnrpcOpenChannelRequest } from '../models/LnrpcOpenChannelRequest';
import { LnrpcPayReq } from '../models/LnrpcPayReq';
import { LnrpcPendingChannelsResponse } from '../models/LnrpcPendingChannelsResponse';
import { LnrpcPolicyUpdateRequest } from '../models/LnrpcPolicyUpdateRequest';
import { LnrpcQueryRoutesResponse } from '../models/LnrpcQueryRoutesResponse';
import { LnrpcRestoreChanBackupRequest } from '../models/LnrpcRestoreChanBackupRequest';
import { LnrpcSendCoinsRequest } from '../models/LnrpcSendCoinsRequest';
import { LnrpcSendCoinsResponse } from '../models/LnrpcSendCoinsResponse';
import { LnrpcSendManyRequest } from '../models/LnrpcSendManyRequest';
import { LnrpcSendManyResponse } from '../models/LnrpcSendManyResponse';
import { LnrpcSendRequest } from '../models/LnrpcSendRequest';
import { LnrpcSendResponse } from '../models/LnrpcSendResponse';
import { LnrpcSendToRouteRequest } from '../models/LnrpcSendToRouteRequest';
import { LnrpcSignMessageRequest } from '../models/LnrpcSignMessageRequest';
import { LnrpcSignMessageResponse } from '../models/LnrpcSignMessageResponse';
import { LnrpcTransactionDetails } from '../models/LnrpcTransactionDetails';
import { LnrpcVerifyMessageRequest } from '../models/LnrpcVerifyMessageRequest';
import { LnrpcVerifyMessageResponse } from '../models/LnrpcVerifyMessageResponse';
import { LnrpcWalletBalanceResponse } from '../models/LnrpcWalletBalanceResponse';
import { RuntimeError } from '../models/RuntimeError';
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

/**
 * no description
 */
export class LightningApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * lncli: `abandonchannel` AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
     * @param channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param channelPointOutputIndex The index of the output of the funding transaction
     * @param channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @param pendingFundingShimOnly 
     * @param iKnowWhatIAmDoing Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
     */
    public async abandonChannel(channelPointFundingTxidStr: string, channelPointOutputIndex: number, channelPointFundingTxidBytes?: string, pendingFundingShimOnly?: boolean, iKnowWhatIAmDoing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelPointFundingTxidStr' is not null or undefined
        if (channelPointFundingTxidStr === null || channelPointFundingTxidStr === undefined) {
            throw new RequiredError("LightningApi", "abandonChannel", "channelPointFundingTxidStr");
        }


        // verify required parameter 'channelPointOutputIndex' is not null or undefined
        if (channelPointOutputIndex === null || channelPointOutputIndex === undefined) {
            throw new RequiredError("LightningApi", "abandonChannel", "channelPointOutputIndex");
        }





        // Path Params
        const localVarPath = '/v1/channels/abandon/{channel_point.funding_txid_str}/{channel_point.output_index}'
            .replace('{' + 'channel_point.funding_txid_str' + '}', encodeURIComponent(String(channelPointFundingTxidStr)))
            .replace('{' + 'channel_point.output_index' + '}', encodeURIComponent(String(channelPointOutputIndex)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (channelPointFundingTxidBytes !== undefined) {
            requestContext.setQueryParam("channel_point.funding_txid_bytes", ObjectSerializer.serialize(channelPointFundingTxidBytes, "string", "byte"));
        }

        // Query Params
        if (pendingFundingShimOnly !== undefined) {
            requestContext.setQueryParam("pending_funding_shim_only", ObjectSerializer.serialize(pendingFundingShimOnly, "boolean", "boolean"));
        }

        // Query Params
        if (iKnowWhatIAmDoing !== undefined) {
            requestContext.setQueryParam("i_know_what_i_am_doing", ObjectSerializer.serialize(iKnowWhatIAmDoing, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `addinvoice` AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
     * @param body 
     */
    public async addInvoice(body: LnrpcInvoice, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "addInvoice", "body");
        }


        // Path Params
        const localVarPath = '/v1/invoices';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcInvoice", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `bakemacaroon` BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
     * @param body 
     */
    public async bakeMacaroon(body: LnrpcBakeMacaroonRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "bakeMacaroon", "body");
        }


        // Path Params
        const localVarPath = '/v1/macaroon';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcBakeMacaroonRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
     * @param body  (streaming inputs)
     */
    public async channelAcceptor(body: LnrpcChannelAcceptResponse, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "channelAcceptor", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/acceptor';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcChannelAcceptResponse", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `channelbalance` ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
     */
    public async channelBalance(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/balance/channels';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
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
    public async closeChannel(channelPointFundingTxidStr: string, channelPointOutputIndex: number, channelPointFundingTxidBytes?: string, force?: boolean, targetConf?: number, satPerByte?: string, deliveryAddress?: string, satPerVbyte?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelPointFundingTxidStr' is not null or undefined
        if (channelPointFundingTxidStr === null || channelPointFundingTxidStr === undefined) {
            throw new RequiredError("LightningApi", "closeChannel", "channelPointFundingTxidStr");
        }


        // verify required parameter 'channelPointOutputIndex' is not null or undefined
        if (channelPointOutputIndex === null || channelPointOutputIndex === undefined) {
            throw new RequiredError("LightningApi", "closeChannel", "channelPointOutputIndex");
        }








        // Path Params
        const localVarPath = '/v1/channels/{channel_point.funding_txid_str}/{channel_point.output_index}'
            .replace('{' + 'channel_point.funding_txid_str' + '}', encodeURIComponent(String(channelPointFundingTxidStr)))
            .replace('{' + 'channel_point.output_index' + '}', encodeURIComponent(String(channelPointOutputIndex)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (channelPointFundingTxidBytes !== undefined) {
            requestContext.setQueryParam("channel_point.funding_txid_bytes", ObjectSerializer.serialize(channelPointFundingTxidBytes, "string", "byte"));
        }

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", "boolean"));
        }

        // Query Params
        if (targetConf !== undefined) {
            requestContext.setQueryParam("target_conf", ObjectSerializer.serialize(targetConf, "number", "int32"));
        }

        // Query Params
        if (satPerByte !== undefined) {
            requestContext.setQueryParam("sat_per_byte", ObjectSerializer.serialize(satPerByte, "string", "int64"));
        }

        // Query Params
        if (deliveryAddress !== undefined) {
            requestContext.setQueryParam("delivery_address", ObjectSerializer.serialize(deliveryAddress, "string", ""));
        }

        // Query Params
        if (satPerVbyte !== undefined) {
            requestContext.setQueryParam("sat_per_vbyte", ObjectSerializer.serialize(satPerVbyte, "string", "uint64"));
        }



        return requestContext;
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
    public async closedChannels(cooperative?: boolean, localForce?: boolean, remoteForce?: boolean, breach?: boolean, fundingCanceled?: boolean, abandoned?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/v1/channels/closed';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cooperative !== undefined) {
            requestContext.setQueryParam("cooperative", ObjectSerializer.serialize(cooperative, "boolean", "boolean"));
        }

        // Query Params
        if (localForce !== undefined) {
            requestContext.setQueryParam("local_force", ObjectSerializer.serialize(localForce, "boolean", "boolean"));
        }

        // Query Params
        if (remoteForce !== undefined) {
            requestContext.setQueryParam("remote_force", ObjectSerializer.serialize(remoteForce, "boolean", "boolean"));
        }

        // Query Params
        if (breach !== undefined) {
            requestContext.setQueryParam("breach", ObjectSerializer.serialize(breach, "boolean", "boolean"));
        }

        // Query Params
        if (fundingCanceled !== undefined) {
            requestContext.setQueryParam("funding_canceled", ObjectSerializer.serialize(fundingCanceled, "boolean", "boolean"));
        }

        // Query Params
        if (abandoned !== undefined) {
            requestContext.setQueryParam("abandoned", ObjectSerializer.serialize(abandoned, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `connect` ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
     * @param body 
     */
    public async connectPeer(body: LnrpcConnectPeerRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "connectPeer", "body");
        }


        // Path Params
        const localVarPath = '/v1/peers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcConnectPeerRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `debuglevel` DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
     * @param body 
     */
    public async debugLevel(body: LnrpcDebugLevelRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "debugLevel", "body");
        }


        // Path Params
        const localVarPath = '/v1/debuglevel';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcDebugLevelRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `decodepayreq` DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
     * @param payReq The payment request string to be decoded
     */
    public async decodePayReq(payReq: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'payReq' is not null or undefined
        if (payReq === null || payReq === undefined) {
            throw new RequiredError("LightningApi", "decodePayReq", "payReq");
        }


        // Path Params
        const localVarPath = '/v1/payreq/{pay_req}'
            .replace('{' + 'pay_req' + '}', encodeURIComponent(String(payReq)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * DeleteAllPayments deletes all outgoing payments from DB.
     * @param failedPaymentsOnly Only delete failed payments.
     * @param failedHtlcsOnly Only delete failed HTLCs from payments, not the payment itself.
     */
    public async deleteAllPayments(failedPaymentsOnly?: boolean, failedHtlcsOnly?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v1/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (failedPaymentsOnly !== undefined) {
            requestContext.setQueryParam("failed_payments_only", ObjectSerializer.serialize(failedPaymentsOnly, "boolean", "boolean"));
        }

        // Query Params
        if (failedHtlcsOnly !== undefined) {
            requestContext.setQueryParam("failed_htlcs_only", ObjectSerializer.serialize(failedHtlcsOnly, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `deletemacaroonid` DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
     * @param rootKeyId The root key ID to be removed.
     */
    public async deleteMacaroonID(rootKeyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rootKeyId' is not null or undefined
        if (rootKeyId === null || rootKeyId === undefined) {
            throw new RequiredError("LightningApi", "deleteMacaroonID", "rootKeyId");
        }


        // Path Params
        const localVarPath = '/v1/macaroon/{root_key_id}'
            .replace('{' + 'root_key_id' + '}', encodeURIComponent(String(rootKeyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `describegraph` DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
     * @param includeUnannounced Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network.
     */
    public async describeGraph(includeUnannounced?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/graph';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeUnannounced !== undefined) {
            requestContext.setQueryParam("include_unannounced", ObjectSerializer.serialize(includeUnannounced, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `disconnect` DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
     * @param pubKey The pubkey of the node to disconnect from
     */
    public async disconnectPeer(pubKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pubKey' is not null or undefined
        if (pubKey === null || pubKey === undefined) {
            throw new RequiredError("LightningApi", "disconnectPeer", "pubKey");
        }


        // Path Params
        const localVarPath = '/v1/peers/{pub_key}'
            .replace('{' + 'pub_key' + '}', encodeURIComponent(String(pubKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * When using REST, the `AddrToAmount` map type can be set by appending `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * lncli: `estimatefee` EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
     * @param targetConf The target number of blocks that this transaction should be confirmed by.
     * @param minConfs The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
     * @param spendUnconfirmed Whether unconfirmed outputs should be used as inputs for the transaction.
     */
    public async estimateFee(targetConf?: number, minConfs?: number, spendUnconfirmed?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/transactions/fee';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (targetConf !== undefined) {
            requestContext.setQueryParam("target_conf", ObjectSerializer.serialize(targetConf, "number", "int32"));
        }

        // Query Params
        if (minConfs !== undefined) {
            requestContext.setQueryParam("min_confs", ObjectSerializer.serialize(minConfs, "number", "int32"));
        }

        // Query Params
        if (spendUnconfirmed !== undefined) {
            requestContext.setQueryParam("spend_unconfirmed", ObjectSerializer.serialize(spendUnconfirmed, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
     */
    public async exportAllChannelBackups(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/channels/backup';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `exportchanbackup` ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
     * @param chanPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param chanPointOutputIndex The index of the output of the funding transaction
     * @param chanPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     */
    public async exportChannelBackup(chanPointFundingTxidStr: string, chanPointOutputIndex: number, chanPointFundingTxidBytes?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chanPointFundingTxidStr' is not null or undefined
        if (chanPointFundingTxidStr === null || chanPointFundingTxidStr === undefined) {
            throw new RequiredError("LightningApi", "exportChannelBackup", "chanPointFundingTxidStr");
        }


        // verify required parameter 'chanPointOutputIndex' is not null or undefined
        if (chanPointOutputIndex === null || chanPointOutputIndex === undefined) {
            throw new RequiredError("LightningApi", "exportChannelBackup", "chanPointOutputIndex");
        }



        // Path Params
        const localVarPath = '/v1/channels/backup/{chan_point.funding_txid_str}/{chan_point.output_index}'
            .replace('{' + 'chan_point.funding_txid_str' + '}', encodeURIComponent(String(chanPointFundingTxidStr)))
            .replace('{' + 'chan_point.output_index' + '}', encodeURIComponent(String(chanPointOutputIndex)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (chanPointFundingTxidBytes !== undefined) {
            requestContext.setQueryParam("chan_point.funding_txid_bytes", ObjectSerializer.serialize(chanPointFundingTxidBytes, "string", "byte"));
        }



        return requestContext;
    }

    /**
     * lncli: `feereport` FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
     */
    public async feeReport(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/fees';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.
     * lncli: `fwdinghistory` ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
     * @param body 
     */
    public async forwardingHistory(body: LnrpcForwardingHistoryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "forwardingHistory", "body");
        }


        // Path Params
        const localVarPath = '/v1/switch';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcForwardingHistoryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we're expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
     * @param body 
     */
    public async fundingStateStep(body: LnrpcFundingTransitionMsg, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "fundingStateStep", "body");
        }


        // Path Params
        const localVarPath = '/v1/funding/step';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcFundingTransitionMsg", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `getchaninfo` GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction's funding output within the blockchain.
     * @param chanId The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
     */
    public async getChanInfo(chanId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'chanId' is not null or undefined
        if (chanId === null || chanId === undefined) {
            throw new RequiredError("LightningApi", "getChanInfo", "chanId");
        }


        // Path Params
        const localVarPath = '/v1/graph/edge/{chan_id}'
            .replace('{' + 'chan_id' + '}', encodeURIComponent(String(chanId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `getinfo` GetInfo returns general information concerning the lightning node including it's identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
     */
    public async getInfo(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/getinfo';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `getnetworkinfo` GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
     */
    public async getNetworkInfo(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/graph/info';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `getnodeinfo` GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
     * @param pubKey The 33-byte hex-encoded compressed public of the target node
     * @param includeChannels If true, will include all known channels associated with the node.
     */
    public async getNodeInfo(pubKey: string, includeChannels?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pubKey' is not null or undefined
        if (pubKey === null || pubKey === undefined) {
            throw new RequiredError("LightningApi", "getNodeInfo", "pubKey");
        }



        // Path Params
        const localVarPath = '/v1/graph/node/{pub_key}'
            .replace('{' + 'pub_key' + '}', encodeURIComponent(String(pubKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeChannels !== undefined) {
            requestContext.setQueryParam("include_channels", ObjectSerializer.serialize(includeChannels, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `getnodemetrics` GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
     * @param types The requested node metrics.
     */
    public async getNodeMetrics(types?: Array<'UNKNOWN' | 'BETWEENNESS_CENTRALITY'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/graph/nodemetrics';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (types !== undefined) {
            requestContext.setQueryParam("types", ObjectSerializer.serialize(types, "Array<'UNKNOWN' | 'BETWEENNESS_CENTRALITY'>", ""));
        }



        return requestContext;
    }

    /**
     * * lncli: `getrecoveryinfo` GetRecoveryInfo returns information concerning the recovery mode including whether it's in a recovery mode, whether the recovery is finished, and the progress made so far.
     */
    public async getRecoveryInfo(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/getrecoveryinfo';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `listchaintxns` GetTransactions returns a list describing all the known transactions relevant to the wallet.
     * @param startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param account An optional filter to only include transactions relevant to an account.
     */
    public async getTransactions(startHeight?: number, endHeight?: number, account?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/transactions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startHeight !== undefined) {
            requestContext.setQueryParam("start_height", ObjectSerializer.serialize(startHeight, "number", "int32"));
        }

        // Query Params
        if (endHeight !== undefined) {
            requestContext.setQueryParam("end_height", ObjectSerializer.serialize(endHeight, "number", "int32"));
        }

        // Query Params
        if (account !== undefined) {
            requestContext.setQueryParam("account", ObjectSerializer.serialize(account, "string", ""));
        }



        return requestContext;
    }

    /**
     * lncli: `listchannels` ListChannels returns a description of all the open channels that this node is a participant in.
     * @param activeOnly 
     * @param inactiveOnly 
     * @param publicOnly 
     * @param privateOnly 
     * @param peer Filters the response for channels with a target peer&#39;s pubkey. If peer is empty, all channels will be returned.
     */
    public async listChannels(activeOnly?: boolean, inactiveOnly?: boolean, publicOnly?: boolean, privateOnly?: boolean, peer?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/v1/channels';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (activeOnly !== undefined) {
            requestContext.setQueryParam("active_only", ObjectSerializer.serialize(activeOnly, "boolean", "boolean"));
        }

        // Query Params
        if (inactiveOnly !== undefined) {
            requestContext.setQueryParam("inactive_only", ObjectSerializer.serialize(inactiveOnly, "boolean", "boolean"));
        }

        // Query Params
        if (publicOnly !== undefined) {
            requestContext.setQueryParam("public_only", ObjectSerializer.serialize(publicOnly, "boolean", "boolean"));
        }

        // Query Params
        if (privateOnly !== undefined) {
            requestContext.setQueryParam("private_only", ObjectSerializer.serialize(privateOnly, "boolean", "boolean"));
        }

        // Query Params
        if (peer !== undefined) {
            requestContext.setQueryParam("peer", ObjectSerializer.serialize(peer, "string", "byte"));
        }



        return requestContext;
    }

    /**
     * lncli: `listinvoices` ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
     * @param pendingOnly If set, only invoices that are not settled and not canceled will be returned in the response.
     * @param indexOffset The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response.
     * @param numMaxInvoices The max number of invoices to return in the response to this query.
     * @param reversed If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards.
     */
    public async listInvoices(pendingOnly?: boolean, indexOffset?: string, numMaxInvoices?: string, reversed?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/v1/invoices';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pendingOnly !== undefined) {
            requestContext.setQueryParam("pending_only", ObjectSerializer.serialize(pendingOnly, "boolean", "boolean"));
        }

        // Query Params
        if (indexOffset !== undefined) {
            requestContext.setQueryParam("index_offset", ObjectSerializer.serialize(indexOffset, "string", "uint64"));
        }

        // Query Params
        if (numMaxInvoices !== undefined) {
            requestContext.setQueryParam("num_max_invoices", ObjectSerializer.serialize(numMaxInvoices, "string", "uint64"));
        }

        // Query Params
        if (reversed !== undefined) {
            requestContext.setQueryParam("reversed", ObjectSerializer.serialize(reversed, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `listmacaroonids` ListMacaroonIDs returns all root key IDs that are in use.
     */
    public async listMacaroonIDs(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/macaroon/ids';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * lncli: `listpayments` ListPayments returns a list of all outgoing payments.
     * @param includeIncomplete If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn&#39;t change the meaning of the indices, which are tied to individual payments.
     * @param indexOffset The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards.
     * @param maxPayments The maximal number of payments returned in the response to this query.
     * @param reversed If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order).
     */
    public async listPayments(includeIncomplete?: boolean, indexOffset?: string, maxPayments?: string, reversed?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/v1/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeIncomplete !== undefined) {
            requestContext.setQueryParam("include_incomplete", ObjectSerializer.serialize(includeIncomplete, "boolean", "boolean"));
        }

        // Query Params
        if (indexOffset !== undefined) {
            requestContext.setQueryParam("index_offset", ObjectSerializer.serialize(indexOffset, "string", "uint64"));
        }

        // Query Params
        if (maxPayments !== undefined) {
            requestContext.setQueryParam("max_payments", ObjectSerializer.serialize(maxPayments, "string", "uint64"));
        }

        // Query Params
        if (reversed !== undefined) {
            requestContext.setQueryParam("reversed", ObjectSerializer.serialize(reversed, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `listpeers` ListPeers returns a verbose listing of all currently active peers.
     * @param latestError If true, only the last error that our peer sent us will be returned with the peer&#39;s information, rather than the full set of historic errors we have stored.
     */
    public async listPeers(latestError?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/peers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (latestError !== undefined) {
            requestContext.setQueryParam("latest_error", ObjectSerializer.serialize(latestError, "boolean", "boolean"));
        }



        return requestContext;
    }

    /**
     * lncli: `listpermissions` ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
     */
    public async listPermissions(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/macaroon/permissions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.
     * lncli: `listunspent` Deprecated, use walletrpc.ListUnspent instead.
     * @param minConfs The minimum number of confirmations to be included.
     * @param maxConfs The maximum number of confirmations to be included.
     * @param account An optional filter to only include outputs belonging to an account.
     */
    public async listUnspent(minConfs?: number, maxConfs?: number, account?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/utxos';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (minConfs !== undefined) {
            requestContext.setQueryParam("min_confs", ObjectSerializer.serialize(minConfs, "number", "int32"));
        }

        // Query Params
        if (maxConfs !== undefined) {
            requestContext.setQueryParam("max_confs", ObjectSerializer.serialize(maxConfs, "number", "int32"));
        }

        // Query Params
        if (account !== undefined) {
            requestContext.setQueryParam("account", ObjectSerializer.serialize(account, "string", ""));
        }



        return requestContext;
    }

    /**
     * lncli: `lookupinvoice` LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
     * @param rHashStr The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
     * @param rHash The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64.
     */
    public async lookupInvoice(rHashStr: string, rHash?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'rHashStr' is not null or undefined
        if (rHashStr === null || rHashStr === undefined) {
            throw new RequiredError("LightningApi", "lookupInvoice", "rHashStr");
        }



        // Path Params
        const localVarPath = '/v1/invoice/{r_hash_str}'
            .replace('{' + 'r_hash_str' + '}', encodeURIComponent(String(rHashStr)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (rHash !== undefined) {
            requestContext.setQueryParam("r_hash", ObjectSerializer.serialize(rHash, "string", "byte"));
        }



        return requestContext;
    }

    /**
     * lncli: `newaddress` NewAddress creates a new address under control of the local wallet.
     * @param type The type of address to generate.
     * @param account The name of the account to generate a new address for. If empty, the default wallet account is used.
     */
    public async newAddress(type?: 'WITNESS_PUBKEY_HASH' | 'NESTED_PUBKEY_HASH' | 'UNUSED_WITNESS_PUBKEY_HASH' | 'UNUSED_NESTED_PUBKEY_HASH', account?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v1/newaddress';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'WITNESS_PUBKEY_HASH' | 'NESTED_PUBKEY_HASH' | 'UNUSED_WITNESS_PUBKEY_HASH' | 'UNUSED_NESTED_PUBKEY_HASH'", ""));
        }

        // Query Params
        if (account !== undefined) {
            requestContext.setQueryParam("account", ObjectSerializer.serialize(account, "string", ""));
        }



        return requestContext;
    }

    /**
     * lncli: `openchannel` OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
     * @param body 
     */
    public async openChannel(body: LnrpcOpenChannelRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "openChannel", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/stream';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcOpenChannelRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
     * @param body 
     */
    public async openChannelSync(body: LnrpcOpenChannelRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "openChannelSync", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcOpenChannelRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `pendingchannels` PendingChannels returns a list of all the channels that are currently considered \"pending\". A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
     */
    public async pendingChannels(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/channels/pending';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
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
    public async queryRoutes(pubKey: string, amt: string, amtMsat?: string, finalCltvDelta?: number, feeLimitFixed?: string, feeLimitFixedMsat?: string, feeLimitPercent?: string, ignoredNodes?: Array<string>, sourcePubKey?: string, useMissionControl?: boolean, cltvLimit?: number, outgoingChanId?: string, lastHopPubkey?: string, destFeatures?: Array<'DATALOSS_PROTECT_REQ' | 'DATALOSS_PROTECT_OPT' | 'INITIAL_ROUING_SYNC' | 'UPFRONT_SHUTDOWN_SCRIPT_REQ' | 'UPFRONT_SHUTDOWN_SCRIPT_OPT' | 'GOSSIP_QUERIES_REQ' | 'GOSSIP_QUERIES_OPT' | 'TLV_ONION_REQ' | 'TLV_ONION_OPT' | 'EXT_GOSSIP_QUERIES_REQ' | 'EXT_GOSSIP_QUERIES_OPT' | 'STATIC_REMOTE_KEY_REQ' | 'STATIC_REMOTE_KEY_OPT' | 'PAYMENT_ADDR_REQ' | 'PAYMENT_ADDR_OPT' | 'MPP_REQ' | 'MPP_OPT' | 'WUMBO_CHANNELS_REQ' | 'WUMBO_CHANNELS_OPT' | 'ANCHORS_REQ' | 'ANCHORS_OPT' | 'ANCHORS_ZERO_FEE_HTLC_REQ' | 'ANCHORS_ZERO_FEE_HTLC_OPT' | 'AMP_REQ' | 'AMP_OPT'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pubKey' is not null or undefined
        if (pubKey === null || pubKey === undefined) {
            throw new RequiredError("LightningApi", "queryRoutes", "pubKey");
        }


        // verify required parameter 'amt' is not null or undefined
        if (amt === null || amt === undefined) {
            throw new RequiredError("LightningApi", "queryRoutes", "amt");
        }














        // Path Params
        const localVarPath = '/v1/graph/routes/{pub_key}/{amt}'
            .replace('{' + 'pub_key' + '}', encodeURIComponent(String(pubKey)))
            .replace('{' + 'amt' + '}', encodeURIComponent(String(amt)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (amtMsat !== undefined) {
            requestContext.setQueryParam("amt_msat", ObjectSerializer.serialize(amtMsat, "string", "int64"));
        }

        // Query Params
        if (finalCltvDelta !== undefined) {
            requestContext.setQueryParam("final_cltv_delta", ObjectSerializer.serialize(finalCltvDelta, "number", "int32"));
        }

        // Query Params
        if (feeLimitFixed !== undefined) {
            requestContext.setQueryParam("fee_limit.fixed", ObjectSerializer.serialize(feeLimitFixed, "string", "int64"));
        }

        // Query Params
        if (feeLimitFixedMsat !== undefined) {
            requestContext.setQueryParam("fee_limit.fixed_msat", ObjectSerializer.serialize(feeLimitFixedMsat, "string", "int64"));
        }

        // Query Params
        if (feeLimitPercent !== undefined) {
            requestContext.setQueryParam("fee_limit.percent", ObjectSerializer.serialize(feeLimitPercent, "string", "int64"));
        }

        // Query Params
        if (ignoredNodes !== undefined) {
            requestContext.setQueryParam("ignored_nodes", ObjectSerializer.serialize(ignoredNodes, "Array<string>", "byte"));
        }

        // Query Params
        if (sourcePubKey !== undefined) {
            requestContext.setQueryParam("source_pub_key", ObjectSerializer.serialize(sourcePubKey, "string", ""));
        }

        // Query Params
        if (useMissionControl !== undefined) {
            requestContext.setQueryParam("use_mission_control", ObjectSerializer.serialize(useMissionControl, "boolean", "boolean"));
        }

        // Query Params
        if (cltvLimit !== undefined) {
            requestContext.setQueryParam("cltv_limit", ObjectSerializer.serialize(cltvLimit, "number", "int64"));
        }

        // Query Params
        if (outgoingChanId !== undefined) {
            requestContext.setQueryParam("outgoing_chan_id", ObjectSerializer.serialize(outgoingChanId, "string", "uint64"));
        }

        // Query Params
        if (lastHopPubkey !== undefined) {
            requestContext.setQueryParam("last_hop_pubkey", ObjectSerializer.serialize(lastHopPubkey, "string", "byte"));
        }

        // Query Params
        if (destFeatures !== undefined) {
            requestContext.setQueryParam("dest_features", ObjectSerializer.serialize(destFeatures, "Array<'DATALOSS_PROTECT_REQ' | 'DATALOSS_PROTECT_OPT' | 'INITIAL_ROUING_SYNC' | 'UPFRONT_SHUTDOWN_SCRIPT_REQ' | 'UPFRONT_SHUTDOWN_SCRIPT_OPT' | 'GOSSIP_QUERIES_REQ' | 'GOSSIP_QUERIES_OPT' | 'TLV_ONION_REQ' | 'TLV_ONION_OPT' | 'EXT_GOSSIP_QUERIES_REQ' | 'EXT_GOSSIP_QUERIES_OPT' | 'STATIC_REMOTE_KEY_REQ' | 'STATIC_REMOTE_KEY_OPT' | 'PAYMENT_ADDR_REQ' | 'PAYMENT_ADDR_OPT' | 'MPP_REQ' | 'MPP_OPT' | 'WUMBO_CHANNELS_REQ' | 'WUMBO_CHANNELS_OPT' | 'ANCHORS_REQ' | 'ANCHORS_OPT' | 'ANCHORS_ZERO_FEE_HTLC_REQ' | 'ANCHORS_ZERO_FEE_HTLC_OPT' | 'AMP_REQ' | 'AMP_OPT'>", ""));
        }



        return requestContext;
    }

    /**
     * lncli: `restorechanbackup` RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
     * @param body 
     */
    public async restoreChannelBackups(body: LnrpcRestoreChanBackupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "restoreChannelBackups", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/backup/restore';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcRestoreChanBackupRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `sendcoins` SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param body 
     */
    public async sendCoins(body: LnrpcSendCoinsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "sendCoins", "body");
        }


        // Path Params
        const localVarPath = '/v1/transactions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcSendCoinsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `sendmany` SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param body 
     */
    public async sendMany(body: LnrpcSendManyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "sendMany", "body");
        }


        // Path Params
        const localVarPath = '/v1/transactions/many';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcSendManyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `sendpayment` Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
     * @param body  (streaming inputs)
     */
    public async sendPayment(body: LnrpcSendRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "sendPayment", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/transaction-stream';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcSendRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination's public key and the payment hash (if any) to be encoded as hex strings.
     * @param body 
     */
    public async sendPaymentSync(body: LnrpcSendRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "sendPaymentSync", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/transactions';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcSendRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
     * @param body 
     */
    public async sendToRouteSync(body: LnrpcSendToRouteRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "sendToRouteSync", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/transactions/route';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcSendToRouteRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `signmessage` SignMessage signs a message with this node's private key. The returned signature string is `zbase32` encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
     * @param body 
     */
    public async signMessage(body: LnrpcSignMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "signMessage", "body");
        }


        // Path Params
        const localVarPath = '/v1/signmessage';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcSignMessageRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `stop` StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
     * @param body 
     */
    public async stopDaemon(body: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "stopDaemon", "body");
        }


        // Path Params
        const localVarPath = '/v1/stop';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
     */
    public async subscribeChannelBackups(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/channels/backup/subscribe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
     */
    public async subscribeChannelEvents(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/channels/subscribe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
     */
    public async subscribeChannelGraph(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/graph/subscribe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * SubscribeInvoices returns a uni-directional stream (server -> client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we'll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we'll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we'll only send out the latest add/settle events.
     * @param addIndex If specified (non-zero), then we&#39;ll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC.
     * @param settleIndex If specified (non-zero), then we&#39;ll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren&#39;t connected to the streaming RPC.
     */
    public async subscribeInvoices(addIndex?: string, settleIndex?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/v1/invoices/subscribe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (addIndex !== undefined) {
            requestContext.setQueryParam("add_index", ObjectSerializer.serialize(addIndex, "string", "uint64"));
        }

        // Query Params
        if (settleIndex !== undefined) {
            requestContext.setQueryParam("settle_index", ObjectSerializer.serialize(settleIndex, "string", "uint64"));
        }



        return requestContext;
    }

    /**
     * SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
     */
    public async subscribePeerEvents(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/peers/subscribe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

    /**
     * SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
     * @param startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param account An optional filter to only include transactions relevant to an account.
     */
    public async subscribeTransactions(startHeight?: number, endHeight?: number, account?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/transactions/subscribe';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startHeight !== undefined) {
            requestContext.setQueryParam("start_height", ObjectSerializer.serialize(startHeight, "number", "int32"));
        }

        // Query Params
        if (endHeight !== undefined) {
            requestContext.setQueryParam("end_height", ObjectSerializer.serialize(endHeight, "number", "int32"));
        }

        // Query Params
        if (account !== undefined) {
            requestContext.setQueryParam("account", ObjectSerializer.serialize(account, "string", ""));
        }



        return requestContext;
    }

    /**
     * lncli: `updatechanpolicy` UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
     * @param body 
     */
    public async updateChannelPolicy(body: LnrpcPolicyUpdateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "updateChannelPolicy", "body");
        }


        // Path Params
        const localVarPath = '/v1/chanpolicy';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcPolicyUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
     * @param body 
     */
    public async verifyChanBackup(body: LnrpcChanBackupSnapshot, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "verifyChanBackup", "body");
        }


        // Path Params
        const localVarPath = '/v1/channels/backup/verify';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcChanBackupSnapshot", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `verifymessage` VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node's channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
     * @param body 
     */
    public async verifyMessage(body: LnrpcVerifyMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("LightningApi", "verifyMessage", "body");
        }


        // Path Params
        const localVarPath = '/v1/verifymessage';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "LnrpcVerifyMessageRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);


        return requestContext;
    }

    /**
     * lncli: `walletbalance` WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.
     */
    public async walletBalance(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/balance/blockchain';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")



        return requestContext;
    }

}

export class LightningApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to abandonChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async abandonChannel(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addInvoice(response: ResponseContext): Promise<LnrpcAddInvoiceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcAddInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcAddInvoiceResponse", ""
            ) as LnrpcAddInvoiceResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcAddInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcAddInvoiceResponse", ""
            ) as LnrpcAddInvoiceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bakeMacaroon
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bakeMacaroon(response: ResponseContext): Promise<LnrpcBakeMacaroonResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcBakeMacaroonResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcBakeMacaroonResponse", ""
            ) as LnrpcBakeMacaroonResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcBakeMacaroonResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcBakeMacaroonResponse", ""
            ) as LnrpcBakeMacaroonResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to channelAcceptor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async channelAcceptor(response: ResponseContext): Promise<StreamResultOfLnrpcChannelAcceptRequest > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcChannelAcceptRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcChannelAcceptRequest", ""
            ) as StreamResultOfLnrpcChannelAcceptRequest;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcChannelAcceptRequest = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcChannelAcceptRequest", ""
            ) as StreamResultOfLnrpcChannelAcceptRequest;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to channelBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async channelBalance(response: ResponseContext): Promise<LnrpcChannelBalanceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcChannelBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelBalanceResponse", ""
            ) as LnrpcChannelBalanceResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcChannelBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelBalanceResponse", ""
            ) as LnrpcChannelBalanceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to closeChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async closeChannel(response: ResponseContext): Promise<StreamResultOfLnrpcCloseStatusUpdate > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcCloseStatusUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcCloseStatusUpdate", ""
            ) as StreamResultOfLnrpcCloseStatusUpdate;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcCloseStatusUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcCloseStatusUpdate", ""
            ) as StreamResultOfLnrpcCloseStatusUpdate;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to closedChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async closedChannels(response: ResponseContext): Promise<LnrpcClosedChannelsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcClosedChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcClosedChannelsResponse", ""
            ) as LnrpcClosedChannelsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcClosedChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcClosedChannelsResponse", ""
            ) as LnrpcClosedChannelsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to connectPeer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async connectPeer(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to debugLevel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async debugLevel(response: ResponseContext): Promise<LnrpcDebugLevelResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcDebugLevelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcDebugLevelResponse", ""
            ) as LnrpcDebugLevelResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcDebugLevelResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcDebugLevelResponse", ""
            ) as LnrpcDebugLevelResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to decodePayReq
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async decodePayReq(response: ResponseContext): Promise<LnrpcPayReq > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcPayReq = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcPayReq", ""
            ) as LnrpcPayReq;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcPayReq = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcPayReq", ""
            ) as LnrpcPayReq;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAllPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllPayments(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMacaroonID
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMacaroonID(response: ResponseContext): Promise<LnrpcDeleteMacaroonIDResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcDeleteMacaroonIDResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcDeleteMacaroonIDResponse", ""
            ) as LnrpcDeleteMacaroonIDResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcDeleteMacaroonIDResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcDeleteMacaroonIDResponse", ""
            ) as LnrpcDeleteMacaroonIDResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to describeGraph
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async describeGraph(response: ResponseContext): Promise<LnrpcChannelGraph > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcChannelGraph = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelGraph", ""
            ) as LnrpcChannelGraph;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcChannelGraph = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelGraph", ""
            ) as LnrpcChannelGraph;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disconnectPeer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async disconnectPeer(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to estimateFee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async estimateFee(response: ResponseContext): Promise<LnrpcEstimateFeeResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcEstimateFeeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcEstimateFeeResponse", ""
            ) as LnrpcEstimateFeeResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcEstimateFeeResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcEstimateFeeResponse", ""
            ) as LnrpcEstimateFeeResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportAllChannelBackups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportAllChannelBackups(response: ResponseContext): Promise<LnrpcChanBackupSnapshot > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcChanBackupSnapshot = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChanBackupSnapshot", ""
            ) as LnrpcChanBackupSnapshot;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcChanBackupSnapshot = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChanBackupSnapshot", ""
            ) as LnrpcChanBackupSnapshot;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportChannelBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportChannelBackup(response: ResponseContext): Promise<LnrpcChannelBackup > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcChannelBackup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelBackup", ""
            ) as LnrpcChannelBackup;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcChannelBackup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelBackup", ""
            ) as LnrpcChannelBackup;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to feeReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async feeReport(response: ResponseContext): Promise<LnrpcFeeReportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcFeeReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcFeeReportResponse", ""
            ) as LnrpcFeeReportResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcFeeReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcFeeReportResponse", ""
            ) as LnrpcFeeReportResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to forwardingHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async forwardingHistory(response: ResponseContext): Promise<LnrpcForwardingHistoryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcForwardingHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcForwardingHistoryResponse", ""
            ) as LnrpcForwardingHistoryResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcForwardingHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcForwardingHistoryResponse", ""
            ) as LnrpcForwardingHistoryResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to fundingStateStep
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async fundingStateStep(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChanInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChanInfo(response: ResponseContext): Promise<LnrpcChannelEdge > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcChannelEdge = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelEdge", ""
            ) as LnrpcChannelEdge;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcChannelEdge = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelEdge", ""
            ) as LnrpcChannelEdge;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInfo(response: ResponseContext): Promise<LnrpcGetInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcGetInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcGetInfoResponse", ""
            ) as LnrpcGetInfoResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcGetInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcGetInfoResponse", ""
            ) as LnrpcGetInfoResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNetworkInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNetworkInfo(response: ResponseContext): Promise<LnrpcNetworkInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcNetworkInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNetworkInfo", ""
            ) as LnrpcNetworkInfo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcNetworkInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNetworkInfo", ""
            ) as LnrpcNetworkInfo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNodeInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNodeInfo(response: ResponseContext): Promise<LnrpcNodeInfo > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcNodeInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNodeInfo", ""
            ) as LnrpcNodeInfo;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcNodeInfo = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNodeInfo", ""
            ) as LnrpcNodeInfo;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNodeMetrics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNodeMetrics(response: ResponseContext): Promise<LnrpcNodeMetricsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcNodeMetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNodeMetricsResponse", ""
            ) as LnrpcNodeMetricsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcNodeMetricsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNodeMetricsResponse", ""
            ) as LnrpcNodeMetricsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRecoveryInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRecoveryInfo(response: ResponseContext): Promise<LnrpcGetRecoveryInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcGetRecoveryInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcGetRecoveryInfoResponse", ""
            ) as LnrpcGetRecoveryInfoResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcGetRecoveryInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcGetRecoveryInfoResponse", ""
            ) as LnrpcGetRecoveryInfoResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransactions(response: ResponseContext): Promise<LnrpcTransactionDetails > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcTransactionDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcTransactionDetails", ""
            ) as LnrpcTransactionDetails;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcTransactionDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcTransactionDetails", ""
            ) as LnrpcTransactionDetails;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listChannels(response: ResponseContext): Promise<LnrpcListChannelsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListChannelsResponse", ""
            ) as LnrpcListChannelsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListChannelsResponse", ""
            ) as LnrpcListChannelsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listInvoices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listInvoices(response: ResponseContext): Promise<LnrpcListInvoiceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListInvoiceResponse", ""
            ) as LnrpcListInvoiceResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListInvoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListInvoiceResponse", ""
            ) as LnrpcListInvoiceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMacaroonIDs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMacaroonIDs(response: ResponseContext): Promise<LnrpcListMacaroonIDsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListMacaroonIDsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListMacaroonIDsResponse", ""
            ) as LnrpcListMacaroonIDsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListMacaroonIDsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListMacaroonIDsResponse", ""
            ) as LnrpcListMacaroonIDsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPayments(response: ResponseContext): Promise<LnrpcListPaymentsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListPaymentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListPaymentsResponse", ""
            ) as LnrpcListPaymentsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListPaymentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListPaymentsResponse", ""
            ) as LnrpcListPaymentsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPeers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPeers(response: ResponseContext): Promise<LnrpcListPeersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListPeersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListPeersResponse", ""
            ) as LnrpcListPeersResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListPeersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListPeersResponse", ""
            ) as LnrpcListPeersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPermissions(response: ResponseContext): Promise<LnrpcListPermissionsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListPermissionsResponse", ""
            ) as LnrpcListPermissionsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListPermissionsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListPermissionsResponse", ""
            ) as LnrpcListPermissionsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUnspent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listUnspent(response: ResponseContext): Promise<LnrpcListUnspentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcListUnspentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListUnspentResponse", ""
            ) as LnrpcListUnspentResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcListUnspentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcListUnspentResponse", ""
            ) as LnrpcListUnspentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupInvoice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupInvoice(response: ResponseContext): Promise<LnrpcInvoice > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcInvoice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcInvoice", ""
            ) as LnrpcInvoice;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcInvoice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcInvoice", ""
            ) as LnrpcInvoice;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to newAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async newAddress(response: ResponseContext): Promise<LnrpcNewAddressResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcNewAddressResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNewAddressResponse", ""
            ) as LnrpcNewAddressResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcNewAddressResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcNewAddressResponse", ""
            ) as LnrpcNewAddressResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to openChannel
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async openChannel(response: ResponseContext): Promise<StreamResultOfLnrpcOpenStatusUpdate > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcOpenStatusUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcOpenStatusUpdate", ""
            ) as StreamResultOfLnrpcOpenStatusUpdate;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcOpenStatusUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcOpenStatusUpdate", ""
            ) as StreamResultOfLnrpcOpenStatusUpdate;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to openChannelSync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async openChannelSync(response: ResponseContext): Promise<LnrpcChannelPoint > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcChannelPoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelPoint", ""
            ) as LnrpcChannelPoint;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcChannelPoint = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcChannelPoint", ""
            ) as LnrpcChannelPoint;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pendingChannels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pendingChannels(response: ResponseContext): Promise<LnrpcPendingChannelsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcPendingChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcPendingChannelsResponse", ""
            ) as LnrpcPendingChannelsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcPendingChannelsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcPendingChannelsResponse", ""
            ) as LnrpcPendingChannelsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryRoutes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryRoutes(response: ResponseContext): Promise<LnrpcQueryRoutesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcQueryRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcQueryRoutesResponse", ""
            ) as LnrpcQueryRoutesResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcQueryRoutesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcQueryRoutesResponse", ""
            ) as LnrpcQueryRoutesResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restoreChannelBackups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restoreChannelBackups(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendCoins
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendCoins(response: ResponseContext): Promise<LnrpcSendCoinsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcSendCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendCoinsResponse", ""
            ) as LnrpcSendCoinsResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcSendCoinsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendCoinsResponse", ""
            ) as LnrpcSendCoinsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendMany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendMany(response: ResponseContext): Promise<LnrpcSendManyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcSendManyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendManyResponse", ""
            ) as LnrpcSendManyResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcSendManyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendManyResponse", ""
            ) as LnrpcSendManyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendPayment(response: ResponseContext): Promise<StreamResultOfLnrpcSendResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcSendResponse", ""
            ) as StreamResultOfLnrpcSendResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcSendResponse", ""
            ) as StreamResultOfLnrpcSendResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendPaymentSync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendPaymentSync(response: ResponseContext): Promise<LnrpcSendResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendResponse", ""
            ) as LnrpcSendResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendResponse", ""
            ) as LnrpcSendResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendToRouteSync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendToRouteSync(response: ResponseContext): Promise<LnrpcSendResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendResponse", ""
            ) as LnrpcSendResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcSendResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSendResponse", ""
            ) as LnrpcSendResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to signMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async signMessage(response: ResponseContext): Promise<LnrpcSignMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcSignMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSignMessageResponse", ""
            ) as LnrpcSignMessageResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcSignMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcSignMessageResponse", ""
            ) as LnrpcSignMessageResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to stopDaemon
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async stopDaemon(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeChannelBackups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscribeChannelBackups(response: ResponseContext): Promise<StreamResultOfLnrpcChanBackupSnapshot > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcChanBackupSnapshot = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcChanBackupSnapshot", ""
            ) as StreamResultOfLnrpcChanBackupSnapshot;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcChanBackupSnapshot = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcChanBackupSnapshot", ""
            ) as StreamResultOfLnrpcChanBackupSnapshot;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeChannelEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscribeChannelEvents(response: ResponseContext): Promise<StreamResultOfLnrpcChannelEventUpdate > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcChannelEventUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcChannelEventUpdate", ""
            ) as StreamResultOfLnrpcChannelEventUpdate;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcChannelEventUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcChannelEventUpdate", ""
            ) as StreamResultOfLnrpcChannelEventUpdate;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeChannelGraph
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscribeChannelGraph(response: ResponseContext): Promise<StreamResultOfLnrpcGraphTopologyUpdate > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcGraphTopologyUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcGraphTopologyUpdate", ""
            ) as StreamResultOfLnrpcGraphTopologyUpdate;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcGraphTopologyUpdate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcGraphTopologyUpdate", ""
            ) as StreamResultOfLnrpcGraphTopologyUpdate;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeInvoices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscribeInvoices(response: ResponseContext): Promise<StreamResultOfLnrpcInvoice > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcInvoice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcInvoice", ""
            ) as StreamResultOfLnrpcInvoice;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcInvoice = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcInvoice", ""
            ) as StreamResultOfLnrpcInvoice;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribePeerEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscribePeerEvents(response: ResponseContext): Promise<StreamResultOfLnrpcPeerEvent > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcPeerEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcPeerEvent", ""
            ) as StreamResultOfLnrpcPeerEvent;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcPeerEvent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcPeerEvent", ""
            ) as StreamResultOfLnrpcPeerEvent;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to subscribeTransactions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async subscribeTransactions(response: ResponseContext): Promise<StreamResultOfLnrpcTransaction > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StreamResultOfLnrpcTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcTransaction", ""
            ) as StreamResultOfLnrpcTransaction;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StreamResultOfLnrpcTransaction = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StreamResultOfLnrpcTransaction", ""
            ) as StreamResultOfLnrpcTransaction;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateChannelPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateChannelPolicy(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyChanBackup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyChanBackup(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyMessage(response: ResponseContext): Promise<LnrpcVerifyMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcVerifyMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcVerifyMessageResponse", ""
            ) as LnrpcVerifyMessageResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcVerifyMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcVerifyMessageResponse", ""
            ) as LnrpcVerifyMessageResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to walletBalance
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async walletBalance(response: ResponseContext): Promise<LnrpcWalletBalanceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LnrpcWalletBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcWalletBalanceResponse", ""
            ) as LnrpcWalletBalanceResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RuntimeError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RuntimeError", ""
            ) as RuntimeError;
            throw new ApiException<RuntimeError>(0, "An unexpected error response", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LnrpcWalletBalanceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LnrpcWalletBalanceResponse", ""
            ) as LnrpcWalletBalanceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
