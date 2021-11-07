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
 * The LnrpcVerifyMessageRequest model module.
 * @module model/LnrpcVerifyMessageRequest
 * @version version not set
 */
var LnrpcVerifyMessageRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcVerifyMessageRequest</code>.
   * @alias module:model/LnrpcVerifyMessageRequest
   */
  function LnrpcVerifyMessageRequest() {
    _classCallCheck(this, LnrpcVerifyMessageRequest);

    LnrpcVerifyMessageRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcVerifyMessageRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcVerifyMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcVerifyMessageRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcVerifyMessageRequest} The populated <code>LnrpcVerifyMessageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcVerifyMessageRequest();

        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'Blob');
        }

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcVerifyMessageRequest;
}();
/**
 * The message over which the signature is to be verified. When using REST, this field must be encoded as base64.
 * @member {Blob} msg
 */


LnrpcVerifyMessageRequest.prototype['msg'] = undefined;
/**
 * @member {String} signature
 */

LnrpcVerifyMessageRequest.prototype['signature'] = undefined;
var _default = LnrpcVerifyMessageRequest;
exports["default"] = _default;