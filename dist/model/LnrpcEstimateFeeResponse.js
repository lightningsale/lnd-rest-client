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
 * The LnrpcEstimateFeeResponse model module.
 * @module model/LnrpcEstimateFeeResponse
 * @version version not set
 */
var LnrpcEstimateFeeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcEstimateFeeResponse</code>.
   * @alias module:model/LnrpcEstimateFeeResponse
   */
  function LnrpcEstimateFeeResponse() {
    _classCallCheck(this, LnrpcEstimateFeeResponse);

    LnrpcEstimateFeeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcEstimateFeeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcEstimateFeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcEstimateFeeResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcEstimateFeeResponse} The populated <code>LnrpcEstimateFeeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcEstimateFeeResponse();

        if (data.hasOwnProperty('fee_sat')) {
          obj['fee_sat'] = _ApiClient["default"].convertToType(data['fee_sat'], 'String');
        }

        if (data.hasOwnProperty('feerate_sat_per_byte')) {
          obj['feerate_sat_per_byte'] = _ApiClient["default"].convertToType(data['feerate_sat_per_byte'], 'String');
        }

        if (data.hasOwnProperty('sat_per_vbyte')) {
          obj['sat_per_vbyte'] = _ApiClient["default"].convertToType(data['sat_per_vbyte'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcEstimateFeeResponse;
}();
/**
 * The total fee in satoshis.
 * @member {String} fee_sat
 */


LnrpcEstimateFeeResponse.prototype['fee_sat'] = undefined;
/**
 * Deprecated, use sat_per_vbyte. The fee rate in satoshi/vbyte.
 * @member {String} feerate_sat_per_byte
 */

LnrpcEstimateFeeResponse.prototype['feerate_sat_per_byte'] = undefined;
/**
 * The fee rate in satoshi/vbyte.
 * @member {String} sat_per_vbyte
 */

LnrpcEstimateFeeResponse.prototype['sat_per_vbyte'] = undefined;
var _default = LnrpcEstimateFeeResponse;
exports["default"] = _default;