"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChain = _interopRequireDefault(require("./LnrpcChain"));

var _LnrpcFeature = _interopRequireDefault(require("./LnrpcFeature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcGetInfoResponse model module.
 * @module model/LnrpcGetInfoResponse
 * @version version not set
 */
var LnrpcGetInfoResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcGetInfoResponse</code>.
   * @alias module:model/LnrpcGetInfoResponse
   */
  function LnrpcGetInfoResponse() {
    _classCallCheck(this, LnrpcGetInfoResponse);

    LnrpcGetInfoResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcGetInfoResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcGetInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcGetInfoResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcGetInfoResponse} The populated <code>LnrpcGetInfoResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcGetInfoResponse();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('commit_hash')) {
          obj['commit_hash'] = _ApiClient["default"].convertToType(data['commit_hash'], 'String');
        }

        if (data.hasOwnProperty('identity_pubkey')) {
          obj['identity_pubkey'] = _ApiClient["default"].convertToType(data['identity_pubkey'], 'String');
        }

        if (data.hasOwnProperty('alias')) {
          obj['alias'] = _ApiClient["default"].convertToType(data['alias'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('num_pending_channels')) {
          obj['num_pending_channels'] = _ApiClient["default"].convertToType(data['num_pending_channels'], 'Number');
        }

        if (data.hasOwnProperty('num_active_channels')) {
          obj['num_active_channels'] = _ApiClient["default"].convertToType(data['num_active_channels'], 'Number');
        }

        if (data.hasOwnProperty('num_inactive_channels')) {
          obj['num_inactive_channels'] = _ApiClient["default"].convertToType(data['num_inactive_channels'], 'Number');
        }

        if (data.hasOwnProperty('num_peers')) {
          obj['num_peers'] = _ApiClient["default"].convertToType(data['num_peers'], 'Number');
        }

        if (data.hasOwnProperty('block_height')) {
          obj['block_height'] = _ApiClient["default"].convertToType(data['block_height'], 'Number');
        }

        if (data.hasOwnProperty('block_hash')) {
          obj['block_hash'] = _ApiClient["default"].convertToType(data['block_hash'], 'String');
        }

        if (data.hasOwnProperty('best_header_timestamp')) {
          obj['best_header_timestamp'] = _ApiClient["default"].convertToType(data['best_header_timestamp'], 'String');
        }

        if (data.hasOwnProperty('synced_to_chain')) {
          obj['synced_to_chain'] = _ApiClient["default"].convertToType(data['synced_to_chain'], 'Boolean');
        }

        if (data.hasOwnProperty('synced_to_graph')) {
          obj['synced_to_graph'] = _ApiClient["default"].convertToType(data['synced_to_graph'], 'Boolean');
        }

        if (data.hasOwnProperty('testnet')) {
          obj['testnet'] = _ApiClient["default"].convertToType(data['testnet'], 'Boolean');
        }

        if (data.hasOwnProperty('chains')) {
          obj['chains'] = _ApiClient["default"].convertToType(data['chains'], [_LnrpcChain["default"]]);
        }

        if (data.hasOwnProperty('uris')) {
          obj['uris'] = _ApiClient["default"].convertToType(data['uris'], ['String']);
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], {
            'String': _LnrpcFeature["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return LnrpcGetInfoResponse;
}();
/**
 * The version of the LND software that the node is running.
 * @member {String} version
 */


LnrpcGetInfoResponse.prototype['version'] = undefined;
/**
 * The SHA1 commit hash that the daemon is compiled with.
 * @member {String} commit_hash
 */

LnrpcGetInfoResponse.prototype['commit_hash'] = undefined;
/**
 * The identity pubkey of the current node.
 * @member {String} identity_pubkey
 */

LnrpcGetInfoResponse.prototype['identity_pubkey'] = undefined;
/**
 * @member {String} alias
 */

LnrpcGetInfoResponse.prototype['alias'] = undefined;
/**
 * @member {String} color
 */

LnrpcGetInfoResponse.prototype['color'] = undefined;
/**
 * @member {Number} num_pending_channels
 */

LnrpcGetInfoResponse.prototype['num_pending_channels'] = undefined;
/**
 * @member {Number} num_active_channels
 */

LnrpcGetInfoResponse.prototype['num_active_channels'] = undefined;
/**
 * @member {Number} num_inactive_channels
 */

LnrpcGetInfoResponse.prototype['num_inactive_channels'] = undefined;
/**
 * @member {Number} num_peers
 */

LnrpcGetInfoResponse.prototype['num_peers'] = undefined;
/**
 * @member {Number} block_height
 */

LnrpcGetInfoResponse.prototype['block_height'] = undefined;
/**
 * @member {String} block_hash
 */

LnrpcGetInfoResponse.prototype['block_hash'] = undefined;
/**
 * @member {String} best_header_timestamp
 */

LnrpcGetInfoResponse.prototype['best_header_timestamp'] = undefined;
/**
 * @member {Boolean} synced_to_chain
 */

LnrpcGetInfoResponse.prototype['synced_to_chain'] = undefined;
/**
 * Whether we consider ourselves synced with the public channel graph.
 * @member {Boolean} synced_to_graph
 */

LnrpcGetInfoResponse.prototype['synced_to_graph'] = undefined;
/**
 * @member {Boolean} testnet
 */

LnrpcGetInfoResponse.prototype['testnet'] = undefined;
/**
 * @member {Array.<module:model/LnrpcChain>} chains
 */

LnrpcGetInfoResponse.prototype['chains'] = undefined;
/**
 * The URIs of the current node.
 * @member {Array.<String>} uris
 */

LnrpcGetInfoResponse.prototype['uris'] = undefined;
/**
 * Features that our node has advertised in our init message, node announcements and invoices.
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */

LnrpcGetInfoResponse.prototype['features'] = undefined;
var _default = LnrpcGetInfoResponse;
exports["default"] = _default;