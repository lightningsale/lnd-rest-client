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
 * The LnrpcMPPRecord model module.
 * @module model/LnrpcMPPRecord
 * @version version not set
 */
var LnrpcMPPRecord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcMPPRecord</code>.
   * @alias module:model/LnrpcMPPRecord
   */
  function LnrpcMPPRecord() {
    _classCallCheck(this, LnrpcMPPRecord);

    LnrpcMPPRecord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcMPPRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcMPPRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcMPPRecord} obj Optional instance to populate.
     * @return {module:model/LnrpcMPPRecord} The populated <code>LnrpcMPPRecord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcMPPRecord();

        if (data.hasOwnProperty('payment_addr')) {
          obj['payment_addr'] = _ApiClient["default"].convertToType(data['payment_addr'], 'Blob');
        }

        if (data.hasOwnProperty('total_amt_msat')) {
          obj['total_amt_msat'] = _ApiClient["default"].convertToType(data['total_amt_msat'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcMPPRecord;
}();
/**
 * A unique, random identifier used to authenticate the sender as the intended payer of a multi-path payment. The payment_addr must be the same for all subpayments, and match the payment_addr provided in the receiver's invoice. The same payment_addr must be used on all subpayments.
 * @member {Blob} payment_addr
 */


LnrpcMPPRecord.prototype['payment_addr'] = undefined;
/**
 * The total amount in milli-satoshis being sent as part of a larger multi-path payment. The caller is responsible for ensuring subpayments to the same node and payment_hash sum exactly to total_amt_msat. The same total_amt_msat must be used on all subpayments.
 * @member {String} total_amt_msat
 */

LnrpcMPPRecord.prototype['total_amt_msat'] = undefined;
var _default = LnrpcMPPRecord;
exports["default"] = _default;