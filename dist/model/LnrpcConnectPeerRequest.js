"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcLightningAddress = _interopRequireDefault(require("./LnrpcLightningAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcConnectPeerRequest model module.
 * @module model/LnrpcConnectPeerRequest
 * @version version not set
 */
var LnrpcConnectPeerRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcConnectPeerRequest</code>.
   * @alias module:model/LnrpcConnectPeerRequest
   */
  function LnrpcConnectPeerRequest() {
    _classCallCheck(this, LnrpcConnectPeerRequest);

    LnrpcConnectPeerRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcConnectPeerRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcConnectPeerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcConnectPeerRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcConnectPeerRequest} The populated <code>LnrpcConnectPeerRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcConnectPeerRequest();

        if (data.hasOwnProperty('addr')) {
          obj['addr'] = _LnrpcLightningAddress["default"].constructFromObject(data['addr']);
        }

        if (data.hasOwnProperty('perm')) {
          obj['perm'] = _ApiClient["default"].convertToType(data['perm'], 'Boolean');
        }

        if (data.hasOwnProperty('timeout')) {
          obj['timeout'] = _ApiClient["default"].convertToType(data['timeout'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcConnectPeerRequest;
}();
/**
 * @member {module:model/LnrpcLightningAddress} addr
 */


LnrpcConnectPeerRequest.prototype['addr'] = undefined;
/**
 * If set, the daemon will attempt to persistently connect to the target peer. Otherwise, the call will be synchronous.
 * @member {Boolean} perm
 */

LnrpcConnectPeerRequest.prototype['perm'] = undefined;
/**
 * The connection timeout value (in seconds) for this request. It won't affect other requests.
 * @member {String} timeout
 */

LnrpcConnectPeerRequest.prototype['timeout'] = undefined;
var _default = LnrpcConnectPeerRequest;
exports["default"] = _default;