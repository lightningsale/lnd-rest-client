"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelCloseUpdate = _interopRequireDefault(require("./LnrpcChannelCloseUpdate"));

var _LnrpcPendingUpdate = _interopRequireDefault(require("./LnrpcPendingUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcCloseStatusUpdate model module.
 * @module model/LnrpcCloseStatusUpdate
 * @version version not set
 */
var LnrpcCloseStatusUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcCloseStatusUpdate</code>.
   * @alias module:model/LnrpcCloseStatusUpdate
   */
  function LnrpcCloseStatusUpdate() {
    _classCallCheck(this, LnrpcCloseStatusUpdate);

    LnrpcCloseStatusUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcCloseStatusUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcCloseStatusUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcCloseStatusUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcCloseStatusUpdate} The populated <code>LnrpcCloseStatusUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcCloseStatusUpdate();

        if (data.hasOwnProperty('close_pending')) {
          obj['close_pending'] = _LnrpcPendingUpdate["default"].constructFromObject(data['close_pending']);
        }

        if (data.hasOwnProperty('chan_close')) {
          obj['chan_close'] = _LnrpcChannelCloseUpdate["default"].constructFromObject(data['chan_close']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcCloseStatusUpdate;
}();
/**
 * @member {module:model/LnrpcPendingUpdate} close_pending
 */


LnrpcCloseStatusUpdate.prototype['close_pending'] = undefined;
/**
 * @member {module:model/LnrpcChannelCloseUpdate} chan_close
 */

LnrpcCloseStatusUpdate.prototype['chan_close'] = undefined;
var _default = LnrpcCloseStatusUpdate;
exports["default"] = _default;