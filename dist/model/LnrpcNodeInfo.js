"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelEdge = _interopRequireDefault(require("./LnrpcChannelEdge"));

var _LnrpcLightningNode = _interopRequireDefault(require("./LnrpcLightningNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcNodeInfo model module.
 * @module model/LnrpcNodeInfo
 * @version version not set
 */
var LnrpcNodeInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcNodeInfo</code>.
   * @alias module:model/LnrpcNodeInfo
   */
  function LnrpcNodeInfo() {
    _classCallCheck(this, LnrpcNodeInfo);

    LnrpcNodeInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcNodeInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcNodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNodeInfo} obj Optional instance to populate.
     * @return {module:model/LnrpcNodeInfo} The populated <code>LnrpcNodeInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcNodeInfo();

        if (data.hasOwnProperty('node')) {
          obj['node'] = _LnrpcLightningNode["default"].constructFromObject(data['node']);
        }

        if (data.hasOwnProperty('num_channels')) {
          obj['num_channels'] = _ApiClient["default"].convertToType(data['num_channels'], 'Number');
        }

        if (data.hasOwnProperty('total_capacity')) {
          obj['total_capacity'] = _ApiClient["default"].convertToType(data['total_capacity'], 'String');
        }

        if (data.hasOwnProperty('channels')) {
          obj['channels'] = _ApiClient["default"].convertToType(data['channels'], [_LnrpcChannelEdge["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcNodeInfo;
}();
/**
 * @member {module:model/LnrpcLightningNode} node
 */


LnrpcNodeInfo.prototype['node'] = undefined;
/**
 * The total number of channels for the node.
 * @member {Number} num_channels
 */

LnrpcNodeInfo.prototype['num_channels'] = undefined;
/**
 * The sum of all channels capacity for the node, denominated in satoshis.
 * @member {String} total_capacity
 */

LnrpcNodeInfo.prototype['total_capacity'] = undefined;
/**
 * A list of all public channels for the node.
 * @member {Array.<module:model/LnrpcChannelEdge>} channels
 */

LnrpcNodeInfo.prototype['channels'] = undefined;
var _default = LnrpcNodeInfo;
exports["default"] = _default;