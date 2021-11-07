"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcCommitmentType = _interopRequireDefault(require("./LnrpcCommitmentType"));

var _LnrpcInitiator = _interopRequireDefault(require("./LnrpcInitiator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PendingChannelsResponsePendingChannel model module.
 * @module model/PendingChannelsResponsePendingChannel
 * @version version not set
 */
var PendingChannelsResponsePendingChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PendingChannelsResponsePendingChannel</code>.
   * @alias module:model/PendingChannelsResponsePendingChannel
   */
  function PendingChannelsResponsePendingChannel() {
    _classCallCheck(this, PendingChannelsResponsePendingChannel);

    PendingChannelsResponsePendingChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PendingChannelsResponsePendingChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PendingChannelsResponsePendingChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponsePendingChannel} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponsePendingChannel} The populated <code>PendingChannelsResponsePendingChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PendingChannelsResponsePendingChannel();

        if (data.hasOwnProperty('remote_node_pub')) {
          obj['remote_node_pub'] = _ApiClient["default"].convertToType(data['remote_node_pub'], 'String');
        }

        if (data.hasOwnProperty('channel_point')) {
          obj['channel_point'] = _ApiClient["default"].convertToType(data['channel_point'], 'String');
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'String');
        }

        if (data.hasOwnProperty('local_balance')) {
          obj['local_balance'] = _ApiClient["default"].convertToType(data['local_balance'], 'String');
        }

        if (data.hasOwnProperty('remote_balance')) {
          obj['remote_balance'] = _ApiClient["default"].convertToType(data['remote_balance'], 'String');
        }

        if (data.hasOwnProperty('local_chan_reserve_sat')) {
          obj['local_chan_reserve_sat'] = _ApiClient["default"].convertToType(data['local_chan_reserve_sat'], 'String');
        }

        if (data.hasOwnProperty('remote_chan_reserve_sat')) {
          obj['remote_chan_reserve_sat'] = _ApiClient["default"].convertToType(data['remote_chan_reserve_sat'], 'String');
        }

        if (data.hasOwnProperty('initiator')) {
          obj['initiator'] = _LnrpcInitiator["default"].constructFromObject(data['initiator']);
        }

        if (data.hasOwnProperty('commitment_type')) {
          obj['commitment_type'] = _LnrpcCommitmentType["default"].constructFromObject(data['commitment_type']);
        }
      }

      return obj;
    }
  }]);

  return PendingChannelsResponsePendingChannel;
}();
/**
 * @member {String} remote_node_pub
 */


PendingChannelsResponsePendingChannel.prototype['remote_node_pub'] = undefined;
/**
 * @member {String} channel_point
 */

PendingChannelsResponsePendingChannel.prototype['channel_point'] = undefined;
/**
 * @member {String} capacity
 */

PendingChannelsResponsePendingChannel.prototype['capacity'] = undefined;
/**
 * @member {String} local_balance
 */

PendingChannelsResponsePendingChannel.prototype['local_balance'] = undefined;
/**
 * @member {String} remote_balance
 */

PendingChannelsResponsePendingChannel.prototype['remote_balance'] = undefined;
/**
 * The minimum satoshis this node is required to reserve in its balance.
 * @member {String} local_chan_reserve_sat
 */

PendingChannelsResponsePendingChannel.prototype['local_chan_reserve_sat'] = undefined;
/**
 * The minimum satoshis the other node is required to reserve in its balance.
 * @member {String} remote_chan_reserve_sat
 */

PendingChannelsResponsePendingChannel.prototype['remote_chan_reserve_sat'] = undefined;
/**
 * @member {module:model/LnrpcInitiator} initiator
 */

PendingChannelsResponsePendingChannel.prototype['initiator'] = undefined;
/**
 * @member {module:model/LnrpcCommitmentType} commitment_type
 */

PendingChannelsResponsePendingChannel.prototype['commitment_type'] = undefined;
var _default = PendingChannelsResponsePendingChannel;
exports["default"] = _default;