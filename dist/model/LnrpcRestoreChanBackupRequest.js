"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelBackups = _interopRequireDefault(require("./LnrpcChannelBackups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcRestoreChanBackupRequest model module.
 * @module model/LnrpcRestoreChanBackupRequest
 * @version version not set
 */
var LnrpcRestoreChanBackupRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcRestoreChanBackupRequest</code>.
   * @alias module:model/LnrpcRestoreChanBackupRequest
   */
  function LnrpcRestoreChanBackupRequest() {
    _classCallCheck(this, LnrpcRestoreChanBackupRequest);

    LnrpcRestoreChanBackupRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcRestoreChanBackupRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcRestoreChanBackupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcRestoreChanBackupRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcRestoreChanBackupRequest} The populated <code>LnrpcRestoreChanBackupRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcRestoreChanBackupRequest();

        if (data.hasOwnProperty('chan_backups')) {
          obj['chan_backups'] = _LnrpcChannelBackups["default"].constructFromObject(data['chan_backups']);
        }

        if (data.hasOwnProperty('multi_chan_backup')) {
          obj['multi_chan_backup'] = _ApiClient["default"].convertToType(data['multi_chan_backup'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcRestoreChanBackupRequest;
}();
/**
 * @member {module:model/LnrpcChannelBackups} chan_backups
 */


LnrpcRestoreChanBackupRequest.prototype['chan_backups'] = undefined;
/**
 * The channels to restore in the packed multi backup format. When using REST, this field must be encoded as base64.
 * @member {Blob} multi_chan_backup
 */

LnrpcRestoreChanBackupRequest.prototype['multi_chan_backup'] = undefined;
var _default = LnrpcRestoreChanBackupRequest;
exports["default"] = _default;