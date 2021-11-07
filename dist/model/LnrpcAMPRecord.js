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
 * The LnrpcAMPRecord model module.
 * @module model/LnrpcAMPRecord
 * @version version not set
 */
var LnrpcAMPRecord = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LnrpcAMPRecord</code>.
   * @alias module:model/LnrpcAMPRecord
   */
  function LnrpcAMPRecord() {
    _classCallCheck(this, LnrpcAMPRecord);

    LnrpcAMPRecord.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LnrpcAMPRecord, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LnrpcAMPRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcAMPRecord} obj Optional instance to populate.
     * @return {module:model/LnrpcAMPRecord} The populated <code>LnrpcAMPRecord</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LnrpcAMPRecord();

        if (data.hasOwnProperty('root_share')) {
          obj['root_share'] = _ApiClient["default"].convertToType(data['root_share'], 'Blob');
        }

        if (data.hasOwnProperty('set_id')) {
          obj['set_id'] = _ApiClient["default"].convertToType(data['set_id'], 'Blob');
        }

        if (data.hasOwnProperty('child_index')) {
          obj['child_index'] = _ApiClient["default"].convertToType(data['child_index'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LnrpcAMPRecord;
}();
/**
 * @member {Blob} root_share
 */


LnrpcAMPRecord.prototype['root_share'] = undefined;
/**
 * @member {Blob} set_id
 */

LnrpcAMPRecord.prototype['set_id'] = undefined;
/**
 * @member {Number} child_index
 */

LnrpcAMPRecord.prototype['child_index'] = undefined;
var _default = LnrpcAMPRecord;
exports["default"] = _default;