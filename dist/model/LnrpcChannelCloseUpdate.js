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
 * The LnrpcChannelCloseUpdate model module.
 * @module model/LnrpcChannelCloseUpdate
 * @version version not set
 */
var LnrpcChannelCloseUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelCloseUpdate</code>.
   * @alias module:model/LnrpcChannelCloseUpdate
   */
  function LnrpcChannelCloseUpdate() {
    _classCallCheck(this, LnrpcChannelCloseUpdate);

    LnrpcChannelCloseUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelCloseUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelCloseUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelCloseUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelCloseUpdate} The populated <code>LnrpcChannelCloseUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelCloseUpdate();

        if (data.hasOwnProperty('closing_txid')) {
          obj['closing_txid'] = _ApiClient["default"].convertToType(data['closing_txid'], 'Blob');
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelCloseUpdate;
}();
/**
 * @member {Blob} closing_txid
 */


LnrpcChannelCloseUpdate.prototype['closing_txid'] = undefined;
/**
 * @member {Boolean} success
 */

LnrpcChannelCloseUpdate.prototype['success'] = undefined;
var _default = LnrpcChannelCloseUpdate;
exports["default"] = _default;