"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFeatureBit = _interopRequireDefault(require("./LnrpcFeatureBit"));

var _LnrpcFeeLimit = _interopRequireDefault(require("./LnrpcFeeLimit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcSendRequest model module.
 * @module model/LnrpcSendRequest
 * @version version not set
 */
var LnrpcSendRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcSendRequest</code>.
   * @alias module:model/LnrpcSendRequest
   */
  function LnrpcSendRequest() {
    _classCallCheck(this, LnrpcSendRequest);

    LnrpcSendRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcSendRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcSendRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSendRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcSendRequest} The populated <code>LnrpcSendRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcSendRequest();

        if (data.hasOwnProperty('dest')) {
          obj['dest'] = _ApiClient["default"].convertToType(data['dest'], 'Blob');
        }

        if (data.hasOwnProperty('dest_string')) {
          obj['dest_string'] = _ApiClient["default"].convertToType(data['dest_string'], 'String');
        }

        if (data.hasOwnProperty('amt')) {
          obj['amt'] = _ApiClient["default"].convertToType(data['amt'], 'String');
        }

        if (data.hasOwnProperty('amt_msat')) {
          obj['amt_msat'] = _ApiClient["default"].convertToType(data['amt_msat'], 'String');
        }

        if (data.hasOwnProperty('payment_hash')) {
          obj['payment_hash'] = _ApiClient["default"].convertToType(data['payment_hash'], 'Blob');
        }

        if (data.hasOwnProperty('payment_hash_string')) {
          obj['payment_hash_string'] = _ApiClient["default"].convertToType(data['payment_hash_string'], 'String');
        }

        if (data.hasOwnProperty('payment_request')) {
          obj['payment_request'] = _ApiClient["default"].convertToType(data['payment_request'], 'String');
        }

        if (data.hasOwnProperty('final_cltv_delta')) {
          obj['final_cltv_delta'] = _ApiClient["default"].convertToType(data['final_cltv_delta'], 'Number');
        }

        if (data.hasOwnProperty('fee_limit')) {
          obj['fee_limit'] = _LnrpcFeeLimit["default"].constructFromObject(data['fee_limit']);
        }

        if (data.hasOwnProperty('outgoing_chan_id')) {
          obj['outgoing_chan_id'] = _ApiClient["default"].convertToType(data['outgoing_chan_id'], 'String');
        }

        if (data.hasOwnProperty('last_hop_pubkey')) {
          obj['last_hop_pubkey'] = _ApiClient["default"].convertToType(data['last_hop_pubkey'], 'Blob');
        }

        if (data.hasOwnProperty('cltv_limit')) {
          obj['cltv_limit'] = _ApiClient["default"].convertToType(data['cltv_limit'], 'Number');
        }

        if (data.hasOwnProperty('dest_custom_records')) {
          obj['dest_custom_records'] = _ApiClient["default"].convertToType(data['dest_custom_records'], {
            'String': 'Blob'
          });
        }

        if (data.hasOwnProperty('allow_self_payment')) {
          obj['allow_self_payment'] = _ApiClient["default"].convertToType(data['allow_self_payment'], 'Boolean');
        }

        if (data.hasOwnProperty('dest_features')) {
          obj['dest_features'] = _ApiClient["default"].convertToType(data['dest_features'], [_LnrpcFeatureBit["default"]]);
        }

        if (data.hasOwnProperty('payment_addr')) {
          obj['payment_addr'] = _ApiClient["default"].convertToType(data['payment_addr'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcSendRequest;
}();
/**
 * The identity pubkey of the payment recipient. When using REST, this field must be encoded as base64.
 * @member {Blob} dest
 */


LnrpcSendRequest.prototype['dest'] = undefined;
/**
 * The hex-encoded identity pubkey of the payment recipient. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
 * @member {String} dest_string
 */

LnrpcSendRequest.prototype['dest_string'] = undefined;
/**
 * The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive.
 * @member {String} amt
 */

LnrpcSendRequest.prototype['amt'] = undefined;
/**
 * The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive.
 * @member {String} amt_msat
 */

LnrpcSendRequest.prototype['amt_msat'] = undefined;
/**
 * The hash to use within the payment's HTLC. When using REST, this field must be encoded as base64.
 * @member {Blob} payment_hash
 */

LnrpcSendRequest.prototype['payment_hash'] = undefined;
/**
 * The hex-encoded hash to use within the payment's HTLC. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
 * @member {String} payment_hash_string
 */

LnrpcSendRequest.prototype['payment_hash_string'] = undefined;
/**
 * A bare-bones invoice for a payment within the Lightning Network. With the details of the invoice, the sender has all the data necessary to send a payment to the recipient.
 * @member {String} payment_request
 */

LnrpcSendRequest.prototype['payment_request'] = undefined;
/**
 * The CLTV delta from the current height that should be used to set the timelock for the final hop.
 * @member {Number} final_cltv_delta
 */

LnrpcSendRequest.prototype['final_cltv_delta'] = undefined;
/**
 * @member {module:model/LnrpcFeeLimit} fee_limit
 */

LnrpcSendRequest.prototype['fee_limit'] = undefined;
/**
 * The channel id of the channel that must be taken to the first hop. If zero, any channel may be used.
 * @member {String} outgoing_chan_id
 */

LnrpcSendRequest.prototype['outgoing_chan_id'] = undefined;
/**
 * The pubkey of the last hop of the route. If empty, any hop may be used.
 * @member {Blob} last_hop_pubkey
 */

LnrpcSendRequest.prototype['last_hop_pubkey'] = undefined;
/**
 * An optional maximum total time lock for the route. This should not exceed lnd's `--max-cltv-expiry` setting. If zero, then the value of `--max-cltv-expiry` is enforced.
 * @member {Number} cltv_limit
 */

LnrpcSendRequest.prototype['cltv_limit'] = undefined;
/**
 * An optional field that can be used to pass an arbitrary set of TLV records to a peer which understands the new records. This can be used to pass application specific data during the payment attempt. Record types are required to be in the custom range >= 65536. When using REST, the values must be encoded as base64.
 * @member {Object.<String, Blob>} dest_custom_records
 */

LnrpcSendRequest.prototype['dest_custom_records'] = undefined;
/**
 * If set, circular payments to self are permitted.
 * @member {Boolean} allow_self_payment
 */

LnrpcSendRequest.prototype['allow_self_payment'] = undefined;
/**
 * Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback.
 * @member {Array.<module:model/LnrpcFeatureBit>} dest_features
 */

LnrpcSendRequest.prototype['dest_features'] = undefined;
/**
 * The payment address of the generated invoice.
 * @member {Blob} payment_addr
 */

LnrpcSendRequest.prototype['payment_addr'] = undefined;
var _default = LnrpcSendRequest;
exports["default"] = _default;