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
 * The LnrpcWalletAccountBalance model module.
 * @module model/LnrpcWalletAccountBalance
 * @version version not set
 */
var LnrpcWalletAccountBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcWalletAccountBalance</code>.
   * @alias module:model/LnrpcWalletAccountBalance
   */
  function LnrpcWalletAccountBalance() {
    _classCallCheck(this, LnrpcWalletAccountBalance);

    LnrpcWalletAccountBalance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcWalletAccountBalance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcWalletAccountBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcWalletAccountBalance} obj Optional instance to populate.
     * @return {module:model/LnrpcWalletAccountBalance} The populated <code>LnrpcWalletAccountBalance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcWalletAccountBalance();

        if (data.hasOwnProperty('confirmed_balance')) {
          obj['confirmed_balance'] = _ApiClient["default"].convertToType(data['confirmed_balance'], 'String');
        }

        if (data.hasOwnProperty('unconfirmed_balance')) {
          obj['unconfirmed_balance'] = _ApiClient["default"].convertToType(data['unconfirmed_balance'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcWalletAccountBalance;
}();
/**
 * The confirmed balance of the account (with >= 1 confirmations).
 * @member {String} confirmed_balance
 */


LnrpcWalletAccountBalance.prototype['confirmed_balance'] = undefined;
/**
 * The unconfirmed balance of the account (with 0 confirmations).
 * @member {String} unconfirmed_balance
 */

LnrpcWalletAccountBalance.prototype['unconfirmed_balance'] = undefined;
var _default = LnrpcWalletAccountBalance;
exports["default"] = _default;