"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PendingChannelsResponseCommitments = _interopRequireDefault(require("./PendingChannelsResponseCommitments"));

var _PendingChannelsResponsePendingChannel = _interopRequireDefault(require("./PendingChannelsResponsePendingChannel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PendingChannelsResponseWaitingCloseChannel model module.
 * @module model/PendingChannelsResponseWaitingCloseChannel
 * @version version not set
 */
var PendingChannelsResponseWaitingCloseChannel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PendingChannelsResponseWaitingCloseChannel</code>.
   * @alias module:model/PendingChannelsResponseWaitingCloseChannel
   */
  function PendingChannelsResponseWaitingCloseChannel() {
    _classCallCheck(this, PendingChannelsResponseWaitingCloseChannel);

    PendingChannelsResponseWaitingCloseChannel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PendingChannelsResponseWaitingCloseChannel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PendingChannelsResponseWaitingCloseChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponseWaitingCloseChannel} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponseWaitingCloseChannel} The populated <code>PendingChannelsResponseWaitingCloseChannel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PendingChannelsResponseWaitingCloseChannel();

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _PendingChannelsResponsePendingChannel["default"].constructFromObject(data['channel']);
        }

        if (data.hasOwnProperty('limbo_balance')) {
          obj['limbo_balance'] = _ApiClient["default"].convertToType(data['limbo_balance'], 'String');
        }

        if (data.hasOwnProperty('commitments')) {
          obj['commitments'] = _PendingChannelsResponseCommitments["default"].constructFromObject(data['commitments']);
        }
      }

      return obj;
    }
  }]);

  return PendingChannelsResponseWaitingCloseChannel;
}();
/**
 * @member {module:model/PendingChannelsResponsePendingChannel} channel
 */


PendingChannelsResponseWaitingCloseChannel.prototype['channel'] = undefined;
/**
 * @member {String} limbo_balance
 */

PendingChannelsResponseWaitingCloseChannel.prototype['limbo_balance'] = undefined;
/**
 * @member {module:model/PendingChannelsResponseCommitments} commitments
 */

PendingChannelsResponseWaitingCloseChannel.prototype['commitments'] = undefined;
var _default = PendingChannelsResponseWaitingCloseChannel;
exports["default"] = _default;