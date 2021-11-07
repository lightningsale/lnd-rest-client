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
 * The LnrpcChain model module.
 * @module model/LnrpcChain
 * @version version not set
 */
var LnrpcChain = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChain</code>.
   * @alias module:model/LnrpcChain
   */
  function LnrpcChain() {
    _classCallCheck(this, LnrpcChain);

    LnrpcChain.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChain, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChain</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChain} obj Optional instance to populate.
     * @return {module:model/LnrpcChain} The populated <code>LnrpcChain</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChain();

        if (data.hasOwnProperty('chain')) {
          obj['chain'] = _ApiClient["default"].convertToType(data['chain'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChain;
}();
/**
 * @member {String} chain
 */


LnrpcChain.prototype['chain'] = undefined;
/**
 * @member {String} network
 */

LnrpcChain.prototype['network'] = undefined;
var _default = LnrpcChain;
exports["default"] = _default;