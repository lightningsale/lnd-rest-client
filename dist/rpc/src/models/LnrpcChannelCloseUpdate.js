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
function LnrpcChannelCloseUpdateFromJSON(json) {
    return LnrpcChannelCloseUpdateFromJSONTyped(json, false);
}
exports.LnrpcChannelCloseUpdateFromJSON = LnrpcChannelCloseUpdateFromJSON;
function LnrpcChannelCloseUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'closingTxid': !runtime_1.exists(json, 'closing_txid') ? undefined : json['closing_txid'],
        'success': !runtime_1.exists(json, 'success') ? undefined : json['success'],
    };
}
exports.LnrpcChannelCloseUpdateFromJSONTyped = LnrpcChannelCloseUpdateFromJSONTyped;
function LnrpcChannelCloseUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'closing_txid': value.closingTxid,
        'success': value.success,
    };
}
exports.LnrpcChannelCloseUpdateToJSON = LnrpcChannelCloseUpdateToJSON;
