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
 * The LnrpcPendingUpdate model module.
 * @module model/LnrpcPendingUpdate
 * @version version not set
 */
var LnrpcPendingUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPendingUpdate</code>.
   * @alias module:model/LnrpcPendingUpdate
   */
  function LnrpcPendingUpdate() {
    _classCallCheck(this, LnrpcPendingUpdate);

    LnrpcPendingUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPendingUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPendingUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPendingUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcPendingUpdate} The populated <code>LnrpcPendingUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPendingUpdate();

        if (data.hasOwnProperty('txid')) {
          obj['txid'] = _ApiClient["default"].convertToType(data['txid'], 'Blob');
        }

        if (data.hasOwnProperty('output_index')) {
          obj['output_index'] = _ApiClient["default"].convertToType(data['output_index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcPendingUpdate;
}();
/**
 * @member {Blob} txid
 */


LnrpcPendingUpdate.prototype['txid'] = undefined;
/**
 * @member {Number} output_index
 */

LnrpcPendingUpdate.prototype['output_index'] = undefined;
var _default = LnrpcPendingUpdate;
exports["default"] = _default;