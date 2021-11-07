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
 * The LnrpcChannelUpdate model module.
 * @module model/LnrpcChannelUpdate
 * @version version not set
 */
var LnrpcChannelUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelUpdate</code>.
   * @alias module:model/LnrpcChannelUpdate
   */
  function LnrpcChannelUpdate() {
    _classCallCheck(this, LnrpcChannelUpdate);

    LnrpcChannelUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelUpdate} The populated <code>LnrpcChannelUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelUpdate();

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'Blob');
        }

        if (data.hasOwnProperty('chain_hash')) {
          obj['chain_hash'] = _ApiClient["default"].convertToType(data['chain_hash'], 'Blob');
        }

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'Number');
        }

        if (data.hasOwnProperty('message_flags')) {
          obj['message_flags'] = _ApiClient["default"].convertToType(data['message_flags'], 'Number');
        }

        if (data.hasOwnProperty('channel_flags')) {
          obj['channel_flags'] = _ApiClient["default"].convertToType(data['channel_flags'], 'Number');
        }

        if (data.hasOwnProperty('time_lock_delta')) {
          obj['time_lock_delta'] = _ApiClient["default"].convertToType(data['time_lock_delta'], 'Number');
        }

        if (data.hasOwnProperty('htlc_minimum_msat')) {
          obj['htlc_minimum_msat'] = _ApiClient["default"].convertToType(data['htlc_minimum_msat'], 'String');
        }

        if (data.hasOwnProperty('base_fee')) {
          obj['base_fee'] = _ApiClient["default"].convertToType(data['base_fee'], 'Number');
        }

        if (data.hasOwnProperty('fee_rate')) {
          obj['fee_rate'] = _ApiClient["default"].convertToType(data['fee_rate'], 'Number');
        }

        if (data.hasOwnProperty('htlc_maximum_msat')) {
          obj['htlc_maximum_msat'] = _ApiClient["default"].convertToType(data['htlc_maximum_msat'], 'String');
        }

        if (data.hasOwnProperty('extra_opaque_data')) {
          obj['extra_opaque_data'] = _ApiClient["default"].convertToType(data['extra_opaque_data'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelUpdate;
}();
/**
 * The signature that validates the announced data and proves the ownership of node id.
 * @member {Blob} signature
 */


LnrpcChannelUpdate.prototype['signature'] = undefined;
/**
 * The target chain that this channel was opened within. This value should be the genesis hash of the target chain. Along with the short channel ID, this uniquely identifies the channel globally in a blockchain.
 * @member {Blob} chain_hash
 */

LnrpcChannelUpdate.prototype['chain_hash'] = undefined;
/**
 * The unique description of the funding transaction.
 * @member {String} chan_id
 */

LnrpcChannelUpdate.prototype['chan_id'] = undefined;
/**
 * A timestamp that allows ordering in the case of multiple announcements. We should ignore the message if timestamp is not greater than the last-received.
 * @member {Number} timestamp
 */

LnrpcChannelUpdate.prototype['timestamp'] = undefined;
/**
 * The bitfield that describes whether optional fields are present in this update. Currently, the least-significant bit must be set to 1 if the optional field MaxHtlc is present.
 * @member {Number} message_flags
 */

LnrpcChannelUpdate.prototype['message_flags'] = undefined;
/**
 * The bitfield that describes additional meta-data concerning how the update is to be interpreted. Currently, the least-significant bit must be set to 0 if the creating node corresponds to the first node in the previously sent channel announcement and 1 otherwise. If the second bit is set, then the channel is set to be disabled.
 * @member {Number} channel_flags
 */

LnrpcChannelUpdate.prototype['channel_flags'] = undefined;
/**
 * The minimum number of blocks this node requires to be added to the expiry of HTLCs. This is a security parameter determined by the node operator. This value represents the required gap between the time locks of the incoming and outgoing HTLC's set to this node.
 * @member {Number} time_lock_delta
 */

LnrpcChannelUpdate.prototype['time_lock_delta'] = undefined;
/**
 * The minimum HTLC value which will be accepted.
 * @member {String} htlc_minimum_msat
 */

LnrpcChannelUpdate.prototype['htlc_minimum_msat'] = undefined;
/**
 * The base fee that must be used for incoming HTLC's to this particular channel. This value will be tacked onto the required for a payment independent of the size of the payment.
 * @member {Number} base_fee
 */

LnrpcChannelUpdate.prototype['base_fee'] = undefined;
/**
 * The fee rate that will be charged per millionth of a satoshi.
 * @member {Number} fee_rate
 */

LnrpcChannelUpdate.prototype['fee_rate'] = undefined;
/**
 * The maximum HTLC value which will be accepted.
 * @member {String} htlc_maximum_msat
 */

LnrpcChannelUpdate.prototype['htlc_maximum_msat'] = undefined;
/**
 * The set of data that was appended to this message, some of which we may not actually know how to iterate or parse. By holding onto this data, we ensure that we're able to properly validate the set of signatures that cover these new fields, and ensure we're able to make upgrades to the network in a forwards compatible manner.
 * @member {Blob} extra_opaque_data
 */

LnrpcChannelUpdate.prototype['extra_opaque_data'] = undefined;
var _default = LnrpcChannelUpdate;
exports["default"] = _default;