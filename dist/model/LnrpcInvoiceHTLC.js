"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcAMP = _interopRequireDefault(require("./LnrpcAMP"));

var _LnrpcInvoiceHTLCState = _interopRequireDefault(require("./LnrpcInvoiceHTLCState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcInvoiceHTLC model module.
 * @module model/LnrpcInvoiceHTLC
 * @version version not set
 */
var LnrpcInvoiceHTLC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcInvoiceHTLC</code>.
   * @alias module:model/LnrpcInvoiceHTLC
   */
  function LnrpcInvoiceHTLC() {
    _classCallCheck(this, LnrpcInvoiceHTLC);

    LnrpcInvoiceHTLC.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcInvoiceHTLC, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcInvoiceHTLC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcInvoiceHTLC} obj Optional instance to populate.
     * @return {module:model/LnrpcInvoiceHTLC} The populated <code>LnrpcInvoiceHTLC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcInvoiceHTLC();

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('htlc_index')) {
          obj['htlc_index'] = _ApiClient["default"].convertToType(data['htlc_index'], 'String');
        }

        if (data.hasOwnProperty('amt_msat')) {
          obj['amt_msat'] = _ApiClient["default"].convertToType(data['amt_msat'], 'String');
        }

        if (data.hasOwnProperty('accept_height')) {
          obj['accept_height'] = _ApiClient["default"].convertToType(data['accept_height'], 'Number');
        }

        if (data.hasOwnProperty('accept_time')) {
          obj['accept_time'] = _ApiClient["default"].convertToType(data['accept_time'], 'String');
        }

        if (data.hasOwnProperty('resolve_time')) {
          obj['resolve_time'] = _ApiClient["default"].convertToType(data['resolve_time'], 'String');
        }

        if (data.hasOwnProperty('expiry_height')) {
          obj['expiry_height'] = _ApiClient["default"].convertToType(data['expiry_height'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _LnrpcInvoiceHTLCState["default"].constructFromObject(data['state']);
        }

        if (data.hasOwnProperty('custom_records')) {
          obj['custom_records'] = _ApiClient["default"].convertToType(data['custom_records'], {
            'String': 'Blob'
          });
        }

        if (data.hasOwnProperty('mpp_total_amt_msat')) {
          obj['mpp_total_amt_msat'] = _ApiClient["default"].convertToType(data['mpp_total_amt_msat'], 'String');
        }

        if (data.hasOwnProperty('amp')) {
          obj['amp'] = _LnrpcAMP["default"].constructFromObject(data['amp']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcInvoiceHTLC;
}();
/**
 * Short channel id over which the htlc was received.
 * @member {String} chan_id
 */


LnrpcInvoiceHTLC.prototype['chan_id'] = undefined;
/**
 * Index identifying the htlc on the channel.
 * @member {String} htlc_index
 */

LnrpcInvoiceHTLC.prototype['htlc_index'] = undefined;
/**
 * The amount of the htlc in msat.
 * @member {String} amt_msat
 */

LnrpcInvoiceHTLC.prototype['amt_msat'] = undefined;
/**
 * Block height at which this htlc was accepted.
 * @member {Number} accept_height
 */

LnrpcInvoiceHTLC.prototype['accept_height'] = undefined;
/**
 * Time at which this htlc was accepted.
 * @member {String} accept_time
 */

LnrpcInvoiceHTLC.prototype['accept_time'] = undefined;
/**
 * Time at which this htlc was settled or canceled.
 * @member {String} resolve_time
 */

LnrpcInvoiceHTLC.prototype['resolve_time'] = undefined;
/**
 * Block height at which this htlc expires.
 * @member {Number} expiry_height
 */

LnrpcInvoiceHTLC.prototype['expiry_height'] = undefined;
/**
 * @member {module:model/LnrpcInvoiceHTLCState} state
 */

LnrpcInvoiceHTLC.prototype['state'] = undefined;
/**
 * Custom tlv records.
 * @member {Object.<String, Blob>} custom_records
 */

LnrpcInvoiceHTLC.prototype['custom_records'] = undefined;
/**
 * The total amount of the mpp payment in msat.
 * @member {String} mpp_total_amt_msat
 */

LnrpcInvoiceHTLC.prototype['mpp_total_amt_msat'] = undefined;
/**
 * @member {module:model/LnrpcAMP} amp
 */

LnrpcInvoiceHTLC.prototype['amp'] = undefined;
var _default = LnrpcInvoiceHTLC;
exports["default"] = _default;