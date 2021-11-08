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
function LnrpcChannelEventUpdateFromJSON(json) {
    return LnrpcChannelEventUpdateFromJSONTyped(json, false);
}
exports.LnrpcChannelEventUpdateFromJSON = LnrpcChannelEventUpdateFromJSON;
function LnrpcChannelEventUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'openChannel': !runtime_1.exists(json, 'open_channel') ? undefined : _1.LnrpcChannelFromJSON(json['open_channel']),
        'closedChannel': !runtime_1.exists(json, 'closed_channel') ? undefined : _1.LnrpcChannelCloseSummaryFromJSON(json['closed_channel']),
        'activeChannel': !runtime_1.exists(json, 'active_channel') ? undefined : _1.LnrpcChannelPointFromJSON(json['active_channel']),
        'inactiveChannel': !runtime_1.exists(json, 'inactive_channel') ? undefined : _1.LnrpcChannelPointFromJSON(json['inactive_channel']),
        'pendingOpenChannel': !runtime_1.exists(json, 'pending_open_channel') ? undefined : _1.LnrpcPendingUpdateFromJSON(json['pending_open_channel']),
        'type': !runtime_1.exists(json, 'type') ? undefined : _1.ChannelEventUpdateUpdateTypeFromJSON(json['type']),
    };
}
exports.LnrpcChannelEventUpdateFromJSONTyped = LnrpcChannelEventUpdateFromJSONTyped;
function LnrpcChannelEventUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'open_channel': _1.LnrpcChannelToJSON(value.openChannel),
        'closed_channel': _1.LnrpcChannelCloseSummaryToJSON(value.closedChannel),
        'active_channel': _1.LnrpcChannelPointToJSON(value.activeChannel),
        'inactive_channel': _1.LnrpcChannelPointToJSON(value.inactiveChannel),
        'pending_open_channel': _1.LnrpcPendingUpdateToJSON(value.pendingOpenChannel),
        'type': _1.ChannelEventUpdateUpdateTypeToJSON(value.type),
    };
}
exports.LnrpcChannelEventUpdateToJSON = LnrpcChannelEventUpdateToJSON;
