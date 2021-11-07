"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcHop = _interopRequireDefault(require("./LnrpcHop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcRoute model module.
 * @module model/LnrpcRoute
 * @version version not set
 */
var LnrpcRoute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcRoute</code>.
   * A path through the channel graph which runs over one or more channels in succession. This struct carries all the information required to craft the Sphinx onion packet, and send the payment along the first hop in the path. A route is only selected as valid if all the channels have sufficient capacity to carry the initial payment amount after fees are accounted for.
   * @alias module:model/LnrpcRoute
   */
  function LnrpcRoute() {
    _classCallCheck(this, LnrpcRoute);

    LnrpcRoute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcRoute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcRoute} obj Optional instance to populate.
     * @return {module:model/LnrpcRoute} The populated <code>LnrpcRoute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcRoute();

        if (data.hasOwnProperty('total_time_lock')) {
          obj['total_time_lock'] = _ApiClient["default"].convertToType(data['total_time_lock'], 'Number');
        }

        if (data.hasOwnProperty('total_fees')) {
          obj['total_fees'] = _ApiClient["default"].convertToType(data['total_fees'], 'String');
        }

        if (data.hasOwnProperty('total_amt')) {
          obj['total_amt'] = _ApiClient["default"].convertToType(data['total_amt'], 'String');
        }

        if (data.hasOwnProperty('hops')) {
          obj['hops'] = _ApiClient["default"].convertToType(data['hops'], [_LnrpcHop["default"]]);
        }

        if (data.hasOwnProperty('total_fees_msat')) {
          obj['total_fees_msat'] = _ApiClient["default"].convertToType(data['total_fees_msat'], 'String');
        }

        if (data.hasOwnProperty('total_amt_msat')) {
          obj['total_amt_msat'] = _ApiClient["default"].convertToType(data['total_amt_msat'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcRoute;
}();
/**
 * The cumulative (final) time lock across the entire route. This is the CLTV value that should be extended to the first hop in the route. All other hops will decrement the time-lock as advertised, leaving enough time for all hops to wait for or present the payment preimage to complete the payment.
 * @member {Number} total_time_lock
 */


LnrpcRoute.prototype['total_time_lock'] = undefined;
/**
 * The sum of the fees paid at each hop within the final route. In the case of a one-hop payment, this value will be zero as we don't need to pay a fee to ourselves.
 * @member {String} total_fees
 */

LnrpcRoute.prototype['total_fees'] = undefined;
/**
 * The total amount of funds required to complete a payment over this route. This value includes the cumulative fees at each hop. As a result, the HTLC extended to the first-hop in the route will need to have at least this many satoshis, otherwise the route will fail at an intermediate node due to an insufficient amount of fees.
 * @member {String} total_amt
 */

LnrpcRoute.prototype['total_amt'] = undefined;
/**
 * Contains details concerning the specific forwarding details at each hop.
 * @member {Array.<module:model/LnrpcHop>} hops
 */

LnrpcRoute.prototype['hops'] = undefined;
/**
 * The total fees in millisatoshis.
 * @member {String} total_fees_msat
 */

LnrpcRoute.prototype['total_fees_msat'] = undefined;
/**
 * The total amount in millisatoshis.
 * @member {String} total_amt_msat
 */

LnrpcRoute.prototype['total_amt_msat'] = undefined;
var _default = LnrpcRoute;
exports["default"] = _default;