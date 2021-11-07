"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelPoint = _interopRequireDefault(require("./LnrpcChannelPoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcClosedChannelUpdate model module.
 * @module model/LnrpcClosedChannelUpdate
 * @version version not set
 */
var LnrpcClosedChannelUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcClosedChannelUpdate</code>.
   * @alias module:model/LnrpcClosedChannelUpdate
   */
  function LnrpcClosedChannelUpdate() {
    _classCallCheck(this, LnrpcClosedChannelUpdate);

    LnrpcClosedChannelUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcClosedChannelUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcClosedChannelUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcClosedChannelUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcClosedChannelUpdate} The populated <code>LnrpcClosedChannelUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcClosedChannelUpdate();

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'String');
        }

        if (data.hasOwnProperty('closed_height')) {
          obj['closed_height'] = _ApiClient["default"].convertToType(data['closed_height'], 'Number');
        }

        if (data.hasOwnProperty('chan_point')) {
          obj['chan_point'] = _LnrpcChannelPoint["default"].constructFromObject(data['chan_point']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcClosedChannelUpdate;
}();
/**
 * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
 * @member {String} chan_id
 */


LnrpcClosedChannelUpdate.prototype['chan_id'] = undefined;
/**
 * @member {String} capacity
 */

LnrpcClosedChannelUpdate.prototype['capacity'] = undefined;
/**
 * @member {Number} closed_height
 */

LnrpcClosedChannelUpdate.prototype['closed_height'] = undefined;
/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */

LnrpcClosedChannelUpdate.prototype['chan_point'] = undefined;
var _default = LnrpcClosedChannelUpdate;
exports["default"] = _default;