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
function LnrpcChannelPointFromJSON(json) {
    return LnrpcChannelPointFromJSONTyped(json, false);
}
exports.LnrpcChannelPointFromJSON = LnrpcChannelPointFromJSON;
function LnrpcChannelPointFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fundingTxidBytes': !runtime_1.exists(json, 'funding_txid_bytes') ? undefined : json['funding_txid_bytes'],
        'fundingTxidStr': !runtime_1.exists(json, 'funding_txid_str') ? undefined : json['funding_txid_str'],
        'outputIndex': !runtime_1.exists(json, 'output_index') ? undefined : json['output_index'],
    };
}
exports.LnrpcChannelPointFromJSONTyped = LnrpcChannelPointFromJSONTyped;
function LnrpcChannelPointToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'funding_txid_bytes': value.fundingTxidBytes,
        'funding_txid_str': value.fundingTxidStr,
        'output_index': value.outputIndex,
    };
}
exports.LnrpcChannelPointToJSON = LnrpcChannelPointToJSON;