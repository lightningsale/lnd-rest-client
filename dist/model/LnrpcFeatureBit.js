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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class LnrpcFeatureBit.
* @enum {}
* @readonly
*/
var LnrpcFeatureBit = /*#__PURE__*/function () {
  function LnrpcFeatureBit() {
    _classCallCheck(this, LnrpcFeatureBit);

    _defineProperty(this, "DATALOSS_PROTECT_REQ", "DATALOSS_PROTECT_REQ");

    _defineProperty(this, "DATALOSS_PROTECT_OPT", "DATALOSS_PROTECT_OPT");

    _defineProperty(this, "INITIAL_ROUING_SYNC", "INITIAL_ROUING_SYNC");

    _defineProperty(this, "UPFRONT_SHUTDOWN_SCRIPT_REQ", "UPFRONT_SHUTDOWN_SCRIPT_REQ");

    _defineProperty(this, "UPFRONT_SHUTDOWN_SCRIPT_OPT", "UPFRONT_SHUTDOWN_SCRIPT_OPT");

    _defineProperty(this, "GOSSIP_QUERIES_REQ", "GOSSIP_QUERIES_REQ");

    _defineProperty(this, "GOSSIP_QUERIES_OPT", "GOSSIP_QUERIES_OPT");

    _defineProperty(this, "TLV_ONION_REQ", "TLV_ONION_REQ");

    _defineProperty(this, "TLV_ONION_OPT", "TLV_ONION_OPT");

    _defineProperty(this, "EXT_GOSSIP_QUERIES_REQ", "EXT_GOSSIP_QUERIES_REQ");

    _defineProperty(this, "EXT_GOSSIP_QUERIES_OPT", "EXT_GOSSIP_QUERIES_OPT");

    _defineProperty(this, "STATIC_REMOTE_KEY_REQ", "STATIC_REMOTE_KEY_REQ");

    _defineProperty(this, "STATIC_REMOTE_KEY_OPT", "STATIC_REMOTE_KEY_OPT");

    _defineProperty(this, "PAYMENT_ADDR_REQ", "PAYMENT_ADDR_REQ");

    _defineProperty(this, "PAYMENT_ADDR_OPT", "PAYMENT_ADDR_OPT");

    _defineProperty(this, "MPP_REQ", "MPP_REQ");

    _defineProperty(this, "MPP_OPT", "MPP_OPT");

    _defineProperty(this, "WUMBO_CHANNELS_REQ", "WUMBO_CHANNELS_REQ");

    _defineProperty(this, "WUMBO_CHANNELS_OPT", "WUMBO_CHANNELS_OPT");

    _defineProperty(this, "ANCHORS_REQ", "ANCHORS_REQ");

    _defineProperty(this, "ANCHORS_OPT", "ANCHORS_OPT");

    _defineProperty(this, "ANCHORS_ZERO_FEE_HTLC_REQ", "ANCHORS_ZERO_FEE_HTLC_REQ");

    _defineProperty(this, "ANCHORS_ZERO_FEE_HTLC_OPT", "ANCHORS_ZERO_FEE_HTLC_OPT");

    _defineProperty(this, "AMP_REQ", "AMP_REQ");

    _defineProperty(this, "AMP_OPT", "AMP_OPT");
  }

  _createClass(LnrpcFeatureBit, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>LnrpcFeatureBit</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LnrpcFeatureBit} The enum <code>LnrpcFeatureBit</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return LnrpcFeatureBit;
}();

exports["default"] = LnrpcFeatureBit;