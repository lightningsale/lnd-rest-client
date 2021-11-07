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
 * The LnrpcNodeUpdate model module.
 * @module model/LnrpcNodeUpdate
 * @version version not set
 */
var LnrpcNodeUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcNodeUpdate</code>.
   * @alias module:model/LnrpcNodeUpdate
   */
  function LnrpcNodeUpdate() {
    _classCallCheck(this, LnrpcNodeUpdate);

    LnrpcNodeUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcNodeUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcNodeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNodeUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcNodeUpdate} The populated <code>LnrpcNodeUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcNodeUpdate();

        if (data.hasOwnProperty('addresses')) {
          obj['addresses'] = _ApiClient["default"].convertToType(data['addresses'], ['String']);
        }

        if (data.hasOwnProperty('identity_key')) {
          obj['identity_key'] = _ApiClient["default"].convertToType(data['identity_key'], 'String');
        }

        if (data.hasOwnProperty('global_features')) {
          obj['global_features'] = _ApiClient["default"].convertToType(data['global_features'], 'Blob');
        }

        if (data.hasOwnProperty('alias')) {
          obj['alias'] = _ApiClient["default"].convertToType(data['alias'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('node_addresses')) {
          obj['node_addresses'] = _ApiClient["default"].convertToType(data['node_addresses'], [_LnrpcNodeAddress["default"]]);
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

  return LnrpcNodeUpdate;
}();
/**
 * Deprecated, use node_addresses.
 * @member {Array.<String>} addresses
 */


LnrpcNodeUpdate.prototype['addresses'] = undefined;
/**
 * @member {String} identity_key
 */

LnrpcNodeUpdate.prototype['identity_key'] = undefined;
/**
 * Deprecated, use features.
 * @member {Blob} global_features
 */

LnrpcNodeUpdate.prototype['global_features'] = undefined;
/**
 * @member {String} alias
 */

LnrpcNodeUpdate.prototype['alias'] = undefined;
/**
 * @member {String} color
 */

LnrpcNodeUpdate.prototype['color'] = undefined;
/**
 * @member {Array.<module:model/LnrpcNodeAddress>} node_addresses
 */

LnrpcNodeUpdate.prototype['node_addresses'] = undefined;
/**
 * Features that the node has advertised in the init message, node announcements and invoices.
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */

LnrpcNodeUpdate.prototype['features'] = undefined;
var _default = LnrpcNodeUpdate;
exports["default"] = _default;