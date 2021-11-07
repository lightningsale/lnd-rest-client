"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcHopHint = _interopRequireDefault(require("./LnrpcHopHint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcRouteHint model module.
 * @module model/LnrpcRouteHint
 * @version version not set
 */
var LnrpcRouteHint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcRouteHint</code>.
   * @alias module:model/LnrpcRouteHint
   */
  function LnrpcRouteHint() {
    _classCallCheck(this, LnrpcRouteHint);

    LnrpcRouteHint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcRouteHint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcRouteHint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcRouteHint} obj Optional instance to populate.
     * @return {module:model/LnrpcRouteHint} The populated <code>LnrpcRouteHint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcRouteHint();

        if (data.hasOwnProperty('hop_hints')) {
          obj['hop_hints'] = _ApiClient["default"].convertToType(data['hop_hints'], [_LnrpcHopHint["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcRouteHint;
}();
/**
 * A list of hop hints that when chained together can assist in reaching a specific destination.
 * @member {Array.<module:model/LnrpcHopHint>} hop_hints
 */


LnrpcRouteHint.prototype['hop_hints'] = undefined;
var _default = LnrpcRouteHint;
exports["default"] = _default;