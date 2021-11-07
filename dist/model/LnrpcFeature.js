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
 * The LnrpcFeature model module.
 * @module model/LnrpcFeature
 * @version version not set
 */
var LnrpcFeature = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFeature</code>.
   * @alias module:model/LnrpcFeature
   */
  function LnrpcFeature() {
    _classCallCheck(this, LnrpcFeature);

    LnrpcFeature.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFeature, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFeature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFeature} obj Optional instance to populate.
     * @return {module:model/LnrpcFeature} The populated <code>LnrpcFeature</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFeature();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('is_required')) {
          obj['is_required'] = _ApiClient["default"].convertToType(data['is_required'], 'Boolean');
        }

        if (data.hasOwnProperty('is_known')) {
          obj['is_known'] = _ApiClient["default"].convertToType(data['is_known'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFeature;
}();
/**
 * @member {String} name
 */


LnrpcFeature.prototype['name'] = undefined;
/**
 * @member {Boolean} is_required
 */

LnrpcFeature.prototype['is_required'] = undefined;
/**
 * @member {Boolean} is_known
 */

LnrpcFeature.prototype['is_known'] = undefined;
var _default = LnrpcFeature;
exports["default"] = _default;