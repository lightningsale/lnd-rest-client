"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcRoute = _interopRequireDefault(require("./LnrpcRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcSendToRouteRequest model module.
 * @module model/LnrpcSendToRouteRequest
 * @version version not set
 */
var LnrpcSendToRouteRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcSendToRouteRequest</code>.
   * @alias module:model/LnrpcSendToRouteRequest
   */
  function LnrpcSendToRouteRequest() {
    _classCallCheck(this, LnrpcSendToRouteRequest);

    LnrpcSendToRouteRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcSendToRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcSendToRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSendToRouteRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcSendToRouteRequest} The populated <code>LnrpcSendToRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcSendToRouteRequest();

        if (data.hasOwnProperty('payment_hash')) {
          obj['payment_hash'] = _ApiClient["default"].convertToType(data['payment_hash'], 'Blob');
        }

        if (data.hasOwnProperty('payment_hash_string')) {
          obj['payment_hash_string'] = _ApiClient["default"].convertToType(data['payment_hash_string'], 'String');
        }

        if (data.hasOwnProperty('route')) {
          obj['route'] = _LnrpcRoute["default"].constructFromObject(data['route']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcSendToRouteRequest;
}();
/**
 * The payment hash to use for the HTLC. When using REST, this field must be encoded as base64.
 * @member {Blob} payment_hash
 */


LnrpcSendToRouteRequest.prototype['payment_hash'] = undefined;
/**
 * An optional hex-encoded payment hash to be used for the HTLC. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
 * @member {String} payment_hash_string
 */

LnrpcSendToRouteRequest.prototype['payment_hash_string'] = undefined;
/**
 * @member {module:model/LnrpcRoute} route
 */

LnrpcSendToRouteRequest.prototype['route'] = undefined;
var _default = LnrpcSendToRouteRequest;
exports["default"] = _default;