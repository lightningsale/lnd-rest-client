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
 * The LnrpcBakeMacaroonRequest model module.
 * @module model/LnrpcBakeMacaroonRequest
 * @version version not set
 */
var LnrpcBakeMacaroonRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcBakeMacaroonRequest</code>.
   * @alias module:model/LnrpcBakeMacaroonRequest
   */
  function LnrpcBakeMacaroonRequest() {
    _classCallCheck(this, LnrpcBakeMacaroonRequest);

    LnrpcBakeMacaroonRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcBakeMacaroonRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcBakeMacaroonRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcBakeMacaroonRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcBakeMacaroonRequest} The populated <code>LnrpcBakeMacaroonRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcBakeMacaroonRequest();

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_LnrpcMacaroonPermission["default"]]);
        }

        if (data.hasOwnProperty('root_key_id')) {
          obj['root_key_id'] = _ApiClient["default"].convertToType(data['root_key_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcBakeMacaroonRequest;
}();
/**
 * The list of permissions the new macaroon should grant.
 * @member {Array.<module:model/LnrpcMacaroonPermission>} permissions
 */


LnrpcBakeMacaroonRequest.prototype['permissions'] = undefined;
/**
 * The root key ID used to create the macaroon, must be a positive integer.
 * @member {String} root_key_id
 */

LnrpcBakeMacaroonRequest.prototype['root_key_id'] = undefined;
var _default = LnrpcBakeMacaroonRequest;
exports["default"] = _default;