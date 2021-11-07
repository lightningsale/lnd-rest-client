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
 * The LnrpcSendCoinsResponse model module.
 * @module model/LnrpcSendCoinsResponse
 * @version version not set
 */
var LnrpcSendCoinsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcSendCoinsResponse</code>.
   * @alias module:model/LnrpcSendCoinsResponse
   */
  function LnrpcSendCoinsResponse() {
    _classCallCheck(this, LnrpcSendCoinsResponse);

    LnrpcSendCoinsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcSendCoinsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcSendCoinsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSendCoinsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcSendCoinsResponse} The populated <code>LnrpcSendCoinsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcSendCoinsResponse();

        if (data.hasOwnProperty('txid')) {
          obj['txid'] = _ApiClient["default"].convertToType(data['txid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcSendCoinsResponse;
}();
/**
 * @member {String} txid
 */


LnrpcSendCoinsResponse.prototype['txid'] = undefined;
var _default = LnrpcSendCoinsResponse;
exports["default"] = _default;