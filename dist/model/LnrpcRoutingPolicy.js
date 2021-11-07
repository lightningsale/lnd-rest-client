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
 * The LnrpcRoutingPolicy model module.
 * @module model/LnrpcRoutingPolicy
 * @version version not set
 */
var LnrpcRoutingPolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcRoutingPolicy</code>.
   * @alias module:model/LnrpcRoutingPolicy
   */
  function LnrpcRoutingPolicy() {
    _classCallCheck(this, LnrpcRoutingPolicy);

    LnrpcRoutingPolicy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcRoutingPolicy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcRoutingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcRoutingPolicy} obj Optional instance to populate.
     * @return {module:model/LnrpcRoutingPolicy} The populated <code>LnrpcRoutingPolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcRoutingPolicy();

        if (data.hasOwnProperty('time_lock_delta')) {
          obj['time_lock_delta'] = _ApiClient["default"].convertToType(data['time_lock_delta'], 'Number');
        }

        if (data.hasOwnProperty('min_htlc')) {
          obj['min_htlc'] = _ApiClient["default"].convertToType(data['min_htlc'], 'String');
        }

        if (data.hasOwnProperty('fee_base_msat')) {
          obj['fee_base_msat'] = _ApiClient["default"].convertToType(data['fee_base_msat'], 'String');
        }

        if (data.hasOwnProperty('fee_rate_milli_msat')) {
          obj['fee_rate_milli_msat'] = _ApiClient["default"].convertToType(data['fee_rate_milli_msat'], 'String');
        }

        if (data.hasOwnProperty('disabled')) {
          obj['disabled'] = _ApiClient["default"].convertToType(data['disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('max_htlc_msat')) {
          obj['max_htlc_msat'] = _ApiClient["default"].convertToType(data['max_htlc_msat'], 'String');
        }

        if (data.hasOwnProperty('last_update')) {
          obj['last_update'] = _ApiClient["default"].convertToType(data['last_update'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcRoutingPolicy;
}();
/**
 * @member {Number} time_lock_delta
 */


LnrpcRoutingPolicy.prototype['time_lock_delta'] = undefined;
/**
 * @member {String} min_htlc
 */

LnrpcRoutingPolicy.prototype['min_htlc'] = undefined;
/**
 * @member {String} fee_base_msat
 */

LnrpcRoutingPolicy.prototype['fee_base_msat'] = undefined;
/**
 * @member {String} fee_rate_milli_msat
 */

LnrpcRoutingPolicy.prototype['fee_rate_milli_msat'] = undefined;
/**
 * @member {Boolean} disabled
 */

LnrpcRoutingPolicy.prototype['disabled'] = undefined;
/**
 * @member {String} max_htlc_msat
 */

LnrpcRoutingPolicy.prototype['max_htlc_msat'] = undefined;
/**
 * @member {Number} last_update
 */

LnrpcRoutingPolicy.prototype['last_update'] = undefined;
var _default = LnrpcRoutingPolicy;
exports["default"] = _default;