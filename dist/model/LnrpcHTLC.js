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
 * The LnrpcHTLC model module.
 * @module model/LnrpcHTLC
 * @version version not set
 */
var LnrpcHTLC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcHTLC</code>.
   * @alias module:model/LnrpcHTLC
   */
  function LnrpcHTLC() {
    _classCallCheck(this, LnrpcHTLC);

    LnrpcHTLC.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcHTLC, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcHTLC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcHTLC} obj Optional instance to populate.
     * @return {module:model/LnrpcHTLC} The populated <code>LnrpcHTLC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcHTLC();

        if (data.hasOwnProperty('incoming')) {
          obj['incoming'] = _ApiClient["default"].convertToType(data['incoming'], 'Boolean');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('hash_lock')) {
          obj['hash_lock'] = _ApiClient["default"].convertToType(data['hash_lock'], 'Blob');
        }

        if (data.hasOwnProperty('expiration_height')) {
          obj['expiration_height'] = _ApiClient["default"].convertToType(data['expiration_height'], 'Number');
        }

        if (data.hasOwnProperty('htlc_index')) {
          obj['htlc_index'] = _ApiClient["default"].convertToType(data['htlc_index'], 'String');
        }

        if (data.hasOwnProperty('forwarding_channel')) {
          obj['forwarding_channel'] = _ApiClient["default"].convertToType(data['forwarding_channel'], 'String');
        }

        if (data.hasOwnProperty('forwarding_htlc_index')) {
          obj['forwarding_htlc_index'] = _ApiClient["default"].convertToType(data['forwarding_htlc_index'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcHTLC;
}();
/**
 * @member {Boolean} incoming
 */


LnrpcHTLC.prototype['incoming'] = undefined;
/**
 * @member {String} amount
 */

LnrpcHTLC.prototype['amount'] = undefined;
/**
 * @member {Blob} hash_lock
 */

LnrpcHTLC.prototype['hash_lock'] = undefined;
/**
 * @member {Number} expiration_height
 */

LnrpcHTLC.prototype['expiration_height'] = undefined;
/**
 * Index identifying the htlc on the channel.
 * @member {String} htlc_index
 */

LnrpcHTLC.prototype['htlc_index'] = undefined;
/**
 * If this HTLC is involved in a forwarding operation, this field indicates the forwarding channel. For an outgoing htlc, it is the incoming channel. For an incoming htlc, it is the outgoing channel. When the htlc originates from this node or this node is the final destination, forwarding_channel will be zero. The forwarding channel will also be zero for htlcs that need to be forwarded but don't have a forwarding decision persisted yet.
 * @member {String} forwarding_channel
 */

LnrpcHTLC.prototype['forwarding_channel'] = undefined;
/**
 * Index identifying the htlc on the forwarding channel.
 * @member {String} forwarding_htlc_index
 */

LnrpcHTLC.prototype['forwarding_htlc_index'] = undefined;
var _default = LnrpcHTLC;
exports["default"] = _default;