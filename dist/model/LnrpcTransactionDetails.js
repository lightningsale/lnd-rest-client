"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcTransaction = _interopRequireDefault(require("./LnrpcTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcTransactionDetails model module.
 * @module model/LnrpcTransactionDetails
 * @version version not set
 */
var LnrpcTransactionDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcTransactionDetails</code>.
   * @alias module:model/LnrpcTransactionDetails
   */
  function LnrpcTransactionDetails() {
    _classCallCheck(this, LnrpcTransactionDetails);

    LnrpcTransactionDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcTransactionDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcTransactionDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcTransactionDetails} obj Optional instance to populate.
     * @return {module:model/LnrpcTransactionDetails} The populated <code>LnrpcTransactionDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcTransactionDetails();

        if (data.hasOwnProperty('transactions')) {
          obj['transactions'] = _ApiClient["default"].convertToType(data['transactions'], [_LnrpcTransaction["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcTransactionDetails;
}();
/**
 * The list of transactions relevant to the wallet.
 * @member {Array.<module:model/LnrpcTransaction>} transactions
 */


LnrpcTransactionDetails.prototype['transactions'] = undefined;
var _default = LnrpcTransactionDetails;
exports["default"] = _default;