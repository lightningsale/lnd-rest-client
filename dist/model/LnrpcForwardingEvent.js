"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcForwardingEvent model module.
 * @module model/LnrpcForwardingEvent
 * @version version not set
 */
var LnrpcForwardingEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcForwardingEvent</code>.
   * @alias module:model/LnrpcForwardingEvent
   */
  function LnrpcForwardingEvent() {
    _classCallCheck(this, LnrpcForwardingEvent);

    LnrpcForwardingEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcForwardingEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcForwardingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcForwardingEvent} obj Optional instance to populate.
     * @return {module:model/LnrpcForwardingEvent} The populated <code>LnrpcForwardingEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcForwardingEvent();

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }

        if (data.hasOwnProperty('chan_id_in')) {
          obj['chan_id_in'] = _ApiClient["default"].convertToType(data['chan_id_in'], 'String');
        }

        if (data.hasOwnProperty('chan_id_out')) {
          obj['chan_id_out'] = _ApiClient["default"].convertToType(data['chan_id_out'], 'String');
        }

        if (data.hasOwnProperty('amt_in')) {
          obj['amt_in'] = _ApiClient["default"].convertToType(data['amt_in'], 'String');
        }

        if (data.hasOwnProperty('amt_out')) {
          obj['amt_out'] = _ApiClient["default"].convertToType(data['amt_out'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'String');
        }

        if (data.hasOwnProperty('fee_msat')) {
          obj['fee_msat'] = _ApiClient["default"].convertToType(data['fee_msat'], 'String');
        }

        if (data.hasOwnProperty('amt_in_msat')) {
          obj['amt_in_msat'] = _ApiClient["default"].convertToType(data['amt_in_msat'], 'String');
        }

        if (data.hasOwnProperty('amt_out_msat')) {
          obj['amt_out_msat'] = _ApiClient["default"].convertToType(data['amt_out_msat'], 'String');
        }

        if (data.hasOwnProperty('timestamp_ns')) {
          obj['timestamp_ns'] = _ApiClient["default"].convertToType(data['timestamp_ns'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcForwardingEvent;
}();
/**
 * Timestamp is the time (unix epoch offset) that this circuit was completed. Deprecated by timestamp_ns.
 * @member {String} timestamp
 */


LnrpcForwardingEvent.prototype['timestamp'] = undefined;
/**
 * The incoming channel ID that carried the HTLC that created the circuit.
 * @member {String} chan_id_in
 */

LnrpcForwardingEvent.prototype['chan_id_in'] = undefined;
/**
 * The outgoing channel ID that carried the preimage that completed the circuit.
 * @member {String} chan_id_out
 */

LnrpcForwardingEvent.prototype['chan_id_out'] = undefined;
/**
 * The total amount (in satoshis) of the incoming HTLC that created half the circuit.
 * @member {String} amt_in
 */

LnrpcForwardingEvent.prototype['amt_in'] = undefined;
/**
 * The total amount (in satoshis) of the outgoing HTLC that created the second half of the circuit.
 * @member {String} amt_out
 */

LnrpcForwardingEvent.prototype['amt_out'] = undefined;
/**
 * The total fee (in satoshis) that this payment circuit carried.
 * @member {String} fee
 */

LnrpcForwardingEvent.prototype['fee'] = undefined;
/**
 * The total fee (in milli-satoshis) that this payment circuit carried.
 * @member {String} fee_msat
 */

LnrpcForwardingEvent.prototype['fee_msat'] = undefined;
/**
 * The total amount (in milli-satoshis) of the incoming HTLC that created half the circuit.
 * @member {String} amt_in_msat
 */

LnrpcForwardingEvent.prototype['amt_in_msat'] = undefined;
/**
 * The total amount (in milli-satoshis) of the outgoing HTLC that created the second half of the circuit.
 * @member {String} amt_out_msat
 */

LnrpcForwardingEvent.prototype['amt_out_msat'] = undefined;
/**
 * The number of nanoseconds elapsed since January 1, 1970 UTC when this circuit was completed.
 * @member {String} timestamp_ns
 */

LnrpcForwardingEvent.prototype['timestamp_ns'] = undefined;
var _default = LnrpcForwardingEvent;
exports["default"] = _default;