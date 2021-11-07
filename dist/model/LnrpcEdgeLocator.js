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
 * The LnrpcEdgeLocator model module.
 * @module model/LnrpcEdgeLocator
 * @version version not set
 */
var LnrpcEdgeLocator = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcEdgeLocator</code>.
   * @alias module:model/LnrpcEdgeLocator
   */
  function LnrpcEdgeLocator() {
    _classCallCheck(this, LnrpcEdgeLocator);

    LnrpcEdgeLocator.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcEdgeLocator, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcEdgeLocator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcEdgeLocator} obj Optional instance to populate.
     * @return {module:model/LnrpcEdgeLocator} The populated <code>LnrpcEdgeLocator</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcEdgeLocator();

        if (data.hasOwnProperty('channel_id')) {
          obj['channel_id'] = _ApiClient["default"].convertToType(data['channel_id'], 'String');
        }

        if (data.hasOwnProperty('direction_reverse')) {
          obj['direction_reverse'] = _ApiClient["default"].convertToType(data['direction_reverse'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcEdgeLocator;
}();
/**
 * The short channel id of this edge.
 * @member {String} channel_id
 */


LnrpcEdgeLocator.prototype['channel_id'] = undefined;
/**
 * The direction of this edge. If direction_reverse is false, the direction of this edge is from the channel endpoint with the lexicographically smaller pub key to the endpoint with the larger pub key. If direction_reverse is is true, the edge goes the other way.
 * @member {Boolean} direction_reverse
 */

LnrpcEdgeLocator.prototype['direction_reverse'] = undefined;
var _default = LnrpcEdgeLocator;
exports["default"] = _default;