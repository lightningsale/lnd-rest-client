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
 * The LnrpcSendCoinsRequest model module.
 * @module model/LnrpcSendCoinsRequest
 * @version version not set
 */
var LnrpcSendCoinsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcSendCoinsRequest</code>.
   * @alias module:model/LnrpcSendCoinsRequest
   */
  function LnrpcSendCoinsRequest() {
    _classCallCheck(this, LnrpcSendCoinsRequest);

    LnrpcSendCoinsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcSendCoinsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcSendCoinsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSendCoinsRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcSendCoinsRequest} The populated <code>LnrpcSendCoinsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcSendCoinsRequest();

        if (data.hasOwnProperty('addr')) {
          obj['addr'] = _ApiClient["default"].convertToType(data['addr'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('target_conf')) {
          obj['target_conf'] = _ApiClient["default"].convertToType(data['target_conf'], 'Number');
        }

        if (data.hasOwnProperty('sat_per_vbyte')) {
          obj['sat_per_vbyte'] = _ApiClient["default"].convertToType(data['sat_per_vbyte'], 'String');
        }

        if (data.hasOwnProperty('sat_per_byte')) {
          obj['sat_per_byte'] = _ApiClient["default"].convertToType(data['sat_per_byte'], 'String');
        }

        if (data.hasOwnProperty('send_all')) {
          obj['send_all'] = _ApiClient["default"].convertToType(data['send_all'], 'Boolean');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('min_confs')) {
          obj['min_confs'] = _ApiClient["default"].convertToType(data['min_confs'], 'Number');
        }

        if (data.hasOwnProperty('spend_unconfirmed')) {
          obj['spend_unconfirmed'] = _ApiClient["default"].convertToType(data['spend_unconfirmed'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcSendCoinsRequest;
}();
/**
 * @member {String} addr
 */


LnrpcSendCoinsRequest.prototype['addr'] = undefined;
/**
 * @member {String} amount
 */

LnrpcSendCoinsRequest.prototype['amount'] = undefined;
/**
 * The target number of blocks that this transaction should be confirmed by.
 * @member {Number} target_conf
 */

LnrpcSendCoinsRequest.prototype['target_conf'] = undefined;
/**
 * A manual fee rate set in sat/vbyte that should be used when crafting the transaction.
 * @member {String} sat_per_vbyte
 */

LnrpcSendCoinsRequest.prototype['sat_per_vbyte'] = undefined;
/**
 * Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the transaction.
 * @member {String} sat_per_byte
 */

LnrpcSendCoinsRequest.prototype['sat_per_byte'] = undefined;
/**
 * If set, then the amount field will be ignored, and lnd will attempt to send all the coins under control of the internal wallet to the specified address.
 * @member {Boolean} send_all
 */

LnrpcSendCoinsRequest.prototype['send_all'] = undefined;
/**
 * An optional label for the transaction, limited to 500 characters.
 * @member {String} label
 */

LnrpcSendCoinsRequest.prototype['label'] = undefined;
/**
 * The minimum number of confirmations each one of your outputs used for the transaction must satisfy.
 * @member {Number} min_confs
 */

LnrpcSendCoinsRequest.prototype['min_confs'] = undefined;
/**
 * Whether unconfirmed outputs should be used as inputs for the transaction.
 * @member {Boolean} spend_unconfirmed
 */

LnrpcSendCoinsRequest.prototype['spend_unconfirmed'] = undefined;
var _default = LnrpcSendCoinsRequest;
exports["default"] = _default;