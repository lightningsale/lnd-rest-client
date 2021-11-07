"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PendingChannelsResponseClosedChannel = _interopRequireDefault(require("./PendingChannelsResponseClosedChannel"));

var _PendingChannelsResponseForceClosedChannel = _interopRequireDefault(require("./PendingChannelsResponseForceClosedChannel"));

var _PendingChannelsResponsePendingOpenChannel = _interopRequireDefault(require("./PendingChannelsResponsePendingOpenChannel"));

var _PendingChannelsResponseWaitingCloseChannel = _interopRequireDefault(require("./PendingChannelsResponseWaitingCloseChannel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcPendingChannelsResponse model module.
 * @module model/LnrpcPendingChannelsResponse
 * @version version not set
 */
var LnrpcPendingChannelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPendingChannelsResponse</code>.
   * @alias module:model/LnrpcPendingChannelsResponse
   */
  function LnrpcPendingChannelsResponse() {
    _classCallCheck(this, LnrpcPendingChannelsResponse);

    LnrpcPendingChannelsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPendingChannelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPendingChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPendingChannelsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcPendingChannelsResponse} The populated <code>LnrpcPendingChannelsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPendingChannelsResponse();

        if (data.hasOwnProperty('total_limbo_balance')) {
          obj['total_limbo_balance'] = _ApiClient["default"].convertToType(data['total_limbo_balance'], 'String');
        }

        if (data.hasOwnProperty('pending_open_channels')) {
          obj['pending_open_channels'] = _ApiClient["default"].convertToType(data['pending_open_channels'], [_PendingChannelsResponsePendingOpenChannel["default"]]);
        }

        if (data.hasOwnProperty('pending_closing_channels')) {
          obj['pending_closing_channels'] = _ApiClient["default"].convertToType(data['pending_closing_channels'], [_PendingChannelsResponseClosedChannel["default"]]);
        }

        if (data.hasOwnProperty('pending_force_closing_channels')) {
          obj['pending_force_closing_channels'] = _ApiClient["default"].convertToType(data['pending_force_closing_channels'], [_PendingChannelsResponseForceClosedChannel["default"]]);
        }

        if (data.hasOwnProperty('waiting_close_channels')) {
          obj['waiting_close_channels'] = _ApiClient["default"].convertToType(data['waiting_close_channels'], [_PendingChannelsResponseWaitingCloseChannel["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcPendingChannelsResponse;
}();
/**
 * @member {String} total_limbo_balance
 */


LnrpcPendingChannelsResponse.prototype['total_limbo_balance'] = undefined;
/**
 * @member {Array.<module:model/PendingChannelsResponsePendingOpenChannel>} pending_open_channels
 */

LnrpcPendingChannelsResponse.prototype['pending_open_channels'] = undefined;
/**
 * Deprecated: Channels pending closing previously contained cooperatively closed channels with a single confirmation. These channels are now considered closed from the time we see them on chain.
 * @member {Array.<module:model/PendingChannelsResponseClosedChannel>} pending_closing_channels
 */

LnrpcPendingChannelsResponse.prototype['pending_closing_channels'] = undefined;
/**
 * @member {Array.<module:model/PendingChannelsResponseForceClosedChannel>} pending_force_closing_channels
 */

LnrpcPendingChannelsResponse.prototype['pending_force_closing_channels'] = undefined;
/**
 * @member {Array.<module:model/PendingChannelsResponseWaitingCloseChannel>} waiting_close_channels
 */

LnrpcPendingChannelsResponse.prototype['waiting_close_channels'] = undefined;
var _default = LnrpcPendingChannelsResponse;
exports["default"] = _default;