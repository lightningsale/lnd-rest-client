"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcMacaroonPermission = _interopRequireDefault(require("./LnrpcMacaroonPermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcMacaroonPermissionList model module.
 * @module model/LnrpcMacaroonPermissionList
 * @version version not set
 */
var LnrpcMacaroonPermissionList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcMacaroonPermissionList</code>.
   * @alias module:model/LnrpcMacaroonPermissionList
   */
  function LnrpcMacaroonPermissionList() {
    _classCallCheck(this, LnrpcMacaroonPermissionList);

    LnrpcMacaroonPermissionList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcMacaroonPermissionList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcMacaroonPermissionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcMacaroonPermissionList} obj Optional instance to populate.
     * @return {module:model/LnrpcMacaroonPermissionList} The populated <code>LnrpcMacaroonPermissionList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcMacaroonPermissionList();

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_LnrpcMacaroonPermission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcMacaroonPermissionList;
}();
/**
 * A list of macaroon permissions.
 * @member {Array.<module:model/LnrpcMacaroonPermission>} permissions
 */


LnrpcMacaroonPermissionList.prototype['permissions'] = undefined;
var _default = LnrpcMacaroonPermissionList;
exports["default"] = _default;