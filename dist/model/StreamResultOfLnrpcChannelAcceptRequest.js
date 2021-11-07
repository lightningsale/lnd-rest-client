"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelAcceptRequest = _interopRequireDefault(require("./LnrpcChannelAcceptRequest"));

var _RuntimeStreamError = _interopRequireDefault(require("./RuntimeStreamError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StreamResultOfLnrpcChannelAcceptRequest model module.
 * @module model/StreamResultOfLnrpcChannelAcceptRequest
 * @version version not set
 */
var StreamResultOfLnrpcChannelAcceptRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StreamResultOfLnrpcChannelAcceptRequest</code>.
   * @alias module:model/StreamResultOfLnrpcChannelAcceptRequest
   */
  function StreamResultOfLnrpcChannelAcceptRequest() {
    _classCallCheck(this, StreamResultOfLnrpcChannelAcceptRequest);

    StreamResultOfLnrpcChannelAcceptRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StreamResultOfLnrpcChannelAcceptRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StreamResultOfLnrpcChannelAcceptRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamResultOfLnrpcChannelAcceptRequest} obj Optional instance to populate.
     * @return {module:model/StreamResultOfLnrpcChannelAcceptRequest} The populated <code>StreamResultOfLnrpcChannelAcceptRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StreamResultOfLnrpcChannelAcceptRequest();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _LnrpcChannelAcceptRequest["default"].constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _RuntimeStreamError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return StreamResultOfLnrpcChannelAcceptRequest;
}();
/**
 * @member {module:model/LnrpcChannelAcceptRequest} result
 */


StreamResultOfLnrpcChannelAcceptRequest.prototype['result'] = undefined;
/**
 * @member {module:model/RuntimeStreamError} error
 */

StreamResultOfLnrpcChannelAcceptRequest.prototype['error'] = undefined;
var _default = StreamResultOfLnrpcChannelAcceptRequest;
exports["default"] = _default;