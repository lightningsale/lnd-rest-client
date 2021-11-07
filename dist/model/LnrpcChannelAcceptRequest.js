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
 * The LnrpcChannelAcceptRequest model module.
 * @module model/LnrpcChannelAcceptRequest
 * @version version not set
 */
var LnrpcChannelAcceptRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelAcceptRequest</code>.
   * @alias module:model/LnrpcChannelAcceptRequest
   */
  function LnrpcChannelAcceptRequest() {
    _classCallCheck(this, LnrpcChannelAcceptRequest);

    LnrpcChannelAcceptRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelAcceptRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelAcceptRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelAcceptRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelAcceptRequest} The populated <code>LnrpcChannelAcceptRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelAcceptRequest();

        if (data.hasOwnProperty('node_pubkey')) {
          obj['node_pubkey'] = _ApiClient["default"].convertToType(data['node_pubkey'], 'Blob');
        }

        if (data.hasOwnProperty('chain_hash')) {
          obj['chain_hash'] = _ApiClient["default"].convertToType(data['chain_hash'], 'Blob');
        }

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }

        if (data.hasOwnProperty('funding_amt')) {
          obj['funding_amt'] = _ApiClient["default"].convertToType(data['funding_amt'], 'String');
        }

        if (data.hasOwnProperty('push_amt')) {
          obj['push_amt'] = _ApiClient["default"].convertToType(data['push_amt'], 'String');
        }

        if (data.hasOwnProperty('dust_limit')) {
          obj['dust_limit'] = _ApiClient["default"].convertToType(data['dust_limit'], 'String');
        }

        if (data.hasOwnProperty('max_value_in_flight')) {
          obj['max_value_in_flight'] = _ApiClient["default"].convertToType(data['max_value_in_flight'], 'String');
        }

        if (data.hasOwnProperty('channel_reserve')) {
          obj['channel_reserve'] = _ApiClient["default"].convertToType(data['channel_reserve'], 'String');
        }

        if (data.hasOwnProperty('min_htlc')) {
          obj['min_htlc'] = _ApiClient["default"].convertToType(data['min_htlc'], 'String');
        }

        if (data.hasOwnProperty('fee_per_kw')) {
          obj['fee_per_kw'] = _ApiClient["default"].convertToType(data['fee_per_kw'], 'String');
        }

        if (data.hasOwnProperty('csv_delay')) {
          obj['csv_delay'] = _ApiClient["default"].convertToType(data['csv_delay'], 'Number');
        }

        if (data.hasOwnProperty('max_accepted_htlcs')) {
          obj['max_accepted_htlcs'] = _ApiClient["default"].convertToType(data['max_accepted_htlcs'], 'Number');
        }

        if (data.hasOwnProperty('channel_flags')) {
          obj['channel_flags'] = _ApiClient["default"].convertToType(data['channel_flags'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelAcceptRequest;
}();
/**
 * The pubkey of the node that wishes to open an inbound channel.
 * @member {Blob} node_pubkey
 */


LnrpcChannelAcceptRequest.prototype['node_pubkey'] = undefined;
/**
 * The hash of the genesis block that the proposed channel resides in.
 * @member {Blob} chain_hash
 */

LnrpcChannelAcceptRequest.prototype['chain_hash'] = undefined;
/**
 * The pending channel id.
 * @member {Blob} pending_chan_id
 */

LnrpcChannelAcceptRequest.prototype['pending_chan_id'] = undefined;
/**
 * The funding amount in satoshis that initiator wishes to use in the channel.
 * @member {String} funding_amt
 */

LnrpcChannelAcceptRequest.prototype['funding_amt'] = undefined;
/**
 * The push amount of the proposed channel in millisatoshis.
 * @member {String} push_amt
 */

LnrpcChannelAcceptRequest.prototype['push_amt'] = undefined;
/**
 * The dust limit of the initiator's commitment tx.
 * @member {String} dust_limit
 */

LnrpcChannelAcceptRequest.prototype['dust_limit'] = undefined;
/**
 * The maximum amount of coins in millisatoshis that can be pending in this channel.
 * @member {String} max_value_in_flight
 */

LnrpcChannelAcceptRequest.prototype['max_value_in_flight'] = undefined;
/**
 * The minimum amount of satoshis the initiator requires us to have at all times.
 * @member {String} channel_reserve
 */

LnrpcChannelAcceptRequest.prototype['channel_reserve'] = undefined;
/**
 * The smallest HTLC in millisatoshis that the initiator will accept.
 * @member {String} min_htlc
 */

LnrpcChannelAcceptRequest.prototype['min_htlc'] = undefined;
/**
 * The initial fee rate that the initiator suggests for both commitment transactions.
 * @member {String} fee_per_kw
 */

LnrpcChannelAcceptRequest.prototype['fee_per_kw'] = undefined;
/**
 * The number of blocks to use for the relative time lock in the pay-to-self output of both commitment transactions.
 * @member {Number} csv_delay
 */

LnrpcChannelAcceptRequest.prototype['csv_delay'] = undefined;
/**
 * The total number of incoming HTLC's that the initiator will accept.
 * @member {Number} max_accepted_htlcs
 */

LnrpcChannelAcceptRequest.prototype['max_accepted_htlcs'] = undefined;
/**
 * A bit-field which the initiator uses to specify proposed channel behavior.
 * @member {Number} channel_flags
 */

LnrpcChannelAcceptRequest.prototype['channel_flags'] = undefined;
var _default = LnrpcChannelAcceptRequest;
exports["default"] = _default;