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
 * The LnrpcChannelGraph model module.
 * @module model/LnrpcChannelGraph
 * @version version not set
 */
var LnrpcChannelGraph = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelGraph</code>.
   * Returns a new instance of the directed channel graph.
   * @alias module:model/LnrpcChannelGraph
   */
  function LnrpcChannelGraph() {
    _classCallCheck(this, LnrpcChannelGraph);

    LnrpcChannelGraph.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelGraph, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelGraph</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelGraph} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelGraph} The populated <code>LnrpcChannelGraph</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelGraph();

        if (data.hasOwnProperty('nodes')) {
          obj['nodes'] = _ApiClient["default"].convertToType(data['nodes'], [_LnrpcLightningNode["default"]]);
        }

        if (data.hasOwnProperty('edges')) {
          obj['edges'] = _ApiClient["default"].convertToType(data['edges'], [_LnrpcChannelEdge["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelGraph;
}();
/**
 * @member {Array.<module:model/LnrpcLightningNode>} nodes
 */


LnrpcChannelGraph.prototype['nodes'] = undefined;
/**
 * @member {Array.<module:model/LnrpcChannelEdge>} edges
 */

LnrpcChannelGraph.prototype['edges'] = undefined;
var _default = LnrpcChannelGraph;
exports["default"] = _default;