"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFeature = _interopRequireDefault(require("./LnrpcFeature"));

var _LnrpcNodeAddress = _interopRequireDefault(require("./LnrpcNodeAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcLightningNode model module.
 * @module model/LnrpcLightningNode
 * @version version not set
 */
var LnrpcLightningNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcLightningNode</code>.
   * An individual vertex/node within the channel graph. A node is connected to other nodes by one or more channel edges emanating from it. As the graph is directed, a node will also have an incoming edge attached to it for each outgoing edge.
   * @alias module:model/LnrpcLightningNode
   */
  function LnrpcLightningNode() {
    _classCallCheck(this, LnrpcLightningNode);

    LnrpcLightningNode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcLightningNode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcLightningNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcLightningNode} obj Optional instance to populate.
     * @return {module:model/LnrpcLightningNode} The populated <code>LnrpcLightningNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcLightningNode();

        if (data.hasOwnProperty('last_update')) {
          obj['last_update'] = _ApiClient["default"].convertToType(data['last_update'], 'Number');
        }

        if (data.hasOwnProperty('pub_key')) {
          obj['pub_key'] = _ApiClient["default"].convertToType(data['pub_key'], 'String');
        }

        if (data.hasOwnProperty('alias')) {
          obj['alias'] = _ApiClient["default"].convertToType(data['alias'], 'String');
        }

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], [_LnrpcNodeAddress["default"]]);
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], {
            'String': _LnrpcFeature["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcLightningNode;
}();
/**
 * @member {Number} last_update
 */


LnrpcLightningNode.prototype['last_update'] = undefined;
/**
 * @member {String} pub_key
 */

LnrpcLightningNode.prototype['pub_key'] = undefined;
/**
 * @member {String} alias
 */

LnrpcLightningNode.prototype['alias'] = undefined;
/**
 * @member {Array.<module:model/LnrpcNodeAddress>} addresses
 */

LnrpcLightningNode.prototype['addresses'] = undefined;
/**
 * @member {String} color
 */

LnrpcLightningNode.prototype['color'] = undefined;
/**
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */

LnrpcLightningNode.prototype['features'] = undefined;
var _default = LnrpcLightningNode;
exports["default"] = _default;