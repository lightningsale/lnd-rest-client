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
 * The LnrpcBakeMacaroonResponse model module.
 * @module model/LnrpcBakeMacaroonResponse
 * @version version not set
 */
var LnrpcBakeMacaroonResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcBakeMacaroonResponse</code>.
   * @alias module:model/LnrpcBakeMacaroonResponse
   */
  function LnrpcBakeMacaroonResponse() {
    _classCallCheck(this, LnrpcBakeMacaroonResponse);

    LnrpcBakeMacaroonResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcBakeMacaroonResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcBakeMacaroonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcBakeMacaroonResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcBakeMacaroonResponse} The populated <code>LnrpcBakeMacaroonResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcBakeMacaroonResponse();

        if (data.hasOwnProperty('macaroon')) {
          obj['macaroon'] = _ApiClient["default"].convertToType(data['macaroon'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcBakeMacaroonResponse;
}();
/**
 * The hex encoded macaroon, serialized in binary format.
 * @member {String} macaroon
 */


LnrpcBakeMacaroonResponse.prototype['macaroon'] = undefined;
var _default = LnrpcBakeMacaroonResponse;
exports["default"] = _default;