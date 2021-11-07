"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcOutPoint = _interopRequireDefault(require("./LnrpcOutPoint"));

var _LnrpcResolutionOutcome = _interopRequireDefault(require("./LnrpcResolutionOutcome"));

var _LnrpcResolutionType = _interopRequireDefault(require("./LnrpcResolutionType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcResolution model module.
 * @module model/LnrpcResolution
 * @version version not set
 */
var LnrpcResolution = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcResolution</code>.
   * @alias module:model/LnrpcResolution
   */
  function LnrpcResolution() {
    _classCallCheck(this, LnrpcResolution);

    LnrpcResolution.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcResolution, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcResolution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcResolution} obj Optional instance to populate.
     * @return {module:model/LnrpcResolution} The populated <code>LnrpcResolution</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcResolution();

        if (data.hasOwnProperty('resolution_type')) {
          obj['resolution_type'] = _LnrpcResolutionType["default"].constructFromObject(data['resolution_type']);
        }

        if (data.hasOwnProperty('outcome')) {
          obj['outcome'] = _LnrpcResolutionOutcome["default"].constructFromObject(data['outcome']);
        }

        if (data.hasOwnProperty('outpoint')) {
          obj['outpoint'] = _LnrpcOutPoint["default"].constructFromObject(data['outpoint']);
        }

        if (data.hasOwnProperty('amount_sat')) {
          obj['amount_sat'] = _ApiClient["default"].convertToType(data['amount_sat'], 'String');
        }

        if (data.hasOwnProperty('sweep_txid')) {
          obj['sweep_txid'] = _ApiClient["default"].convertToType(data['sweep_txid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LnrpcResolution;
}();
/**
 * @member {module:model/LnrpcResolutionType} resolution_type
 */


LnrpcResolution.prototype['resolution_type'] = undefined;
/**
 * @member {module:model/LnrpcResolutionOutcome} outcome
 */

LnrpcResolution.prototype['outcome'] = undefined;
/**
 * @member {module:model/LnrpcOutPoint} outpoint
 */

LnrpcResolution.prototype['outpoint'] = undefined;
/**
 * The amount that was claimed by the resolution.
 * @member {String} amount_sat
 */

LnrpcResolution.prototype['amount_sat'] = undefined;
/**
 * The hex-encoded transaction ID of the sweep transaction that spent the output.
 * @member {String} sweep_txid
 */

LnrpcResolution.prototype['sweep_txid'] = undefined;
var _default = LnrpcResolution;
exports["default"] = _default;