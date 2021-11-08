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
function LnrpcMPPRecordFromJSON(json) {
    return LnrpcMPPRecordFromJSONTyped(json, false);
}
exports.LnrpcMPPRecordFromJSON = LnrpcMPPRecordFromJSON;
function LnrpcMPPRecordFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'paymentAddr': !runtime_1.exists(json, 'payment_addr') ? undefined : json['payment_addr'],
        'totalAmtMsat': !runtime_1.exists(json, 'total_amt_msat') ? undefined : json['total_amt_msat'],
    };
}
exports.LnrpcMPPRecordFromJSONTyped = LnrpcMPPRecordFromJSONTyped;
function LnrpcMPPRecordToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'payment_addr': value.paymentAddr,
        'total_amt_msat': value.totalAmtMsat,
    };
}
exports.LnrpcMPPRecordToJSON = LnrpcMPPRecordToJSON;
