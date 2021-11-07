"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PeerEventEventType = _interopRequireDefault(require("./PeerEventEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcPeerEvent model module.
 * @module model/LnrpcPeerEvent
 * @version version not set
 */
var LnrpcPeerEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPeerEvent</code>.
   * @alias module:model/LnrpcPeerEvent
   */
  function LnrpcPeerEvent() {
    _classCallCheck(this, LnrpcPeerEvent);

    LnrpcPeerEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPeerEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPeerEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPeerEvent} obj Optional instance to populate.
     * @return {module:model/LnrpcPeerEvent} The populated <code>LnrpcPeerEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPeerEvent();

        if (data.hasOwnProperty('pub_key')) {
          obj['pub_key'] = _ApiClient["default"].convertToType(data['pub_key'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _PeerEventEventType["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcPeerEvent;
}();
/**
 * The identity pubkey of the peer.
 * @member {String} pub_key
 */


LnrpcPeerEvent.prototype['pub_key'] = undefined;
/**
 * @member {module:model/PeerEventEventType} type
 */

LnrpcPeerEvent.prototype['type'] = undefined;
var _default = LnrpcPeerEvent;
exports["default"] = _default;