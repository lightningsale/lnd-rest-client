"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelPoint = _interopRequireDefault(require("./LnrpcChannelPoint"));

var _LnrpcRoutingPolicy = _interopRequireDefault(require("./LnrpcRoutingPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelEdgeUpdate model module.
 * @module model/LnrpcChannelEdgeUpdate
 * @version version not set
 */
var LnrpcChannelEdgeUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelEdgeUpdate</code>.
   * @alias module:model/LnrpcChannelEdgeUpdate
   */
  function LnrpcChannelEdgeUpdate() {
    _classCallCheck(this, LnrpcChannelEdgeUpdate);

    LnrpcChannelEdgeUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelEdgeUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelEdgeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelEdgeUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelEdgeUpdate} The populated <code>LnrpcChannelEdgeUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelEdgeUpdate();

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('chan_point')) {
          obj['chan_point'] = _LnrpcChannelPoint["default"].constructFromObject(data['chan_point']);
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'String');
        }

        if (data.hasOwnProperty('routing_policy')) {
          obj['routing_policy'] = _LnrpcRoutingPolicy["default"].constructFromObject(data['routing_policy']);
        }

        if (data.hasOwnProperty('advertising_node')) {
          obj['advertising_node'] = _ApiClient["default"].convertToType(data['advertising_node'], 'String');
        }

        if (data.hasOwnProperty('connecting_node')) {
          obj['connecting_node'] = _ApiClient["default"].convertToType(data['connecting_node'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelEdgeUpdate;
}();
/**
 * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
 * @member {String} chan_id
 */


LnrpcChannelEdgeUpdate.prototype['chan_id'] = undefined;
/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */

LnrpcChannelEdgeUpdate.prototype['chan_point'] = undefined;
/**
 * @member {String} capacity
 */

LnrpcChannelEdgeUpdate.prototype['capacity'] = undefined;
/**
 * @member {module:model/LnrpcRoutingPolicy} routing_policy
 */

LnrpcChannelEdgeUpdate.prototype['routing_policy'] = undefined;
/**
 * @member {String} advertising_node
 */

LnrpcChannelEdgeUpdate.prototype['advertising_node'] = undefined;
/**
 * @member {String} connecting_node
 */

LnrpcChannelEdgeUpdate.prototype['connecting_node'] = undefined;
var _default = LnrpcChannelEdgeUpdate;
exports["default"] = _default;