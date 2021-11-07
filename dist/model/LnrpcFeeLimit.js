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
 * The LnrpcFeeLimit model module.
 * @module model/LnrpcFeeLimit
 * @version version not set
 */
var LnrpcFeeLimit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFeeLimit</code>.
   * @alias module:model/LnrpcFeeLimit
   */
  function LnrpcFeeLimit() {
    _classCallCheck(this, LnrpcFeeLimit);

    LnrpcFeeLimit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFeeLimit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFeeLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFeeLimit} obj Optional instance to populate.
     * @return {module:model/LnrpcFeeLimit} The populated <code>LnrpcFeeLimit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFeeLimit();

        if (data.hasOwnProperty('fixed')) {
          obj['fixed'] = _ApiClient["default"].convertToType(data['fixed'], 'String');
        }

        if (data.hasOwnProperty('fixed_msat')) {
          obj['fixed_msat'] = _ApiClient["default"].convertToType(data['fixed_msat'], 'String');
        }

        if (data.hasOwnProperty('percent')) {
          obj['percent'] = _ApiClient["default"].convertToType(data['percent'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFeeLimit;
}();
/**
 * The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
 * @member {String} fixed
 */


LnrpcFeeLimit.prototype['fixed'] = undefined;
/**
 * The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
 * @member {String} fixed_msat
 */

LnrpcFeeLimit.prototype['fixed_msat'] = undefined;
/**
 * The fee limit expressed as a percentage of the payment amount.
 * @member {String} percent
 */

LnrpcFeeLimit.prototype['percent'] = undefined;
var _default = LnrpcFeeLimit;
exports["default"] = _default;