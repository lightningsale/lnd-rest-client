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
 * The LnrpcForwardingHistoryRequest model module.
 * @module model/LnrpcForwardingHistoryRequest
 * @version version not set
 */
var LnrpcForwardingHistoryRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcForwardingHistoryRequest</code>.
   * @alias module:model/LnrpcForwardingHistoryRequest
   */
  function LnrpcForwardingHistoryRequest() {
    _classCallCheck(this, LnrpcForwardingHistoryRequest);

    LnrpcForwardingHistoryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcForwardingHistoryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcForwardingHistoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcForwardingHistoryRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcForwardingHistoryRequest} The populated <code>LnrpcForwardingHistoryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcForwardingHistoryRequest();

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'String');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'String');
        }

        if (data.hasOwnProperty('index_offset')) {
          obj['index_offset'] = _ApiClient["default"].convertToType(data['index_offset'], 'Number');
        }

        if (data.hasOwnProperty('num_max_events')) {
          obj['num_max_events'] = _ApiClient["default"].convertToType(data['num_max_events'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcForwardingHistoryRequest;
}();
/**
 * Start time is the starting point of the forwarding history request. All records beyond this point will be included, respecting the end time, and the index offset.
 * @member {String} start_time
 */


LnrpcForwardingHistoryRequest.prototype['start_time'] = undefined;
/**
 * End time is the end point of the forwarding history request. The response will carry at most 50k records between the start time and the end time. The index offset can be used to implement pagination.
 * @member {String} end_time
 */

LnrpcForwardingHistoryRequest.prototype['end_time'] = undefined;
/**
 * Index offset is the offset in the time series to start at. As each response can only contain 50k records, callers can use this to skip around within a packed time series.
 * @member {Number} index_offset
 */

LnrpcForwardingHistoryRequest.prototype['index_offset'] = undefined;
/**
 * The max number of events to return in the response to this query.
 * @member {Number} num_max_events
 */

LnrpcForwardingHistoryRequest.prototype['num_max_events'] = undefined;
var _default = LnrpcForwardingHistoryRequest;
exports["default"] = _default;