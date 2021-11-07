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
 * The LnrpcSignMessageResponse model module.
 * @module model/LnrpcSignMessageResponse
 * @version version not set
 */
var LnrpcSignMessageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcSignMessageResponse</code>.
   * @alias module:model/LnrpcSignMessageResponse
   */
  function LnrpcSignMessageResponse() {
    _classCallCheck(this, LnrpcSignMessageResponse);

    LnrpcSignMessageResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcSignMessageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcSignMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSignMessageResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcSignMessageResponse} The populated <code>LnrpcSignMessageResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcSignMessageResponse();

        if (data.hasOwnProperty('signature')) {
          obj['signature'] = _ApiClient["default"].convertToType(data['signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcSignMessageResponse;
}();
/**
 * @member {String} signature
 */


LnrpcSignMessageResponse.prototype['signature'] = undefined;
var _default = LnrpcSignMessageResponse;
exports["default"] = _default;