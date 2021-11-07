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
 * The LnrpcTransaction model module.
 * @module model/LnrpcTransaction
 * @version version not set
 */
var LnrpcTransaction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcTransaction</code>.
   * @alias module:model/LnrpcTransaction
   */
  function LnrpcTransaction() {
    _classCallCheck(this, LnrpcTransaction);

    LnrpcTransaction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcTransaction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcTransaction} obj Optional instance to populate.
     * @return {module:model/LnrpcTransaction} The populated <code>LnrpcTransaction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcTransaction();

        if (data.hasOwnProperty('tx_hash')) {
          obj['tx_hash'] = _ApiClient["default"].convertToType(data['tx_hash'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('num_confirmations')) {
          obj['num_confirmations'] = _ApiClient["default"].convertToType(data['num_confirmations'], 'Number');
        }

        if (data.hasOwnProperty('block_hash')) {
          obj['block_hash'] = _ApiClient["default"].convertToType(data['block_hash'], 'String');
        }

        if (data.hasOwnProperty('block_height')) {
          obj['block_height'] = _ApiClient["default"].convertToType(data['block_height'], 'Number');
        }

        if (data.hasOwnProperty('time_stamp')) {
          obj['time_stamp'] = _ApiClient["default"].convertToType(data['time_stamp'], 'String');
        }

        if (data.hasOwnProperty('total_fees')) {
          obj['total_fees'] = _ApiClient["default"].convertToType(data['total_fees'], 'String');
        }

        if (data.hasOwnProperty('dest_addresses')) {
          obj['dest_addresses'] = _ApiClient["default"].convertToType(data['dest_addresses'], ['String']);
        }

        if (data.hasOwnProperty('raw_tx_hex')) {
          obj['raw_tx_hex'] = _ApiClient["default"].convertToType(data['raw_tx_hex'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcTransaction;
}();
/**
 * @member {String} tx_hash
 */


LnrpcTransaction.prototype['tx_hash'] = undefined;
/**
 * @member {String} amount
 */

LnrpcTransaction.prototype['amount'] = undefined;
/**
 * @member {Number} num_confirmations
 */

LnrpcTransaction.prototype['num_confirmations'] = undefined;
/**
 * @member {String} block_hash
 */

LnrpcTransaction.prototype['block_hash'] = undefined;
/**
 * @member {Number} block_height
 */

LnrpcTransaction.prototype['block_height'] = undefined;
/**
 * @member {String} time_stamp
 */

LnrpcTransaction.prototype['time_stamp'] = undefined;
/**
 * @member {String} total_fees
 */

LnrpcTransaction.prototype['total_fees'] = undefined;
/**
 * @member {Array.<String>} dest_addresses
 */

LnrpcTransaction.prototype['dest_addresses'] = undefined;
/**
 * The raw transaction hex.
 * @member {String} raw_tx_hex
 */

LnrpcTransaction.prototype['raw_tx_hex'] = undefined;
/**
 * A label that was optionally set on transaction broadcast.
 * @member {String} label
 */

LnrpcTransaction.prototype['label'] = undefined;
var _default = LnrpcTransaction;
exports["default"] = _default;