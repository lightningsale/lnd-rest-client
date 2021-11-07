"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcRoute = _interopRequireDefault(require("./LnrpcRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcQueryRoutesResponse model module.
 * @module model/LnrpcQueryRoutesResponse
 * @version version not set
 */
var LnrpcQueryRoutesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcQueryRoutesResponse</code>.
   * @alias module:model/LnrpcQueryRoutesResponse
   */
  function LnrpcQueryRoutesResponse() {
    _classCallCheck(this, LnrpcQueryRoutesResponse);

    LnrpcQueryRoutesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcQueryRoutesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcQueryRoutesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcQueryRoutesResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcQueryRoutesResponse} The populated <code>LnrpcQueryRoutesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcQueryRoutesResponse();

        if (data.hasOwnProperty('routes')) {
          obj['routes'] = _ApiClient["default"].convertToType(data['routes'], [_LnrpcRoute["default"]]);
        }

        if (data.hasOwnProperty('success_prob')) {
          obj['success_prob'] = _ApiClient["default"].convertToType(data['success_prob'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcQueryRoutesResponse;
}();
/**
 * The route that results from the path finding operation. This is still a repeated field to retain backwards compatibility.
 * @member {Array.<module:model/LnrpcRoute>} routes
 */


LnrpcQueryRoutesResponse.prototype['routes'] = undefined;
/**
 * @member {Number} success_prob
 */

LnrpcQueryRoutesResponse.prototype['success_prob'] = undefined;
var _default = LnrpcQueryRoutesResponse;
exports["default"] = _default;