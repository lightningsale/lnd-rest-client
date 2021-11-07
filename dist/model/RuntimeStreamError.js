"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProtobufAny = _interopRequireDefault(require("./ProtobufAny"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RuntimeStreamError model module.
 * @module model/RuntimeStreamError
 * @version version not set
 */
var RuntimeStreamError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RuntimeStreamError</code>.
   * @alias module:model/RuntimeStreamError
   */
  function RuntimeStreamError() {
    _classCallCheck(this, RuntimeStreamError);

    RuntimeStreamError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RuntimeStreamError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RuntimeStreamError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuntimeStreamError} obj Optional instance to populate.
     * @return {module:model/RuntimeStreamError} The populated <code>RuntimeStreamError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RuntimeStreamError();

        if (data.hasOwnProperty('grpc_code')) {
          obj['grpc_code'] = _ApiClient["default"].convertToType(data['grpc_code'], 'Number');
        }

        if (data.hasOwnProperty('http_code')) {
          obj['http_code'] = _ApiClient["default"].convertToType(data['http_code'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('http_status')) {
          obj['http_status'] = _ApiClient["default"].convertToType(data['http_status'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_ProtobufAny["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RuntimeStreamError;
}();
/**
 * @member {Number} grpc_code
 */


RuntimeStreamError.prototype['grpc_code'] = undefined;
/**
 * @member {Number} http_code
 */

RuntimeStreamError.prototype['http_code'] = undefined;
/**
 * @member {String} message
 */

RuntimeStreamError.prototype['message'] = undefined;
/**
 * @member {String} http_status
 */

RuntimeStreamError.prototype['http_status'] = undefined;
/**
 * @member {Array.<module:model/ProtobufAny>} details
 */

RuntimeStreamError.prototype['details'] = undefined;
var _default = RuntimeStreamError;
exports["default"] = _default;