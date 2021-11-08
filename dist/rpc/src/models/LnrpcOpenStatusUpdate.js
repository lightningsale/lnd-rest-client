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
const _1 = require("./");
function LnrpcOpenStatusUpdateFromJSON(json) {
    return LnrpcOpenStatusUpdateFromJSONTyped(json, false);
}
exports.LnrpcOpenStatusUpdateFromJSON = LnrpcOpenStatusUpdateFromJSON;
function LnrpcOpenStatusUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chanPending': !runtime_1.exists(json, 'chan_pending') ? undefined : _1.LnrpcPendingUpdateFromJSON(json['chan_pending']),
        'chanOpen': !runtime_1.exists(json, 'chan_open') ? undefined : _1.LnrpcChannelOpenUpdateFromJSON(json['chan_open']),
        'psbtFund': !runtime_1.exists(json, 'psbt_fund') ? undefined : _1.LnrpcReadyForPsbtFundingFromJSON(json['psbt_fund']),
        'pendingChanId': !runtime_1.exists(json, 'pending_chan_id') ? undefined : json['pending_chan_id'],
    };
}
exports.LnrpcOpenStatusUpdateFromJSONTyped = LnrpcOpenStatusUpdateFromJSONTyped;
function LnrpcOpenStatusUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chan_pending': _1.LnrpcPendingUpdateToJSON(value.chanPending),
        'chan_open': _1.LnrpcChannelOpenUpdateToJSON(value.chanOpen),
        'psbt_fund': _1.LnrpcReadyForPsbtFundingToJSON(value.psbtFund),
        'pending_chan_id': value.pendingChanId,
    };
}
exports.LnrpcOpenStatusUpdateToJSON = LnrpcOpenStatusUpdateToJSON;
