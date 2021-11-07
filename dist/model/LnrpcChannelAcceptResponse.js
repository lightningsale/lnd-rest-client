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
 * The LnrpcChannelAcceptResponse model module.
 * @module model/LnrpcChannelAcceptResponse
 * @version version not set
 */
var LnrpcChannelAcceptResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelAcceptResponse</code>.
   * @alias module:model/LnrpcChannelAcceptResponse
   */
  function LnrpcChannelAcceptResponse() {
    _classCallCheck(this, LnrpcChannelAcceptResponse);

    LnrpcChannelAcceptResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelAcceptResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelAcceptResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelAcceptResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelAcceptResponse} The populated <code>LnrpcChannelAcceptResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelAcceptResponse();

        if (data.hasOwnProperty('accept')) {
          obj['accept'] = _ApiClient["default"].convertToType(data['accept'], 'Boolean');
        }

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('upfront_shutdown')) {
          obj['upfront_shutdown'] = _ApiClient["default"].convertToType(data['upfront_shutdown'], 'String');
        }

        if (data.hasOwnProperty('csv_delay')) {
          obj['csv_delay'] = _ApiClient["default"].convertToType(data['csv_delay'], 'Number');
        }

        if (data.hasOwnProperty('reserve_sat')) {
          obj['reserve_sat'] = _ApiClient["default"].convertToType(data['reserve_sat'], 'String');
        }

        if (data.hasOwnProperty('in_flight_max_msat')) {
          obj['in_flight_max_msat'] = _ApiClient["default"].convertToType(data['in_flight_max_msat'], 'String');
        }

        if (data.hasOwnProperty('max_htlc_count')) {
          obj['max_htlc_count'] = _ApiClient["default"].convertToType(data['max_htlc_count'], 'Number');
        }

        if (data.hasOwnProperty('min_htlc_in')) {
          obj['min_htlc_in'] = _ApiClient["default"].convertToType(data['min_htlc_in'], 'String');
        }

        if (data.hasOwnProperty('min_accept_depth')) {
          obj['min_accept_depth'] = _ApiClient["default"].convertToType(data['min_accept_depth'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelAcceptResponse;
}();
/**
 * Whether or not the client accepts the channel.
 * @member {Boolean} accept
 */


LnrpcChannelAcceptResponse.prototype['accept'] = undefined;
/**
 * The pending channel id to which this response applies.
 * @member {Blob} pending_chan_id
 */

LnrpcChannelAcceptResponse.prototype['pending_chan_id'] = undefined;
/**
 * An optional error to send the initiating party to indicate why the channel was rejected. This field *should not* contain sensitive information, it will be sent to the initiating party. This field should only be set if accept is false, the channel will be rejected if an error is set with accept=true because the meaning of this response is ambiguous. Limited to 500 characters.
 * @member {String} error
 */

LnrpcChannelAcceptResponse.prototype['error'] = undefined;
/**
 * The upfront shutdown address to use if the initiating peer supports option upfront shutdown script (see ListPeers for the features supported). Note that the channel open will fail if this value is set for a peer that does not support this feature bit.
 * @member {String} upfront_shutdown
 */

LnrpcChannelAcceptResponse.prototype['upfront_shutdown'] = undefined;
/**
 * The csv delay (in blocks) that we require for the remote party.
 * @member {Number} csv_delay
 */

LnrpcChannelAcceptResponse.prototype['csv_delay'] = undefined;
/**
 * The reserve amount in satoshis that we require the remote peer to adhere to. We require that the remote peer always have some reserve amount allocated to them so that there is always a disincentive to broadcast old state (if they hold 0 sats on their side of the channel, there is nothing to lose).
 * @member {String} reserve_sat
 */

LnrpcChannelAcceptResponse.prototype['reserve_sat'] = undefined;
/**
 * The maximum amount of funds in millisatoshis that we allow the remote peer to have in outstanding htlcs.
 * @member {String} in_flight_max_msat
 */

LnrpcChannelAcceptResponse.prototype['in_flight_max_msat'] = undefined;
/**
 * The maximum number of htlcs that the remote peer can offer us.
 * @member {Number} max_htlc_count
 */

LnrpcChannelAcceptResponse.prototype['max_htlc_count'] = undefined;
/**
 * The minimum value in millisatoshis for incoming htlcs on the channel.
 * @member {String} min_htlc_in
 */

LnrpcChannelAcceptResponse.prototype['min_htlc_in'] = undefined;
/**
 * The number of confirmations we require before we consider the channel open.
 * @member {Number} min_accept_depth
 */

LnrpcChannelAcceptResponse.prototype['min_accept_depth'] = undefined;
var _default = LnrpcChannelAcceptResponse;
exports["default"] = _default;