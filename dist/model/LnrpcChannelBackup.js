"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelPoint = _interopRequireDefault(require("./LnrpcChannelPoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelBackup model module.
 * @module model/LnrpcChannelBackup
 * @version version not set
 */
var LnrpcChannelBackup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelBackup</code>.
   * @alias module:model/LnrpcChannelBackup
   */
  function LnrpcChannelBackup() {
    _classCallCheck(this, LnrpcChannelBackup);

    LnrpcChannelBackup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelBackup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelBackup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelBackup} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelBackup} The populated <code>LnrpcChannelBackup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelBackup();

        if (data.hasOwnProperty('chan_point')) {
          obj['chan_point'] = _LnrpcChannelPoint["default"].constructFromObject(data['chan_point']);
        }

        if (data.hasOwnProperty('chan_backup')) {
          obj['chan_backup'] = _ApiClient["default"].convertToType(data['chan_backup'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelBackup;
}();
/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */


LnrpcChannelBackup.prototype['chan_point'] = undefined;
/**
 * Is an encrypted single-chan backup. this can be passed to RestoreChannelBackups, or the WalletUnlocker Init and Unlock methods in order to trigger the recovery protocol. When using REST, this field must be encoded as base64.
 * @member {Blob} chan_backup
 */

LnrpcChannelBackup.prototype['chan_backup'] = undefined;
var _default = LnrpcChannelBackup;
exports["default"] = _default;