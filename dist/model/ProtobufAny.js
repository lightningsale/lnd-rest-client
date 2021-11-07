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
 * The ProtobufAny model module.
 * @module model/ProtobufAny
 * @version version not set
 */
var ProtobufAny = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProtobufAny</code>.
   * @alias module:model/ProtobufAny
   */
  function ProtobufAny() {
    _classCallCheck(this, ProtobufAny);

    ProtobufAny.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProtobufAny, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProtobufAny</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProtobufAny} obj Optional instance to populate.
     * @return {module:model/ProtobufAny} The populated <code>ProtobufAny</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProtobufAny();

        if (data.hasOwnProperty('type_url')) {
          obj['type_url'] = _ApiClient["default"].convertToType(data['type_url'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return ProtobufAny;
}();
/**
 * @member {String} type_url
 */


ProtobufAny.prototype['type_url'] = undefined;
/**
 * @member {Blob} value
 */

ProtobufAny.prototype['value'] = undefined;
var _default = ProtobufAny;
exports["default"] = _default;