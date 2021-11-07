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
 * The LnrpcHopHint model module.
 * @module model/LnrpcHopHint
 * @version version not set
 */
var LnrpcHopHint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcHopHint</code>.
   * @alias module:model/LnrpcHopHint
   */
  function LnrpcHopHint() {
    _classCallCheck(this, LnrpcHopHint);

    LnrpcHopHint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcHopHint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcHopHint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcHopHint} obj Optional instance to populate.
     * @return {module:model/LnrpcHopHint} The populated <code>LnrpcHopHint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcHopHint();

        if (data.hasOwnProperty('node_id')) {
          obj['node_id'] = _ApiClient["default"].convertToType(data['node_id'], 'String');
        }

        if (data.hasOwnProperty('chan_id')) {
          obj['chan_id'] = _ApiClient["default"].convertToType(data['chan_id'], 'String');
        }

        if (data.hasOwnProperty('fee_base_msat')) {
          obj['fee_base_msat'] = _ApiClient["default"].convertToType(data['fee_base_msat'], 'Number');
        }

        if (data.hasOwnProperty('fee_proportional_millionths')) {
          obj['fee_proportional_millionths'] = _ApiClient["default"].convertToType(data['fee_proportional_millionths'], 'Number');
        }

        if (data.hasOwnProperty('cltv_expiry_delta')) {
          obj['cltv_expiry_delta'] = _ApiClient["default"].convertToType(data['cltv_expiry_delta'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcHopHint;
}();
/**
 * The public key of the node at the start of the channel.
 * @member {String} node_id
 */


LnrpcHopHint.prototype['node_id'] = undefined;
/**
 * The unique identifier of the channel.
 * @member {String} chan_id
 */

LnrpcHopHint.prototype['chan_id'] = undefined;
/**
 * The base fee of the channel denominated in millisatoshis.
 * @member {Number} fee_base_msat
 */

LnrpcHopHint.prototype['fee_base_msat'] = undefined;
/**
 * The fee rate of the channel for sending one satoshi across it denominated in millionths of a satoshi.
 * @member {Number} fee_proportional_millionths
 */

LnrpcHopHint.prototype['fee_proportional_millionths'] = undefined;
/**
 * The time-lock delta of the channel.
 * @member {Number} cltv_expiry_delta
 */

LnrpcHopHint.prototype['cltv_expiry_delta'] = undefined;
var _default = LnrpcHopHint;
exports["default"] = _default;