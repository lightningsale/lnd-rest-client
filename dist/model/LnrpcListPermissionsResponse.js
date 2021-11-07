"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcMacaroonPermissionList = _interopRequireDefault(require("./LnrpcMacaroonPermissionList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcListPermissionsResponse model module.
 * @module model/LnrpcListPermissionsResponse
 * @version version not set
 */
var LnrpcListPermissionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcListPermissionsResponse</code>.
   * @alias module:model/LnrpcListPermissionsResponse
   */
  function LnrpcListPermissionsResponse() {
    _classCallCheck(this, LnrpcListPermissionsResponse);

    LnrpcListPermissionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcListPermissionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcListPermissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcListPermissionsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcListPermissionsResponse} The populated <code>LnrpcListPermissionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcListPermissionsResponse();

        if (data.hasOwnProperty('method_permissions')) {
          obj['method_permissions'] = _ApiClient["default"].convertToType(data['method_permissions'], {
            'String': _LnrpcMacaroonPermissionList["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcListPermissionsResponse;
}();
/**
 * A map between all RPC method URIs and their required macaroon permissions to access them.
 * @member {Object.<String, module:model/LnrpcMacaroonPermissionList>} method_permissions
 */


LnrpcListPermissionsResponse.prototype['method_permissions'] = undefined;
var _default = LnrpcListPermissionsResponse;
exports["default"] = _default;