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
function LnrpcChannelEdgeFromJSON(json) {
    return LnrpcChannelEdgeFromJSONTyped(json, false);
}
exports.LnrpcChannelEdgeFromJSON = LnrpcChannelEdgeFromJSON;
function LnrpcChannelEdgeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelId': !runtime_1.exists(json, 'channel_id') ? undefined : json['channel_id'],
        'chanPoint': !runtime_1.exists(json, 'chan_point') ? undefined : json['chan_point'],
        'lastUpdate': !runtime_1.exists(json, 'last_update') ? undefined : json['last_update'],
        'node1Pub': !runtime_1.exists(json, 'node1_pub') ? undefined : json['node1_pub'],
        'node2Pub': !runtime_1.exists(json, 'node2_pub') ? undefined : json['node2_pub'],
        'capacity': !runtime_1.exists(json, 'capacity') ? undefined : json['capacity'],
        'node1Policy': !runtime_1.exists(json, 'node1_policy') ? undefined : _1.LnrpcRoutingPolicyFromJSON(json['node1_policy']),
        'node2Policy': !runtime_1.exists(json, 'node2_policy') ? undefined : _1.LnrpcRoutingPolicyFromJSON(json['node2_policy']),
    };
}
exports.LnrpcChannelEdgeFromJSONTyped = LnrpcChannelEdgeFromJSONTyped;
function LnrpcChannelEdgeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channel_id': value.channelId,
        'chan_point': value.chanPoint,
        'last_update': value.lastUpdate,
        'node1_pub': value.node1Pub,
        'node2_pub': value.node2Pub,
        'capacity': value.capacity,
        'node1_policy': _1.LnrpcRoutingPolicyToJSON(value.node1Policy),
        'node2_policy': _1.LnrpcRoutingPolicyToJSON(value.node2Policy),
    };
}
exports.LnrpcChannelEdgeToJSON = LnrpcChannelEdgeToJSON;
