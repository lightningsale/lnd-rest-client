"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcRoutingPolicy = _interopRequireDefault(require("./LnrpcRoutingPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelEdge model module.
 * @module model/LnrpcChannelEdge
 * @version version not set
 */
var LnrpcChannelEdge = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelEdge</code>.
   * A fully authenticated channel along with all its unique attributes. Once an authenticated channel announcement has been processed on the network, then an instance of ChannelEdgeInfo encapsulating the channels attributes is stored. The other portions relevant to routing policy of a channel are stored within a ChannelEdgePolicy for each direction of the channel.
   * @alias module:model/LnrpcChannelEdge
   */
  function LnrpcChannelEdge() {
    _classCallCheck(this, LnrpcChannelEdge);

    LnrpcChannelEdge.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelEdge, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelEdge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelEdge} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelEdge} The populated <code>LnrpcChannelEdge</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelEdge();

        if (data.hasOwnProperty('channel_id')) {
          obj['channel_id'] = _ApiClient["default"].convertToType(data['channel_id'], 'String');
        }

        if (data.hasOwnProperty('chan_point')) {
          obj['chan_point'] = _ApiClient["default"].convertToType(data['chan_point'], 'String');
        }

        if (data.hasOwnProperty('last_update')) {
          obj['last_update'] = _ApiClient["default"].convertToType(data['last_update'], 'Number');
        }

        if (data.hasOwnProperty('node1_pub')) {
          obj['node1_pub'] = _ApiClient["default"].convertToType(data['node1_pub'], 'String');
        }

        if (data.hasOwnProperty('node2_pub')) {
          obj['node2_pub'] = _ApiClient["default"].convertToType(data['node2_pub'], 'String');
        }

        if (data.hasOwnProperty('capacity')) {
          obj['capacity'] = _ApiClient["default"].convertToType(data['capacity'], 'String');
        }

        if (data.hasOwnProperty('node1_policy')) {
          obj['node1_policy'] = _LnrpcRoutingPolicy["default"].constructFromObject(data['node1_policy']);
        }

        if (data.hasOwnProperty('node2_policy')) {
          obj['node2_policy'] = _LnrpcRoutingPolicy["default"].constructFromObject(data['node2_policy']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelEdge;
}();
/**
 * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
 * @member {String} channel_id
 */


LnrpcChannelEdge.prototype['channel_id'] = undefined;
/**
 * @member {String} chan_point
 */

LnrpcChannelEdge.prototype['chan_point'] = undefined;
/**
 * @member {Number} last_update
 */

LnrpcChannelEdge.prototype['last_update'] = undefined;
/**
 * @member {String} node1_pub
 */

LnrpcChannelEdge.prototype['node1_pub'] = undefined;
/**
 * @member {String} node2_pub
 */

LnrpcChannelEdge.prototype['node2_pub'] = undefined;
/**
 * @member {String} capacity
 */

LnrpcChannelEdge.prototype['capacity'] = undefined;
/**
 * @member {module:model/LnrpcRoutingPolicy} node1_policy
 */

LnrpcChannelEdge.prototype['node1_policy'] = undefined;
/**
 * @member {module:model/LnrpcRoutingPolicy} node2_policy
 */

LnrpcChannelEdge.prototype['node2_policy'] = undefined;
var _default = LnrpcChannelEdge;
exports["default"] = _default;