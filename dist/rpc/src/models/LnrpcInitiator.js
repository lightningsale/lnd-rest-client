"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * rpc.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @export
 * @enum {string}
 */
var LnrpcInitiator;
(function (LnrpcInitiator) {
    LnrpcInitiator["Unknown"] = "INITIATOR_UNKNOWN";
    LnrpcInitiator["Local"] = "INITIATOR_LOCAL";
    LnrpcInitiator["Remote"] = "INITIATOR_REMOTE";
    LnrpcInitiator["Both"] = "INITIATOR_BOTH";
})(LnrpcInitiator = exports.LnrpcInitiator || (exports.LnrpcInitiator = {}));
function LnrpcInitiatorFromJSON(json) {
    return LnrpcInitiatorFromJSONTyped(json, false);
}
exports.LnrpcInitiatorFromJSON = LnrpcInitiatorFromJSON;
function LnrpcInitiatorFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LnrpcInitiatorFromJSONTyped = LnrpcInitiatorFromJSONTyped;
function LnrpcInitiatorToJSON(value) {
    return value;
}
exports.LnrpcInitiatorToJSON = LnrpcInitiatorToJSON;
