"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelPoint = _interopRequireDefault(require("./LnrpcChannelPoint"));

var _LnrpcKeyDescriptor = _interopRequireDefault(require("./LnrpcKeyDescriptor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChanPointShim model module.
 * @module model/LnrpcChanPointShim
 * @version version not set
 */
var LnrpcChanPointShim = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChanPointShim</code>.
   * @alias module:model/LnrpcChanPointShim
   */
  function LnrpcChanPointShim() {
    _classCallCheck(this, LnrpcChanPointShim);

    LnrpcChanPointShim.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChanPointShim, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChanPointShim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChanPointShim} obj Optional instance to populate.
     * @return {module:model/LnrpcChanPointShim} The populated <code>LnrpcChanPointShim</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChanPointShim();

        if (data.hasOwnProperty('amt')) {
          obj['amt'] = _ApiClient["default"].convertToType(data['amt'], 'String');
        }

        if (data.hasOwnProperty('chan_point')) {
          obj['chan_point'] = _LnrpcChannelPoint["default"].constructFromObject(data['chan_point']);
        }

        if (data.hasOwnProperty('local_key')) {
          obj['local_key'] = _LnrpcKeyDescriptor["default"].constructFromObject(data['local_key']);
        }

        if (data.hasOwnProperty('remote_key')) {
          obj['remote_key'] = _ApiClient["default"].convertToType(data['remote_key'], 'Blob');
        }

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }

        if (data.hasOwnProperty('thaw_height')) {
          obj['thaw_height'] = _ApiClient["default"].convertToType(data['thaw_height'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChanPointShim;
}();
/**
 * The size of the pre-crafted output to be used as the channel point for this channel funding.
 * @member {String} amt
 */


LnrpcChanPointShim.prototype['amt'] = undefined;
/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */

LnrpcChanPointShim.prototype['chan_point'] = undefined;
/**
 * @member {module:model/LnrpcKeyDescriptor} local_key
 */

LnrpcChanPointShim.prototype['local_key'] = undefined;
/**
 * The key of the remote party to use when creating the multi-sig output.
 * @member {Blob} remote_key
 */

LnrpcChanPointShim.prototype['remote_key'] = undefined;
/**
 * If non-zero, then this will be used as the pending channel ID on the wire protocol to initate the funding request. This is an optional field, and should only be set if the responder is already expecting a specific pending channel ID.
 * @member {Blob} pending_chan_id
 */

LnrpcChanPointShim.prototype['pending_chan_id'] = undefined;
/**
 * This uint32 indicates if this channel is to be considered 'frozen'. A frozen channel does not allow a cooperative channel close by the initiator. The thaw_height is the height that this restriction stops applying to the channel. The height can be interpreted in two ways: as a relative height if the value is less than 500,000, or as an absolute height otherwise.
 * @member {Number} thaw_height
 */

LnrpcChanPointShim.prototype['thaw_height'] = undefined;
var _default = LnrpcChanPointShim;
exports["default"] = _default;