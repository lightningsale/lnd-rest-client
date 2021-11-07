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
 * The LnrpcMultiChanBackup model module.
 * @module model/LnrpcMultiChanBackup
 * @version version not set
 */
var LnrpcMultiChanBackup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcMultiChanBackup</code>.
   * @alias module:model/LnrpcMultiChanBackup
   */
  function LnrpcMultiChanBackup() {
    _classCallCheck(this, LnrpcMultiChanBackup);

    LnrpcMultiChanBackup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcMultiChanBackup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcMultiChanBackup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcMultiChanBackup} obj Optional instance to populate.
     * @return {module:model/LnrpcMultiChanBackup} The populated <code>LnrpcMultiChanBackup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcMultiChanBackup();

        if (data.hasOwnProperty('chan_points')) {
          obj['chan_points'] = _ApiClient["default"].convertToType(data['chan_points'], [_LnrpcChannelPoint["default"]]);
        }

        if (data.hasOwnProperty('multi_chan_backup')) {
          obj['multi_chan_backup'] = _ApiClient["default"].convertToType(data['multi_chan_backup'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcMultiChanBackup;
}();
/**
 * Is the set of all channels that are included in this multi-channel backup.
 * @member {Array.<module:model/LnrpcChannelPoint>} chan_points
 */


LnrpcMultiChanBackup.prototype['chan_points'] = undefined;
/**
 * A single encrypted blob containing all the static channel backups of the channel listed above. This can be stored as a single file or blob, and safely be replaced with any prior/future versions. When using REST, this field must be encoded as base64.
 * @member {Blob} multi_chan_backup
 */

LnrpcMultiChanBackup.prototype['multi_chan_backup'] = undefined;
var _default = LnrpcMultiChanBackup;
exports["default"] = _default;