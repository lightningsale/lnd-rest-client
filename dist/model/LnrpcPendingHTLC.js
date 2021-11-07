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
 * The LnrpcPendingHTLC model module.
 * @module model/LnrpcPendingHTLC
 * @version version not set
 */
var LnrpcPendingHTLC = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcPendingHTLC</code>.
   * @alias module:model/LnrpcPendingHTLC
   */
  function LnrpcPendingHTLC() {
    _classCallCheck(this, LnrpcPendingHTLC);

    LnrpcPendingHTLC.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcPendingHTLC, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcPendingHTLC</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPendingHTLC} obj Optional instance to populate.
     * @return {module:model/LnrpcPendingHTLC} The populated <code>LnrpcPendingHTLC</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcPendingHTLC();

        if (data.hasOwnProperty('incoming')) {
          obj['incoming'] = _ApiClient["default"].convertToType(data['incoming'], 'Boolean');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'String');
        }

        if (data.hasOwnProperty('outpoint')) {
          obj['outpoint'] = _ApiClient["default"].convertToType(data['outpoint'], 'String');
        }

        if (data.hasOwnProperty('maturity_height')) {
          obj['maturity_height'] = _ApiClient["default"].convertToType(data['maturity_height'], 'Number');
        }

        if (data.hasOwnProperty('blocks_til_maturity')) {
          obj['blocks_til_maturity'] = _ApiClient["default"].convertToType(data['blocks_til_maturity'], 'Number');
        }

        if (data.hasOwnProperty('stage')) {
          obj['stage'] = _ApiClient["default"].convertToType(data['stage'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcPendingHTLC;
}();
/**
 * @member {Boolean} incoming
 */


LnrpcPendingHTLC.prototype['incoming'] = undefined;
/**
 * @member {String} amount
 */

LnrpcPendingHTLC.prototype['amount'] = undefined;
/**
 * @member {String} outpoint
 */

LnrpcPendingHTLC.prototype['outpoint'] = undefined;
/**
 * @member {Number} maturity_height
 */

LnrpcPendingHTLC.prototype['maturity_height'] = undefined;
/**
 * The number of blocks remaining until the current stage can be swept. Negative values indicate how many blocks have passed since becoming mature.
 * @member {Number} blocks_til_maturity
 */

LnrpcPendingHTLC.prototype['blocks_til_maturity'] = undefined;
/**
 * @member {Number} stage
 */

LnrpcPendingHTLC.prototype['stage'] = undefined;
var _default = LnrpcPendingHTLC;
exports["default"] = _default;