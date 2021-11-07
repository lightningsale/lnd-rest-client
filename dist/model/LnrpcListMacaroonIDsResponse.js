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
 * The LnrpcListMacaroonIDsResponse model module.
 * @module model/LnrpcListMacaroonIDsResponse
 * @version version not set
 */
var LnrpcListMacaroonIDsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcListMacaroonIDsResponse</code>.
   * @alias module:model/LnrpcListMacaroonIDsResponse
   */
  function LnrpcListMacaroonIDsResponse() {
    _classCallCheck(this, LnrpcListMacaroonIDsResponse);

    LnrpcListMacaroonIDsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcListMacaroonIDsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcListMacaroonIDsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcListMacaroonIDsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcListMacaroonIDsResponse} The populated <code>LnrpcListMacaroonIDsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcListMacaroonIDsResponse();

        if (data.hasOwnProperty('root_key_ids')) {
          obj['root_key_ids'] = _ApiClient["default"].convertToType(data['root_key_ids'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcListMacaroonIDsResponse;
}();
/**
 * The list of root key IDs that are in use.
 * @member {Array.<String>} root_key_ids
 */


LnrpcListMacaroonIDsResponse.prototype['root_key_ids'] = undefined;
var _default = LnrpcListMacaroonIDsResponse;
exports["default"] = _default;