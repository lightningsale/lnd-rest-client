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
 * The LnrpcDebugLevelResponse model module.
 * @module model/LnrpcDebugLevelResponse
 * @version version not set
 */
var LnrpcDebugLevelResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcDebugLevelResponse</code>.
   * @alias module:model/LnrpcDebugLevelResponse
   */
  function LnrpcDebugLevelResponse() {
    _classCallCheck(this, LnrpcDebugLevelResponse);

    LnrpcDebugLevelResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcDebugLevelResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcDebugLevelResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcDebugLevelResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcDebugLevelResponse} The populated <code>LnrpcDebugLevelResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcDebugLevelResponse();

        if (data.hasOwnProperty('sub_systems')) {
          obj['sub_systems'] = _ApiClient["default"].convertToType(data['sub_systems'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcDebugLevelResponse;
}();
/**
 * @member {String} sub_systems
 */


LnrpcDebugLevelResponse.prototype['sub_systems'] = undefined;
var _default = LnrpcDebugLevelResponse;
exports["default"] = _default;