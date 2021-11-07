"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFundingPsbtFinalize = _interopRequireDefault(require("./LnrpcFundingPsbtFinalize"));

var _LnrpcFundingPsbtVerify = _interopRequireDefault(require("./LnrpcFundingPsbtVerify"));

var _LnrpcFundingShim = _interopRequireDefault(require("./LnrpcFundingShim"));

var _LnrpcFundingShimCancel = _interopRequireDefault(require("./LnrpcFundingShimCancel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcFundingTransitionMsg model module.
 * @module model/LnrpcFundingTransitionMsg
 * @version version not set
 */
var LnrpcFundingTransitionMsg = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFundingTransitionMsg</code>.
   * @alias module:model/LnrpcFundingTransitionMsg
   */
  function LnrpcFundingTransitionMsg() {
    _classCallCheck(this, LnrpcFundingTransitionMsg);

    LnrpcFundingTransitionMsg.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFundingTransitionMsg, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFundingTransitionMsg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFundingTransitionMsg} obj Optional instance to populate.
     * @return {module:model/LnrpcFundingTransitionMsg} The populated <code>LnrpcFundingTransitionMsg</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFundingTransitionMsg();

        if (data.hasOwnProperty('shim_register')) {
          obj['shim_register'] = _LnrpcFundingShim["default"].constructFromObject(data['shim_register']);
        }

        if (data.hasOwnProperty('shim_cancel')) {
          obj['shim_cancel'] = _LnrpcFundingShimCancel["default"].constructFromObject(data['shim_cancel']);
        }

        if (data.hasOwnProperty('psbt_verify')) {
          obj['psbt_verify'] = _LnrpcFundingPsbtVerify["default"].constructFromObject(data['psbt_verify']);
        }

        if (data.hasOwnProperty('psbt_finalize')) {
          obj['psbt_finalize'] = _LnrpcFundingPsbtFinalize["default"].constructFromObject(data['psbt_finalize']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcFundingTransitionMsg;
}();
/**
 * @member {module:model/LnrpcFundingShim} shim_register
 */


LnrpcFundingTransitionMsg.prototype['shim_register'] = undefined;
/**
 * @member {module:model/LnrpcFundingShimCancel} shim_cancel
 */

LnrpcFundingTransitionMsg.prototype['shim_cancel'] = undefined;
/**
 * @member {module:model/LnrpcFundingPsbtVerify} psbt_verify
 */

LnrpcFundingTransitionMsg.prototype['psbt_verify'] = undefined;
/**
 * @member {module:model/LnrpcFundingPsbtFinalize} psbt_finalize
 */

LnrpcFundingTransitionMsg.prototype['psbt_finalize'] = undefined;
var _default = LnrpcFundingTransitionMsg;
exports["default"] = _default;