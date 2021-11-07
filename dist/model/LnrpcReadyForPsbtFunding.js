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
 * The LnrpcReadyForPsbtFunding model module.
 * @module model/LnrpcReadyForPsbtFunding
 * @version version not set
 */
var LnrpcReadyForPsbtFunding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcReadyForPsbtFunding</code>.
   * @alias module:model/LnrpcReadyForPsbtFunding
   */
  function LnrpcReadyForPsbtFunding() {
    _classCallCheck(this, LnrpcReadyForPsbtFunding);

    LnrpcReadyForPsbtFunding.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcReadyForPsbtFunding, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcReadyForPsbtFunding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcReadyForPsbtFunding} obj Optional instance to populate.
     * @return {module:model/LnrpcReadyForPsbtFunding} The populated <code>LnrpcReadyForPsbtFunding</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcReadyForPsbtFunding();

        if (data.hasOwnProperty('funding_address')) {
          obj['funding_address'] = _ApiClient["default"].convertToType(data['funding_address'], 'String');
        }

        if (data.hasOwnProperty('funding_amount')) {
          obj['funding_amount'] = _ApiClient["default"].convertToType(data['funding_amount'], 'String');
        }

        if (data.hasOwnProperty('psbt')) {
          obj['psbt'] = _ApiClient["default"].convertToType(data['psbt'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcReadyForPsbtFunding;
}();
/**
 * The P2WSH address of the channel funding multisig address that the below specified amount in satoshis needs to be sent to.
 * @member {String} funding_address
 */


LnrpcReadyForPsbtFunding.prototype['funding_address'] = undefined;
/**
 * The exact amount in satoshis that needs to be sent to the above address to fund the pending channel.
 * @member {String} funding_amount
 */

LnrpcReadyForPsbtFunding.prototype['funding_amount'] = undefined;
/**
 * A raw PSBT that contains the pending channel output. If a base PSBT was provided in the PsbtShim, this is the base PSBT with one additional output. If no base PSBT was specified, this is an otherwise empty PSBT with exactly one output.
 * @member {Blob} psbt
 */

LnrpcReadyForPsbtFunding.prototype['psbt'] = undefined;
var _default = LnrpcReadyForPsbtFunding;
exports["default"] = _default;