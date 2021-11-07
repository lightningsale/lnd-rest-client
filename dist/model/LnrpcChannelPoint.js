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
 * The LnrpcChannelPoint model module.
 * @module model/LnrpcChannelPoint
 * @version version not set
 */
var LnrpcChannelPoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelPoint</code>.
   * @alias module:model/LnrpcChannelPoint
   */
  function LnrpcChannelPoint() {
    _classCallCheck(this, LnrpcChannelPoint);

    LnrpcChannelPoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelPoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelPoint} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelPoint} The populated <code>LnrpcChannelPoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelPoint();

        if (data.hasOwnProperty('funding_txid_bytes')) {
          obj['funding_txid_bytes'] = _ApiClient["default"].convertToType(data['funding_txid_bytes'], 'Blob');
        }

        if (data.hasOwnProperty('funding_txid_str')) {
          obj['funding_txid_str'] = _ApiClient["default"].convertToType(data['funding_txid_str'], 'String');
        }

        if (data.hasOwnProperty('output_index')) {
          obj['output_index'] = _ApiClient["default"].convertToType(data['output_index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelPoint;
}();
/**
 * Txid of the funding transaction. When using REST, this field must be encoded as base64.
 * @member {Blob} funding_txid_bytes
 */


LnrpcChannelPoint.prototype['funding_txid_bytes'] = undefined;
/**
 * Hex-encoded string representing the byte-reversed hash of the funding transaction.
 * @member {String} funding_txid_str
 */

LnrpcChannelPoint.prototype['funding_txid_str'] = undefined;
/**
 * @member {Number} output_index
 */

LnrpcChannelPoint.prototype['output_index'] = undefined;
var _default = LnrpcChannelPoint;
exports["default"] = _default;