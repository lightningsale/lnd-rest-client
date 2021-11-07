"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChanPointShim = _interopRequireDefault(require("./LnrpcChanPointShim"));

var _LnrpcPsbtShim = _interopRequireDefault(require("./LnrpcPsbtShim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcFundingShim model module.
 * @module model/LnrpcFundingShim
 * @version version not set
 */
var LnrpcFundingShim = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFundingShim</code>.
   * @alias module:model/LnrpcFundingShim
   */
  function LnrpcFundingShim() {
    _classCallCheck(this, LnrpcFundingShim);

    LnrpcFundingShim.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFundingShim, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFundingShim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFundingShim} obj Optional instance to populate.
     * @return {module:model/LnrpcFundingShim} The populated <code>LnrpcFundingShim</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFundingShim();

        if (data.hasOwnProperty('chan_point_shim')) {
          obj['chan_point_shim'] = _LnrpcChanPointShim["default"].constructFromObject(data['chan_point_shim']);
        }

        if (data.hasOwnProperty('psbt_shim')) {
          obj['psbt_shim'] = _LnrpcPsbtShim["default"].constructFromObject(data['psbt_shim']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcFundingShim;
}();
/**
 * @member {module:model/LnrpcChanPointShim} chan_point_shim
 */


LnrpcFundingShim.prototype['chan_point_shim'] = undefined;
/**
 * @member {module:model/LnrpcPsbtShim} psbt_shim
 */

LnrpcFundingShim.prototype['psbt_shim'] = undefined;
var _default = LnrpcFundingShim;
exports["default"] = _default;