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
 * The RuntimeError model module.
 * @module model/RuntimeError
 * @version version not set
 */
var RuntimeError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RuntimeError</code>.
   * @alias module:model/RuntimeError
   */
  function RuntimeError() {
    _classCallCheck(this, RuntimeError);

    RuntimeError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RuntimeError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RuntimeError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuntimeError} obj Optional instance to populate.
     * @return {module:model/RuntimeError} The populated <code>RuntimeError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RuntimeError();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('details')) {
          obj['details'] = _ApiClient["default"].convertToType(data['details'], [_ProtobufAny["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RuntimeError;
}();
/**
 * @member {String} error
 */


RuntimeError.prototype['error'] = undefined;
/**
 * @member {Number} code
 */

RuntimeError.prototype['code'] = undefined;
/**
 * @member {String} message
 */

RuntimeError.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/ProtobufAny>} details
 */

RuntimeError.prototype['details'] = undefined;
var _default = RuntimeError;
exports["default"] = _default;