"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailureFailureCode = _interopRequireDefault(require("./FailureFailureCode"));

var _LnrpcChannelUpdate = _interopRequireDefault(require("./LnrpcChannelUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcFailure model module.
 * @module model/LnrpcFailure
 * @version version not set
 */
var LnrpcFailure = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFailure</code>.
   * @alias module:model/LnrpcFailure
   */
  function LnrpcFailure() {
    _classCallCheck(this, LnrpcFailure);

    LnrpcFailure.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFailure, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFailure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFailure} obj Optional instance to populate.
     * @return {module:model/LnrpcFailure} The populated <code>LnrpcFailure</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFailure();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _FailureFailureCode["default"].constructFromObject(data['code']);
        }

        if (data.hasOwnProperty('channel_update')) {
          obj['channel_update'] = _LnrpcChannelUpdate["default"].constructFromObject(data['channel_update']);
        }

        if (data.hasOwnProperty('htlc_msat')) {
          obj['htlc_msat'] = _ApiClient["default"].convertToType(data['htlc_msat'], 'String');
        }

        if (data.hasOwnProperty('onion_sha_256')) {
          obj['onion_sha_256'] = _ApiClient["default"].convertToType(data['onion_sha_256'], 'Blob');
        }

        if (data.hasOwnProperty('cltv_expiry')) {
          obj['cltv_expiry'] = _ApiClient["default"].convertToType(data['cltv_expiry'], 'Number');
        }

        if (data.hasOwnProperty('flags')) {
          obj['flags'] = _ApiClient["default"].convertToType(data['flags'], 'Number');
        }

        if (data.hasOwnProperty('failure_source_index')) {
          obj['failure_source_index'] = _ApiClient["default"].convertToType(data['failure_source_index'], 'Number');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFailure;
}();
/**
 * @member {module:model/FailureFailureCode} code
 */


LnrpcFailure.prototype['code'] = undefined;
/**
 * @member {module:model/LnrpcChannelUpdate} channel_update
 */

LnrpcFailure.prototype['channel_update'] = undefined;
/**
 * A failure type-dependent htlc value.
 * @member {String} htlc_msat
 */

LnrpcFailure.prototype['htlc_msat'] = undefined;
/**
 * The sha256 sum of the onion payload.
 * @member {Blob} onion_sha_256
 */

LnrpcFailure.prototype['onion_sha_256'] = undefined;
/**
 * A failure type-dependent cltv expiry value.
 * @member {Number} cltv_expiry
 */

LnrpcFailure.prototype['cltv_expiry'] = undefined;
/**
 * A failure type-dependent flags value.
 * @member {Number} flags
 */

LnrpcFailure.prototype['flags'] = undefined;
/**
 * The position in the path of the intermediate or final node that generated the failure message. Position zero is the sender node.
 * @member {Number} failure_source_index
 */

LnrpcFailure.prototype['failure_source_index'] = undefined;
/**
 * A failure type-dependent block height.
 * @member {Number} height
 */

LnrpcFailure.prototype['height'] = undefined;
var _default = LnrpcFailure;
exports["default"] = _default;