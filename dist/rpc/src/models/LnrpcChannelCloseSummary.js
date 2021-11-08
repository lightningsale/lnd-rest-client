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
function LnrpcChannelCloseSummaryFromJSON(json) {
    return LnrpcChannelCloseSummaryFromJSONTyped(json, false);
}
exports.LnrpcChannelCloseSummaryFromJSON = LnrpcChannelCloseSummaryFromJSON;
function LnrpcChannelCloseSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelPoint': !runtime_1.exists(json, 'channel_point') ? undefined : json['channel_point'],
        'chanId': !runtime_1.exists(json, 'chan_id') ? undefined : json['chan_id'],
        'chainHash': !runtime_1.exists(json, 'chain_hash') ? undefined : json['chain_hash'],
        'closingTxHash': !runtime_1.exists(json, 'closing_tx_hash') ? undefined : json['closing_tx_hash'],
        'remotePubkey': !runtime_1.exists(json, 'remote_pubkey') ? undefined : json['remote_pubkey'],
        'capacity': !runtime_1.exists(json, 'capacity') ? undefined : json['capacity'],
        'closeHeight': !runtime_1.exists(json, 'close_height') ? undefined : json['close_height'],
        'settledBalance': !runtime_1.exists(json, 'settled_balance') ? undefined : json['settled_balance'],
        'timeLockedBalance': !runtime_1.exists(json, 'time_locked_balance') ? undefined : json['time_locked_balance'],
        'closeType': !runtime_1.exists(json, 'close_type') ? undefined : _1.ChannelCloseSummaryClosureTypeFromJSON(json['close_type']),
        'openInitiator': !runtime_1.exists(json, 'open_initiator') ? undefined : _1.LnrpcInitiatorFromJSON(json['open_initiator']),
        'closeInitiator': !runtime_1.exists(json, 'close_initiator') ? undefined : _1.LnrpcInitiatorFromJSON(json['close_initiator']),
        'resolutions': !runtime_1.exists(json, 'resolutions') ? undefined : (json['resolutions'].map(_1.LnrpcResolutionFromJSON)),
    };
}
exports.LnrpcChannelCloseSummaryFromJSONTyped = LnrpcChannelCloseSummaryFromJSONTyped;
function LnrpcChannelCloseSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channel_point': value.channelPoint,
        'chan_id': value.chanId,
        'chain_hash': value.chainHash,
        'closing_tx_hash': value.closingTxHash,
        'remote_pubkey': value.remotePubkey,
        'capacity': value.capacity,
        'close_height': value.closeHeight,
        'settled_balance': value.settledBalance,
        'time_locked_balance': value.timeLockedBalance,
        'close_type': _1.ChannelCloseSummaryClosureTypeToJSON(value.closeType),
        'open_initiator': _1.LnrpcInitiatorToJSON(value.openInitiator),
        'close_initiator': _1.LnrpcInitiatorToJSON(value.closeInitiator),
        'resolutions': value.resolutions === undefined ? undefined : (value.resolutions.map(_1.LnrpcResolutionToJSON)),
    };
}
exports.LnrpcChannelCloseSummaryToJSON = LnrpcChannelCloseSummaryToJSON;
