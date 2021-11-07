"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InvoiceInvoiceState = _interopRequireDefault(require("./InvoiceInvoiceState"));

var _LnrpcFeature = _interopRequireDefault(require("./LnrpcFeature"));

var _LnrpcInvoiceHTLC = _interopRequireDefault(require("./LnrpcInvoiceHTLC"));

var _LnrpcRouteHint = _interopRequireDefault(require("./LnrpcRouteHint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcInvoice model module.
 * @module model/LnrpcInvoice
 * @version version not set
 */
var LnrpcInvoice = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcInvoice</code>.
   * @alias module:model/LnrpcInvoice
   */
  function LnrpcInvoice() {
    _classCallCheck(this, LnrpcInvoice);

    LnrpcInvoice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcInvoice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcInvoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcInvoice} obj Optional instance to populate.
     * @return {module:model/LnrpcInvoice} The populated <code>LnrpcInvoice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcInvoice();

        if (data.hasOwnProperty('memo')) {
          obj['memo'] = _ApiClient["default"].convertToType(data['memo'], 'String');
        }

        if (data.hasOwnProperty('r_preimage')) {
          obj['r_preimage'] = _ApiClient["default"].convertToType(data['r_preimage'], 'Blob');
        }

        if (data.hasOwnProperty('r_hash')) {
          obj['r_hash'] = _ApiClient["default"].convertToType(data['r_hash'], 'Blob');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('value_msat')) {
          obj['value_msat'] = _ApiClient["default"].convertToType(data['value_msat'], 'String');
        }

        if (data.hasOwnProperty('settled')) {
          obj['settled'] = _ApiClient["default"].convertToType(data['settled'], 'Boolean');
        }

        if (data.hasOwnProperty('creation_date')) {
          obj['creation_date'] = _ApiClient["default"].convertToType(data['creation_date'], 'String');
        }

        if (data.hasOwnProperty('settle_date')) {
          obj['settle_date'] = _ApiClient["default"].convertToType(data['settle_date'], 'String');
        }

        if (data.hasOwnProperty('payment_request')) {
          obj['payment_request'] = _ApiClient["default"].convertToType(data['payment_request'], 'String');
        }

        if (data.hasOwnProperty('description_hash')) {
          obj['description_hash'] = _ApiClient["default"].convertToType(data['description_hash'], 'Blob');
        }

        if (data.hasOwnProperty('expiry')) {
          obj['expiry'] = _ApiClient["default"].convertToType(data['expiry'], 'String');
        }

        if (data.hasOwnProperty('fallback_addr')) {
          obj['fallback_addr'] = _ApiClient["default"].convertToType(data['fallback_addr'], 'String');
        }

        if (data.hasOwnProperty('cltv_expiry')) {
          obj['cltv_expiry'] = _ApiClient["default"].convertToType(data['cltv_expiry'], 'String');
        }

        if (data.hasOwnProperty('route_hints')) {
          obj['route_hints'] = _ApiClient["default"].convertToType(data['route_hints'], [_LnrpcRouteHint["default"]]);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('add_index')) {
          obj['add_index'] = _ApiClient["default"].convertToType(data['add_index'], 'String');
        }

        if (data.hasOwnProperty('settle_index')) {
          obj['settle_index'] = _ApiClient["default"].convertToType(data['settle_index'], 'String');
        }

        if (data.hasOwnProperty('amt_paid')) {
          obj['amt_paid'] = _ApiClient["default"].convertToType(data['amt_paid'], 'String');
        }

        if (data.hasOwnProperty('amt_paid_sat')) {
          obj['amt_paid_sat'] = _ApiClient["default"].convertToType(data['amt_paid_sat'], 'String');
        }

        if (data.hasOwnProperty('amt_paid_msat')) {
          obj['amt_paid_msat'] = _ApiClient["default"].convertToType(data['amt_paid_msat'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _InvoiceInvoiceState["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('htlcs')) {
          obj['htlcs'] = _ApiClient["default"].convertToType(data['htlcs'], [_LnrpcInvoiceHTLC["default"]]);
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], {
            'String': _LnrpcFeature["default"]
          });
        }

        if (data.hasOwnProperty('is_keysend')) {
          obj['is_keysend'] = _ApiClient["default"].convertToType(data['is_keysend'], 'Boolean');
        }

        if (data.hasOwnProperty('payment_addr')) {
          obj['payment_addr'] = _ApiClient["default"].convertToType(data['payment_addr'], 'Blob');
        }

        if (data.hasOwnProperty('is_amp')) {
          obj['is_amp'] = _ApiClient["default"].convertToType(data['is_amp'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcInvoice;
}();
/**
 * An optional memo to attach along with the invoice. Used for record keeping purposes for the invoice's creator, and will also be set in the description field of the encoded payment request if the description_hash field is not being used.
 * @member {String} memo
 */


LnrpcInvoice.prototype['memo'] = undefined;
/**
 * The hex-encoded preimage (32 byte) which will allow settling an incoming HTLC payable to this preimage. When using REST, this field must be encoded as base64.
 * @member {Blob} r_preimage
 */

LnrpcInvoice.prototype['r_preimage'] = undefined;
/**
 * The hash of the preimage. When using REST, this field must be encoded as base64.
 * @member {Blob} r_hash
 */

LnrpcInvoice.prototype['r_hash'] = undefined;
/**
 * The fields value and value_msat are mutually exclusive.
 * @member {String} value
 */

LnrpcInvoice.prototype['value'] = undefined;
/**
 * The fields value and value_msat are mutually exclusive.
 * @member {String} value_msat
 */

LnrpcInvoice.prototype['value_msat'] = undefined;
/**
 * @member {Boolean} settled
 */

LnrpcInvoice.prototype['settled'] = undefined;
/**
 * @member {String} creation_date
 */

LnrpcInvoice.prototype['creation_date'] = undefined;
/**
 * @member {String} settle_date
 */

LnrpcInvoice.prototype['settle_date'] = undefined;
/**
 * A bare-bones invoice for a payment within the Lightning Network. With the details of the invoice, the sender has all the data necessary to send a payment to the recipient.
 * @member {String} payment_request
 */

LnrpcInvoice.prototype['payment_request'] = undefined;
/**
 * Hash (SHA-256) of a description of the payment. Used if the description of payment (memo) is too long to naturally fit within the description field of an encoded payment request. When using REST, this field must be encoded as base64.
 * @member {Blob} description_hash
 */

LnrpcInvoice.prototype['description_hash'] = undefined;
/**
 * Payment request expiry time in seconds. Default is 3600 (1 hour).
 * @member {String} expiry
 */

LnrpcInvoice.prototype['expiry'] = undefined;
/**
 * Fallback on-chain address.
 * @member {String} fallback_addr
 */

LnrpcInvoice.prototype['fallback_addr'] = undefined;
/**
 * Delta to use for the time-lock of the CLTV extended to the final hop.
 * @member {String} cltv_expiry
 */

LnrpcInvoice.prototype['cltv_expiry'] = undefined;
/**
 * Route hints that can each be individually used to assist in reaching the invoice's destination.
 * @member {Array.<module:model/LnrpcRouteHint>} route_hints
 */

LnrpcInvoice.prototype['route_hints'] = undefined;
/**
 * Whether this invoice should include routing hints for private channels.
 * @member {Boolean} private
 */

LnrpcInvoice.prototype['private'] = undefined;
/**
 * The \"add\" index of this invoice. Each newly created invoice will increment this index making it monotonically increasing. Callers to the SubscribeInvoices call can use this to instantly get notified of all added invoices with an add_index greater than this one.
 * @member {String} add_index
 */

LnrpcInvoice.prototype['add_index'] = undefined;
/**
 * The \"settle\" index of this invoice. Each newly settled invoice will increment this index making it monotonically increasing. Callers to the SubscribeInvoices call can use this to instantly get notified of all settled invoices with an settle_index greater than this one.
 * @member {String} settle_index
 */

LnrpcInvoice.prototype['settle_index'] = undefined;
/**
 * Deprecated, use amt_paid_sat or amt_paid_msat.
 * @member {String} amt_paid
 */

LnrpcInvoice.prototype['amt_paid'] = undefined;
/**
 * The amount that was accepted for this invoice, in satoshis. This will ONLY be set if this invoice has been settled. We provide this field as if the invoice was created with a zero value, then we need to record what amount was ultimately accepted. Additionally, it's possible that the sender paid MORE that was specified in the original invoice. So we'll record that here as well.
 * @member {String} amt_paid_sat
 */

LnrpcInvoice.prototype['amt_paid_sat'] = undefined;
/**
 * The amount that was accepted for this invoice, in millisatoshis. This will ONLY be set if this invoice has been settled. We provide this field as if the invoice was created with a zero value, then we need to record what amount was ultimately accepted. Additionally, it's possible that the sender paid MORE that was specified in the original invoice. So we'll record that here as well.
 * @member {String} amt_paid_msat
 */

LnrpcInvoice.prototype['amt_paid_msat'] = undefined;
/**
 * @member {module:model/InvoiceInvoiceState} state
 */

LnrpcInvoice.prototype['state'] = undefined;
/**
 * List of HTLCs paying to this invoice [EXPERIMENTAL].
 * @member {Array.<module:model/LnrpcInvoiceHTLC>} htlcs
 */

LnrpcInvoice.prototype['htlcs'] = undefined;
/**
 * List of features advertised on the invoice.
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */

LnrpcInvoice.prototype['features'] = undefined;
/**
 * Indicates if this invoice was a spontaneous payment that arrived via keysend [EXPERIMENTAL].
 * @member {Boolean} is_keysend
 */

LnrpcInvoice.prototype['is_keysend'] = undefined;
/**
 * The payment address of this invoice. This value will be used in MPP payments, and also for newer invoies that always require the MPP paylaod for added end-to-end security.
 * @member {Blob} payment_addr
 */

LnrpcInvoice.prototype['payment_addr'] = undefined;
/**
 * Signals whether or not this is an AMP invoice.
 * @member {Boolean} is_amp
 */

LnrpcInvoice.prototype['is_amp'] = undefined;
var _default = LnrpcInvoice;
exports["default"] = _default;