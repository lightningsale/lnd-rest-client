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
 * The LnrpcVerifyMessageResponse model module.
 * @module model/LnrpcVerifyMessageResponse
 * @version version not set
 */
var LnrpcVerifyMessageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcVerifyMessageResponse</code>.
   * @alias module:model/LnrpcVerifyMessageResponse
   */
  function LnrpcVerifyMessageResponse() {
    _classCallCheck(this, LnrpcVerifyMessageResponse);

    LnrpcVerifyMessageResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcVerifyMessageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcVerifyMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcVerifyMessageResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcVerifyMessageResponse} The populated <code>LnrpcVerifyMessageResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcVerifyMessageResponse();

        if (data.hasOwnProperty('valid')) {
          obj['valid'] = _ApiClient["default"].convertToType(data['valid'], 'Boolean');
        }

        if (data.hasOwnProperty('pubkey')) {
          obj['pubkey'] = _ApiClient["default"].convertToType(data['pubkey'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcVerifyMessageResponse;
}();
/**
 * @member {Boolean} valid
 */


LnrpcVerifyMessageResponse.prototype['valid'] = undefined;
/**
 * @member {String} pubkey
 */

LnrpcVerifyMessageResponse.prototype['pubkey'] = undefined;
var _default = LnrpcVerifyMessageResponse;
exports["default"] = _default;