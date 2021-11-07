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
 * The LnrpcNodeAddress model module.
 * @module model/LnrpcNodeAddress
 * @version version not set
 */
var LnrpcNodeAddress = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcNodeAddress</code>.
   * @alias module:model/LnrpcNodeAddress
   */
  function LnrpcNodeAddress() {
    _classCallCheck(this, LnrpcNodeAddress);

    LnrpcNodeAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcNodeAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcNodeAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNodeAddress} obj Optional instance to populate.
     * @return {module:model/LnrpcNodeAddress} The populated <code>LnrpcNodeAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcNodeAddress();

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('addr')) {
          obj['addr'] = _ApiClient["default"].convertToType(data['addr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcNodeAddress;
}();
/**
 * @member {String} network
 */


LnrpcNodeAddress.prototype['network'] = undefined;
/**
 * @member {String} addr
 */

LnrpcNodeAddress.prototype['addr'] = undefined;
var _default = LnrpcNodeAddress;
exports["default"] = _default;