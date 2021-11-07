"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcAddressType = _interopRequireDefault(require("./LnrpcAddressType"));

var _LnrpcOutPoint = _interopRequireDefault(require("./LnrpcOutPoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcUtxo model module.
 * @module model/LnrpcUtxo
 * @version version not set
 */
var LnrpcUtxo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcUtxo</code>.
   * @alias module:model/LnrpcUtxo
   */
  function LnrpcUtxo() {
    _classCallCheck(this, LnrpcUtxo);

    LnrpcUtxo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcUtxo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcUtxo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcUtxo} obj Optional instance to populate.
     * @return {module:model/LnrpcUtxo} The populated <code>LnrpcUtxo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcUtxo();

        if (data.hasOwnProperty('address_type')) {
          obj['address_type'] = _LnrpcAddressType["default"].constructFromObject(data['address_type']);
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('amount_sat')) {
          obj['amount_sat'] = _ApiClient["default"].convertToType(data['amount_sat'], 'String');
        }

        if (data.hasOwnProperty('pk_script')) {
          obj['pk_script'] = _ApiClient["default"].convertToType(data['pk_script'], 'String');
        }

        if (data.hasOwnProperty('outpoint')) {
          obj['outpoint'] = _LnrpcOutPoint["default"].constructFromObject(data['outpoint']);
        }

        if (data.hasOwnProperty('confirmations')) {
          obj['confirmations'] = _ApiClient["default"].convertToType(data['confirmations'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcUtxo;
}();
/**
 * @member {module:model/LnrpcAddressType} address_type
 */


LnrpcUtxo.prototype['address_type'] = undefined;
/**
 * @member {String} address
 */

LnrpcUtxo.prototype['address'] = undefined;
/**
 * @member {String} amount_sat
 */

LnrpcUtxo.prototype['amount_sat'] = undefined;
/**
 * @member {String} pk_script
 */

LnrpcUtxo.prototype['pk_script'] = undefined;
/**
 * @member {module:model/LnrpcOutPoint} outpoint
 */

LnrpcUtxo.prototype['outpoint'] = undefined;
/**
 * @member {String} confirmations
 */

LnrpcUtxo.prototype['confirmations'] = undefined;
var _default = LnrpcUtxo;
exports["default"] = _default;