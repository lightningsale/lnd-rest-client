"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcCloseStatusUpdate = _interopRequireDefault(require("./LnrpcCloseStatusUpdate"));

var _RuntimeStreamError = _interopRequireDefault(require("./RuntimeStreamError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StreamResultOfLnrpcCloseStatusUpdate model module.
 * @module model/StreamResultOfLnrpcCloseStatusUpdate
 * @version version not set
 */
var StreamResultOfLnrpcCloseStatusUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StreamResultOfLnrpcCloseStatusUpdate</code>.
   * @alias module:model/StreamResultOfLnrpcCloseStatusUpdate
   */
  function StreamResultOfLnrpcCloseStatusUpdate() {
    _classCallCheck(this, StreamResultOfLnrpcCloseStatusUpdate);

    StreamResultOfLnrpcCloseStatusUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StreamResultOfLnrpcCloseStatusUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StreamResultOfLnrpcCloseStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamResultOfLnrpcCloseStatusUpdate} obj Optional instance to populate.
     * @return {module:model/StreamResultOfLnrpcCloseStatusUpdate} The populated <code>StreamResultOfLnrpcCloseStatusUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StreamResultOfLnrpcCloseStatusUpdate();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _LnrpcCloseStatusUpdate["default"].constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _RuntimeStreamError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return StreamResultOfLnrpcCloseStatusUpdate;
}();
/**
 * @member {module:model/LnrpcCloseStatusUpdate} result
 */


StreamResultOfLnrpcCloseStatusUpdate.prototype['result'] = undefined;
/**
 * @member {module:model/RuntimeStreamError} error
 */

StreamResultOfLnrpcCloseStatusUpdate.prototype['error'] = undefined;
var _default = StreamResultOfLnrpcCloseStatusUpdate;
exports["default"] = _default;