"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcWalletAccountBalance = _interopRequireDefault(require("./LnrpcWalletAccountBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcWalletBalanceResponse model module.
 * @module model/LnrpcWalletBalanceResponse
 * @version version not set
 */
var LnrpcWalletBalanceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcWalletBalanceResponse</code>.
   * @alias module:model/LnrpcWalletBalanceResponse
   */
  function LnrpcWalletBalanceResponse() {
    _classCallCheck(this, LnrpcWalletBalanceResponse);

    LnrpcWalletBalanceResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcWalletBalanceResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcWalletBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcWalletBalanceResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcWalletBalanceResponse} The populated <code>LnrpcWalletBalanceResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcWalletBalanceResponse();

        if (data.hasOwnProperty('total_balance')) {
          obj['total_balance'] = _ApiClient["default"].convertToType(data['total_balance'], 'String');
        }

        if (data.hasOwnProperty('confirmed_balance')) {
          obj['confirmed_balance'] = _ApiClient["default"].convertToType(data['confirmed_balance'], 'String');
        }

        if (data.hasOwnProperty('unconfirmed_balance')) {
          obj['unconfirmed_balance'] = _ApiClient["default"].convertToType(data['unconfirmed_balance'], 'String');
        }

        if (data.hasOwnProperty('account_balance')) {
          obj['account_balance'] = _ApiClient["default"].convertToType(data['account_balance'], {
            'String': _LnrpcWalletAccountBalance["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcWalletBalanceResponse;
}();
/**
 * @member {String} total_balance
 */


LnrpcWalletBalanceResponse.prototype['total_balance'] = undefined;
/**
 * @member {String} confirmed_balance
 */

LnrpcWalletBalanceResponse.prototype['confirmed_balance'] = undefined;
/**
 * @member {String} unconfirmed_balance
 */

LnrpcWalletBalanceResponse.prototype['unconfirmed_balance'] = undefined;
/**
 * A mapping of each wallet account's name to its balance.
 * @member {Object.<String, module:model/LnrpcWalletAccountBalance>} account_balance
 */

LnrpcWalletBalanceResponse.prototype['account_balance'] = undefined;
var _default = LnrpcWalletBalanceResponse;
exports["default"] = _default;