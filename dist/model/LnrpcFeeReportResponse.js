"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelFeeReport = _interopRequireDefault(require("./LnrpcChannelFeeReport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcFeeReportResponse model module.
 * @module model/LnrpcFeeReportResponse
 * @version version not set
 */
var LnrpcFeeReportResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFeeReportResponse</code>.
   * @alias module:model/LnrpcFeeReportResponse
   */
  function LnrpcFeeReportResponse() {
    _classCallCheck(this, LnrpcFeeReportResponse);

    LnrpcFeeReportResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFeeReportResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFeeReportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFeeReportResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcFeeReportResponse} The populated <code>LnrpcFeeReportResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFeeReportResponse();

        if (data.hasOwnProperty('channel_fees')) {
          obj['channel_fees'] = _ApiClient["default"].convertToType(data['channel_fees'], [_LnrpcChannelFeeReport["default"]]);
        }

        if (data.hasOwnProperty('day_fee_sum')) {
          obj['day_fee_sum'] = _ApiClient["default"].convertToType(data['day_fee_sum'], 'String');
        }

        if (data.hasOwnProperty('week_fee_sum')) {
          obj['week_fee_sum'] = _ApiClient["default"].convertToType(data['week_fee_sum'], 'String');
        }

        if (data.hasOwnProperty('month_fee_sum')) {
          obj['month_fee_sum'] = _ApiClient["default"].convertToType(data['month_fee_sum'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFeeReportResponse;
}();
/**
 * An array of channel fee reports which describes the current fee schedule for each channel.
 * @member {Array.<module:model/LnrpcChannelFeeReport>} channel_fees
 */


LnrpcFeeReportResponse.prototype['channel_fees'] = undefined;
/**
 * The total amount of fee revenue (in satoshis) the switch has collected over the past 24 hrs.
 * @member {String} day_fee_sum
 */

LnrpcFeeReportResponse.prototype['day_fee_sum'] = undefined;
/**
 * The total amount of fee revenue (in satoshis) the switch has collected over the past 1 week.
 * @member {String} week_fee_sum
 */

LnrpcFeeReportResponse.prototype['week_fee_sum'] = undefined;
/**
 * The total amount of fee revenue (in satoshis) the switch has collected over the past 1 month.
 * @member {String} month_fee_sum
 */

LnrpcFeeReportResponse.prototype['month_fee_sum'] = undefined;
var _default = LnrpcFeeReportResponse;
exports["default"] = _default;