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
 * The LnrpcChannelFeeReport model module.
 * @module model/LnrpcChannelFeeReport
 * @version version not set
 */
var LnrpcChannelFeeReport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelFeeReport</code>.
   * @alias module:model/LnrpcChannelFeeReport
   */
  function LnrpcChannelFeeReport() {
    _classCallCheck(this, LnrpcChannelFeeReport);

    LnrpcChannelFeeReport.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelFeeReport, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelFeeReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelFeeReport} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelFeeReport} The populated <code>LnrpcChannelFeeReport</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelFeeReport();

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('channel_point')) {
          obj['channel_point'] = _ApiClient["default"].convertToType(data['channel_point'], 'String');
        }

        if (data.hasOwnProperty('base_fee_msat')) {
          obj['base_fee_msat'] = _ApiClient["default"].convertToType(data['base_fee_msat'], 'String');
        }

        if (data.hasOwnProperty('fee_per_mil')) {
          obj['fee_per_mil'] = _ApiClient["default"].convertToType(data['fee_per_mil'], 'String');
        }

        if (data.hasOwnProperty('fee_rate')) {
          obj['fee_rate'] = _ApiClient["default"].convertToType(data['fee_rate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelFeeReport;
}();
/**
 * The short channel id that this fee report belongs to.
 * @member {String} chan_id
 */


LnrpcChannelFeeReport.prototype['chan_id'] = undefined;
/**
 * The channel that this fee report belongs to.
 * @member {String} channel_point
 */

LnrpcChannelFeeReport.prototype['channel_point'] = undefined;
/**
 * The base fee charged regardless of the number of milli-satoshis sent.
 * @member {String} base_fee_msat
 */

LnrpcChannelFeeReport.prototype['base_fee_msat'] = undefined;
/**
 * The amount charged per milli-satoshis transferred expressed in millionths of a satoshi.
 * @member {String} fee_per_mil
 */

LnrpcChannelFeeReport.prototype['fee_per_mil'] = undefined;
/**
 * The effective fee rate in milli-satoshis. Computed by dividing the fee_per_mil value by 1 million.
 * @member {Number} fee_rate
 */

LnrpcChannelFeeReport.prototype['fee_rate'] = undefined;
var _default = LnrpcChannelFeeReport;
exports["default"] = _default;