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
 * The LnrpcChannelOpenUpdate model module.
 * @module model/LnrpcChannelOpenUpdate
 * @version version not set
 */
var LnrpcChannelOpenUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcChannelOpenUpdate</code>.
   * @alias module:model/LnrpcChannelOpenUpdate
   */
  function LnrpcChannelOpenUpdate() {
    _classCallCheck(this, LnrpcChannelOpenUpdate);

    LnrpcChannelOpenUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcChannelOpenUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcChannelOpenUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelOpenUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelOpenUpdate} The populated <code>LnrpcChannelOpenUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcChannelOpenUpdate();

        if (data.hasOwnProperty('channel_point')) {
          obj['channel_point'] = _LnrpcChannelPoint["default"].constructFromObject(data['channel_point']);
        }
      }

      return obj;
    }
  }]);

  return LnrpcChannelOpenUpdate;
}();
/**
 * @member {module:model/LnrpcChannelPoint} channel_point
 */


LnrpcChannelOpenUpdate.prototype['channel_point'] = undefined;
var _default = LnrpcChannelOpenUpdate;
exports["default"] = _default;