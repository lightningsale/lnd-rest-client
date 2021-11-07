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
 * The LnrpcFundingPsbtFinalize model module.
 * @module model/LnrpcFundingPsbtFinalize
 * @version version not set
 */
var LnrpcFundingPsbtFinalize = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcFundingPsbtFinalize</code>.
   * @alias module:model/LnrpcFundingPsbtFinalize
   */
  function LnrpcFundingPsbtFinalize() {
    _classCallCheck(this, LnrpcFundingPsbtFinalize);

    LnrpcFundingPsbtFinalize.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcFundingPsbtFinalize, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcFundingPsbtFinalize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFundingPsbtFinalize} obj Optional instance to populate.
     * @return {module:model/LnrpcFundingPsbtFinalize} The populated <code>LnrpcFundingPsbtFinalize</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcFundingPsbtFinalize();

        if (data.hasOwnProperty('signed_psbt')) {
          obj['signed_psbt'] = _ApiClient["default"].convertToType(data['signed_psbt'], 'Blob');
        }

        if (data.hasOwnProperty('pending_chan_id')) {
          obj['pending_chan_id'] = _ApiClient["default"].convertToType(data['pending_chan_id'], 'Blob');
        }

        if (data.hasOwnProperty('final_raw_tx')) {
          obj['final_raw_tx'] = _ApiClient["default"].convertToType(data['final_raw_tx'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcFundingPsbtFinalize;
}();
/**
 * The funded PSBT that contains all witness data to send the exact channel capacity amount to the PK script returned in the open channel message in a previous step. Cannot be set at the same time as final_raw_tx.
 * @member {Blob} signed_psbt
 */


LnrpcFundingPsbtFinalize.prototype['signed_psbt'] = undefined;
/**
 * The pending channel ID of the channel to get the PSBT for.
 * @member {Blob} pending_chan_id
 */

LnrpcFundingPsbtFinalize.prototype['pending_chan_id'] = undefined;
/**
 * As an alternative to the signed PSBT with all witness data, the final raw wire format transaction can also be specified directly. Cannot be set at the same time as signed_psbt.
 * @member {Blob} final_raw_tx
 */

LnrpcFundingPsbtFinalize.prototype['final_raw_tx'] = undefined;
var _default = LnrpcFundingPsbtFinalize;
exports["default"] = _default;