"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelPoint = _interopRequireDefault(require("./LnrpcChannelPoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcPolicyUpdateRequest model module.
 * @module model/LnrpcPolicyUpdateRequest
 * @version version not set
 */
var LnrpcPolicyUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPolicyUpdateRequest</code>.
   * @alias module:model/LnrpcPolicyUpdateRequest
   */
  function LnrpcPolicyUpdateRequest() {
    _classCallCheck(this, LnrpcPolicyUpdateRequest);

    LnrpcPolicyUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPolicyUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPolicyUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPolicyUpdateRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcPolicyUpdateRequest} The populated <code>LnrpcPolicyUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPolicyUpdateRequest();

        if (data.hasOwnProperty('global')) {
          obj['global'] = _ApiClient["default"].convertToType(data['global'], 'Boolean');
        }

        if (data.hasOwnProperty('chan_point')) {
          obj['chan_point'] = _LnrpcChannelPoint["default"].constructFromObject(data['chan_point']);
        }

        if (data.hasOwnProperty('base_fee_msat')) {
          obj['base_fee_msat'] = _ApiClient["default"].convertToType(data['base_fee_msat'], 'String');
        }

        if (data.hasOwnProperty('fee_rate')) {
          obj['fee_rate'] = _ApiClient["default"].convertToType(data['fee_rate'], 'Number');
        }

        if (data.hasOwnProperty('time_lock_delta')) {
          obj['time_lock_delta'] = _ApiClient["default"].convertToType(data['time_lock_delta'], 'Number');
        }

        if (data.hasOwnProperty('max_htlc_msat')) {
          obj['max_htlc_msat'] = _ApiClient["default"].convertToType(data['max_htlc_msat'], 'String');
        }

        if (data.hasOwnProperty('min_htlc_msat')) {
          obj['min_htlc_msat'] = _ApiClient["default"].convertToType(data['min_htlc_msat'], 'String');
        }

        if (data.hasOwnProperty('min_htlc_msat_specified')) {
          obj['min_htlc_msat_specified'] = _ApiClient["default"].convertToType(data['min_htlc_msat_specified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcPolicyUpdateRequest;
}();
/**
 * If set, then this update applies to all currently active channels.
 * @member {Boolean} global
 */


LnrpcPolicyUpdateRequest.prototype['global'] = undefined;
/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */

LnrpcPolicyUpdateRequest.prototype['chan_point'] = undefined;
/**
 * The base fee charged regardless of the number of milli-satoshis sent.
 * @member {String} base_fee_msat
 */

LnrpcPolicyUpdateRequest.prototype['base_fee_msat'] = undefined;
/**
 * The effective fee rate in milli-satoshis. The precision of this value goes up to 6 decimal places, so 1e-6.
 * @member {Number} fee_rate
 */

LnrpcPolicyUpdateRequest.prototype['fee_rate'] = undefined;
/**
 * The required timelock delta for HTLCs forwarded over the channel.
 * @member {Number} time_lock_delta
 */

LnrpcPolicyUpdateRequest.prototype['time_lock_delta'] = undefined;
/**
 * If set, the maximum HTLC size in milli-satoshis. If unset, the maximum HTLC will be unchanged.
 * @member {String} max_htlc_msat
 */

LnrpcPolicyUpdateRequest.prototype['max_htlc_msat'] = undefined;
/**
 * The minimum HTLC size in milli-satoshis. Only applied if min_htlc_msat_specified is true.
 * @member {String} min_htlc_msat
 */

LnrpcPolicyUpdateRequest.prototype['min_htlc_msat'] = undefined;
/**
 * If true, min_htlc_msat is applied.
 * @member {Boolean} min_htlc_msat_specified
 */

LnrpcPolicyUpdateRequest.prototype['min_htlc_msat_specified'] = undefined;
var _default = LnrpcPolicyUpdateRequest;
exports["default"] = _default;