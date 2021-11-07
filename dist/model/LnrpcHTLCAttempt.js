"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HTLCAttemptHTLCStatus = _interopRequireDefault(require("./HTLCAttemptHTLCStatus"));

var _LnrpcFailure = _interopRequireDefault(require("./LnrpcFailure"));

var _LnrpcRoute = _interopRequireDefault(require("./LnrpcRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcHTLCAttempt model module.
 * @module model/LnrpcHTLCAttempt
 * @version version not set
 */
var LnrpcHTLCAttempt = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcHTLCAttempt</code>.
   * @alias module:model/LnrpcHTLCAttempt
   */
  function LnrpcHTLCAttempt() {
    _classCallCheck(this, LnrpcHTLCAttempt);

    LnrpcHTLCAttempt.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcHTLCAttempt, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcHTLCAttempt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcHTLCAttempt} obj Optional instance to populate.
     * @return {module:model/LnrpcHTLCAttempt} The populated <code>LnrpcHTLCAttempt</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcHTLCAttempt();

        if (data.hasOwnProperty('attempt_id')) {
          obj['attempt_id'] = _ApiClient["default"].convertToType(data['attempt_id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _HTLCAttemptHTLCStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('route')) {
          obj['route'] = _LnrpcRoute["default"].constructFromObject(data['route']);
        }

        if (data.hasOwnProperty('attempt_time_ns')) {
          obj['attempt_time_ns'] = _ApiClient["default"].convertToType(data['attempt_time_ns'], 'String');
        }

        if (data.hasOwnProperty('resolve_time_ns')) {
          obj['resolve_time_ns'] = _ApiClient["default"].convertToType(data['resolve_time_ns'], 'String');
        }

        if (data.hasOwnProperty('failure')) {
          obj['failure'] = _LnrpcFailure["default"].constructFromObject(data['failure']);
        }

        if (data.hasOwnProperty('preimage')) {
          obj['preimage'] = _ApiClient["default"].convertToType(data['preimage'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcHTLCAttempt;
}();
/**
 * The unique ID that is used for this attempt.
 * @member {String} attempt_id
 */


LnrpcHTLCAttempt.prototype['attempt_id'] = undefined;
/**
 * @member {module:model/HTLCAttemptHTLCStatus} status
 */

LnrpcHTLCAttempt.prototype['status'] = undefined;
/**
 * @member {module:model/LnrpcRoute} route
 */

LnrpcHTLCAttempt.prototype['route'] = undefined;
/**
 * The time in UNIX nanoseconds at which this HTLC was sent.
 * @member {String} attempt_time_ns
 */

LnrpcHTLCAttempt.prototype['attempt_time_ns'] = undefined;
/**
 * The time in UNIX nanoseconds at which this HTLC was settled or failed. This value will not be set if the HTLC is still IN_FLIGHT.
 * @member {String} resolve_time_ns
 */

LnrpcHTLCAttempt.prototype['resolve_time_ns'] = undefined;
/**
 * @member {module:model/LnrpcFailure} failure
 */

LnrpcHTLCAttempt.prototype['failure'] = undefined;
/**
 * The preimage that was used to settle the HTLC.
 * @member {Blob} preimage
 */

LnrpcHTLCAttempt.prototype['preimage'] = undefined;
var _default = LnrpcHTLCAttempt;
exports["default"] = _default;