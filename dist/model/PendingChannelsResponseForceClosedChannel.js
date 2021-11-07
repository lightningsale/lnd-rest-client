"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ForceClosedChannelAnchorState = _interopRequireDefault(require("./ForceClosedChannelAnchorState"));

var _LnrpcPendingHTLC = _interopRequireDefault(require("./LnrpcPendingHTLC"));

var _PendingChannelsResponsePendingChannel = _interopRequireDefault(require("./PendingChannelsResponsePendingChannel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PendingChannelsResponseForceClosedChannel model module.
 * @module model/PendingChannelsResponseForceClosedChannel
 * @version version not set
 */
var PendingChannelsResponseForceClosedChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PendingChannelsResponseForceClosedChannel</code>.
   * @alias module:model/PendingChannelsResponseForceClosedChannel
   */
  function PendingChannelsResponseForceClosedChannel() {
    _classCallCheck(this, PendingChannelsResponseForceClosedChannel);

    PendingChannelsResponseForceClosedChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PendingChannelsResponseForceClosedChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PendingChannelsResponseForceClosedChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponseForceClosedChannel} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponseForceClosedChannel} The populated <code>PendingChannelsResponseForceClosedChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PendingChannelsResponseForceClosedChannel();

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _PendingChannelsResponsePendingChannel["default"].constructFromObject(data['channel']);
        }

        if (data.hasOwnProperty('closing_txid')) {
          obj['closing_txid'] = _ApiClient["default"].convertToType(data['closing_txid'], 'String');
        }

        if (data.hasOwnProperty('limbo_balance')) {
          obj['limbo_balance'] = _ApiClient["default"].convertToType(data['limbo_balance'], 'String');
        }

        if (data.hasOwnProperty('maturity_height')) {
          obj['maturity_height'] = _ApiClient["default"].convertToType(data['maturity_height'], 'Number');
        }

        if (data.hasOwnProperty('blocks_til_maturity')) {
          obj['blocks_til_maturity'] = _ApiClient["default"].convertToType(data['blocks_til_maturity'], 'Number');
        }

        if (data.hasOwnProperty('recovered_balance')) {
          obj['recovered_balance'] = _ApiClient["default"].convertToType(data['recovered_balance'], 'String');
        }

        if (data.hasOwnProperty('pending_htlcs')) {
          obj['pending_htlcs'] = _ApiClient["default"].convertToType(data['pending_htlcs'], [_LnrpcPendingHTLC["default"]]);
        }

        if (data.hasOwnProperty('anchor')) {
          obj['anchor'] = _ForceClosedChannelAnchorState["default"].constructFromObject(data['anchor']);
        }
      }

      return obj;
    }
  }]);

  return PendingChannelsResponseForceClosedChannel;
}();
/**
 * @member {module:model/PendingChannelsResponsePendingChannel} channel
 */


PendingChannelsResponseForceClosedChannel.prototype['channel'] = undefined;
/**
 * @member {String} closing_txid
 */

PendingChannelsResponseForceClosedChannel.prototype['closing_txid'] = undefined;
/**
 * @member {String} limbo_balance
 */

PendingChannelsResponseForceClosedChannel.prototype['limbo_balance'] = undefined;
/**
 * @member {Number} maturity_height
 */

PendingChannelsResponseForceClosedChannel.prototype['maturity_height'] = undefined;
/**
 * Remaining # of blocks until the commitment output can be swept. Negative values indicate how many blocks have passed since becoming mature.
 * @member {Number} blocks_til_maturity
 */

PendingChannelsResponseForceClosedChannel.prototype['blocks_til_maturity'] = undefined;
/**
 * @member {String} recovered_balance
 */

PendingChannelsResponseForceClosedChannel.prototype['recovered_balance'] = undefined;
/**
 * @member {Array.<module:model/LnrpcPendingHTLC>} pending_htlcs
 */

PendingChannelsResponseForceClosedChannel.prototype['pending_htlcs'] = undefined;
/**
 * @member {module:model/ForceClosedChannelAnchorState} anchor
 */

PendingChannelsResponseForceClosedChannel.prototype['anchor'] = undefined;
var _default = PendingChannelsResponseForceClosedChannel;
exports["default"] = _default;