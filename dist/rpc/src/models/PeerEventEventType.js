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
var PeerEventEventType;
(function (PeerEventEventType) {
    PeerEventEventType["Online"] = "PEER_ONLINE";
    PeerEventEventType["Offline"] = "PEER_OFFLINE";
})(PeerEventEventType = exports.PeerEventEventType || (exports.PeerEventEventType = {}));
function PeerEventEventTypeFromJSON(json) {
    return PeerEventEventTypeFromJSONTyped(json, false);
}
exports.PeerEventEventTypeFromJSON = PeerEventEventTypeFromJSON;
function PeerEventEventTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PeerEventEventTypeFromJSONTyped = PeerEventEventTypeFromJSONTyped;
function PeerEventEventTypeToJSON(value) {
    return value;
}
exports.PeerEventEventTypeToJSON = PeerEventEventTypeToJSON;
