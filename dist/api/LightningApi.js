"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcAddInvoiceResponse = _interopRequireDefault(require("../model/LnrpcAddInvoiceResponse"));

var _LnrpcBakeMacaroonRequest = _interopRequireDefault(require("../model/LnrpcBakeMacaroonRequest"));

var _LnrpcBakeMacaroonResponse = _interopRequireDefault(require("../model/LnrpcBakeMacaroonResponse"));

var _LnrpcChanBackupSnapshot = _interopRequireDefault(require("../model/LnrpcChanBackupSnapshot"));

var _LnrpcChannelAcceptResponse = _interopRequireDefault(require("../model/LnrpcChannelAcceptResponse"));

var _LnrpcChannelBackup = _interopRequireDefault(require("../model/LnrpcChannelBackup"));

var _LnrpcChannelBalanceResponse = _interopRequireDefault(require("../model/LnrpcChannelBalanceResponse"));

var _LnrpcChannelEdge = _interopRequireDefault(require("../model/LnrpcChannelEdge"));

var _LnrpcChannelGraph = _interopRequireDefault(require("../model/LnrpcChannelGraph"));

var _LnrpcChannelPoint = _interopRequireDefault(require("../model/LnrpcChannelPoint"));

var _LnrpcClosedChannelsResponse = _interopRequireDefault(require("../model/LnrpcClosedChannelsResponse"));

var _LnrpcConnectPeerRequest = _interopRequireDefault(require("../model/LnrpcConnectPeerRequest"));

var _LnrpcDebugLevelRequest = _interopRequireDefault(require("../model/LnrpcDebugLevelRequest"));

var _LnrpcDebugLevelResponse = _interopRequireDefault(require("../model/LnrpcDebugLevelResponse"));

var _LnrpcDeleteMacaroonIDResponse = _interopRequireDefault(require("../model/LnrpcDeleteMacaroonIDResponse"));

var _LnrpcEstimateFeeResponse = _interopRequireDefault(require("../model/LnrpcEstimateFeeResponse"));

var _LnrpcFeeReportResponse = _interopRequireDefault(require("../model/LnrpcFeeReportResponse"));

var _LnrpcForwardingHistoryRequest = _interopRequireDefault(require("../model/LnrpcForwardingHistoryRequest"));

var _LnrpcForwardingHistoryResponse = _interopRequireDefault(require("../model/LnrpcForwardingHistoryResponse"));

var _LnrpcFundingTransitionMsg = _interopRequireDefault(require("../model/LnrpcFundingTransitionMsg"));

var _LnrpcGetInfoResponse = _interopRequireDefault(require("../model/LnrpcGetInfoResponse"));

var _LnrpcGetRecoveryInfoResponse = _interopRequireDefault(require("../model/LnrpcGetRecoveryInfoResponse"));

var _LnrpcInvoice = _interopRequireDefault(require("../model/LnrpcInvoice"));

var _LnrpcListChannelsResponse = _interopRequireDefault(require("../model/LnrpcListChannelsResponse"));

var _LnrpcListInvoiceResponse = _interopRequireDefault(require("../model/LnrpcListInvoiceResponse"));

var _LnrpcListMacaroonIDsResponse = _interopRequireDefault(require("../model/LnrpcListMacaroonIDsResponse"));

var _LnrpcListPaymentsResponse = _interopRequireDefault(require("../model/LnrpcListPaymentsResponse"));

var _LnrpcListPeersResponse = _interopRequireDefault(require("../model/LnrpcListPeersResponse"));

var _LnrpcListPermissionsResponse = _interopRequireDefault(require("../model/LnrpcListPermissionsResponse"));

var _LnrpcListUnspentResponse = _interopRequireDefault(require("../model/LnrpcListUnspentResponse"));

var _LnrpcNetworkInfo = _interopRequireDefault(require("../model/LnrpcNetworkInfo"));

var _LnrpcNewAddressResponse = _interopRequireDefault(require("../model/LnrpcNewAddressResponse"));

var _LnrpcNodeInfo = _interopRequireDefault(require("../model/LnrpcNodeInfo"));

var _LnrpcNodeMetricsResponse = _interopRequireDefault(require("../model/LnrpcNodeMetricsResponse"));

var _LnrpcOpenChannelRequest = _interopRequireDefault(require("../model/LnrpcOpenChannelRequest"));

var _LnrpcPayReq = _interopRequireDefault(require("../model/LnrpcPayReq"));

var _LnrpcPendingChannelsResponse = _interopRequireDefault(require("../model/LnrpcPendingChannelsResponse"));

var _LnrpcPolicyUpdateRequest = _interopRequireDefault(require("../model/LnrpcPolicyUpdateRequest"));

var _LnrpcQueryRoutesResponse = _interopRequireDefault(require("../model/LnrpcQueryRoutesResponse"));

var _LnrpcRestoreChanBackupRequest = _interopRequireDefault(require("../model/LnrpcRestoreChanBackupRequest"));

var _LnrpcSendCoinsRequest = _interopRequireDefault(require("../model/LnrpcSendCoinsRequest"));

var _LnrpcSendCoinsResponse = _interopRequireDefault(require("../model/LnrpcSendCoinsResponse"));

var _LnrpcSendManyRequest = _interopRequireDefault(require("../model/LnrpcSendManyRequest"));

var _LnrpcSendManyResponse = _interopRequireDefault(require("../model/LnrpcSendManyResponse"));

var _LnrpcSendRequest = _interopRequireDefault(require("../model/LnrpcSendRequest"));

var _LnrpcSendResponse = _interopRequireDefault(require("../model/LnrpcSendResponse"));

var _LnrpcSendToRouteRequest = _interopRequireDefault(require("../model/LnrpcSendToRouteRequest"));

var _LnrpcSignMessageRequest = _interopRequireDefault(require("../model/LnrpcSignMessageRequest"));

var _LnrpcSignMessageResponse = _interopRequireDefault(require("../model/LnrpcSignMessageResponse"));

var _LnrpcTransactionDetails = _interopRequireDefault(require("../model/LnrpcTransactionDetails"));

var _LnrpcVerifyMessageRequest = _interopRequireDefault(require("../model/LnrpcVerifyMessageRequest"));

var _LnrpcVerifyMessageResponse = _interopRequireDefault(require("../model/LnrpcVerifyMessageResponse"));

var _LnrpcWalletBalanceResponse = _interopRequireDefault(require("../model/LnrpcWalletBalanceResponse"));

var _RuntimeError = _interopRequireDefault(require("../model/RuntimeError"));

var _StreamResultOfLnrpcChanBackupSnapshot = _interopRequireDefault(require("../model/StreamResultOfLnrpcChanBackupSnapshot"));

var _StreamResultOfLnrpcChannelAcceptRequest = _interopRequireDefault(require("../model/StreamResultOfLnrpcChannelAcceptRequest"));

var _StreamResultOfLnrpcChannelEventUpdate = _interopRequireDefault(require("../model/StreamResultOfLnrpcChannelEventUpdate"));

var _StreamResultOfLnrpcCloseStatusUpdate = _interopRequireDefault(require("../model/StreamResultOfLnrpcCloseStatusUpdate"));

var _StreamResultOfLnrpcGraphTopologyUpdate = _interopRequireDefault(require("../model/StreamResultOfLnrpcGraphTopologyUpdate"));

var _StreamResultOfLnrpcInvoice = _interopRequireDefault(require("../model/StreamResultOfLnrpcInvoice"));

var _StreamResultOfLnrpcOpenStatusUpdate = _interopRequireDefault(require("../model/StreamResultOfLnrpcOpenStatusUpdate"));

var _StreamResultOfLnrpcPeerEvent = _interopRequireDefault(require("../model/StreamResultOfLnrpcPeerEvent"));

var _StreamResultOfLnrpcSendResponse = _interopRequireDefault(require("../model/StreamResultOfLnrpcSendResponse"));

var _StreamResultOfLnrpcTransaction = _interopRequireDefault(require("../model/StreamResultOfLnrpcTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Lightning service.
* @module api/LightningApi
* @version version not set
*/
var LightningApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LightningApi. 
  * @alias module:api/LightningApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LightningApi(apiClient) {
    _classCallCheck(this, LightningApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * lncli: `abandonchannel` AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
   * @param {String} channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
   * @param {Number} channelPointOutputIndex The index of the output of the funding transaction
   * @param {Object} opts Optional parameters
   * @param {Blob} opts.channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
   * @param {Boolean} opts.pendingFundingShimOnly 
   * @param {Boolean} opts.iKnowWhatIAmDoing Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(LightningApi, [{
    key: "abandonChannelWithHttpInfo",
    value: function abandonChannelWithHttpInfo(channelPointFundingTxidStr, channelPointOutputIndex, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelPointFundingTxidStr' is set

      if (channelPointFundingTxidStr === undefined || channelPointFundingTxidStr === null) {
        throw new Error("Missing the required parameter 'channelPointFundingTxidStr' when calling abandonChannel");
      } // verify the required parameter 'channelPointOutputIndex' is set


      if (channelPointOutputIndex === undefined || channelPointOutputIndex === null) {
        throw new Error("Missing the required parameter 'channelPointOutputIndex' when calling abandonChannel");
      }

      var pathParams = {
        'channel_point.funding_txid_str': channelPointFundingTxidStr,
        'channel_point.output_index': channelPointOutputIndex
      };
      var queryParams = {
        'channel_point.funding_txid_bytes': opts['channelPointFundingTxidBytes'],
        'pending_funding_shim_only': opts['pendingFundingShimOnly'],
        'i_know_what_i_am_doing': opts['iKnowWhatIAmDoing']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/channels/abandon/{channel_point.funding_txid_str}/{channel_point.output_index}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `abandonchannel` AbandonChannel removes all channel state from the database except for a close summary. This method can be used to get rid of permanently unusable channels due to bugs fixed in newer versions of lnd. This method can also be used to remove externally funded channels where the funding transaction was never broadcast. Only available for non-externally funded channels in dev build.
     * @param {String} channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param {Number} channelPointOutputIndex The index of the output of the funding transaction
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @param {Boolean} opts.pendingFundingShimOnly 
     * @param {Boolean} opts.iKnowWhatIAmDoing Override the requirement for being in dev mode by setting this to true and confirming the user knows what they are doing and this is a potential foot gun to lose funds if used on active channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "abandonChannel",
    value: function abandonChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts) {
      return this.abandonChannelWithHttpInfo(channelPointFundingTxidStr, channelPointOutputIndex, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `addinvoice` AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
     * @param {module:model/LnrpcInvoice} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcAddInvoiceResponse} and HTTP response
     */

  }, {
    key: "addInvoiceWithHttpInfo",
    value: function addInvoiceWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addInvoice");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcAddInvoiceResponse["default"];
      return this.apiClient.callApi('/v1/invoices', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `addinvoice` AddInvoice attempts to add a new invoice to the invoice database. Any duplicated invoices are rejected, therefore all invoices *must* have a unique payment preimage.
     * @param {module:model/LnrpcInvoice} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcAddInvoiceResponse}
     */

  }, {
    key: "addInvoice",
    value: function addInvoice(body) {
      return this.addInvoiceWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `bakemacaroon` BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
     * @param {module:model/LnrpcBakeMacaroonRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcBakeMacaroonResponse} and HTTP response
     */

  }, {
    key: "bakeMacaroonWithHttpInfo",
    value: function bakeMacaroonWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bakeMacaroon");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcBakeMacaroonResponse["default"];
      return this.apiClient.callApi('/v1/macaroon', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `bakemacaroon` BakeMacaroon allows the creation of a new macaroon with custom read and write permissions. No first-party caveats are added since this can be done offline.
     * @param {module:model/LnrpcBakeMacaroonRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcBakeMacaroonResponse}
     */

  }, {
    key: "bakeMacaroon",
    value: function bakeMacaroon(body) {
      return this.bakeMacaroonWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
     * @param {module:model/LnrpcChannelAcceptResponse} body  (streaming inputs)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcChannelAcceptRequest} and HTTP response
     */

  }, {
    key: "channelAcceptorWithHttpInfo",
    value: function channelAcceptorWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling channelAcceptor");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcChannelAcceptRequest["default"];
      return this.apiClient.callApi('/v1/channels/acceptor', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ChannelAcceptor dispatches a bi-directional streaming RPC in which OpenChannel requests are sent to the client and the client responds with a boolean that tells LND whether or not to accept the channel. This allows node operators to specify their own criteria for accepting inbound channels through a single persistent connection.
     * @param {module:model/LnrpcChannelAcceptResponse} body  (streaming inputs)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcChannelAcceptRequest}
     */

  }, {
    key: "channelAcceptor",
    value: function channelAcceptor(body) {
      return this.channelAcceptorWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `channelbalance` ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcChannelBalanceResponse} and HTTP response
     */

  }, {
    key: "channelBalanceWithHttpInfo",
    value: function channelBalanceWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcChannelBalanceResponse["default"];
      return this.apiClient.callApi('/v1/balance/channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `channelbalance` ChannelBalance returns a report on the total funds across all open channels, categorized in local/remote, pending local/remote and unsettled local/remote balances.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcChannelBalanceResponse}
     */

  }, {
    key: "channelBalance",
    value: function channelBalance() {
      return this.channelBalanceWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `closechannel` CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.
     * @param {String} channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param {Number} channelPointOutputIndex The index of the output of the funding transaction
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @param {Boolean} opts.force If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast.
     * @param {Number} opts.targetConf The target number of blocks that the closure transaction should be confirmed by.
     * @param {String} opts.satPerByte Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @param {String} opts.deliveryAddress An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss.
     * @param {String} opts.satPerVbyte A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcCloseStatusUpdate} and HTTP response
     */

  }, {
    key: "closeChannelWithHttpInfo",
    value: function closeChannelWithHttpInfo(channelPointFundingTxidStr, channelPointOutputIndex, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'channelPointFundingTxidStr' is set

      if (channelPointFundingTxidStr === undefined || channelPointFundingTxidStr === null) {
        throw new Error("Missing the required parameter 'channelPointFundingTxidStr' when calling closeChannel");
      } // verify the required parameter 'channelPointOutputIndex' is set


      if (channelPointOutputIndex === undefined || channelPointOutputIndex === null) {
        throw new Error("Missing the required parameter 'channelPointOutputIndex' when calling closeChannel");
      }

      var pathParams = {
        'channel_point.funding_txid_str': channelPointFundingTxidStr,
        'channel_point.output_index': channelPointOutputIndex
      };
      var queryParams = {
        'channel_point.funding_txid_bytes': opts['channelPointFundingTxidBytes'],
        'force': opts['force'],
        'target_conf': opts['targetConf'],
        'sat_per_byte': opts['satPerByte'],
        'delivery_address': opts['deliveryAddress'],
        'sat_per_vbyte': opts['satPerVbyte']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcCloseStatusUpdate["default"];
      return this.apiClient.callApi('/v1/channels/{channel_point.funding_txid_str}/{channel_point.output_index}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `closechannel` CloseChannel attempts to close an active channel identified by its channel outpoint (ChannelPoint). The actions of this method can additionally be augmented to attempt a force close after a timeout period in the case of an inactive peer. If a non-force close (cooperative closure) is requested, then the user can specify either a target number of blocks until the closure transaction is confirmed, or a manual fee rate. If neither are specified, then a default lax, block confirmation target is used.
     * @param {String} channelPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param {Number} channelPointOutputIndex The index of the output of the funding transaction
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.channelPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @param {Boolean} opts.force If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast.
     * @param {Number} opts.targetConf The target number of blocks that the closure transaction should be confirmed by.
     * @param {String} opts.satPerByte Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @param {String} opts.deliveryAddress An optional address to send funds to in the case of a cooperative close. If the channel was opened with an upfront shutdown script and this field is set, the request to close will fail because the channel must pay out to the upfront shutdown addresss.
     * @param {String} opts.satPerVbyte A manual fee rate set in sat/vbyte that should be used when crafting the closure transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcCloseStatusUpdate}
     */

  }, {
    key: "closeChannel",
    value: function closeChannel(channelPointFundingTxidStr, channelPointOutputIndex, opts) {
      return this.closeChannelWithHttpInfo(channelPointFundingTxidStr, channelPointOutputIndex, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `closedchannels` ClosedChannels returns a description of all the closed channels that this node was a participant in.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cooperative 
     * @param {Boolean} opts.localForce 
     * @param {Boolean} opts.remoteForce 
     * @param {Boolean} opts.breach 
     * @param {Boolean} opts.fundingCanceled 
     * @param {Boolean} opts.abandoned 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcClosedChannelsResponse} and HTTP response
     */

  }, {
    key: "closedChannelsWithHttpInfo",
    value: function closedChannelsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'cooperative': opts['cooperative'],
        'local_force': opts['localForce'],
        'remote_force': opts['remoteForce'],
        'breach': opts['breach'],
        'funding_canceled': opts['fundingCanceled'],
        'abandoned': opts['abandoned']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcClosedChannelsResponse["default"];
      return this.apiClient.callApi('/v1/channels/closed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `closedchannels` ClosedChannels returns a description of all the closed channels that this node was a participant in.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cooperative 
     * @param {Boolean} opts.localForce 
     * @param {Boolean} opts.remoteForce 
     * @param {Boolean} opts.breach 
     * @param {Boolean} opts.fundingCanceled 
     * @param {Boolean} opts.abandoned 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcClosedChannelsResponse}
     */

  }, {
    key: "closedChannels",
    value: function closedChannels(opts) {
      return this.closedChannelsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `connect` ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
     * @param {module:model/LnrpcConnectPeerRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "connectPeerWithHttpInfo",
    value: function connectPeerWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling connectPeer");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/peers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `connect` ConnectPeer attempts to establish a connection to a remote peer. This is at the networking level, and is used for communication between nodes. This is distinct from establishing a channel with a peer.
     * @param {module:model/LnrpcConnectPeerRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "connectPeer",
    value: function connectPeer(body) {
      return this.connectPeerWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `debuglevel` DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
     * @param {module:model/LnrpcDebugLevelRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcDebugLevelResponse} and HTTP response
     */

  }, {
    key: "debugLevelWithHttpInfo",
    value: function debugLevelWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling debugLevel");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcDebugLevelResponse["default"];
      return this.apiClient.callApi('/v1/debuglevel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `debuglevel` DebugLevel allows a caller to programmatically set the logging verbosity of lnd. The logging can be targeted according to a coarse daemon-wide logging level, or in a granular fashion to specify the logging for a target sub-system.
     * @param {module:model/LnrpcDebugLevelRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcDebugLevelResponse}
     */

  }, {
    key: "debugLevel",
    value: function debugLevel(body) {
      return this.debugLevelWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `decodepayreq` DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
     * @param {String} payReq The payment request string to be decoded
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcPayReq} and HTTP response
     */

  }, {
    key: "decodePayReqWithHttpInfo",
    value: function decodePayReqWithHttpInfo(payReq) {
      var postBody = null; // verify the required parameter 'payReq' is set

      if (payReq === undefined || payReq === null) {
        throw new Error("Missing the required parameter 'payReq' when calling decodePayReq");
      }

      var pathParams = {
        'pay_req': payReq
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcPayReq["default"];
      return this.apiClient.callApi('/v1/payreq/{pay_req}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `decodepayreq` DecodePayReq takes an encoded payment request string and attempts to decode it, returning a full description of the conditions encoded within the payment request.
     * @param {String} payReq The payment request string to be decoded
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcPayReq}
     */

  }, {
    key: "decodePayReq",
    value: function decodePayReq(payReq) {
      return this.decodePayReqWithHttpInfo(payReq).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * DeleteAllPayments deletes all outgoing payments from DB.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.failedPaymentsOnly Only delete failed payments.
     * @param {Boolean} opts.failedHtlcsOnly Only delete failed HTLCs from payments, not the payment itself.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "deleteAllPaymentsWithHttpInfo",
    value: function deleteAllPaymentsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'failed_payments_only': opts['failedPaymentsOnly'],
        'failed_htlcs_only': opts['failedHtlcsOnly']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/payments', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * DeleteAllPayments deletes all outgoing payments from DB.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.failedPaymentsOnly Only delete failed payments.
     * @param {Boolean} opts.failedHtlcsOnly Only delete failed HTLCs from payments, not the payment itself.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "deleteAllPayments",
    value: function deleteAllPayments(opts) {
      return this.deleteAllPaymentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `deletemacaroonid` DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
     * @param {String} rootKeyId The root key ID to be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcDeleteMacaroonIDResponse} and HTTP response
     */

  }, {
    key: "deleteMacaroonIDWithHttpInfo",
    value: function deleteMacaroonIDWithHttpInfo(rootKeyId) {
      var postBody = null; // verify the required parameter 'rootKeyId' is set

      if (rootKeyId === undefined || rootKeyId === null) {
        throw new Error("Missing the required parameter 'rootKeyId' when calling deleteMacaroonID");
      }

      var pathParams = {
        'root_key_id': rootKeyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcDeleteMacaroonIDResponse["default"];
      return this.apiClient.callApi('/v1/macaroon/{root_key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `deletemacaroonid` DeleteMacaroonID deletes the specified macaroon ID and invalidates all macaroons derived from that ID.
     * @param {String} rootKeyId The root key ID to be removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcDeleteMacaroonIDResponse}
     */

  }, {
    key: "deleteMacaroonID",
    value: function deleteMacaroonID(rootKeyId) {
      return this.deleteMacaroonIDWithHttpInfo(rootKeyId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `describegraph` DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeUnannounced Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcChannelGraph} and HTTP response
     */

  }, {
    key: "describeGraphWithHttpInfo",
    value: function describeGraphWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'include_unannounced': opts['includeUnannounced']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcChannelGraph["default"];
      return this.apiClient.callApi('/v1/graph', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `describegraph` DescribeGraph returns a description of the latest graph state from the point of view of the node. The graph information is partitioned into two components: all the nodes/vertexes, and all the edges that connect the vertexes themselves. As this is a directed graph, the edges also contain the node directional specific routing policy which includes: the time lock delta, fee information, etc.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeUnannounced Whether unannounced channels are included in the response or not. If set, unannounced channels are included. Unannounced channels are both private channels, and public channels that are not yet announced to the network.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcChannelGraph}
     */

  }, {
    key: "describeGraph",
    value: function describeGraph(opts) {
      return this.describeGraphWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `disconnect` DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
     * @param {String} pubKey The pubkey of the node to disconnect from
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "disconnectPeerWithHttpInfo",
    value: function disconnectPeerWithHttpInfo(pubKey) {
      var postBody = null; // verify the required parameter 'pubKey' is set

      if (pubKey === undefined || pubKey === null) {
        throw new Error("Missing the required parameter 'pubKey' when calling disconnectPeer");
      }

      var pathParams = {
        'pub_key': pubKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/peers/{pub_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `disconnect` DisconnectPeer attempts to disconnect one peer from another identified by a given pubKey. In the case that we currently have a pending or active channel with the target peer, then this action will be not be allowed.
     * @param {String} pubKey The pubkey of the node to disconnect from
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "disconnectPeer",
    value: function disconnectPeer(pubKey) {
      return this.disconnectPeerWithHttpInfo(pubKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `estimatefee` EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
     * When using REST, the `AddrToAmount` map type can be set by appending `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.targetConf The target number of blocks that this transaction should be confirmed by.
     * @param {Number} opts.minConfs The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
     * @param {Boolean} opts.spendUnconfirmed Whether unconfirmed outputs should be used as inputs for the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcEstimateFeeResponse} and HTTP response
     */

  }, {
    key: "estimateFeeWithHttpInfo",
    value: function estimateFeeWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'target_conf': opts['targetConf'],
        'min_confs': opts['minConfs'],
        'spend_unconfirmed': opts['spendUnconfirmed']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcEstimateFeeResponse["default"];
      return this.apiClient.callApi('/v1/transactions/fee', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `estimatefee` EstimateFee asks the chain backend to estimate the fee rate and total fees for a transaction that pays to multiple specified outputs.
     * When using REST, the `AddrToAmount` map type can be set by appending `&AddrToAmount[<address>]=<amount_to_send>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.targetConf The target number of blocks that this transaction should be confirmed by.
     * @param {Number} opts.minConfs The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
     * @param {Boolean} opts.spendUnconfirmed Whether unconfirmed outputs should be used as inputs for the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcEstimateFeeResponse}
     */

  }, {
    key: "estimateFee",
    value: function estimateFee(opts) {
      return this.estimateFeeWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcChanBackupSnapshot} and HTTP response
     */

  }, {
    key: "exportAllChannelBackupsWithHttpInfo",
    value: function exportAllChannelBackupsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcChanBackupSnapshot["default"];
      return this.apiClient.callApi('/v1/channels/backup', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * ExportAllChannelBackups returns static channel backups for all existing channels known to lnd. A set of regular singular static channel backups for each channel are returned. Additionally, a multi-channel backup is returned as well, which contains a single encrypted blob containing the backups of each channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcChanBackupSnapshot}
     */

  }, {
    key: "exportAllChannelBackups",
    value: function exportAllChannelBackups() {
      return this.exportAllChannelBackupsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `exportchanbackup` ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
     * @param {String} chanPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param {Number} chanPointOutputIndex The index of the output of the funding transaction
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.chanPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcChannelBackup} and HTTP response
     */

  }, {
    key: "exportChannelBackupWithHttpInfo",
    value: function exportChannelBackupWithHttpInfo(chanPointFundingTxidStr, chanPointOutputIndex, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'chanPointFundingTxidStr' is set

      if (chanPointFundingTxidStr === undefined || chanPointFundingTxidStr === null) {
        throw new Error("Missing the required parameter 'chanPointFundingTxidStr' when calling exportChannelBackup");
      } // verify the required parameter 'chanPointOutputIndex' is set


      if (chanPointOutputIndex === undefined || chanPointOutputIndex === null) {
        throw new Error("Missing the required parameter 'chanPointOutputIndex' when calling exportChannelBackup");
      }

      var pathParams = {
        'chan_point.funding_txid_str': chanPointFundingTxidStr,
        'chan_point.output_index': chanPointOutputIndex
      };
      var queryParams = {
        'chan_point.funding_txid_bytes': opts['chanPointFundingTxidBytes']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcChannelBackup["default"];
      return this.apiClient.callApi('/v1/channels/backup/{chan_point.funding_txid_str}/{chan_point.output_index}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `exportchanbackup` ExportChannelBackup attempts to return an encrypted static channel backup for the target channel identified by it channel point. The backup is encrypted with a key generated from the aezeed seed of the user. The returned backup can either be restored using the RestoreChannelBackup method once lnd is running, or via the InitWallet and UnlockWallet methods from the WalletUnlocker service.
     * @param {String} chanPointFundingTxidStr Hex-encoded string representing the byte-reversed hash of the funding transaction.
     * @param {Number} chanPointOutputIndex The index of the output of the funding transaction
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.chanPointFundingTxidBytes Txid of the funding transaction. When using REST, this field must be encoded as base64.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcChannelBackup}
     */

  }, {
    key: "exportChannelBackup",
    value: function exportChannelBackup(chanPointFundingTxidStr, chanPointOutputIndex, opts) {
      return this.exportChannelBackupWithHttpInfo(chanPointFundingTxidStr, chanPointOutputIndex, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `feereport` FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcFeeReportResponse} and HTTP response
     */

  }, {
    key: "feeReportWithHttpInfo",
    value: function feeReportWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcFeeReportResponse["default"];
      return this.apiClient.callApi('/v1/fees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `feereport` FeeReport allows the caller to obtain a report detailing the current fee schedule enforced by the node globally for each channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcFeeReportResponse}
     */

  }, {
    key: "feeReport",
    value: function feeReport() {
      return this.feeReportWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `fwdinghistory` ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
     * A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.
     * @param {module:model/LnrpcForwardingHistoryRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcForwardingHistoryResponse} and HTTP response
     */

  }, {
    key: "forwardingHistoryWithHttpInfo",
    value: function forwardingHistoryWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling forwardingHistory");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcForwardingHistoryResponse["default"];
      return this.apiClient.callApi('/v1/switch', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `fwdinghistory` ForwardingHistory allows the caller to query the htlcswitch for a record of all HTLCs forwarded within the target time range, and integer offset within that time range, for a maximum number of events. If no maximum number of events is specified, up to 100 events will be returned. If no time-range is specified, then events will be returned in the order that they occured.
     * A list of forwarding events are returned. The size of each forwarding event is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB. As a result each message can only contain 50k entries. Each response has the index offset of the last entry. The index offset can be provided to the request to allow the caller to skip a series of records.
     * @param {module:model/LnrpcForwardingHistoryRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcForwardingHistoryResponse}
     */

  }, {
    key: "forwardingHistory",
    value: function forwardingHistory(body) {
      return this.forwardingHistoryWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we're expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
     * @param {module:model/LnrpcFundingTransitionMsg} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "fundingStateStepWithHttpInfo",
    value: function fundingStateStepWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fundingStateStep");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/funding/step', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * FundingStateStep is an advanced funding related call that allows the caller to either execute some preparatory steps for a funding workflow, or manually progress a funding workflow. The primary way a funding flow is identified is via its pending channel ID. As an example, this method can be used to specify that we're expecting a funding flow for a particular pending channel ID, for which we need to use specific parameters. Alternatively, this can be used to interactively drive PSBT signing for funding for partially complete funding transactions.
     * @param {module:model/LnrpcFundingTransitionMsg} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "fundingStateStep",
    value: function fundingStateStep(body) {
      return this.fundingStateStepWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `getchaninfo` GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction's funding output within the blockchain.
     * @param {String} chanId The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcChannelEdge} and HTTP response
     */

  }, {
    key: "getChanInfoWithHttpInfo",
    value: function getChanInfoWithHttpInfo(chanId) {
      var postBody = null; // verify the required parameter 'chanId' is set

      if (chanId === undefined || chanId === null) {
        throw new Error("Missing the required parameter 'chanId' when calling getChanInfo");
      }

      var pathParams = {
        'chan_id': chanId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcChannelEdge["default"];
      return this.apiClient.callApi('/v1/graph/edge/{chan_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `getchaninfo` GetChanInfo returns the latest authenticated network announcement for the given channel identified by its channel ID: an 8-byte integer which uniquely identifies the location of transaction's funding output within the blockchain.
     * @param {String} chanId The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcChannelEdge}
     */

  }, {
    key: "getChanInfo",
    value: function getChanInfo(chanId) {
      return this.getChanInfoWithHttpInfo(chanId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `getinfo` GetInfo returns general information concerning the lightning node including it's identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcGetInfoResponse} and HTTP response
     */

  }, {
    key: "getInfoWithHttpInfo",
    value: function getInfoWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcGetInfoResponse["default"];
      return this.apiClient.callApi('/v1/getinfo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `getinfo` GetInfo returns general information concerning the lightning node including it's identity pubkey, alias, the chains it is connected to, and information concerning the number of open+pending channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcGetInfoResponse}
     */

  }, {
    key: "getInfo",
    value: function getInfo() {
      return this.getInfoWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `getnetworkinfo` GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcNetworkInfo} and HTTP response
     */

  }, {
    key: "getNetworkInfoWithHttpInfo",
    value: function getNetworkInfoWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcNetworkInfo["default"];
      return this.apiClient.callApi('/v1/graph/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `getnetworkinfo` GetNetworkInfo returns some basic stats about the known channel graph from the point of view of the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcNetworkInfo}
     */

  }, {
    key: "getNetworkInfo",
    value: function getNetworkInfo() {
      return this.getNetworkInfoWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `getnodeinfo` GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
     * @param {String} pubKey The 33-byte hex-encoded compressed public of the target node
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeChannels If true, will include all known channels associated with the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcNodeInfo} and HTTP response
     */

  }, {
    key: "getNodeInfoWithHttpInfo",
    value: function getNodeInfoWithHttpInfo(pubKey, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pubKey' is set

      if (pubKey === undefined || pubKey === null) {
        throw new Error("Missing the required parameter 'pubKey' when calling getNodeInfo");
      }

      var pathParams = {
        'pub_key': pubKey
      };
      var queryParams = {
        'include_channels': opts['includeChannels']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcNodeInfo["default"];
      return this.apiClient.callApi('/v1/graph/node/{pub_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `getnodeinfo` GetNodeInfo returns the latest advertised, aggregated, and authenticated channel information for the specified node identified by its public key.
     * @param {String} pubKey The 33-byte hex-encoded compressed public of the target node
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeChannels If true, will include all known channels associated with the node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcNodeInfo}
     */

  }, {
    key: "getNodeInfo",
    value: function getNodeInfo(pubKey, opts) {
      return this.getNodeInfoWithHttpInfo(pubKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `getnodemetrics` GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.types The requested node metrics.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcNodeMetricsResponse} and HTTP response
     */

  }, {
    key: "getNodeMetricsWithHttpInfo",
    value: function getNodeMetricsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'types': this.apiClient.buildCollectionParam(opts['types'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcNodeMetricsResponse["default"];
      return this.apiClient.callApi('/v1/graph/nodemetrics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `getnodemetrics` GetNodeMetrics returns node metrics calculated from the graph. Currently the only supported metric is betweenness centrality of individual nodes.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.types The requested node metrics.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcNodeMetricsResponse}
     */

  }, {
    key: "getNodeMetrics",
    value: function getNodeMetrics(opts) {
      return this.getNodeMetricsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * * lncli: `getrecoveryinfo` GetRecoveryInfo returns information concerning the recovery mode including whether it's in a recovery mode, whether the recovery is finished, and the progress made so far.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcGetRecoveryInfoResponse} and HTTP response
     */

  }, {
    key: "getRecoveryInfoWithHttpInfo",
    value: function getRecoveryInfoWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcGetRecoveryInfoResponse["default"];
      return this.apiClient.callApi('/v1/getrecoveryinfo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * * lncli: `getrecoveryinfo` GetRecoveryInfo returns information concerning the recovery mode including whether it's in a recovery mode, whether the recovery is finished, and the progress made so far.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcGetRecoveryInfoResponse}
     */

  }, {
    key: "getRecoveryInfo",
    value: function getRecoveryInfo() {
      return this.getRecoveryInfoWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listchaintxns` GetTransactions returns a list describing all the known transactions relevant to the wallet.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param {Number} opts.endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param {String} opts.account An optional filter to only include transactions relevant to an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcTransactionDetails} and HTTP response
     */

  }, {
    key: "getTransactionsWithHttpInfo",
    value: function getTransactionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_height': opts['startHeight'],
        'end_height': opts['endHeight'],
        'account': opts['account']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcTransactionDetails["default"];
      return this.apiClient.callApi('/v1/transactions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listchaintxns` GetTransactions returns a list describing all the known transactions relevant to the wallet.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param {Number} opts.endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param {String} opts.account An optional filter to only include transactions relevant to an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcTransactionDetails}
     */

  }, {
    key: "getTransactions",
    value: function getTransactions(opts) {
      return this.getTransactionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listchannels` ListChannels returns a description of all the open channels that this node is a participant in.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.activeOnly 
     * @param {Boolean} opts.inactiveOnly 
     * @param {Boolean} opts.publicOnly 
     * @param {Boolean} opts.privateOnly 
     * @param {Blob} opts.peer Filters the response for channels with a target peer's pubkey. If peer is empty, all channels will be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListChannelsResponse} and HTTP response
     */

  }, {
    key: "listChannelsWithHttpInfo",
    value: function listChannelsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'active_only': opts['activeOnly'],
        'inactive_only': opts['inactiveOnly'],
        'public_only': opts['publicOnly'],
        'private_only': opts['privateOnly'],
        'peer': opts['peer']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListChannelsResponse["default"];
      return this.apiClient.callApi('/v1/channels', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listchannels` ListChannels returns a description of all the open channels that this node is a participant in.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.activeOnly 
     * @param {Boolean} opts.inactiveOnly 
     * @param {Boolean} opts.publicOnly 
     * @param {Boolean} opts.privateOnly 
     * @param {Blob} opts.peer Filters the response for channels with a target peer's pubkey. If peer is empty, all channels will be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListChannelsResponse}
     */

  }, {
    key: "listChannels",
    value: function listChannels(opts) {
      return this.listChannelsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listinvoices` ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.pendingOnly If set, only invoices that are not settled and not canceled will be returned in the response.
     * @param {String} opts.indexOffset The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response.
     * @param {String} opts.numMaxInvoices The max number of invoices to return in the response to this query.
     * @param {Boolean} opts.reversed If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListInvoiceResponse} and HTTP response
     */

  }, {
    key: "listInvoicesWithHttpInfo",
    value: function listInvoicesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'pending_only': opts['pendingOnly'],
        'index_offset': opts['indexOffset'],
        'num_max_invoices': opts['numMaxInvoices'],
        'reversed': opts['reversed']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListInvoiceResponse["default"];
      return this.apiClient.callApi('/v1/invoices', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listinvoices` ListInvoices returns a list of all the invoices currently stored within the database. Any active debug invoices are ignored. It has full support for paginated responses, allowing users to query for specific invoices through their add_index. This can be done by using either the first_index_offset or last_index_offset fields included in the response as the index_offset of the next request. By default, the first 100 invoices created will be returned. Backwards pagination is also supported through the Reversed flag.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.pendingOnly If set, only invoices that are not settled and not canceled will be returned in the response.
     * @param {String} opts.indexOffset The index of an invoice that will be used as either the start or end of a query to determine which invoices should be returned in the response.
     * @param {String} opts.numMaxInvoices The max number of invoices to return in the response to this query.
     * @param {Boolean} opts.reversed If set, the invoices returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListInvoiceResponse}
     */

  }, {
    key: "listInvoices",
    value: function listInvoices(opts) {
      return this.listInvoicesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listmacaroonids` ListMacaroonIDs returns all root key IDs that are in use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListMacaroonIDsResponse} and HTTP response
     */

  }, {
    key: "listMacaroonIDsWithHttpInfo",
    value: function listMacaroonIDsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListMacaroonIDsResponse["default"];
      return this.apiClient.callApi('/v1/macaroon/ids', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listmacaroonids` ListMacaroonIDs returns all root key IDs that are in use.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListMacaroonIDsResponse}
     */

  }, {
    key: "listMacaroonIDs",
    value: function listMacaroonIDs() {
      return this.listMacaroonIDsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listpayments` ListPayments returns a list of all outgoing payments.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeIncomplete If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn't change the meaning of the indices, which are tied to individual payments.
     * @param {String} opts.indexOffset The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards.
     * @param {String} opts.maxPayments The maximal number of payments returned in the response to this query.
     * @param {Boolean} opts.reversed If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListPaymentsResponse} and HTTP response
     */

  }, {
    key: "listPaymentsWithHttpInfo",
    value: function listPaymentsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'include_incomplete': opts['includeIncomplete'],
        'index_offset': opts['indexOffset'],
        'max_payments': opts['maxPayments'],
        'reversed': opts['reversed']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListPaymentsResponse["default"];
      return this.apiClient.callApi('/v1/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listpayments` ListPayments returns a list of all outgoing payments.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeIncomplete If true, then return payments that have not yet fully completed. This means that pending payments, as well as failed payments will show up if this field is set to true. This flag doesn't change the meaning of the indices, which are tied to individual payments.
     * @param {String} opts.indexOffset The index of a payment that will be used as either the start or end of a query to determine which payments should be returned in the response. The index_offset is exclusive. In the case of a zero index_offset, the query will start with the oldest payment when paginating forwards, or will end with the most recent payment when paginating backwards.
     * @param {String} opts.maxPayments The maximal number of payments returned in the response to this query.
     * @param {Boolean} opts.reversed If set, the payments returned will result from seeking backwards from the specified index offset. This can be used to paginate backwards. The order of the returned payments is always oldest first (ascending index order).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListPaymentsResponse}
     */

  }, {
    key: "listPayments",
    value: function listPayments(opts) {
      return this.listPaymentsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listpeers` ListPeers returns a verbose listing of all currently active peers.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestError If true, only the last error that our peer sent us will be returned with the peer's information, rather than the full set of historic errors we have stored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListPeersResponse} and HTTP response
     */

  }, {
    key: "listPeersWithHttpInfo",
    value: function listPeersWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'latest_error': opts['latestError']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListPeersResponse["default"];
      return this.apiClient.callApi('/v1/peers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listpeers` ListPeers returns a verbose listing of all currently active peers.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestError If true, only the last error that our peer sent us will be returned with the peer's information, rather than the full set of historic errors we have stored.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListPeersResponse}
     */

  }, {
    key: "listPeers",
    value: function listPeers(opts) {
      return this.listPeersWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listpermissions` ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListPermissionsResponse} and HTTP response
     */

  }, {
    key: "listPermissionsWithHttpInfo",
    value: function listPermissionsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListPermissionsResponse["default"];
      return this.apiClient.callApi('/v1/macaroon/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listpermissions` ListPermissions lists all RPC method URIs and their required macaroon permissions to access them.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListPermissionsResponse}
     */

  }, {
    key: "listPermissions",
    value: function listPermissions() {
      return this.listPermissionsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `listunspent` Deprecated, use walletrpc.ListUnspent instead.
     * ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minConfs The minimum number of confirmations to be included.
     * @param {Number} opts.maxConfs The maximum number of confirmations to be included.
     * @param {String} opts.account An optional filter to only include outputs belonging to an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcListUnspentResponse} and HTTP response
     */

  }, {
    key: "listUnspentWithHttpInfo",
    value: function listUnspentWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'min_confs': opts['minConfs'],
        'max_confs': opts['maxConfs'],
        'account': opts['account']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcListUnspentResponse["default"];
      return this.apiClient.callApi('/v1/utxos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `listunspent` Deprecated, use walletrpc.ListUnspent instead.
     * ListUnspent returns a list of all utxos spendable by the wallet with a number of confirmations between the specified minimum and maximum.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minConfs The minimum number of confirmations to be included.
     * @param {Number} opts.maxConfs The maximum number of confirmations to be included.
     * @param {String} opts.account An optional filter to only include outputs belonging to an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcListUnspentResponse}
     */

  }, {
    key: "listUnspent",
    value: function listUnspent(opts) {
      return this.listUnspentWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `lookupinvoice` LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
     * @param {String} rHashStr The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.rHash The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcInvoice} and HTTP response
     */

  }, {
    key: "lookupInvoiceWithHttpInfo",
    value: function lookupInvoiceWithHttpInfo(rHashStr, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'rHashStr' is set

      if (rHashStr === undefined || rHashStr === null) {
        throw new Error("Missing the required parameter 'rHashStr' when calling lookupInvoice");
      }

      var pathParams = {
        'r_hash_str': rHashStr
      };
      var queryParams = {
        'r_hash': opts['rHash']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcInvoice["default"];
      return this.apiClient.callApi('/v1/invoice/{r_hash_str}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `lookupinvoice` LookupInvoice attempts to look up an invoice according to its payment hash. The passed payment hash *must* be exactly 32 bytes, if not, an error is returned.
     * @param {String} rHashStr The hex-encoded payment hash of the invoice to be looked up. The passed payment hash must be exactly 32 bytes, otherwise an error is returned. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.rHash The payment hash of the invoice to be looked up. When using REST, this field must be encoded as base64.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcInvoice}
     */

  }, {
    key: "lookupInvoice",
    value: function lookupInvoice(rHashStr, opts) {
      return this.lookupInvoiceWithHttpInfo(rHashStr, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `newaddress` NewAddress creates a new address under control of the local wallet.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The type of address to generate. (default to 'WITNESS_PUBKEY_HASH')
     * @param {String} opts.account The name of the account to generate a new address for. If empty, the default wallet account is used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcNewAddressResponse} and HTTP response
     */

  }, {
    key: "newAddressWithHttpInfo",
    value: function newAddressWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'type': opts['type'],
        'account': opts['account']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcNewAddressResponse["default"];
      return this.apiClient.callApi('/v1/newaddress', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `newaddress` NewAddress creates a new address under control of the local wallet.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type The type of address to generate. (default to 'WITNESS_PUBKEY_HASH')
     * @param {String} opts.account The name of the account to generate a new address for. If empty, the default wallet account is used.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcNewAddressResponse}
     */

  }, {
    key: "newAddress",
    value: function newAddress(opts) {
      return this.newAddressWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `openchannel` OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
     * @param {module:model/LnrpcOpenChannelRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcOpenStatusUpdate} and HTTP response
     */

  }, {
    key: "openChannelWithHttpInfo",
    value: function openChannelWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling openChannel");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcOpenStatusUpdate["default"];
      return this.apiClient.callApi('/v1/channels/stream', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `openchannel` OpenChannel attempts to open a singly funded channel specified in the request to a remote peer. Users are able to specify a target number of blocks that the funding transaction should be confirmed in, or a manual fee rate to us for the funding transaction. If neither are specified, then a lax block confirmation target is used. Each OpenStatusUpdate will return the pending channel ID of the in-progress channel. Depending on the arguments specified in the OpenChannelRequest, this pending channel ID can then be used to manually progress the channel funding flow.
     * @param {module:model/LnrpcOpenChannelRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcOpenStatusUpdate}
     */

  }, {
    key: "openChannel",
    value: function openChannel(body) {
      return this.openChannelWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
     * @param {module:model/LnrpcOpenChannelRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcChannelPoint} and HTTP response
     */

  }, {
    key: "openChannelSyncWithHttpInfo",
    value: function openChannelSyncWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling openChannelSync");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcChannelPoint["default"];
      return this.apiClient.callApi('/v1/channels', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This call is meant to be consumed by clients to the REST proxy. As with all other sync calls, all byte slices are intended to be populated as hex encoded strings.
     * @param {module:model/LnrpcOpenChannelRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcChannelPoint}
     */

  }, {
    key: "openChannelSync",
    value: function openChannelSync(body) {
      return this.openChannelSyncWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `pendingchannels` PendingChannels returns a list of all the channels that are currently considered \"pending\". A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcPendingChannelsResponse} and HTTP response
     */

  }, {
    key: "pendingChannelsWithHttpInfo",
    value: function pendingChannelsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcPendingChannelsResponse["default"];
      return this.apiClient.callApi('/v1/channels/pending', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `pendingchannels` PendingChannels returns a list of all the channels that are currently considered \"pending\". A channel is pending if it has finished the funding workflow and is waiting for confirmations for the funding txn, or is in the process of closure, either initiated cooperatively or non-cooperatively.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcPendingChannelsResponse}
     */

  }, {
    key: "pendingChannels",
    value: function pendingChannels() {
      return this.pendingChannelsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `queryroutes` QueryRoutes attempts to query the daemon's Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.
     * When using REST, the `dest_custom_records` map type can be set by appending `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * @param {String} pubKey The 33-byte hex-encoded public key for the payment destination
     * @param {String} amt The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
     * @param {Object} opts Optional parameters
     * @param {String} opts.amtMsat The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive.
     * @param {Number} opts.finalCltvDelta An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight.
     * @param {String} opts.feeLimitFixed The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @param {String} opts.feeLimitFixedMsat The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @param {String} opts.feeLimitPercent The fee limit expressed as a percentage of the payment amount.
     * @param {Array.<Blob>} opts.ignoredNodes A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64.
     * @param {String} opts.sourcePubKey The source node where the request route should originated from. If empty, self is assumed.
     * @param {Boolean} opts.useMissionControl If set to true, edge probabilities from mission control will be used to get the optimal route.
     * @param {Number} opts.cltvLimit An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd's `--max-cltv-expiry` setting. If zero, then the value of `--max-cltv-expiry` is used as the limit.
     * @param {String} opts.outgoingChanId The channel id of the channel that must be taken to the first hop. If zero, any channel may be used.
     * @param {Blob} opts.lastHopPubkey The pubkey of the last hop of the route. If empty, any hop may be used.
     * @param {Array.<module:model/String>} opts.destFeatures Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcQueryRoutesResponse} and HTTP response
     */

  }, {
    key: "queryRoutesWithHttpInfo",
    value: function queryRoutesWithHttpInfo(pubKey, amt, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pubKey' is set

      if (pubKey === undefined || pubKey === null) {
        throw new Error("Missing the required parameter 'pubKey' when calling queryRoutes");
      } // verify the required parameter 'amt' is set


      if (amt === undefined || amt === null) {
        throw new Error("Missing the required parameter 'amt' when calling queryRoutes");
      }

      var pathParams = {
        'pub_key': pubKey,
        'amt': amt
      };
      var queryParams = {
        'amt_msat': opts['amtMsat'],
        'final_cltv_delta': opts['finalCltvDelta'],
        'fee_limit.fixed': opts['feeLimitFixed'],
        'fee_limit.fixed_msat': opts['feeLimitFixedMsat'],
        'fee_limit.percent': opts['feeLimitPercent'],
        'ignored_nodes': this.apiClient.buildCollectionParam(opts['ignoredNodes'], 'multi'),
        'source_pub_key': opts['sourcePubKey'],
        'use_mission_control': opts['useMissionControl'],
        'cltv_limit': opts['cltvLimit'],
        'outgoing_chan_id': opts['outgoingChanId'],
        'last_hop_pubkey': opts['lastHopPubkey'],
        'dest_features': this.apiClient.buildCollectionParam(opts['destFeatures'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcQueryRoutesResponse["default"];
      return this.apiClient.callApi('/v1/graph/routes/{pub_key}/{amt}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `queryroutes` QueryRoutes attempts to query the daemon's Channel Router for a possible route to a target destination capable of carrying a specific amount of satoshis. The returned route contains the full details required to craft and send an HTLC, also including the necessary information that should be present within the Sphinx packet encapsulated within the HTLC.
     * When using REST, the `dest_custom_records` map type can be set by appending `&dest_custom_records[<record_number>]=<record_data_base64_url_encoded>` to the URL. Unfortunately this map type doesn't appear in the REST API documentation because of a bug in the grpc-gateway library.
     * @param {String} pubKey The 33-byte hex-encoded public key for the payment destination
     * @param {String} amt The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
     * @param {Object} opts Optional parameters
     * @param {String} opts.amtMsat The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive.
     * @param {Number} opts.finalCltvDelta An optional CLTV delta from the current height that should be used for the timelock of the final hop. Note that unlike SendPayment, QueryRoutes does not add any additional block padding on top of final_ctlv_delta. This padding of a few blocks needs to be added manually or otherwise failures may happen when a block comes in while the payment is in flight.
     * @param {String} opts.feeLimitFixed The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @param {String} opts.feeLimitFixedMsat The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
     * @param {String} opts.feeLimitPercent The fee limit expressed as a percentage of the payment amount.
     * @param {Array.<Blob>} opts.ignoredNodes A list of nodes to ignore during path finding. When using REST, these fields must be encoded as base64.
     * @param {String} opts.sourcePubKey The source node where the request route should originated from. If empty, self is assumed.
     * @param {Boolean} opts.useMissionControl If set to true, edge probabilities from mission control will be used to get the optimal route.
     * @param {Number} opts.cltvLimit An optional maximum total time lock for the route. If the source is empty or ourselves, this should not exceed lnd's `--max-cltv-expiry` setting. If zero, then the value of `--max-cltv-expiry` is used as the limit.
     * @param {String} opts.outgoingChanId The channel id of the channel that must be taken to the first hop. If zero, any channel may be used.
     * @param {Blob} opts.lastHopPubkey The pubkey of the last hop of the route. If empty, any hop may be used.
     * @param {Array.<module:model/String>} opts.destFeatures Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcQueryRoutesResponse}
     */

  }, {
    key: "queryRoutes",
    value: function queryRoutes(pubKey, amt, opts) {
      return this.queryRoutesWithHttpInfo(pubKey, amt, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `restorechanbackup` RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
     * @param {module:model/LnrpcRestoreChanBackupRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "restoreChannelBackupsWithHttpInfo",
    value: function restoreChannelBackupsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling restoreChannelBackups");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/channels/backup/restore', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `restorechanbackup` RestoreChannelBackups accepts a set of singular channel backups, or a single encrypted multi-chan backup and attempts to recover any funds remaining within the channel. If we are able to unpack the backup, then the new channel will be shown under listchannels, as well as pending channels.
     * @param {module:model/LnrpcRestoreChanBackupRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "restoreChannelBackups",
    value: function restoreChannelBackups(body) {
      return this.restoreChannelBackupsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `sendcoins` SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param {module:model/LnrpcSendCoinsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcSendCoinsResponse} and HTTP response
     */

  }, {
    key: "sendCoinsWithHttpInfo",
    value: function sendCoinsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendCoins");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcSendCoinsResponse["default"];
      return this.apiClient.callApi('/v1/transactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `sendcoins` SendCoins executes a request to send coins to a particular address. Unlike SendMany, this RPC call only allows creating a single output at a time. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param {module:model/LnrpcSendCoinsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcSendCoinsResponse}
     */

  }, {
    key: "sendCoins",
    value: function sendCoins(body) {
      return this.sendCoinsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `sendmany` SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param {module:model/LnrpcSendManyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcSendManyResponse} and HTTP response
     */

  }, {
    key: "sendManyWithHttpInfo",
    value: function sendManyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendMany");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcSendManyResponse["default"];
      return this.apiClient.callApi('/v1/transactions/many', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `sendmany` SendMany handles a request for a transaction that creates multiple specified outputs in parallel. If neither target_conf, or sat_per_vbyte are set, then the internal wallet will consult its fee model to determine a fee for the default confirmation target.
     * @param {module:model/LnrpcSendManyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcSendManyResponse}
     */

  }, {
    key: "sendMany",
    value: function sendMany(body) {
      return this.sendManyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `sendpayment` Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
     * @param {module:model/LnrpcSendRequest} body  (streaming inputs)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcSendResponse} and HTTP response
     */

  }, {
    key: "sendPaymentWithHttpInfo",
    value: function sendPaymentWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendPayment");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcSendResponse["default"];
      return this.apiClient.callApi('/v1/channels/transaction-stream', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `sendpayment` Deprecated, use routerrpc.SendPaymentV2. SendPayment dispatches a bi-directional streaming RPC for sending payments through the Lightning Network. A single RPC invocation creates a persistent bi-directional stream allowing clients to rapidly send payments through the Lightning Network with a single persistent connection.
     * @param {module:model/LnrpcSendRequest} body  (streaming inputs)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcSendResponse}
     */

  }, {
    key: "sendPayment",
    value: function sendPayment(body) {
      return this.sendPaymentWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination's public key and the payment hash (if any) to be encoded as hex strings.
     * @param {module:model/LnrpcSendRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcSendResponse} and HTTP response
     */

  }, {
    key: "sendPaymentSyncWithHttpInfo",
    value: function sendPaymentSyncWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendPaymentSync");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcSendResponse["default"];
      return this.apiClient.callApi('/v1/channels/transactions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SendPaymentSync is the synchronous non-streaming version of SendPayment. This RPC is intended to be consumed by clients of the REST proxy. Additionally, this RPC expects the destination's public key and the payment hash (if any) to be encoded as hex strings.
     * @param {module:model/LnrpcSendRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcSendResponse}
     */

  }, {
    key: "sendPaymentSync",
    value: function sendPaymentSync(body) {
      return this.sendPaymentSyncWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
     * @param {module:model/LnrpcSendToRouteRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcSendResponse} and HTTP response
     */

  }, {
    key: "sendToRouteSyncWithHttpInfo",
    value: function sendToRouteSyncWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling sendToRouteSync");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcSendResponse["default"];
      return this.apiClient.callApi('/v1/channels/transactions/route', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SendToRouteSync is a synchronous version of SendToRoute. It Will block until the payment either fails or succeeds.
     * @param {module:model/LnrpcSendToRouteRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcSendResponse}
     */

  }, {
    key: "sendToRouteSync",
    value: function sendToRouteSync(body) {
      return this.sendToRouteSyncWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `signmessage` SignMessage signs a message with this node's private key. The returned signature string is `zbase32` encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
     * @param {module:model/LnrpcSignMessageRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcSignMessageResponse} and HTTP response
     */

  }, {
    key: "signMessageWithHttpInfo",
    value: function signMessageWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling signMessage");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcSignMessageResponse["default"];
      return this.apiClient.callApi('/v1/signmessage', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `signmessage` SignMessage signs a message with this node's private key. The returned signature string is `zbase32` encoded and pubkey recoverable, meaning that only the message digest and signature are needed for verification.
     * @param {module:model/LnrpcSignMessageRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcSignMessageResponse}
     */

  }, {
    key: "signMessage",
    value: function signMessage(body) {
      return this.signMessageWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `stop` StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
     * @param {Object.<String, Object>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "stopDaemonWithHttpInfo",
    value: function stopDaemonWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling stopDaemon");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/stop', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `stop` StopDaemon will send a shutdown request to the interrupt handler, triggering a graceful shutdown of the daemon.
     * @param {Object.<String, Object>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "stopDaemon",
    value: function stopDaemon(body) {
      return this.stopDaemonWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcChanBackupSnapshot} and HTTP response
     */

  }, {
    key: "subscribeChannelBackupsWithHttpInfo",
    value: function subscribeChannelBackupsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcChanBackupSnapshot["default"];
      return this.apiClient.callApi('/v1/channels/backup/subscribe', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SubscribeChannelBackups allows a client to sub-subscribe to the most up to date information concerning the state of all channel backups. Each time a new channel is added, we return the new set of channels, along with a multi-chan backup containing the backup info for all channels. Each time a channel is closed, we send a new update, which contains new new chan back ups, but the updated set of encrypted multi-chan backups with the closed channel(s) removed.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcChanBackupSnapshot}
     */

  }, {
    key: "subscribeChannelBackups",
    value: function subscribeChannelBackups() {
      return this.subscribeChannelBackupsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcChannelEventUpdate} and HTTP response
     */

  }, {
    key: "subscribeChannelEventsWithHttpInfo",
    value: function subscribeChannelEventsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcChannelEventUpdate["default"];
      return this.apiClient.callApi('/v1/channels/subscribe', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SubscribeChannelEvents creates a uni-directional stream from the server to the client in which any updates relevant to the state of the channels are sent over. Events include new active channels, inactive channels, and closed channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcChannelEventUpdate}
     */

  }, {
    key: "subscribeChannelEvents",
    value: function subscribeChannelEvents() {
      return this.subscribeChannelEventsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcGraphTopologyUpdate} and HTTP response
     */

  }, {
    key: "subscribeChannelGraphWithHttpInfo",
    value: function subscribeChannelGraphWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcGraphTopologyUpdate["default"];
      return this.apiClient.callApi('/v1/graph/subscribe', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SubscribeChannelGraph launches a streaming RPC that allows the caller to receive notifications upon any changes to the channel graph topology from the point of view of the responding node. Events notified include: new nodes coming online, nodes updating their authenticated attributes, new channels being advertised, updates in the routing policy for a directional channel edge, and when channels are closed on-chain.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcGraphTopologyUpdate}
     */

  }, {
    key: "subscribeChannelGraph",
    value: function subscribeChannelGraph() {
      return this.subscribeChannelGraphWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SubscribeInvoices returns a uni-directional stream (server -> client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we'll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we'll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we'll only send out the latest add/settle events.
     * @param {Object} opts Optional parameters
     * @param {String} opts.addIndex If specified (non-zero), then we'll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC.
     * @param {String} opts.settleIndex If specified (non-zero), then we'll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcInvoice} and HTTP response
     */

  }, {
    key: "subscribeInvoicesWithHttpInfo",
    value: function subscribeInvoicesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'add_index': opts['addIndex'],
        'settle_index': opts['settleIndex']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcInvoice["default"];
      return this.apiClient.callApi('/v1/invoices/subscribe', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SubscribeInvoices returns a uni-directional stream (server -> client) for notifying the client of newly added/settled invoices. The caller can optionally specify the add_index and/or the settle_index. If the add_index is specified, then we'll first start by sending add invoice events for all invoices with an add_index greater than the specified value. If the settle_index is specified, the next, we'll send out all settle events for invoices with a settle_index greater than the specified value. One or both of these fields can be set. If no fields are set, then we'll only send out the latest add/settle events.
     * @param {Object} opts Optional parameters
     * @param {String} opts.addIndex If specified (non-zero), then we'll first start by sending out notifications for all added indexes with an add_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC.
     * @param {String} opts.settleIndex If specified (non-zero), then we'll first start by sending out notifications for all settled indexes with an settle_index greater than this value. This allows callers to catch up on any events they missed while they weren't connected to the streaming RPC.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcInvoice}
     */

  }, {
    key: "subscribeInvoices",
    value: function subscribeInvoices(opts) {
      return this.subscribeInvoicesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcPeerEvent} and HTTP response
     */

  }, {
    key: "subscribePeerEventsWithHttpInfo",
    value: function subscribePeerEventsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcPeerEvent["default"];
      return this.apiClient.callApi('/v1/peers/subscribe', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SubscribePeerEvents creates a uni-directional stream from the server to the client in which any events relevant to the state of peers are sent over. Events include peers going online and offline.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcPeerEvent}
     */

  }, {
    key: "subscribePeerEvents",
    value: function subscribePeerEvents() {
      return this.subscribePeerEventsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param {Number} opts.endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param {String} opts.account An optional filter to only include transactions relevant to an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StreamResultOfLnrpcTransaction} and HTTP response
     */

  }, {
    key: "subscribeTransactionsWithHttpInfo",
    value: function subscribeTransactionsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'start_height': opts['startHeight'],
        'end_height': opts['endHeight'],
        'account': opts['account']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StreamResultOfLnrpcTransaction["default"];
      return this.apiClient.callApi('/v1/transactions/subscribe', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * SubscribeTransactions creates a uni-directional stream from the server to the client in which any newly discovered transactions relevant to the wallet are sent over.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startHeight The height from which to list transactions, inclusive. If this value is greater than end_height, transactions will be read in reverse.
     * @param {Number} opts.endHeight The height until which to list transactions, inclusive. To include unconfirmed transactions, this value should be set to -1, which will return transactions from start_height until the current chain tip and unconfirmed transactions. If no end_height is provided, the call will default to this option.
     * @param {String} opts.account An optional filter to only include transactions relevant to an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StreamResultOfLnrpcTransaction}
     */

  }, {
    key: "subscribeTransactions",
    value: function subscribeTransactions(opts) {
      return this.subscribeTransactionsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `updatechanpolicy` UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
     * @param {module:model/LnrpcPolicyUpdateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "updateChannelPolicyWithHttpInfo",
    value: function updateChannelPolicyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateChannelPolicy");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/chanpolicy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `updatechanpolicy` UpdateChannelPolicy allows the caller to update the fee schedule and channel policies for all channels globally, or a particular channel.
     * @param {module:model/LnrpcPolicyUpdateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "updateChannelPolicy",
    value: function updateChannelPolicy(body) {
      return this.updateChannelPolicyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
     * @param {module:model/LnrpcChanBackupSnapshot} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "verifyChanBackupWithHttpInfo",
    value: function verifyChanBackupWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling verifyChanBackup");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/v1/channels/backup/verify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * VerifyChanBackup allows a caller to verify the integrity of a channel backup snapshot. This method will accept either a packed Single or a packed Multi. Specifying both will result in an error.
     * @param {module:model/LnrpcChanBackupSnapshot} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "verifyChanBackup",
    value: function verifyChanBackup(body) {
      return this.verifyChanBackupWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `verifymessage` VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node's channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
     * @param {module:model/LnrpcVerifyMessageRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcVerifyMessageResponse} and HTTP response
     */

  }, {
    key: "verifyMessageWithHttpInfo",
    value: function verifyMessageWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling verifyMessage");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _LnrpcVerifyMessageResponse["default"];
      return this.apiClient.callApi('/v1/verifymessage', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `verifymessage` VerifyMessage verifies a signature over a msg. The signature must be zbase32 encoded and signed by an active node in the resident node's channel database. In addition to returning the validity of the signature, VerifyMessage also returns the recovered pubkey from the signature.
     * @param {module:model/LnrpcVerifyMessageRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcVerifyMessageResponse}
     */

  }, {
    key: "verifyMessage",
    value: function verifyMessage(body) {
      return this.verifyMessageWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * lncli: `walletbalance` WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LnrpcWalletBalanceResponse} and HTTP response
     */

  }, {
    key: "walletBalanceWithHttpInfo",
    value: function walletBalanceWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _LnrpcWalletBalanceResponse["default"];
      return this.apiClient.callApi('/v1/balance/blockchain', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * lncli: `walletbalance` WalletBalance returns total unspent outputs(confirmed and unconfirmed), all confirmed unspent outputs and all unconfirmed unspent outputs under control of the wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LnrpcWalletBalanceResponse}
     */

  }, {
    key: "walletBalance",
    value: function walletBalance() {
      return this.walletBalanceWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LightningApi;
}();

exports["default"] = LightningApi;