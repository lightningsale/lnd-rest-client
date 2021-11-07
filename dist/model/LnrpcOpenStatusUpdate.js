"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelOpenUpdate = _interopRequireDefault(require("./LnrpcChannelOpenUpdate"));

var _LnrpcPendingUpdate = _interopRequireDefault(require("./LnrpcPendingUpdate"));

var _LnrpcReadyForPsbtFunding = _interopRequireDefault(require("./LnrpcReadyForPsbtFunding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcOpenStatusUpdate model module.
 * @module model/LnrpcOpenStatusUpdate
 * @version version not set
 */
var LnrpcOpenStatusUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcOpenStatusUpdate</code>.
   * @alias module:model/LnrpcOpenStatusUpdate
   */
  function LnrpcOpenStatusUpdate() {
    _classCallCheck(this, LnrpcOpenStatusUpdate);

    LnrpcOpenStatusUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcOpenStatusUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcOpenStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcOpenStatusUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcOpenStatusUpdate} The populated <code>LnrpcOpenStatusUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcOpenStatusUpdate();

        if (data.hasOwnProperty('chan_pending')) {
          obj['chan_pending'] = _LnrpcPendingUpdate["default"].constructFromObject(data['chan_pending']);
        }

        if (data.hasOwnProperty('chan_open')) {
          obj['chan_open'] = _LnrpcChannelOpenUpdate["default"].constructFromObject(data['chan_open']);
        }

        if (data.hasOwnProperty('psbt_fund')) {
          obj['psbt_fund'] = _LnrpcReadyForPsbtFunding["default"].constructFromObject(data['psbt_fund']);
        }

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcOpenStatusUpdate;
}();
/**
 * @member {module:model/LnrpcPendingUpdate} chan_pending
 */


LnrpcOpenStatusUpdate.prototype['chan_pending'] = undefined;
/**
 * @member {module:model/LnrpcChannelOpenUpdate} chan_open
 */

LnrpcOpenStatusUpdate.prototype['chan_open'] = undefined;
/**
 * @member {module:model/LnrpcReadyForPsbtFunding} psbt_fund
 */

LnrpcOpenStatusUpdate.prototype['psbt_fund'] = undefined;
/**
 * The pending channel ID of the created channel. This value may be used to further the funding flow manually via the FundingStateStep method.
 * @member {Blob} pending_chan_id
 */

LnrpcOpenStatusUpdate.prototype['pending_chan_id'] = undefined;
var _default = LnrpcOpenStatusUpdate;
exports["default"] = _default;