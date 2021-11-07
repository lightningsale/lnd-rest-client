"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcInvoice = _interopRequireDefault(require("./LnrpcInvoice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcListInvoiceResponse model module.
 * @module model/LnrpcListInvoiceResponse
 * @version version not set
 */
var LnrpcListInvoiceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcListInvoiceResponse</code>.
   * @alias module:model/LnrpcListInvoiceResponse
   */
  function LnrpcListInvoiceResponse() {
    _classCallCheck(this, LnrpcListInvoiceResponse);

    LnrpcListInvoiceResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcListInvoiceResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcListInvoiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcListInvoiceResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcListInvoiceResponse} The populated <code>LnrpcListInvoiceResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcListInvoiceResponse();

        if (data.hasOwnProperty('invoices')) {
          obj['invoices'] = _ApiClient["default"].convertToType(data['invoices'], [_LnrpcInvoice["default"]]);
        }

        if (data.hasOwnProperty('last_index_offset')) {
          obj['last_index_offset'] = _ApiClient["default"].convertToType(data['last_index_offset'], 'String');
        }

        if (data.hasOwnProperty('first_index_offset')) {
          obj['first_index_offset'] = _ApiClient["default"].convertToType(data['first_index_offset'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcListInvoiceResponse;
}();
/**
 * A list of invoices from the time slice of the time series specified in the request.
 * @member {Array.<module:model/LnrpcInvoice>} invoices
 */


LnrpcListInvoiceResponse.prototype['invoices'] = undefined;
/**
 * The index of the last item in the set of returned invoices. This can be used to seek further, pagination style.
 * @member {String} last_index_offset
 */

LnrpcListInvoiceResponse.prototype['last_index_offset'] = undefined;
/**
 * The index of the last item in the set of returned invoices. This can be used to seek backwards, pagination style.
 * @member {String} first_index_offset
 */

LnrpcListInvoiceResponse.prototype['first_index_offset'] = undefined;
var _default = LnrpcListInvoiceResponse;
exports["default"] = _default;