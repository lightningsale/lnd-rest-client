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
 * The LnrpcAMP model module.
 * @module model/LnrpcAMP
 * @version version not set
 */
var LnrpcAMP = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcAMP</code>.
   * Details specific to AMP HTLCs.
   * @alias module:model/LnrpcAMP
   */
  function LnrpcAMP() {
    _classCallCheck(this, LnrpcAMP);

    LnrpcAMP.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcAMP, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcAMP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcAMP} obj Optional instance to populate.
     * @return {module:model/LnrpcAMP} The populated <code>LnrpcAMP</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcAMP();

        if (data.hasOwnProperty('root_share')) {
          obj['root_share'] = _ApiClient["default"].convertToType(data['root_share'], 'Blob');
        }

        if (data.hasOwnProperty('set_id')) {
          obj['set_id'] = _ApiClient["default"].convertToType(data['set_id'], 'Blob');
        }

        if (data.hasOwnProperty('child_index')) {
          obj['child_index'] = _ApiClient["default"].convertToType(data['child_index'], 'Number');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'Blob');
        }

        if (data.hasOwnProperty('preimage')) {
          obj['preimage'] = _ApiClient["default"].convertToType(data['preimage'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcAMP;
}();
/**
 * An n-of-n secret share of the root seed from which child payment hashes and preimages are derived.
 * @member {Blob} root_share
 */


LnrpcAMP.prototype['root_share'] = undefined;
/**
 * An identifier for the HTLC set that this HTLC belongs to.
 * @member {Blob} set_id
 */

LnrpcAMP.prototype['set_id'] = undefined;
/**
 * A nonce used to randomize the child preimage and child hash from a given root_share.
 * @member {Number} child_index
 */

LnrpcAMP.prototype['child_index'] = undefined;
/**
 * The payment hash of the AMP HTLC.
 * @member {Blob} hash
 */

LnrpcAMP.prototype['hash'] = undefined;
/**
 * The preimage used to settle this AMP htlc. This field will only be populated if the invoice is in InvoiceState_ACCEPTED or InvoiceState_SETTLED.
 * @member {Blob} preimage
 */

LnrpcAMP.prototype['preimage'] = undefined;
var _default = LnrpcAMP;
exports["default"] = _default;