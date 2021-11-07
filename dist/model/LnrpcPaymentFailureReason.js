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
* Enum class LnrpcPaymentFailureReason.
* @enum {}
* @readonly
*/
var LnrpcPaymentFailureReason = /*#__PURE__*/function () {
  function LnrpcPaymentFailureReason() {
    _classCallCheck(this, LnrpcPaymentFailureReason);

    _defineProperty(this, "NONE", "FAILURE_REASON_NONE");

    _defineProperty(this, "TIMEOUT", "FAILURE_REASON_TIMEOUT");

    _defineProperty(this, "NO_ROUTE", "FAILURE_REASON_NO_ROUTE");

    _defineProperty(this, "ERROR", "FAILURE_REASON_ERROR");

    _defineProperty(this, "INCORRECT_PAYMENT_DETAILS", "FAILURE_REASON_INCORRECT_PAYMENT_DETAILS");

    _defineProperty(this, "INSUFFICIENT_BALANCE", "FAILURE_REASON_INSUFFICIENT_BALANCE");
  }

  _createClass(LnrpcPaymentFailureReason, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>LnrpcPaymentFailureReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LnrpcPaymentFailureReason} The enum <code>LnrpcPaymentFailureReason</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return LnrpcPaymentFailureReason;
}();

exports["default"] = LnrpcPaymentFailureReason;