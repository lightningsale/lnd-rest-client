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
* Enum class FailureFailureCode.
* @enum {}
* @readonly
*/
var FailureFailureCode = /*#__PURE__*/function () {
  function FailureFailureCode() {
    _classCallCheck(this, FailureFailureCode);

    _defineProperty(this, "RESERVED", "RESERVED");

    _defineProperty(this, "INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS", "INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS");

    _defineProperty(this, "INCORRECT_PAYMENT_AMOUNT", "INCORRECT_PAYMENT_AMOUNT");

    _defineProperty(this, "FINAL_INCORRECT_CLTV_EXPIRY", "FINAL_INCORRECT_CLTV_EXPIRY");

    _defineProperty(this, "FINAL_INCORRECT_HTLC_AMOUNT", "FINAL_INCORRECT_HTLC_AMOUNT");

    _defineProperty(this, "FINAL_EXPIRY_TOO_SOON", "FINAL_EXPIRY_TOO_SOON");

    _defineProperty(this, "INVALID_REALM", "INVALID_REALM");

    _defineProperty(this, "EXPIRY_TOO_SOON", "EXPIRY_TOO_SOON");

    _defineProperty(this, "INVALID_ONION_VERSION", "INVALID_ONION_VERSION");

    _defineProperty(this, "INVALID_ONION_HMAC", "INVALID_ONION_HMAC");

    _defineProperty(this, "INVALID_ONION_KEY", "INVALID_ONION_KEY");

    _defineProperty(this, "AMOUNT_BELOW_MINIMUM", "AMOUNT_BELOW_MINIMUM");

    _defineProperty(this, "FEE_INSUFFICIENT", "FEE_INSUFFICIENT");

    _defineProperty(this, "INCORRECT_CLTV_EXPIRY", "INCORRECT_CLTV_EXPIRY");

    _defineProperty(this, "CHANNEL_DISABLED", "CHANNEL_DISABLED");

    _defineProperty(this, "TEMPORARY_CHANNEL_FAILURE", "TEMPORARY_CHANNEL_FAILURE");

    _defineProperty(this, "REQUIRED_NODE_FEATURE_MISSING", "REQUIRED_NODE_FEATURE_MISSING");

    _defineProperty(this, "REQUIRED_CHANNEL_FEATURE_MISSING", "REQUIRED_CHANNEL_FEATURE_MISSING");

    _defineProperty(this, "UNKNOWN_NEXT_PEER", "UNKNOWN_NEXT_PEER");

    _defineProperty(this, "TEMPORARY_NODE_FAILURE", "TEMPORARY_NODE_FAILURE");

    _defineProperty(this, "PERMANENT_NODE_FAILURE", "PERMANENT_NODE_FAILURE");

    _defineProperty(this, "PERMANENT_CHANNEL_FAILURE", "PERMANENT_CHANNEL_FAILURE");

    _defineProperty(this, "EXPIRY_TOO_FAR", "EXPIRY_TOO_FAR");

    _defineProperty(this, "MPP_TIMEOUT", "MPP_TIMEOUT");

    _defineProperty(this, "INVALID_ONION_PAYLOAD", "INVALID_ONION_PAYLOAD");

    _defineProperty(this, "INTERNAL_FAILURE", "INTERNAL_FAILURE");

    _defineProperty(this, "UNKNOWN_FAILURE", "UNKNOWN_FAILURE");

    _defineProperty(this, "UNREADABLE_FAILURE", "UNREADABLE_FAILURE");
  }

  _createClass(FailureFailureCode, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>FailureFailureCode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FailureFailureCode} The enum <code>FailureFailureCode</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return FailureFailureCode;
}();

exports["default"] = FailureFailureCode;