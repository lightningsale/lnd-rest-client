"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelCloseSummaryClosureType = _interopRequireDefault(require("./ChannelCloseSummaryClosureType"));

var _LnrpcInitiator = _interopRequireDefault(require("./LnrpcInitiator"));

var _LnrpcResolution = _interopRequireDefault(require("./LnrpcResolution"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelCloseSummary model module.
 * @module model/LnrpcChannelCloseSummary
 * @version version not set
 */
var LnrpcChannelCloseSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelCloseSummary</code>.
   * @alias module:model/LnrpcChannelCloseSummary
   */
  function LnrpcChannelCloseSummary() {
    _classCallCheck(this, LnrpcChannelCloseSummary);

    LnrpcChannelCloseSummary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelCloseSummary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelCloseSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelCloseSummary} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelCloseSummary} The populated <code>LnrpcChannelCloseSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelCloseSummary();

        if (data.hasOwnProperty('channel_point')) {
          obj['channel_point'] = _ApiClient["default"].convertToType(data['channel_point'], 'String');
        }

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('chain_hash')) {
          obj['chain_hash'] = _ApiClient["default"].convertToType(data['chain_hash'], 'String');
        }

        if (data.hasOwnProperty('closing_tx_hash')) {
          obj['closing_tx_hash'] = _ApiClient["default"].convertToType(data['closing_tx_hash'], 'String');
        }

        if (data.hasOwnProperty('remote_pubkey')) {
          obj['remote_pubkey'] = _ApiClient["default"].convertToType(data['remote_pubkey'], 'String');
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'String');
        }

        if (data.hasOwnProperty('close_height')) {
          obj['close_height'] = _ApiClient["default"].convertToType(data['close_height'], 'Number');
        }

        if (data.hasOwnProperty('settled_balance')) {
          obj['settled_balance'] = _ApiClient["default"].convertToType(data['settled_balance'], 'String');
        }

        if (data.hasOwnProperty('time_locked_balance')) {
          obj['time_locked_balance'] = _ApiClient["default"].convertToType(data['time_locked_balance'], 'String');
        }

        if (data.hasOwnProperty('close_type')) {
          obj['close_type'] = _ChannelCloseSummaryClosureType["default"].constructFromObject(data['close_type']);
        }

        if (data.hasOwnProperty('open_initiator')) {
          obj['open_initiator'] = _LnrpcInitiator["default"].constructFromObject(data['open_initiator']);
        }

        if (data.hasOwnProperty('close_initiator')) {
          obj['close_initiator'] = _LnrpcInitiator["default"].constructFromObject(data['close_initiator']);
        }

        if (data.hasOwnProperty('resolutions')) {
          obj['resolutions'] = _ApiClient["default"].convertToType(data['resolutions'], [_LnrpcResolution["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelCloseSummary;
}();
/**
 * The outpoint (txid:index) of the funding transaction.
 * @member {String} channel_point
 */


LnrpcChannelCloseSummary.prototype['channel_point'] = undefined;
/**
 * The unique channel ID for the channel.
 * @member {String} chan_id
 */

LnrpcChannelCloseSummary.prototype['chan_id'] = undefined;
/**
 * The hash of the genesis block that this channel resides within.
 * @member {String} chain_hash
 */

LnrpcChannelCloseSummary.prototype['chain_hash'] = undefined;
/**
 * The txid of the transaction which ultimately closed this channel.
 * @member {String} closing_tx_hash
 */

LnrpcChannelCloseSummary.prototype['closing_tx_hash'] = undefined;
/**
 * Public key of the remote peer that we formerly had a channel with.
 * @member {String} remote_pubkey
 */

LnrpcChannelCloseSummary.prototype['remote_pubkey'] = undefined;
/**
 * Total capacity of the channel.
 * @member {String} capacity
 */

LnrpcChannelCloseSummary.prototype['capacity'] = undefined;
/**
 * Height at which the funding transaction was spent.
 * @member {Number} close_height
 */

LnrpcChannelCloseSummary.prototype['close_height'] = undefined;
/**
 * @member {String} settled_balance
 */

LnrpcChannelCloseSummary.prototype['settled_balance'] = undefined;
/**
 * @member {String} time_locked_balance
 */

LnrpcChannelCloseSummary.prototype['time_locked_balance'] = undefined;
/**
 * @member {module:model/ChannelCloseSummaryClosureType} close_type
 */

LnrpcChannelCloseSummary.prototype['close_type'] = undefined;
/**
 * @member {module:model/LnrpcInitiator} open_initiator
 */

LnrpcChannelCloseSummary.prototype['open_initiator'] = undefined;
/**
 * @member {module:model/LnrpcInitiator} close_initiator
 */

LnrpcChannelCloseSummary.prototype['close_initiator'] = undefined;
/**
 * @member {Array.<module:model/LnrpcResolution>} resolutions
 */

LnrpcChannelCloseSummary.prototype['resolutions'] = undefined;
var _default = LnrpcChannelCloseSummary;
exports["default"] = _default;