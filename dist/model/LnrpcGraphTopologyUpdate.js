"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LnrpcChannelEdgeUpdate = _interopRequireDefault(require("./LnrpcChannelEdgeUpdate"));

var _LnrpcClosedChannelUpdate = _interopRequireDefault(require("./LnrpcClosedChannelUpdate"));

var _LnrpcNodeUpdate = _interopRequireDefault(require("./LnrpcNodeUpdate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LnrpcGraphTopologyUpdate model module.
 * @module model/LnrpcGraphTopologyUpdate
 * @version version not set
 */
var LnrpcGraphTopologyUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcGraphTopologyUpdate</code>.
   * @alias module:model/LnrpcGraphTopologyUpdate
   */
  function LnrpcGraphTopologyUpdate() {
    _classCallCheck(this, LnrpcGraphTopologyUpdate);

    LnrpcGraphTopologyUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcGraphTopologyUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcGraphTopologyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcGraphTopologyUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcGraphTopologyUpdate} The populated <code>LnrpcGraphTopologyUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcGraphTopologyUpdate();

        if (data.hasOwnProperty('node_updates')) {
          obj['node_updates'] = _ApiClient["default"].convertToType(data['node_updates'], [_LnrpcNodeUpdate["default"]]);
        }

        if (data.hasOwnProperty('channel_updates')) {
          obj['channel_updates'] = _ApiClient["default"].convertToType(data['channel_updates'], [_LnrpcChannelEdgeUpdate["default"]]);
        }

        if (data.hasOwnProperty('closed_chans')) {
          obj['closed_chans'] = _ApiClient["default"].convertToType(data['closed_chans'], [_LnrpcClosedChannelUpdate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return LnrpcGraphTopologyUpdate;
}();
/**
 * @member {Array.<module:model/LnrpcNodeUpdate>} node_updates
 */


LnrpcGraphTopologyUpdate.prototype['node_updates'] = undefined;
/**
 * @member {Array.<module:model/LnrpcChannelEdgeUpdate>} channel_updates
 */

LnrpcGraphTopologyUpdate.prototype['channel_updates'] = undefined;
/**
 * @member {Array.<module:model/LnrpcClosedChannelUpdate>} closed_chans
 */

LnrpcGraphTopologyUpdate.prototype['closed_chans'] = undefined;
var _default = LnrpcGraphTopologyUpdate;
exports["default"] = _default;