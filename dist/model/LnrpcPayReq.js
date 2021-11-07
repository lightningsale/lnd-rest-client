"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFeature = _interopRequireDefault(require("./LnrpcFeature"));

var _LnrpcRouteHint = _interopRequireDefault(require("./LnrpcRouteHint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcPayReq model module.
 * @module model/LnrpcPayReq
 * @version version not set
 */
var LnrpcPayReq = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPayReq</code>.
   * @alias module:model/LnrpcPayReq
   */
  function LnrpcPayReq() {
    _classCallCheck(this, LnrpcPayReq);

    LnrpcPayReq.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPayReq, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPayReq</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPayReq} obj Optional instance to populate.
     * @return {module:model/LnrpcPayReq} The populated <code>LnrpcPayReq</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPayReq();

        if (data.hasOwnProperty('destination')) {
          obj['destination'] = _ApiClient["default"].convertToType(data['destination'], 'String');
        }

        if (data.hasOwnProperty('payment_hash')) {
          obj['payment_hash'] = _ApiClient["default"].convertToType(data['payment_hash'], 'String');
        }

        if (data.hasOwnProperty('num_satoshis')) {
          obj['num_satoshis'] = _ApiClient["default"].convertToType(data['num_satoshis'], 'String');
        }

        if (data.hasOwnProperty('timestamp')) {
          obj['timestamp'] = _ApiClient["default"].convertToType(data['timestamp'], 'String');
        }

        if (data.hasOwnProperty('expiry')) {
          obj['expiry'] = _ApiClient["default"].convertToType(data['expiry'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('description_hash')) {
          obj['description_hash'] = _ApiClient["default"].convertToType(data['description_hash'], 'String');
        }

        if (data.hasOwnProperty('fallback_addr')) {
          obj['fallback_addr'] = _ApiClient["default"].convertToType(data['fallback_addr'], 'String');
        }

        if (data.hasOwnProperty('cltv_expiry')) {
          obj['cltv_expiry'] = _ApiClient["default"].convertToType(data['cltv_expiry'], 'String');
        }

        if (data.hasOwnProperty('route_hints')) {
          obj['route_hints'] = _ApiClient["default"].convertToType(data['route_hints'], [_LnrpcRouteHint["default"]]);
        }

        if (data.hasOwnProperty('payment_addr')) {
          obj['payment_addr'] = _ApiClient["default"].convertToType(data['payment_addr'], 'Blob');
        }

        if (data.hasOwnProperty('num_msat')) {
          obj['num_msat'] = _ApiClient["default"].convertToType(data['num_msat'], 'String');
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], {
            'String': _LnrpcFeature["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcPayReq;
}();
/**
 * @member {String} destination
 */


LnrpcPayReq.prototype['destination'] = undefined;
/**
 * @member {String} payment_hash
 */

LnrpcPayReq.prototype['payment_hash'] = undefined;
/**
 * @member {String} num_satoshis
 */

LnrpcPayReq.prototype['num_satoshis'] = undefined;
/**
 * @member {String} timestamp
 */

LnrpcPayReq.prototype['timestamp'] = undefined;
/**
 * @member {String} expiry
 */

LnrpcPayReq.prototype['expiry'] = undefined;
/**
 * @member {String} description
 */

LnrpcPayReq.prototype['description'] = undefined;
/**
 * @member {String} description_hash
 */

LnrpcPayReq.prototype['description_hash'] = undefined;
/**
 * @member {String} fallback_addr
 */

LnrpcPayReq.prototype['fallback_addr'] = undefined;
/**
 * @member {String} cltv_expiry
 */

LnrpcPayReq.prototype['cltv_expiry'] = undefined;
/**
 * @member {Array.<module:model/LnrpcRouteHint>} route_hints
 */

LnrpcPayReq.prototype['route_hints'] = undefined;
/**
 * @member {Blob} payment_addr
 */

LnrpcPayReq.prototype['payment_addr'] = undefined;
/**
 * @member {String} num_msat
 */

LnrpcPayReq.prototype['num_msat'] = undefined;
/**
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */

LnrpcPayReq.prototype['features'] = undefined;
var _default = LnrpcPayReq;
exports["default"] = _default;