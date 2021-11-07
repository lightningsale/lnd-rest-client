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
 * The LnrpcAddInvoiceResponse model module.
 * @module model/LnrpcAddInvoiceResponse
 * @version version not set
 */
var LnrpcAddInvoiceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcAddInvoiceResponse</code>.
   * @alias module:model/LnrpcAddInvoiceResponse
   */
  function LnrpcAddInvoiceResponse() {
    _classCallCheck(this, LnrpcAddInvoiceResponse);

    LnrpcAddInvoiceResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcAddInvoiceResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcAddInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcAddInvoiceResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcAddInvoiceResponse} The populated <code>LnrpcAddInvoiceResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcAddInvoiceResponse();

        if (data.hasOwnProperty('r_hash')) {
          obj['r_hash'] = _ApiClient["default"].convertToType(data['r_hash'], 'Blob');
        }

        if (data.hasOwnProperty('payment_request')) {
          obj['payment_request'] = _ApiClient["default"].convertToType(data['payment_request'], 'String');
        }

        if (data.hasOwnProperty('add_index')) {
          obj['add_index'] = _ApiClient["default"].convertToType(data['add_index'], 'String');
        }

        if (data.hasOwnProperty('payment_addr')) {
          obj['payment_addr'] = _ApiClient["default"].convertToType(data['payment_addr'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcAddInvoiceResponse;
}();
/**
 * @member {Blob} r_hash
 */


LnrpcAddInvoiceResponse.prototype['r_hash'] = undefined;
/**
 * A bare-bones invoice for a payment within the Lightning Network. With the details of the invoice, the sender has all the data necessary to send a payment to the recipient.
 * @member {String} payment_request
 */

LnrpcAddInvoiceResponse.prototype['payment_request'] = undefined;
/**
 * The \"add\" index of this invoice. Each newly created invoice will increment this index making it monotonically increasing. Callers to the SubscribeInvoices call can use this to instantly get notified of all added invoices with an add_index greater than this one.
 * @member {String} add_index
 */

LnrpcAddInvoiceResponse.prototype['add_index'] = undefined;
/**
 * The payment address of the generated invoice. This value should be used in all payments for this invoice as we require it for end to end security.
 * @member {Blob} payment_addr
 */

LnrpcAddInvoiceResponse.prototype['payment_addr'] = undefined;
var _default = LnrpcAddInvoiceResponse;
exports["default"] = _default;