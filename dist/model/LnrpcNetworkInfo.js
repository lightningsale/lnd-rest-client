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
 * The LnrpcNetworkInfo model module.
 * @module model/LnrpcNetworkInfo
 * @version version not set
 */
var LnrpcNetworkInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcNetworkInfo</code>.
   * @alias module:model/LnrpcNetworkInfo
   */
  function LnrpcNetworkInfo() {
    _classCallCheck(this, LnrpcNetworkInfo);

    LnrpcNetworkInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcNetworkInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcNetworkInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNetworkInfo} obj Optional instance to populate.
     * @return {module:model/LnrpcNetworkInfo} The populated <code>LnrpcNetworkInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcNetworkInfo();

        if (data.hasOwnProperty('graph_diameter')) {
          obj['graph_diameter'] = _ApiClient["default"].convertToType(data['graph_diameter'], 'Number');
        }

        if (data.hasOwnProperty('avg_out_degree')) {
          obj['avg_out_degree'] = _ApiClient["default"].convertToType(data['avg_out_degree'], 'Number');
        }

        if (data.hasOwnProperty('max_out_degree')) {
          obj['max_out_degree'] = _ApiClient["default"].convertToType(data['max_out_degree'], 'Number');
        }

        if (data.hasOwnProperty('num_nodes')) {
          obj['num_nodes'] = _ApiClient["default"].convertToType(data['num_nodes'], 'Number');
        }

        if (data.hasOwnProperty('num_channels')) {
          obj['num_channels'] = _ApiClient["default"].convertToType(data['num_channels'], 'Number');
        }

        if (data.hasOwnProperty('total_network_capacity')) {
          obj['total_network_capacity'] = _ApiClient["default"].convertToType(data['total_network_capacity'], 'String');
        }

        if (data.hasOwnProperty('avg_channel_size')) {
          obj['avg_channel_size'] = _ApiClient["default"].convertToType(data['avg_channel_size'], 'Number');
        }

        if (data.hasOwnProperty('min_channel_size')) {
          obj['min_channel_size'] = _ApiClient["default"].convertToType(data['min_channel_size'], 'String');
        }

        if (data.hasOwnProperty('max_channel_size')) {
          obj['max_channel_size'] = _ApiClient["default"].convertToType(data['max_channel_size'], 'String');
        }

        if (data.hasOwnProperty('median_channel_size_sat')) {
          obj['median_channel_size_sat'] = _ApiClient["default"].convertToType(data['median_channel_size_sat'], 'String');
        }

        if (data.hasOwnProperty('num_zombie_chans')) {
          obj['num_zombie_chans'] = _ApiClient["default"].convertToType(data['num_zombie_chans'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcNetworkInfo;
}();
/**
 * @member {Number} graph_diameter
 */


LnrpcNetworkInfo.prototype['graph_diameter'] = undefined;
/**
 * @member {Number} avg_out_degree
 */

LnrpcNetworkInfo.prototype['avg_out_degree'] = undefined;
/**
 * @member {Number} max_out_degree
 */

LnrpcNetworkInfo.prototype['max_out_degree'] = undefined;
/**
 * @member {Number} num_nodes
 */

LnrpcNetworkInfo.prototype['num_nodes'] = undefined;
/**
 * @member {Number} num_channels
 */

LnrpcNetworkInfo.prototype['num_channels'] = undefined;
/**
 * @member {String} total_network_capacity
 */

LnrpcNetworkInfo.prototype['total_network_capacity'] = undefined;
/**
 * @member {Number} avg_channel_size
 */

LnrpcNetworkInfo.prototype['avg_channel_size'] = undefined;
/**
 * @member {String} min_channel_size
 */

LnrpcNetworkInfo.prototype['min_channel_size'] = undefined;
/**
 * @member {String} max_channel_size
 */

LnrpcNetworkInfo.prototype['max_channel_size'] = undefined;
/**
 * @member {String} median_channel_size_sat
 */

LnrpcNetworkInfo.prototype['median_channel_size_sat'] = undefined;
/**
 * The number of edges marked as zombies.
 * @member {String} num_zombie_chans
 */

LnrpcNetworkInfo.prototype['num_zombie_chans'] = undefined;
var _default = LnrpcNetworkInfo;
exports["default"] = _default;