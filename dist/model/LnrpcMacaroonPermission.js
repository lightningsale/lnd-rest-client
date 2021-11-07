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
 * The LnrpcMacaroonPermission model module.
 * @module model/LnrpcMacaroonPermission
 * @version version not set
 */
var LnrpcMacaroonPermission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcMacaroonPermission</code>.
   * @alias module:model/LnrpcMacaroonPermission
   */
  function LnrpcMacaroonPermission() {
    _classCallCheck(this, LnrpcMacaroonPermission);

    LnrpcMacaroonPermission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcMacaroonPermission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcMacaroonPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcMacaroonPermission} obj Optional instance to populate.
     * @return {module:model/LnrpcMacaroonPermission} The populated <code>LnrpcMacaroonPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcMacaroonPermission();

        if (data.hasOwnProperty('entity')) {
          obj['entity'] = _ApiClient["default"].convertToType(data['entity'], 'String');
        }

        if (data.hasOwnProperty('action')) {
          obj['action'] = _ApiClient["default"].convertToType(data['action'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcMacaroonPermission;
}();
/**
 * The entity a permission grants access to.
 * @member {String} entity
 */


LnrpcMacaroonPermission.prototype['entity'] = undefined;
/**
 * The action that is granted.
 * @member {String} action
 */

LnrpcMacaroonPermission.prototype['action'] = undefined;
var _default = LnrpcMacaroonPermission;
exports["default"] = _default;