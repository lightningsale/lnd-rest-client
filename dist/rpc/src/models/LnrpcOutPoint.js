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
const runtime_1 = require("../runtime");
function LnrpcOutPointFromJSON(json) {
    return LnrpcOutPointFromJSONTyped(json, false);
}
exports.LnrpcOutPointFromJSON = LnrpcOutPointFromJSON;
function LnrpcOutPointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'txidBytes': !runtime_1.exists(json, 'txid_bytes') ? undefined : json['txid_bytes'],
        'txidStr': !runtime_1.exists(json, 'txid_str') ? undefined : json['txid_str'],
        'outputIndex': !runtime_1.exists(json, 'output_index') ? undefined : json['output_index'],
    };
}
exports.LnrpcOutPointFromJSONTyped = LnrpcOutPointFromJSONTyped;
function LnrpcOutPointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'txid_bytes': value.txidBytes,
        'txid_str': value.txidStr,
        'output_index': value.outputIndex,
    };
}
exports.LnrpcOutPointToJSON = LnrpcOutPointToJSON;
