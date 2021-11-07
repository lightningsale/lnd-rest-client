"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFloatMetric = _interopRequireDefault(require("./LnrpcFloatMetric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcNodeMetricsResponse model module.
 * @module model/LnrpcNodeMetricsResponse
 * @version version not set
 */
var LnrpcNodeMetricsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcNodeMetricsResponse</code>.
   * @alias module:model/LnrpcNodeMetricsResponse
   */
  function LnrpcNodeMetricsResponse() {
    _classCallCheck(this, LnrpcNodeMetricsResponse);

    LnrpcNodeMetricsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcNodeMetricsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcNodeMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNodeMetricsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcNodeMetricsResponse} The populated <code>LnrpcNodeMetricsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcNodeMetricsResponse();

        if (data.hasOwnProperty('betweenness_centrality')) {
          obj['betweenness_centrality'] = _ApiClient["default"].convertToType(data['betweenness_centrality'], {
            'String': _LnrpcFloatMetric["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcNodeMetricsResponse;
}();
/**
 * Betweenness centrality is the sum of the ratio of shortest paths that pass through the node for each pair of nodes in the graph (not counting paths starting or ending at this node). Map of node pubkey to betweenness centrality of the node. Normalized values are in the [0,1] closed interval.
 * @member {Object.<String, module:model/LnrpcFloatMetric>} betweenness_centrality
 */


LnrpcNodeMetricsResponse.prototype['betweenness_centrality'] = undefined;
var _default = LnrpcNodeMetricsResponse;
exports["default"] = _default;