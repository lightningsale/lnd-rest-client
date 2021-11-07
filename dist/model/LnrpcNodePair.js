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
 * The LnrpcNodePair model module.
 * @module model/LnrpcNodePair
 * @version version not set
 */
var LnrpcNodePair = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcNodePair</code>.
   * @alias module:model/LnrpcNodePair
   */
  function LnrpcNodePair() {
    _classCallCheck(this, LnrpcNodePair);

    LnrpcNodePair.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcNodePair, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcNodePair</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNodePair} obj Optional instance to populate.
     * @return {module:model/LnrpcNodePair} The populated <code>LnrpcNodePair</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcNodePair();

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'Blob');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'Blob');
        }
      }

      return obj;
    }
  }]);

  return LnrpcNodePair;
}();
/**
 * The sending node of the pair. When using REST, this field must be encoded as base64.
 * @member {Blob} from
 */


LnrpcNodePair.prototype['from'] = undefined;
/**
 * The receiving node of the pair. When using REST, this field must be encoded as base64.
 * @member {Blob} to
 */

LnrpcNodePair.prototype['to'] = undefined;
var _default = LnrpcNodePair;
exports["default"] = _default;