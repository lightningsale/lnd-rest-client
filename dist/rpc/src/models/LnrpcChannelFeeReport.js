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
function LnrpcChannelFeeReportFromJSON(json) {
    return LnrpcChannelFeeReportFromJSONTyped(json, false);
}
exports.LnrpcChannelFeeReportFromJSON = LnrpcChannelFeeReportFromJSON;
function LnrpcChannelFeeReportFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chanId': !runtime_1.exists(json, 'chan_id') ? undefined : json['chan_id'],
        'channelPoint': !runtime_1.exists(json, 'channel_point') ? undefined : json['channel_point'],
        'baseFeeMsat': !runtime_1.exists(json, 'base_fee_msat') ? undefined : json['base_fee_msat'],
        'feePerMil': !runtime_1.exists(json, 'fee_per_mil') ? undefined : json['fee_per_mil'],
        'feeRate': !runtime_1.exists(json, 'fee_rate') ? undefined : json['fee_rate'],
    };
}
exports.LnrpcChannelFeeReportFromJSONTyped = LnrpcChannelFeeReportFromJSONTyped;
function LnrpcChannelFeeReportToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chan_id': value.chanId,
        'channel_point': value.channelPoint,
        'base_fee_msat': value.baseFeeMsat,
        'fee_per_mil': value.feePerMil,
        'fee_rate': value.feeRate,
    };
}
exports.LnrpcChannelFeeReportToJSON = LnrpcChannelFeeReportToJSON;
