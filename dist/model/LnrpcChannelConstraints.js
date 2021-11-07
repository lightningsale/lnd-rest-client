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
 * The LnrpcChannelConstraints model module.
 * @module model/LnrpcChannelConstraints
 * @version version not set
 */
var LnrpcChannelConstraints = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelConstraints</code>.
   * @alias module:model/LnrpcChannelConstraints
   */
  function LnrpcChannelConstraints() {
    _classCallCheck(this, LnrpcChannelConstraints);

    LnrpcChannelConstraints.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelConstraints, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelConstraints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelConstraints} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelConstraints} The populated <code>LnrpcChannelConstraints</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelConstraints();

        if (data.hasOwnProperty('csv_delay')) {
          obj['csv_delay'] = _ApiClient["default"].convertToType(data['csv_delay'], 'Number');
        }

        if (data.hasOwnProperty('chan_reserve_sat')) {
          obj['chan_reserve_sat'] = _ApiClient["default"].convertToType(data['chan_reserve_sat'], 'String');
        }

        if (data.hasOwnProperty('dust_limit_sat')) {
          obj['dust_limit_sat'] = _ApiClient["default"].convertToType(data['dust_limit_sat'], 'String');
        }

        if (data.hasOwnProperty('max_pending_amt_msat')) {
          obj['max_pending_amt_msat'] = _ApiClient["default"].convertToType(data['max_pending_amt_msat'], 'String');
        }

        if (data.hasOwnProperty('min_htlc_msat')) {
          obj['min_htlc_msat'] = _ApiClient["default"].convertToType(data['min_htlc_msat'], 'String');
        }

        if (data.hasOwnProperty('max_accepted_htlcs')) {
          obj['max_accepted_htlcs'] = _ApiClient["default"].convertToType(data['max_accepted_htlcs'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelConstraints;
}();
/**
 * The CSV delay expressed in relative blocks. If the channel is force closed, we will need to wait for this many blocks before we can regain our funds.
 * @member {Number} csv_delay
 */


LnrpcChannelConstraints.prototype['csv_delay'] = undefined;
/**
 * The minimum satoshis this node is required to reserve in its balance.
 * @member {String} chan_reserve_sat
 */

LnrpcChannelConstraints.prototype['chan_reserve_sat'] = undefined;
/**
 * The dust limit (in satoshis) of the initiator's commitment tx.
 * @member {String} dust_limit_sat
 */

LnrpcChannelConstraints.prototype['dust_limit_sat'] = undefined;
/**
 * The maximum amount of coins in millisatoshis that can be pending in this channel.
 * @member {String} max_pending_amt_msat
 */

LnrpcChannelConstraints.prototype['max_pending_amt_msat'] = undefined;
/**
 * The smallest HTLC in millisatoshis that the initiator will accept.
 * @member {String} min_htlc_msat
 */

LnrpcChannelConstraints.prototype['min_htlc_msat'] = undefined;
/**
 * The total number of incoming HTLC's that the initiator will accept.
 * @member {Number} max_accepted_htlcs
 */

LnrpcChannelConstraints.prototype['max_accepted_htlcs'] = undefined;
var _default = LnrpcChannelConstraints;
exports["default"] = _default;