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
 * The LnrpcFloatMetric model module.
 * @module model/LnrpcFloatMetric
 * @version version not set
 */
var LnrpcFloatMetric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFloatMetric</code>.
   * @alias module:model/LnrpcFloatMetric
   */
  function LnrpcFloatMetric() {
    _classCallCheck(this, LnrpcFloatMetric);

    LnrpcFloatMetric.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFloatMetric, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFloatMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFloatMetric} obj Optional instance to populate.
     * @return {module:model/LnrpcFloatMetric} The populated <code>LnrpcFloatMetric</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFloatMetric();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }

        if (data.hasOwnProperty('normalized_value')) {
          obj['normalized_value'] = _ApiClient["default"].convertToType(data['normalized_value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFloatMetric;
}();
/**
 * Arbitrary float value.
 * @member {Number} value
 */


LnrpcFloatMetric.prototype['value'] = undefined;
/**
 * The value normalized to [0,1] or [-1,1].
 * @member {Number} normalized_value
 */

LnrpcFloatMetric.prototype['normalized_value'] = undefined;
var _default = LnrpcFloatMetric;
exports["default"] = _default;