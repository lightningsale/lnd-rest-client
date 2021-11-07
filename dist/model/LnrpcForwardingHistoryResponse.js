"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcForwardingEvent = _interopRequireDefault(require("./LnrpcForwardingEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcForwardingHistoryResponse model module.
 * @module model/LnrpcForwardingHistoryResponse
 * @version version not set
 */
var LnrpcForwardingHistoryResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcForwardingHistoryResponse</code>.
   * @alias module:model/LnrpcForwardingHistoryResponse
   */
  function LnrpcForwardingHistoryResponse() {
    _classCallCheck(this, LnrpcForwardingHistoryResponse);

    LnrpcForwardingHistoryResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcForwardingHistoryResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcForwardingHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcForwardingHistoryResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcForwardingHistoryResponse} The populated <code>LnrpcForwardingHistoryResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcForwardingHistoryResponse();

        if (data.hasOwnProperty('forwarding_events')) {
          obj['forwarding_events'] = _ApiClient["default"].convertToType(data['forwarding_events'], [_LnrpcForwardingEvent["default"]]);
        }

        if (data.hasOwnProperty('last_offset_index')) {
          obj['last_offset_index'] = _ApiClient["default"].convertToType(data['last_offset_index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcForwardingHistoryResponse;
}();
/**
 * A list of forwarding events from the time slice of the time series specified in the request.
 * @member {Array.<module:model/LnrpcForwardingEvent>} forwarding_events
 */


LnrpcForwardingHistoryResponse.prototype['forwarding_events'] = undefined;
/**
 * The index of the last time in the set of returned forwarding events. Can be used to seek further, pagination style.
 * @member {Number} last_offset_index
 */

LnrpcForwardingHistoryResponse.prototype['last_offset_index'] = undefined;
var _default = LnrpcForwardingHistoryResponse;
exports["default"] = _default;