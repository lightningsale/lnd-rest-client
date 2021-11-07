"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcFeature = _interopRequireDefault(require("./LnrpcFeature"));

var _LnrpcTimestampedError = _interopRequireDefault(require("./LnrpcTimestampedError"));

var _PeerSyncType = _interopRequireDefault(require("./PeerSyncType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcPeer model module.
 * @module model/LnrpcPeer
 * @version version not set
 */
var LnrpcPeer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPeer</code>.
   * @alias module:model/LnrpcPeer
   */
  function LnrpcPeer() {
    _classCallCheck(this, LnrpcPeer);

    LnrpcPeer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPeer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPeer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPeer} obj Optional instance to populate.
     * @return {module:model/LnrpcPeer} The populated <code>LnrpcPeer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPeer();

        if (data.hasOwnProperty('pub_key')) {
          obj['pub_key'] = _ApiClient["default"].convertToType(data['pub_key'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('bytes_sent')) {
          obj['bytes_sent'] = _ApiClient["default"].convertToType(data['bytes_sent'], 'String');
        }

        if (data.hasOwnProperty('bytes_recv')) {
          obj['bytes_recv'] = _ApiClient["default"].convertToType(data['bytes_recv'], 'String');
        }

        if (data.hasOwnProperty('sat_sent')) {
          obj['sat_sent'] = _ApiClient["default"].convertToType(data['sat_sent'], 'String');
        }

        if (data.hasOwnProperty('sat_recv')) {
          obj['sat_recv'] = _ApiClient["default"].convertToType(data['sat_recv'], 'String');
        }

        if (data.hasOwnProperty('inbound')) {
          obj['inbound'] = _ApiClient["default"].convertToType(data['inbound'], 'Boolean');
        }

        if (data.hasOwnProperty('ping_time')) {
          obj['ping_time'] = _ApiClient["default"].convertToType(data['ping_time'], 'String');
        }

        if (data.hasOwnProperty('sync_type')) {
          obj['sync_type'] = _PeerSyncType["default"].constructFromObject(data['sync_type']);
        }

        if (data.hasOwnProperty('features')) {
          obj['features'] = _ApiClient["default"].convertToType(data['features'], {
            'String': _LnrpcFeature["default"]
          });
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_LnrpcTimestampedError["default"]]);
        }

        if (data.hasOwnProperty('flap_count')) {
          obj['flap_count'] = _ApiClient["default"].convertToType(data['flap_count'], 'Number');
        }

        if (data.hasOwnProperty('last_flap_ns')) {
          obj['last_flap_ns'] = _ApiClient["default"].convertToType(data['last_flap_ns'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcPeer;
}();
/**
 * @member {String} pub_key
 */


LnrpcPeer.prototype['pub_key'] = undefined;
/**
 * @member {String} address
 */

LnrpcPeer.prototype['address'] = undefined;
/**
 * @member {String} bytes_sent
 */

LnrpcPeer.prototype['bytes_sent'] = undefined;
/**
 * @member {String} bytes_recv
 */

LnrpcPeer.prototype['bytes_recv'] = undefined;
/**
 * @member {String} sat_sent
 */

LnrpcPeer.prototype['sat_sent'] = undefined;
/**
 * @member {String} sat_recv
 */

LnrpcPeer.prototype['sat_recv'] = undefined;
/**
 * @member {Boolean} inbound
 */

LnrpcPeer.prototype['inbound'] = undefined;
/**
 * @member {String} ping_time
 */

LnrpcPeer.prototype['ping_time'] = undefined;
/**
 * @member {module:model/PeerSyncType} sync_type
 */

LnrpcPeer.prototype['sync_type'] = undefined;
/**
 * Features advertised by the remote peer in their init message.
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */

LnrpcPeer.prototype['features'] = undefined;
/**
 * The latest errors received from our peer with timestamps, limited to the 10 most recent errors. These errors are tracked across peer connections, but are not persisted across lnd restarts. Note that these errors are only stored for peers that we have channels open with, to prevent peers from spamming us with errors at no cost.
 * @member {Array.<module:model/LnrpcTimestampedError>} errors
 */

LnrpcPeer.prototype['errors'] = undefined;
/**
 * The number of times we have recorded this peer going offline or coming online, recorded across restarts. Note that this value is decreased over time if the peer has not recently flapped, so that we can forgive peers with historically high flap counts.
 * @member {Number} flap_count
 */

LnrpcPeer.prototype['flap_count'] = undefined;
/**
 * The timestamp of the last flap we observed for this peer. If this value is zero, we have not observed any flaps for this peer.
 * @member {String} last_flap_ns
 */

LnrpcPeer.prototype['last_flap_ns'] = undefined;
var _default = LnrpcPeer;
exports["default"] = _default;