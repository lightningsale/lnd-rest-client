"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcAMPRecord = _interopRequireDefault(require("./LnrpcAMPRecord"));

var _LnrpcMPPRecord = _interopRequireDefault(require("./LnrpcMPPRecord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcHop model module.
 * @module model/LnrpcHop
 * @version version not set
 */
var LnrpcHop = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcHop</code>.
   * @alias module:model/LnrpcHop
   */
  function LnrpcHop() {
    _classCallCheck(this, LnrpcHop);

    LnrpcHop.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcHop, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcHop</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcHop} obj Optional instance to populate.
     * @return {module:model/LnrpcHop} The populated <code>LnrpcHop</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcHop();

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('chan_capacity')) {
          obj['chan_capacity'] = _ApiClient["default"].convertToType(data['chan_capacity'], 'String');
        }

        if (data.hasOwnProperty('amt_to_forward')) {
          obj['amt_to_forward'] = _ApiClient["default"].convertToType(data['amt_to_forward'], 'String');
        }

        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'String');
        }

        if (data.hasOwnProperty('expiry')) {
          obj['expiry'] = _ApiClient["default"].convertToType(data['expiry'], 'Number');
        }

        if (data.hasOwnProperty('amt_to_forward_msat')) {
          obj['amt_to_forward_msat'] = _ApiClient["default"].convertToType(data['amt_to_forward_msat'], 'String');
        }

        if (data.hasOwnProperty('fee_msat')) {
          obj['fee_msat'] = _ApiClient["default"].convertToType(data['fee_msat'], 'String');
        }

        if (data.hasOwnProperty('pub_key')) {
          obj['pub_key'] = _ApiClient["default"].convertToType(data['pub_key'], 'String');
        }

        if (data.hasOwnProperty('tlv_payload')) {
          obj['tlv_payload'] = _ApiClient["default"].convertToType(data['tlv_payload'], 'Boolean');
        }

        if (data.hasOwnProperty('mpp_record')) {
          obj['mpp_record'] = _LnrpcMPPRecord["default"].constructFromObject(data['mpp_record']);
        }

        if (data.hasOwnProperty('amp_record')) {
          obj['amp_record'] = _LnrpcAMPRecord["default"].constructFromObject(data['amp_record']);
        }

        if (data.hasOwnProperty('custom_records')) {
          obj['custom_records'] = _ApiClient["default"].convertToType(data['custom_records'], {
            'String': 'Blob'
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcHop;
}();
/**
 * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
 * @member {String} chan_id
 */


LnrpcHop.prototype['chan_id'] = undefined;
/**
 * @member {String} chan_capacity
 */

LnrpcHop.prototype['chan_capacity'] = undefined;
/**
 * @member {String} amt_to_forward
 */

LnrpcHop.prototype['amt_to_forward'] = undefined;
/**
 * @member {String} fee
 */

LnrpcHop.prototype['fee'] = undefined;
/**
 * @member {Number} expiry
 */

LnrpcHop.prototype['expiry'] = undefined;
/**
 * @member {String} amt_to_forward_msat
 */

LnrpcHop.prototype['amt_to_forward_msat'] = undefined;
/**
 * @member {String} fee_msat
 */

LnrpcHop.prototype['fee_msat'] = undefined;
/**
 * An optional public key of the hop. If the public key is given, the payment can be executed without relying on a copy of the channel graph.
 * @member {String} pub_key
 */

LnrpcHop.prototype['pub_key'] = undefined;
/**
 * If set to true, then this hop will be encoded using the new variable length TLV format. Note that if any custom tlv_records below are specified, then this field MUST be set to true for them to be encoded properly.
 * @member {Boolean} tlv_payload
 */

LnrpcHop.prototype['tlv_payload'] = undefined;
/**
 * @member {module:model/LnrpcMPPRecord} mpp_record
 */

LnrpcHop.prototype['mpp_record'] = undefined;
/**
 * @member {module:model/LnrpcAMPRecord} amp_record
 */

LnrpcHop.prototype['amp_record'] = undefined;
/**
 * An optional set of key-value TLV records. This is useful within the context of the SendToRoute call as it allows callers to specify arbitrary K-V pairs to drop off at each hop within the onion.
 * @member {Object.<String, Blob>} custom_records
 */

LnrpcHop.prototype['custom_records'] = undefined;
var _default = LnrpcHop;
exports["default"] = _default;