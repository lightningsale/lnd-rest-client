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
 * The LnrpcGetRecoveryInfoResponse model module.
 * @module model/LnrpcGetRecoveryInfoResponse
 * @version version not set
 */
var LnrpcGetRecoveryInfoResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcGetRecoveryInfoResponse</code>.
   * @alias module:model/LnrpcGetRecoveryInfoResponse
   */
  function LnrpcGetRecoveryInfoResponse() {
    _classCallCheck(this, LnrpcGetRecoveryInfoResponse);

    LnrpcGetRecoveryInfoResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcGetRecoveryInfoResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcGetRecoveryInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcGetRecoveryInfoResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcGetRecoveryInfoResponse} The populated <code>LnrpcGetRecoveryInfoResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcGetRecoveryInfoResponse();

        if (data.hasOwnProperty('recovery_mode')) {
          obj['recovery_mode'] = _ApiClient["default"].convertToType(data['recovery_mode'], 'Boolean');
        }

        if (data.hasOwnProperty('recovery_finished')) {
          obj['recovery_finished'] = _ApiClient["default"].convertToType(data['recovery_finished'], 'Boolean');
        }

        if (data.hasOwnProperty('progress')) {
          obj['progress'] = _ApiClient["default"].convertToType(data['progress'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcGetRecoveryInfoResponse;
}();
/**
 * @member {Boolean} recovery_mode
 */


LnrpcGetRecoveryInfoResponse.prototype['recovery_mode'] = undefined;
/**
 * @member {Boolean} recovery_finished
 */

LnrpcGetRecoveryInfoResponse.prototype['recovery_finished'] = undefined;
/**
 * The recovery progress, ranging from 0 to 1.
 * @member {Number} progress
 */

LnrpcGetRecoveryInfoResponse.prototype['progress'] = undefined;
var _default = LnrpcGetRecoveryInfoResponse;
exports["default"] = _default;