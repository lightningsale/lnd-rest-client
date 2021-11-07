"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcHTLCAttempt = _interopRequireDefault(require("./LnrpcHTLCAttempt"));

var _LnrpcPaymentFailureReason = _interopRequireDefault(require("./LnrpcPaymentFailureReason"));

var _PaymentPaymentStatus = _interopRequireDefault(require("./PaymentPaymentStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcPayment model module.
 * @module model/LnrpcPayment
 * @version version not set
 */
var LnrpcPayment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPayment</code>.
   * @alias module:model/LnrpcPayment
   */
  function LnrpcPayment() {
    _classCallCheck(this, LnrpcPayment);

    LnrpcPayment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPayment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPayment} obj Optional instance to populate.
     * @return {module:model/LnrpcPayment} The populated <code>LnrpcPayment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPayment();

        if (data.hasOwnProperty('payment_hash')) {
          obj['payment_hash'] = _ApiClient["default"].convertToType(data['payment_hash'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('creation_date')) {
          obj['creation_date'] = _ApiClient["default"].convertToType(data['creation_date'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'String');
        }

        if (data.hasOwnProperty('payment_preimage')) {
          obj['payment_preimage'] = _ApiClient["default"].convertToType(data['payment_preimage'], 'String');
        }

        if (data.hasOwnProperty('value_sat')) {
          obj['value_sat'] = _ApiClient["default"].convertToType(data['value_sat'], 'String');
        }

        if (data.hasOwnProperty('value_msat')) {
          obj['value_msat'] = _ApiClient["default"].convertToType(data['value_msat'], 'String');
        }

        if (data.hasOwnProperty('payment_request')) {
          obj['payment_request'] = _ApiClient["default"].convertToType(data['payment_request'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _PaymentPaymentStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('fee_sat')) {
          obj['fee_sat'] = _ApiClient["default"].convertToType(data['fee_sat'], 'String');
        }

        if (data.hasOwnProperty('fee_msat')) {
          obj['fee_msat'] = _ApiClient["default"].convertToType(data['fee_msat'], 'String');
        }

        if (data.hasOwnProperty('creation_time_ns')) {
          obj['creation_time_ns'] = _ApiClient["default"].convertToType(data['creation_time_ns'], 'String');
        }

        if (data.hasOwnProperty('htlcs')) {
          obj['htlcs'] = _ApiClient["default"].convertToType(data['htlcs'], [_LnrpcHTLCAttempt["default"]]);
        }

        if (data.hasOwnProperty('payment_index')) {
          obj['payment_index'] = _ApiClient["default"].convertToType(data['payment_index'], 'String');
        }

        if (data.hasOwnProperty('failure_reason')) {
          obj['failure_reason'] = _LnrpcPaymentFailureReason["default"].constructFromObject(data['failure_reason']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcPayment;
}();
/**
 * @member {String} payment_hash
 */


LnrpcPayment.prototype['payment_hash'] = undefined;
/**
 * Deprecated, use value_sat or value_msat.
 * @member {String} value
 */

LnrpcPayment.prototype['value'] = undefined;
/**
 * @member {String} creation_date
 */

LnrpcPayment.prototype['creation_date'] = undefined;
/**
 * Deprecated, use fee_sat or fee_msat.
 * @member {String} fee
 */

LnrpcPayment.prototype['fee'] = undefined;
/**
 * @member {String} payment_preimage
 */

LnrpcPayment.prototype['payment_preimage'] = undefined;
/**
 * @member {String} value_sat
 */

LnrpcPayment.prototype['value_sat'] = undefined;
/**
 * @member {String} value_msat
 */

LnrpcPayment.prototype['value_msat'] = undefined;
/**
 * The optional payment request being fulfilled.
 * @member {String} payment_request
 */

LnrpcPayment.prototype['payment_request'] = undefined;
/**
 * @member {module:model/PaymentPaymentStatus} status
 */

LnrpcPayment.prototype['status'] = undefined;
/**
 * @member {String} fee_sat
 */

LnrpcPayment.prototype['fee_sat'] = undefined;
/**
 * @member {String} fee_msat
 */

LnrpcPayment.prototype['fee_msat'] = undefined;
/**
 * The time in UNIX nanoseconds at which the payment was created.
 * @member {String} creation_time_ns
 */

LnrpcPayment.prototype['creation_time_ns'] = undefined;
/**
 * The HTLCs made in attempt to settle the payment.
 * @member {Array.<module:model/LnrpcHTLCAttempt>} htlcs
 */

LnrpcPayment.prototype['htlcs'] = undefined;
/**
 * The creation index of this payment. Each payment can be uniquely identified by this index, which may not strictly increment by 1 for payments made in older versions of lnd.
 * @member {String} payment_index
 */

LnrpcPayment.prototype['payment_index'] = undefined;
/**
 * @member {module:model/LnrpcPaymentFailureReason} failure_reason
 */

LnrpcPayment.prototype['failure_reason'] = undefined;
var _default = LnrpcPayment;
exports["default"] = _default;