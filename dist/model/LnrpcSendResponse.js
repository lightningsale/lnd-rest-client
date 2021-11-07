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
 * The LnrpcSendResponse model module.
 * @module model/LnrpcSendResponse
 * @version version not set
 */
var LnrpcSendResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcSendResponse</code>.
   * @alias module:model/LnrpcSendResponse
   */
  function LnrpcSendResponse() {
    _classCallCheck(this, LnrpcSendResponse);

    LnrpcSendResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcSendResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcSendResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSendResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcSendResponse} The populated <code>LnrpcSendResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcSendResponse();

        if (data.hasOwnProperty('payment_error')) {
          obj['payment_error'] = _ApiClient["default"].convertToType(data['payment_error'], 'String');
        }

        if (data.hasOwnProperty('payment_preimage')) {
          obj['payment_preimage'] = _ApiClient["default"].convertToType(data['payment_preimage'], 'Blob');
        }

        if (data.hasOwnProperty('payment_route')) {
          obj['payment_route'] = _LnrpcRoute["default"].constructFromObject(data['payment_route']);
        }

        if (data.hasOwnProperty('payment_hash')) {
          obj['payment_hash'] = _ApiClient["default"].convertToType(data['payment_hash'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcSendResponse;
}();
/**
 * @member {String} payment_error
 */


LnrpcSendResponse.prototype['payment_error'] = undefined;
/**
 * @member {Blob} payment_preimage
 */

LnrpcSendResponse.prototype['payment_preimage'] = undefined;
/**
 * @member {module:model/LnrpcRoute} payment_route
 */

LnrpcSendResponse.prototype['payment_route'] = undefined;
/**
 * @member {Blob} payment_hash
 */

LnrpcSendResponse.prototype['payment_hash'] = undefined;
var _default = LnrpcSendResponse;
exports["default"] = _default;