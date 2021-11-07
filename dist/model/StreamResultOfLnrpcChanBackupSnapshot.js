"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChanBackupSnapshot = _interopRequireDefault(require("./LnrpcChanBackupSnapshot"));

var _RuntimeStreamError = _interopRequireDefault(require("./RuntimeStreamError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StreamResultOfLnrpcChanBackupSnapshot model module.
 * @module model/StreamResultOfLnrpcChanBackupSnapshot
 * @version version not set
 */
var StreamResultOfLnrpcChanBackupSnapshot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StreamResultOfLnrpcChanBackupSnapshot</code>.
   * @alias module:model/StreamResultOfLnrpcChanBackupSnapshot
   */
  function StreamResultOfLnrpcChanBackupSnapshot() {
    _classCallCheck(this, StreamResultOfLnrpcChanBackupSnapshot);

    StreamResultOfLnrpcChanBackupSnapshot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StreamResultOfLnrpcChanBackupSnapshot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StreamResultOfLnrpcChanBackupSnapshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamResultOfLnrpcChanBackupSnapshot} obj Optional instance to populate.
     * @return {module:model/StreamResultOfLnrpcChanBackupSnapshot} The populated <code>StreamResultOfLnrpcChanBackupSnapshot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StreamResultOfLnrpcChanBackupSnapshot();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _LnrpcChanBackupSnapshot["default"].constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _RuntimeStreamError["default"].constructFromObject(data['error']);
        }
      }

      return obj;
    }
  }]);

  return StreamResultOfLnrpcChanBackupSnapshot;
}();
/**
 * @member {module:model/LnrpcChanBackupSnapshot} result
 */


StreamResultOfLnrpcChanBackupSnapshot.prototype['result'] = undefined;
/**
 * @member {module:model/RuntimeStreamError} error
 */

StreamResultOfLnrpcChanBackupSnapshot.prototype['error'] = undefined;
var _default = StreamResultOfLnrpcChanBackupSnapshot;
exports["default"] = _default;