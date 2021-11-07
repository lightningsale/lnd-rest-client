"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcPayment = _interopRequireDefault(require("./LnrpcPayment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcListPaymentsResponse model module.
 * @module model/LnrpcListPaymentsResponse
 * @version version not set
 */
var LnrpcListPaymentsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcListPaymentsResponse</code>.
   * @alias module:model/LnrpcListPaymentsResponse
   */
  function LnrpcListPaymentsResponse() {
    _classCallCheck(this, LnrpcListPaymentsResponse);

    LnrpcListPaymentsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcListPaymentsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcListPaymentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcListPaymentsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcListPaymentsResponse} The populated <code>LnrpcListPaymentsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcListPaymentsResponse();

        if (data.hasOwnProperty('payments')) {
          obj['payments'] = _ApiClient["default"].convertToType(data['payments'], [_LnrpcPayment["default"]]);
        }

        if (data.hasOwnProperty('first_index_offset')) {
          obj['first_index_offset'] = _ApiClient["default"].convertToType(data['first_index_offset'], 'String');
        }

        if (data.hasOwnProperty('last_index_offset')) {
          obj['last_index_offset'] = _ApiClient["default"].convertToType(data['last_index_offset'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcListPaymentsResponse;
}();
/**
 * @member {Array.<module:model/LnrpcPayment>} payments
 */


LnrpcListPaymentsResponse.prototype['payments'] = undefined;
/**
 * The index of the first item in the set of returned payments. This can be used as the index_offset to continue seeking backwards in the next request.
 * @member {String} first_index_offset
 */

LnrpcListPaymentsResponse.prototype['first_index_offset'] = undefined;
/**
 * The index of the last item in the set of returned payments. This can be used as the index_offset to continue seeking forwards in the next request.
 * @member {String} last_index_offset
 */

LnrpcListPaymentsResponse.prototype['last_index_offset'] = undefined;
var _default = LnrpcListPaymentsResponse;
exports["default"] = _default;