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
var LnrpcNodeMetricType;
(function (LnrpcNodeMetricType) {
    LnrpcNodeMetricType["Unknown"] = "UNKNOWN";
    LnrpcNodeMetricType["BetweennessCentrality"] = "BETWEENNESS_CENTRALITY";
})(LnrpcNodeMetricType = exports.LnrpcNodeMetricType || (exports.LnrpcNodeMetricType = {}));
function LnrpcNodeMetricTypeFromJSON(json) {
    return LnrpcNodeMetricTypeFromJSONTyped(json, false);
}
exports.LnrpcNodeMetricTypeFromJSON = LnrpcNodeMetricTypeFromJSON;
function LnrpcNodeMetricTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LnrpcNodeMetricTypeFromJSONTyped = LnrpcNodeMetricTypeFromJSONTyped;
function LnrpcNodeMetricTypeToJSON(value) {
    return value;
}
exports.LnrpcNodeMetricTypeToJSON = LnrpcNodeMetricTypeToJSON;
