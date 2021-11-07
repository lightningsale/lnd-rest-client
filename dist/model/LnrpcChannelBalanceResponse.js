"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcAmount = _interopRequireDefault(require("./LnrpcAmount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelBalanceResponse model module.
 * @module model/LnrpcChannelBalanceResponse
 * @version version not set
 */
var LnrpcChannelBalanceResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelBalanceResponse</code>.
   * @alias module:model/LnrpcChannelBalanceResponse
   */
  function LnrpcChannelBalanceResponse() {
    _classCallCheck(this, LnrpcChannelBalanceResponse);

    LnrpcChannelBalanceResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelBalanceResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelBalanceResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelBalanceResponse} The populated <code>LnrpcChannelBalanceResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelBalanceResponse();

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'String');
        }

        if (data.hasOwnProperty('pending_open_balance')) {
          obj['pending_open_balance'] = _ApiClient["default"].convertToType(data['pending_open_balance'], 'String');
        }

        if (data.hasOwnProperty('local_balance')) {
          obj['local_balance'] = _LnrpcAmount["default"].constructFromObject(data['local_balance']);
        }

        if (data.hasOwnProperty('remote_balance')) {
          obj['remote_balance'] = _LnrpcAmount["default"].constructFromObject(data['remote_balance']);
        }

        if (data.hasOwnProperty('unsettled_local_balance')) {
          obj['unsettled_local_balance'] = _LnrpcAmount["default"].constructFromObject(data['unsettled_local_balance']);
        }

        if (data.hasOwnProperty('unsettled_remote_balance')) {
          obj['unsettled_remote_balance'] = _LnrpcAmount["default"].constructFromObject(data['unsettled_remote_balance']);
        }

        if (data.hasOwnProperty('pending_open_local_balance')) {
          obj['pending_open_local_balance'] = _LnrpcAmount["default"].constructFromObject(data['pending_open_local_balance']);
        }

        if (data.hasOwnProperty('pending_open_remote_balance')) {
          obj['pending_open_remote_balance'] = _LnrpcAmount["default"].constructFromObject(data['pending_open_remote_balance']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelBalanceResponse;
}();
/**
 * @member {String} balance
 */


LnrpcChannelBalanceResponse.prototype['balance'] = undefined;
/**
 * @member {String} pending_open_balance
 */

LnrpcChannelBalanceResponse.prototype['pending_open_balance'] = undefined;
/**
 * @member {module:model/LnrpcAmount} local_balance
 */

LnrpcChannelBalanceResponse.prototype['local_balance'] = undefined;
/**
 * @member {module:model/LnrpcAmount} remote_balance
 */

LnrpcChannelBalanceResponse.prototype['remote_balance'] = undefined;
/**
 * @member {module:model/LnrpcAmount} unsettled_local_balance
 */

LnrpcChannelBalanceResponse.prototype['unsettled_local_balance'] = undefined;
/**
 * @member {module:model/LnrpcAmount} unsettled_remote_balance
 */

LnrpcChannelBalanceResponse.prototype['unsettled_remote_balance'] = undefined;
/**
 * @member {module:model/LnrpcAmount} pending_open_local_balance
 */

LnrpcChannelBalanceResponse.prototype['pending_open_local_balance'] = undefined;
/**
 * @member {module:model/LnrpcAmount} pending_open_remote_balance
 */

LnrpcChannelBalanceResponse.prototype['pending_open_remote_balance'] = undefined;
var _default = LnrpcChannelBalanceResponse;
exports["default"] = _default;