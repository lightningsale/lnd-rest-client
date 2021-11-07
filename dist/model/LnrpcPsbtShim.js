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
 * The LnrpcPsbtShim model module.
 * @module model/LnrpcPsbtShim
 * @version version not set
 */
var LnrpcPsbtShim = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPsbtShim</code>.
   * @alias module:model/LnrpcPsbtShim
   */
  function LnrpcPsbtShim() {
    _classCallCheck(this, LnrpcPsbtShim);

    LnrpcPsbtShim.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPsbtShim, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPsbtShim</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPsbtShim} obj Optional instance to populate.
     * @return {module:model/LnrpcPsbtShim} The populated <code>LnrpcPsbtShim</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPsbtShim();

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }

        if (data.hasOwnProperty('base_psbt')) {
          obj['base_psbt'] = _ApiClient["default"].convertToType(data['base_psbt'], 'Blob');
        }

        if (data.hasOwnProperty('no_publish')) {
          obj['no_publish'] = _ApiClient["default"].convertToType(data['no_publish'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcPsbtShim;
}();
/**
 * A unique identifier of 32 random bytes that will be used as the pending channel ID to identify the PSBT state machine when interacting with it and on the wire protocol to initiate the funding request.
 * @member {Blob} pending_chan_id
 */


LnrpcPsbtShim.prototype['pending_chan_id'] = undefined;
/**
 * An optional base PSBT the new channel output will be added to. If this is non-empty, it must be a binary serialized PSBT.
 * @member {Blob} base_psbt
 */

LnrpcPsbtShim.prototype['base_psbt'] = undefined;
/**
 * If a channel should be part of a batch (multiple channel openings in one transaction), it can be dangerous if the whole batch transaction is published too early before all channel opening negotiations are completed. This flag prevents this particular channel from broadcasting the transaction after the negotiation with the remote peer. In a batch of channel openings this flag should be set to true for every channel but the very last.
 * @member {Boolean} no_publish
 */

LnrpcPsbtShim.prototype['no_publish'] = undefined;
var _default = LnrpcPsbtShim;
exports["default"] = _default;