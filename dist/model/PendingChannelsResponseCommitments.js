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
 * The PendingChannelsResponseCommitments model module.
 * @module model/PendingChannelsResponseCommitments
 * @version version not set
 */
var PendingChannelsResponseCommitments = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PendingChannelsResponseCommitments</code>.
   * @alias module:model/PendingChannelsResponseCommitments
   */
  function PendingChannelsResponseCommitments() {
    _classCallCheck(this, PendingChannelsResponseCommitments);

    PendingChannelsResponseCommitments.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PendingChannelsResponseCommitments, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PendingChannelsResponseCommitments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponseCommitments} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponseCommitments} The populated <code>PendingChannelsResponseCommitments</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PendingChannelsResponseCommitments();

        if (data.hasOwnProperty('local_txid')) {
          obj['local_txid'] = _ApiClient["default"].convertToType(data['local_txid'], 'String');
        }

        if (data.hasOwnProperty('remote_txid')) {
          obj['remote_txid'] = _ApiClient["default"].convertToType(data['remote_txid'], 'String');
        }

        if (data.hasOwnProperty('remote_pending_txid')) {
          obj['remote_pending_txid'] = _ApiClient["default"].convertToType(data['remote_pending_txid'], 'String');
        }

        if (data.hasOwnProperty('local_commit_fee_sat')) {
          obj['local_commit_fee_sat'] = _ApiClient["default"].convertToType(data['local_commit_fee_sat'], 'String');
        }

        if (data.hasOwnProperty('remote_commit_fee_sat')) {
          obj['remote_commit_fee_sat'] = _ApiClient["default"].convertToType(data['remote_commit_fee_sat'], 'String');
        }

        if (data.hasOwnProperty('remote_pending_commit_fee_sat')) {
          obj['remote_pending_commit_fee_sat'] = _ApiClient["default"].convertToType(data['remote_pending_commit_fee_sat'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PendingChannelsResponseCommitments;
}();
/**
 * Hash of the local version of the commitment tx.
 * @member {String} local_txid
 */


PendingChannelsResponseCommitments.prototype['local_txid'] = undefined;
/**
 * Hash of the remote version of the commitment tx.
 * @member {String} remote_txid
 */

PendingChannelsResponseCommitments.prototype['remote_txid'] = undefined;
/**
 * Hash of the remote pending version of the commitment tx.
 * @member {String} remote_pending_txid
 */

PendingChannelsResponseCommitments.prototype['remote_pending_txid'] = undefined;
/**
 * The amount in satoshis calculated to be paid in fees for the local commitment.
 * @member {String} local_commit_fee_sat
 */

PendingChannelsResponseCommitments.prototype['local_commit_fee_sat'] = undefined;
/**
 * The amount in satoshis calculated to be paid in fees for the remote commitment.
 * @member {String} remote_commit_fee_sat
 */

PendingChannelsResponseCommitments.prototype['remote_commit_fee_sat'] = undefined;
/**
 * The amount in satoshis calculated to be paid in fees for the remote pending commitment.
 * @member {String} remote_pending_commit_fee_sat
 */

PendingChannelsResponseCommitments.prototype['remote_pending_commit_fee_sat'] = undefined;
var _default = PendingChannelsResponseCommitments;
exports["default"] = _default;