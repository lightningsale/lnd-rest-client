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
function LnrpcPendingChannelsResponseFromJSON(json) {
    return LnrpcPendingChannelsResponseFromJSONTyped(json, false);
}
exports.LnrpcPendingChannelsResponseFromJSON = LnrpcPendingChannelsResponseFromJSON;
function LnrpcPendingChannelsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'totalLimboBalance': !runtime_1.exists(json, 'total_limbo_balance') ? undefined : json['total_limbo_balance'],
        'pendingOpenChannels': !runtime_1.exists(json, 'pending_open_channels') ? undefined : (json['pending_open_channels'].map(_1.PendingChannelsResponsePendingOpenChannelFromJSON)),
        'pendingClosingChannels': !runtime_1.exists(json, 'pending_closing_channels') ? undefined : (json['pending_closing_channels'].map(_1.PendingChannelsResponseClosedChannelFromJSON)),
        'pendingForceClosingChannels': !runtime_1.exists(json, 'pending_force_closing_channels') ? undefined : (json['pending_force_closing_channels'].map(_1.PendingChannelsResponseForceClosedChannelFromJSON)),
        'waitingCloseChannels': !runtime_1.exists(json, 'waiting_close_channels') ? undefined : (json['waiting_close_channels'].map(_1.PendingChannelsResponseWaitingCloseChannelFromJSON)),
    };
}
exports.LnrpcPendingChannelsResponseFromJSONTyped = LnrpcPendingChannelsResponseFromJSONTyped;
function LnrpcPendingChannelsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'total_limbo_balance': value.totalLimboBalance,
        'pending_open_channels': value.pendingOpenChannels === undefined ? undefined : (value.pendingOpenChannels.map(_1.PendingChannelsResponsePendingOpenChannelToJSON)),
        'pending_closing_channels': value.pendingClosingChannels === undefined ? undefined : (value.pendingClosingChannels.map(_1.PendingChannelsResponseClosedChannelToJSON)),
        'pending_force_closing_channels': value.pendingForceClosingChannels === undefined ? undefined : (value.pendingForceClosingChannels.map(_1.PendingChannelsResponseForceClosedChannelToJSON)),
        'waiting_close_channels': value.waitingCloseChannels === undefined ? undefined : (value.waitingCloseChannels.map(_1.PendingChannelsResponseWaitingCloseChannelToJSON)),
    };
}
exports.LnrpcPendingChannelsResponseToJSON = LnrpcPendingChannelsResponseToJSON;
