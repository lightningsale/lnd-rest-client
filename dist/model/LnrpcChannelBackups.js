"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelBackup = _interopRequireDefault(require("./LnrpcChannelBackup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcChannelBackups model module.
 * @module model/LnrpcChannelBackups
 * @version version not set
 */
var LnrpcChannelBackups = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelBackups</code>.
   * @alias module:model/LnrpcChannelBackups
   */
  function LnrpcChannelBackups() {
    _classCallCheck(this, LnrpcChannelBackups);

    LnrpcChannelBackups.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelBackups, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelBackups</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelBackups} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelBackups} The populated <code>LnrpcChannelBackups</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelBackups();

        if (data.hasOwnProperty('chan_backups')) {
          obj['chan_backups'] = _ApiClient["default"].convertToType(data['chan_backups'], [_LnrpcChannelBackup["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelBackups;
}();
/**
 * A set of single-chan static channel backups.
 * @member {Array.<module:model/LnrpcChannelBackup>} chan_backups
 */


LnrpcChannelBackups.prototype['chan_backups'] = undefined;
var _default = LnrpcChannelBackups;
exports["default"] = _default;