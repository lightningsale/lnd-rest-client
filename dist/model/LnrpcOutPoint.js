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
 * The LnrpcOutPoint model module.
 * @module model/LnrpcOutPoint
 * @version version not set
 */
var LnrpcOutPoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcOutPoint</code>.
   * @alias module:model/LnrpcOutPoint
   */
  function LnrpcOutPoint() {
    _classCallCheck(this, LnrpcOutPoint);

    LnrpcOutPoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcOutPoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcOutPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcOutPoint} obj Optional instance to populate.
     * @return {module:model/LnrpcOutPoint} The populated <code>LnrpcOutPoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcOutPoint();

        if (data.hasOwnProperty('txid_bytes')) {
          obj['txid_bytes'] = _ApiClient["default"].convertToType(data['txid_bytes'], 'Blob');
        }

        if (data.hasOwnProperty('txid_str')) {
          obj['txid_str'] = _ApiClient["default"].convertToType(data['txid_str'], 'String');
        }

        if (data.hasOwnProperty('output_index')) {
          obj['output_index'] = _ApiClient["default"].convertToType(data['output_index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcOutPoint;
}();
/**
 * Raw bytes representing the transaction id.
 * @member {Blob} txid_bytes
 */


LnrpcOutPoint.prototype['txid_bytes'] = undefined;
/**
 * Reversed, hex-encoded string representing the transaction id.
 * @member {String} txid_str
 */

LnrpcOutPoint.prototype['txid_str'] = undefined;
/**
 * The index of the output on the transaction.
 * @member {Number} output_index
 */

LnrpcOutPoint.prototype['output_index'] = undefined;
var _default = LnrpcOutPoint;
exports["default"] = _default;