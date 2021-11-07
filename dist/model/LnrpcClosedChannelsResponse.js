"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelCloseSummary = _interopRequireDefault(require("./LnrpcChannelCloseSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcClosedChannelsResponse model module.
 * @module model/LnrpcClosedChannelsResponse
 * @version version not set
 */
var LnrpcClosedChannelsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcClosedChannelsResponse</code>.
   * @alias module:model/LnrpcClosedChannelsResponse
   */
  function LnrpcClosedChannelsResponse() {
    _classCallCheck(this, LnrpcClosedChannelsResponse);

    LnrpcClosedChannelsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcClosedChannelsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcClosedChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcClosedChannelsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcClosedChannelsResponse} The populated <code>LnrpcClosedChannelsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcClosedChannelsResponse();

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], [_LnrpcChannelCloseSummary["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcClosedChannelsResponse;
}();
/**
 * @member {Array.<module:model/LnrpcChannelCloseSummary>} channels
 */


LnrpcClosedChannelsResponse.prototype['channels'] = undefined;
var _default = LnrpcClosedChannelsResponse;
exports["default"] = _default;