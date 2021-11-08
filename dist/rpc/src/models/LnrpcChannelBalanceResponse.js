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
function LnrpcChannelBalanceResponseFromJSON(json) {
    return LnrpcChannelBalanceResponseFromJSONTyped(json, false);
}
exports.LnrpcChannelBalanceResponseFromJSON = LnrpcChannelBalanceResponseFromJSON;
function LnrpcChannelBalanceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balance': !runtime_1.exists(json, 'balance') ? undefined : json['balance'],
        'pendingOpenBalance': !runtime_1.exists(json, 'pending_open_balance') ? undefined : json['pending_open_balance'],
        'localBalance': !runtime_1.exists(json, 'local_balance') ? undefined : _1.LnrpcAmountFromJSON(json['local_balance']),
        'remoteBalance': !runtime_1.exists(json, 'remote_balance') ? undefined : _1.LnrpcAmountFromJSON(json['remote_balance']),
        'unsettledLocalBalance': !runtime_1.exists(json, 'unsettled_local_balance') ? undefined : _1.LnrpcAmountFromJSON(json['unsettled_local_balance']),
        'unsettledRemoteBalance': !runtime_1.exists(json, 'unsettled_remote_balance') ? undefined : _1.LnrpcAmountFromJSON(json['unsettled_remote_balance']),
        'pendingOpenLocalBalance': !runtime_1.exists(json, 'pending_open_local_balance') ? undefined : _1.LnrpcAmountFromJSON(json['pending_open_local_balance']),
        'pendingOpenRemoteBalance': !runtime_1.exists(json, 'pending_open_remote_balance') ? undefined : _1.LnrpcAmountFromJSON(json['pending_open_remote_balance']),
    };
}
exports.LnrpcChannelBalanceResponseFromJSONTyped = LnrpcChannelBalanceResponseFromJSONTyped;
function LnrpcChannelBalanceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance': value.balance,
        'pending_open_balance': value.pendingOpenBalance,
        'local_balance': _1.LnrpcAmountToJSON(value.localBalance),
        'remote_balance': _1.LnrpcAmountToJSON(value.remoteBalance),
        'unsettled_local_balance': _1.LnrpcAmountToJSON(value.unsettledLocalBalance),
        'unsettled_remote_balance': _1.LnrpcAmountToJSON(value.unsettledRemoteBalance),
        'pending_open_local_balance': _1.LnrpcAmountToJSON(value.pendingOpenLocalBalance),
        'pending_open_remote_balance': _1.LnrpcAmountToJSON(value.pendingOpenRemoteBalance),
    };
}
exports.LnrpcChannelBalanceResponseToJSON = LnrpcChannelBalanceResponseToJSON;
