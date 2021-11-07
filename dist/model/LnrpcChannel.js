"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelConstraints = _interopRequireDefault(require("./LnrpcChannelConstraints"));

var _LnrpcCommitmentType = _interopRequireDefault(require("./LnrpcCommitmentType"));

var _LnrpcHTLC = _interopRequireDefault(require("./LnrpcHTLC"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannel model module.
 * @module model/LnrpcChannel
 * @version version not set
 */
var LnrpcChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannel</code>.
   * @alias module:model/LnrpcChannel
   */
  function LnrpcChannel() {
    _classCallCheck(this, LnrpcChannel);

    LnrpcChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannel} obj Optional instance to populate.
     * @return {module:model/LnrpcChannel} The populated <code>LnrpcChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannel();

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('remote_pubkey')) {
          obj['remote_pubkey'] = _ApiClient["default"].convertToType(data['remote_pubkey'], 'String');
        }

        if (data.hasOwnProperty('channel_point')) {
          obj['channel_point'] = _ApiClient["default"].convertToType(data['channel_point'], 'String');
        }

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
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

        if (data.hasOwnProperty('commit_fee')) {
          obj['commit_fee'] = _ApiClient["default"].convertToType(data['commit_fee'], 'String');
        }

        if (data.hasOwnProperty('commit_weight')) {
          obj['commit_weight'] = _ApiClient["default"].convertToType(data['commit_weight'], 'String');
        }

        if (data.hasOwnProperty('fee_per_kw')) {
          obj['fee_per_kw'] = _ApiClient["default"].convertToType(data['fee_per_kw'], 'String');
        }

        if (data.hasOwnProperty('unsettled_balance')) {
          obj['unsettled_balance'] = _ApiClient["default"].convertToType(data['unsettled_balance'], 'String');
        }

        if (data.hasOwnProperty('total_satoshis_sent')) {
          obj['total_satoshis_sent'] = _ApiClient["default"].convertToType(data['total_satoshis_sent'], 'String');
        }

        if (data.hasOwnProperty('total_satoshis_received')) {
          obj['total_satoshis_received'] = _ApiClient["default"].convertToType(data['total_satoshis_received'], 'String');
        }

        if (data.hasOwnProperty('num_updates')) {
          obj['num_updates'] = _ApiClient["default"].convertToType(data['num_updates'], 'String');
        }

        if (data.hasOwnProperty('pending_htlcs')) {
          obj['pending_htlcs'] = _ApiClient["default"].convertToType(data['pending_htlcs'], [_LnrpcHTLC["default"]]);
        }

        if (data.hasOwnProperty('csv_delay')) {
          obj['csv_delay'] = _ApiClient["default"].convertToType(data['csv_delay'], 'Number');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('initiator')) {
          obj['initiator'] = _ApiClient["default"].convertToType(data['initiator'], 'Boolean');
        }

        if (data.hasOwnProperty('chan_status_flags')) {
          obj['chan_status_flags'] = _ApiClient["default"].convertToType(data['chan_status_flags'], 'String');
        }

        if (data.hasOwnProperty('local_chan_reserve_sat')) {
          obj['local_chan_reserve_sat'] = _ApiClient["default"].convertToType(data['local_chan_reserve_sat'], 'String');
        }

        if (data.hasOwnProperty('remote_chan_reserve_sat')) {
          obj['remote_chan_reserve_sat'] = _ApiClient["default"].convertToType(data['remote_chan_reserve_sat'], 'String');
        }

        if (data.hasOwnProperty('static_remote_key')) {
          obj['static_remote_key'] = _ApiClient["default"].convertToType(data['static_remote_key'], 'Boolean');
        }

        if (data.hasOwnProperty('commitment_type')) {
          obj['commitment_type'] = _LnrpcCommitmentType["default"].constructFromObject(data['commitment_type']);
        }

        if (data.hasOwnProperty('lifetime')) {
          obj['lifetime'] = _ApiClient["default"].convertToType(data['lifetime'], 'String');
        }

        if (data.hasOwnProperty('uptime')) {
          obj['uptime'] = _ApiClient["default"].convertToType(data['uptime'], 'String');
        }

        if (data.hasOwnProperty('close_address')) {
          obj['close_address'] = _ApiClient["default"].convertToType(data['close_address'], 'String');
        }

        if (data.hasOwnProperty('push_amount_sat')) {
          obj['push_amount_sat'] = _ApiClient["default"].convertToType(data['push_amount_sat'], 'String');
        }

        if (data.hasOwnProperty('thaw_height')) {
          obj['thaw_height'] = _ApiClient["default"].convertToType(data['thaw_height'], 'Number');
        }

        if (data.hasOwnProperty('local_constraints')) {
          obj['local_constraints'] = _LnrpcChannelConstraints["default"].constructFromObject(data['local_constraints']);
        }

        if (data.hasOwnProperty('remote_constraints')) {
          obj['remote_constraints'] = _LnrpcChannelConstraints["default"].constructFromObject(data['remote_constraints']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannel;
}();
/**
 * @member {Boolean} active
 */


LnrpcChannel.prototype['active'] = undefined;
/**
 * @member {String} remote_pubkey
 */

LnrpcChannel.prototype['remote_pubkey'] = undefined;
/**
 * The outpoint (txid:index) of the funding transaction. With this value, Bob will be able to generate a signature for Alice's version of the commitment transaction.
 * @member {String} channel_point
 */

LnrpcChannel.prototype['channel_point'] = undefined;
/**
 * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
 * @member {String} chan_id
 */

LnrpcChannel.prototype['chan_id'] = undefined;
/**
 * @member {String} capacity
 */

LnrpcChannel.prototype['capacity'] = undefined;
/**
 * @member {String} local_balance
 */

LnrpcChannel.prototype['local_balance'] = undefined;
/**
 * @member {String} remote_balance
 */

LnrpcChannel.prototype['remote_balance'] = undefined;
/**
 * The amount calculated to be paid in fees for the current set of commitment transactions. The fee amount is persisted with the channel in order to allow the fee amount to be removed and recalculated with each channel state update, including updates that happen after a system restart.
 * @member {String} commit_fee
 */

LnrpcChannel.prototype['commit_fee'] = undefined;
/**
 * @member {String} commit_weight
 */

LnrpcChannel.prototype['commit_weight'] = undefined;
/**
 * The required number of satoshis per kilo-weight that the requester will pay at all times, for both the funding transaction and commitment transaction. This value can later be updated once the channel is open.
 * @member {String} fee_per_kw
 */

LnrpcChannel.prototype['fee_per_kw'] = undefined;
/**
 * @member {String} unsettled_balance
 */

LnrpcChannel.prototype['unsettled_balance'] = undefined;
/**
 * The total number of satoshis we've sent within this channel.
 * @member {String} total_satoshis_sent
 */

LnrpcChannel.prototype['total_satoshis_sent'] = undefined;
/**
 * The total number of satoshis we've received within this channel.
 * @member {String} total_satoshis_received
 */

LnrpcChannel.prototype['total_satoshis_received'] = undefined;
/**
 * The total number of updates conducted within this channel.
 * @member {String} num_updates
 */

LnrpcChannel.prototype['num_updates'] = undefined;
/**
 * The list of active, uncleared HTLCs currently pending within the channel.
 * @member {Array.<module:model/LnrpcHTLC>} pending_htlcs
 */

LnrpcChannel.prototype['pending_htlcs'] = undefined;
/**
 * Deprecated. The CSV delay expressed in relative blocks. If the channel is force closed, we will need to wait for this many blocks before we can regain our funds.
 * @member {Number} csv_delay
 */

LnrpcChannel.prototype['csv_delay'] = undefined;
/**
 * Whether this channel is advertised to the network or not.
 * @member {Boolean} private
 */

LnrpcChannel.prototype['private'] = undefined;
/**
 * True if we were the ones that created the channel.
 * @member {Boolean} initiator
 */

LnrpcChannel.prototype['initiator'] = undefined;
/**
 * A set of flags showing the current state of the channel.
 * @member {String} chan_status_flags
 */

LnrpcChannel.prototype['chan_status_flags'] = undefined;
/**
 * Deprecated. The minimum satoshis this node is required to reserve in its balance.
 * @member {String} local_chan_reserve_sat
 */

LnrpcChannel.prototype['local_chan_reserve_sat'] = undefined;
/**
 * Deprecated. The minimum satoshis the other node is required to reserve in its balance.
 * @member {String} remote_chan_reserve_sat
 */

LnrpcChannel.prototype['remote_chan_reserve_sat'] = undefined;
/**
 * Deprecated. Use commitment_type.
 * @member {Boolean} static_remote_key
 */

LnrpcChannel.prototype['static_remote_key'] = undefined;
/**
 * @member {module:model/LnrpcCommitmentType} commitment_type
 */

LnrpcChannel.prototype['commitment_type'] = undefined;
/**
 * The number of seconds that the channel has been monitored by the channel scoring system. Scores are currently not persisted, so this value may be less than the lifetime of the channel [EXPERIMENTAL].
 * @member {String} lifetime
 */

LnrpcChannel.prototype['lifetime'] = undefined;
/**
 * The number of seconds that the remote peer has been observed as being online by the channel scoring system over the lifetime of the channel [EXPERIMENTAL].
 * @member {String} uptime
 */

LnrpcChannel.prototype['uptime'] = undefined;
/**
 * Close address is the address that we will enforce payout to on cooperative close if the channel was opened utilizing option upfront shutdown. This value can be set on channel open by setting close_address in an open channel request. If this value is not set, you can still choose a payout address by cooperatively closing with the delivery_address field set.
 * @member {String} close_address
 */

LnrpcChannel.prototype['close_address'] = undefined;
/**
 * The amount that the initiator of the channel optionally pushed to the remote party on channel open. This amount will be zero if the channel initiator did not push any funds to the remote peer. If the initiator field is true, we pushed this amount to our peer, if it is false, the remote peer pushed this amount to us.
 * @member {String} push_amount_sat
 */

LnrpcChannel.prototype['push_amount_sat'] = undefined;
/**
 * This uint32 indicates if this channel is to be considered 'frozen'. A frozen channel doest not allow a cooperative channel close by the initiator. The thaw_height is the height that this restriction stops applying to the channel. This field is optional, not setting it or using a value of zero will mean the channel has no additional restrictions. The height can be interpreted in two ways: as a relative height if the value is less than 500,000, or as an absolute height otherwise.
 * @member {Number} thaw_height
 */

LnrpcChannel.prototype['thaw_height'] = undefined;
/**
 * @member {module:model/LnrpcChannelConstraints} local_constraints
 */

LnrpcChannel.prototype['local_constraints'] = undefined;
/**
 * @member {module:model/LnrpcChannelConstraints} remote_constraints
 */

LnrpcChannel.prototype['remote_constraints'] = undefined;
var _default = LnrpcChannel;
exports["default"] = _default;