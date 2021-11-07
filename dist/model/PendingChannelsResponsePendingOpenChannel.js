"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PendingChannelsResponsePendingChannel = _interopRequireDefault(require("./PendingChannelsResponsePendingChannel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PendingChannelsResponsePendingOpenChannel model module.
 * @module model/PendingChannelsResponsePendingOpenChannel
 * @version version not set
 */
var PendingChannelsResponsePendingOpenChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PendingChannelsResponsePendingOpenChannel</code>.
   * @alias module:model/PendingChannelsResponsePendingOpenChannel
   */
  function PendingChannelsResponsePendingOpenChannel() {
    _classCallCheck(this, PendingChannelsResponsePendingOpenChannel);

    PendingChannelsResponsePendingOpenChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PendingChannelsResponsePendingOpenChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PendingChannelsResponsePendingOpenChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponsePendingOpenChannel} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponsePendingOpenChannel} The populated <code>PendingChannelsResponsePendingOpenChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PendingChannelsResponsePendingOpenChannel();

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _PendingChannelsResponsePendingChannel["default"].constructFromObject(data['channel']);
        }

        if (data.hasOwnProperty('confirmation_height')) {
          obj['confirmation_height'] = _ApiClient["default"].convertToType(data['confirmation_height'], 'Number');
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
      }

      return obj;
    }
  }]);

  return PendingChannelsResponsePendingOpenChannel;
}();
/**
 * @member {module:model/PendingChannelsResponsePendingChannel} channel
 */


PendingChannelsResponsePendingOpenChannel.prototype['channel'] = undefined;
/**
 * @member {Number} confirmation_height
 */

PendingChannelsResponsePendingOpenChannel.prototype['confirmation_height'] = undefined;
/**
 * The amount calculated to be paid in fees for the current set of commitment transactions. The fee amount is persisted with the channel in order to allow the fee amount to be removed and recalculated with each channel state update, including updates that happen after a system restart.
 * @member {String} commit_fee
 */

PendingChannelsResponsePendingOpenChannel.prototype['commit_fee'] = undefined;
/**
 * @member {String} commit_weight
 */

PendingChannelsResponsePendingOpenChannel.prototype['commit_weight'] = undefined;
/**
 * The required number of satoshis per kilo-weight that the requester will pay at all times, for both the funding transaction and commitment transaction. This value can later be updated once the channel is open.
 * @member {String} fee_per_kw
 */

PendingChannelsResponsePendingOpenChannel.prototype['fee_per_kw'] = undefined;
var _default = PendingChannelsResponsePendingOpenChannel;
exports["default"] = _default;