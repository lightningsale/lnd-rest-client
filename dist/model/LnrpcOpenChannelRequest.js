"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFundingShim = _interopRequireDefault(require("./LnrpcFundingShim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcOpenChannelRequest model module.
 * @module model/LnrpcOpenChannelRequest
 * @version version not set
 */
var LnrpcOpenChannelRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcOpenChannelRequest</code>.
   * @alias module:model/LnrpcOpenChannelRequest
   */
  function LnrpcOpenChannelRequest() {
    _classCallCheck(this, LnrpcOpenChannelRequest);

    LnrpcOpenChannelRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcOpenChannelRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcOpenChannelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcOpenChannelRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcOpenChannelRequest} The populated <code>LnrpcOpenChannelRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcOpenChannelRequest();

        if (data.hasOwnProperty('sat_per_vbyte')) {
          obj['sat_per_vbyte'] = _ApiClient["default"].convertToType(data['sat_per_vbyte'], 'String');
        }

        if (data.hasOwnProperty('node_pubkey')) {
          obj['node_pubkey'] = _ApiClient["default"].convertToType(data['node_pubkey'], 'Blob');
        }

        if (data.hasOwnProperty('node_pubkey_string')) {
          obj['node_pubkey_string'] = _ApiClient["default"].convertToType(data['node_pubkey_string'], 'String');
        }

        if (data.hasOwnProperty('local_funding_amount')) {
          obj['local_funding_amount'] = _ApiClient["default"].convertToType(data['local_funding_amount'], 'String');
        }

        if (data.hasOwnProperty('push_sat')) {
          obj['push_sat'] = _ApiClient["default"].convertToType(data['push_sat'], 'String');
        }

        if (data.hasOwnProperty('target_conf')) {
          obj['target_conf'] = _ApiClient["default"].convertToType(data['target_conf'], 'Number');
        }

        if (data.hasOwnProperty('sat_per_byte')) {
          obj['sat_per_byte'] = _ApiClient["default"].convertToType(data['sat_per_byte'], 'String');
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('min_htlc_msat')) {
          obj['min_htlc_msat'] = _ApiClient["default"].convertToType(data['min_htlc_msat'], 'String');
        }

        if (data.hasOwnProperty('remote_csv_delay')) {
          obj['remote_csv_delay'] = _ApiClient["default"].convertToType(data['remote_csv_delay'], 'Number');
        }

        if (data.hasOwnProperty('min_confs')) {
          obj['min_confs'] = _ApiClient["default"].convertToType(data['min_confs'], 'Number');
        }

        if (data.hasOwnProperty('spend_unconfirmed')) {
          obj['spend_unconfirmed'] = _ApiClient["default"].convertToType(data['spend_unconfirmed'], 'Boolean');
        }

        if (data.hasOwnProperty('close_address')) {
          obj['close_address'] = _ApiClient["default"].convertToType(data['close_address'], 'String');
        }

        if (data.hasOwnProperty('funding_shim')) {
          obj['funding_shim'] = _LnrpcFundingShim["default"].constructFromObject(data['funding_shim']);
        }

        if (data.hasOwnProperty('remote_max_value_in_flight_msat')) {
          obj['remote_max_value_in_flight_msat'] = _ApiClient["default"].convertToType(data['remote_max_value_in_flight_msat'], 'String');
        }

        if (data.hasOwnProperty('remote_max_htlcs')) {
          obj['remote_max_htlcs'] = _ApiClient["default"].convertToType(data['remote_max_htlcs'], 'Number');
        }

        if (data.hasOwnProperty('max_local_csv')) {
          obj['max_local_csv'] = _ApiClient["default"].convertToType(data['max_local_csv'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcOpenChannelRequest;
}();
/**
 * A manual fee rate set in sat/vbyte that should be used when crafting the funding transaction.
 * @member {String} sat_per_vbyte
 */


LnrpcOpenChannelRequest.prototype['sat_per_vbyte'] = undefined;
/**
 * The pubkey of the node to open a channel with. When using REST, this field must be encoded as base64.
 * @member {Blob} node_pubkey
 */

LnrpcOpenChannelRequest.prototype['node_pubkey'] = undefined;
/**
 * The hex encoded pubkey of the node to open a channel with. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
 * @member {String} node_pubkey_string
 */

LnrpcOpenChannelRequest.prototype['node_pubkey_string'] = undefined;
/**
 * @member {String} local_funding_amount
 */

LnrpcOpenChannelRequest.prototype['local_funding_amount'] = undefined;
/**
 * @member {String} push_sat
 */

LnrpcOpenChannelRequest.prototype['push_sat'] = undefined;
/**
 * The target number of blocks that the funding transaction should be confirmed by.
 * @member {Number} target_conf
 */

LnrpcOpenChannelRequest.prototype['target_conf'] = undefined;
/**
 * Deprecated, use sat_per_vbyte. A manual fee rate set in sat/vbyte that should be used when crafting the funding transaction.
 * @member {String} sat_per_byte
 */

LnrpcOpenChannelRequest.prototype['sat_per_byte'] = undefined;
/**
 * Whether this channel should be private, not announced to the greater network.
 * @member {Boolean} private
 */

LnrpcOpenChannelRequest.prototype['private'] = undefined;
/**
 * The minimum value in millisatoshi we will require for incoming HTLCs on the channel.
 * @member {String} min_htlc_msat
 */

LnrpcOpenChannelRequest.prototype['min_htlc_msat'] = undefined;
/**
 * The delay we require on the remote's commitment transaction. If this is not set, it will be scaled automatically with the channel size.
 * @member {Number} remote_csv_delay
 */

LnrpcOpenChannelRequest.prototype['remote_csv_delay'] = undefined;
/**
 * The minimum number of confirmations each one of your outputs used for the funding transaction must satisfy.
 * @member {Number} min_confs
 */

LnrpcOpenChannelRequest.prototype['min_confs'] = undefined;
/**
 * Whether unconfirmed outputs should be used as inputs for the funding transaction.
 * @member {Boolean} spend_unconfirmed
 */

LnrpcOpenChannelRequest.prototype['spend_unconfirmed'] = undefined;
/**
 * Close address is an optional address which specifies the address to which funds should be paid out to upon cooperative close. This field may only be set if the peer supports the option upfront feature bit (call listpeers to check). The remote peer will only accept cooperative closes to this address if it is set.  Note: If this value is set on channel creation, you will *not* be able to cooperatively close out to a different address.
 * @member {String} close_address
 */

LnrpcOpenChannelRequest.prototype['close_address'] = undefined;
/**
 * @member {module:model/LnrpcFundingShim} funding_shim
 */

LnrpcOpenChannelRequest.prototype['funding_shim'] = undefined;
/**
 * The maximum amount of coins in millisatoshi that can be pending within the channel. It only applies to the remote party.
 * @member {String} remote_max_value_in_flight_msat
 */

LnrpcOpenChannelRequest.prototype['remote_max_value_in_flight_msat'] = undefined;
/**
 * The maximum number of concurrent HTLCs we will allow the remote party to add to the commitment transaction.
 * @member {Number} remote_max_htlcs
 */

LnrpcOpenChannelRequest.prototype['remote_max_htlcs'] = undefined;
/**
 * Max local csv is the maximum csv delay we will allow for our own commitment transaction.
 * @member {Number} max_local_csv
 */

LnrpcOpenChannelRequest.prototype['max_local_csv'] = undefined;
var _default = LnrpcOpenChannelRequest;
exports["default"] = _default;