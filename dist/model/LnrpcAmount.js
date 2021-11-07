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
 * The LnrpcAmount model module.
 * @module model/LnrpcAmount
 * @version version not set
 */
var LnrpcAmount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcAmount</code>.
   * @alias module:model/LnrpcAmount
   */
  function LnrpcAmount() {
    _classCallCheck(this, LnrpcAmount);

    LnrpcAmount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcAmount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcAmount} obj Optional instance to populate.
     * @return {module:model/LnrpcAmount} The populated <code>LnrpcAmount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcAmount();

        if (data.hasOwnProperty('sat')) {
          obj['sat'] = _ApiClient["default"].convertToType(data['sat'], 'String');
        }

        if (data.hasOwnProperty('msat')) {
          obj['msat'] = _ApiClient["default"].convertToType(data['msat'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcAmount;
}();
/**
 * Value denominated in satoshis.
 * @member {String} sat
 */


LnrpcAmount.prototype['sat'] = undefined;
/**
 * Value denominated in milli-satoshis.
 * @member {String} msat
 */

LnrpcAmount.prototype['msat'] = undefined;
var _default = LnrpcAmount;
exports["default"] = _default;