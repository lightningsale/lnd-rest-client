"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChannelEventUpdateUpdateType = _interopRequireDefault(require("./ChannelEventUpdateUpdateType"));

var _LnrpcChannel = _interopRequireDefault(require("./LnrpcChannel"));

var _LnrpcChannelCloseSummary = _interopRequireDefault(require("./LnrpcChannelCloseSummary"));

var _LnrpcChannelPoint = _interopRequireDefault(require("./LnrpcChannelPoint"));

var _LnrpcPendingUpdate = _interopRequireDefault(require("./LnrpcPendingUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelEventUpdate model module.
 * @module model/LnrpcChannelEventUpdate
 * @version version not set
 */
var LnrpcChannelEventUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelEventUpdate</code>.
   * @alias module:model/LnrpcChannelEventUpdate
   */
  function LnrpcChannelEventUpdate() {
    _classCallCheck(this, LnrpcChannelEventUpdate);

    LnrpcChannelEventUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelEventUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelEventUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelEventUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelEventUpdate} The populated <code>LnrpcChannelEventUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelEventUpdate();

        if (data.hasOwnProperty('open_channel')) {
          obj['open_channel'] = _LnrpcChannel["default"].constructFromObject(data['open_channel']);
        }

        if (data.hasOwnProperty('closed_channel')) {
          obj['closed_channel'] = _LnrpcChannelCloseSummary["default"].constructFromObject(data['closed_channel']);
        }

        if (data.hasOwnProperty('active_channel')) {
          obj['active_channel'] = _LnrpcChannelPoint["default"].constructFromObject(data['active_channel']);
        }

        if (data.hasOwnProperty('inactive_channel')) {
          obj['inactive_channel'] = _LnrpcChannelPoint["default"].constructFromObject(data['inactive_channel']);
        }

        if (data.hasOwnProperty('pending_open_channel')) {
          obj['pending_open_channel'] = _LnrpcPendingUpdate["default"].constructFromObject(data['pending_open_channel']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ChannelEventUpdateUpdateType["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelEventUpdate;
}();
/**
 * @member {module:model/LnrpcChannel} open_channel
 */


LnrpcChannelEventUpdate.prototype['open_channel'] = undefined;
/**
 * @member {module:model/LnrpcChannelCloseSummary} closed_channel
 */

LnrpcChannelEventUpdate.prototype['closed_channel'] = undefined;
/**
 * @member {module:model/LnrpcChannelPoint} active_channel
 */

LnrpcChannelEventUpdate.prototype['active_channel'] = undefined;
/**
 * @member {module:model/LnrpcChannelPoint} inactive_channel
 */

LnrpcChannelEventUpdate.prototype['inactive_channel'] = undefined;
/**
 * @member {module:model/LnrpcPendingUpdate} pending_open_channel
 */

LnrpcChannelEventUpdate.prototype['pending_open_channel'] = undefined;
/**
 * @member {module:model/ChannelEventUpdateUpdateType} type
 */

LnrpcChannelEventUpdate.prototype['type'] = undefined;
var _default = LnrpcChannelEventUpdate;
exports["default"] = _default;