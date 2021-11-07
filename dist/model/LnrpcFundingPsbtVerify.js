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
 * The LnrpcFundingPsbtVerify model module.
 * @module model/LnrpcFundingPsbtVerify
 * @version version not set
 */
var LnrpcFundingPsbtVerify = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFundingPsbtVerify</code>.
   * @alias module:model/LnrpcFundingPsbtVerify
   */
  function LnrpcFundingPsbtVerify() {
    _classCallCheck(this, LnrpcFundingPsbtVerify);

    LnrpcFundingPsbtVerify.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFundingPsbtVerify, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFundingPsbtVerify</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFundingPsbtVerify} obj Optional instance to populate.
     * @return {module:model/LnrpcFundingPsbtVerify} The populated <code>LnrpcFundingPsbtVerify</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFundingPsbtVerify();

        if (data.hasOwnProperty('funded_psbt')) {
          obj['funded_psbt'] = _ApiClient["default"].convertToType(data['funded_psbt'], 'Blob');
        }

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFundingPsbtVerify;
}();
/**
 * The funded but not yet signed PSBT that sends the exact channel capacity amount to the PK script returned in the open channel message in a previous step.
 * @member {Blob} funded_psbt
 */


LnrpcFundingPsbtVerify.prototype['funded_psbt'] = undefined;
/**
 * The pending channel ID of the channel to get the PSBT for.
 * @member {Blob} pending_chan_id
 */

LnrpcFundingPsbtVerify.prototype['pending_chan_id'] = undefined;
var _default = LnrpcFundingPsbtVerify;
exports["default"] = _default;