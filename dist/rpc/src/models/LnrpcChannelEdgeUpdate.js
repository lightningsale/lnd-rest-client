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
function LnrpcChannelEdgeUpdateFromJSON(json) {
    return LnrpcChannelEdgeUpdateFromJSONTyped(json, false);
}
exports.LnrpcChannelEdgeUpdateFromJSON = LnrpcChannelEdgeUpdateFromJSON;
function LnrpcChannelEdgeUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chanId': !runtime_1.exists(json, 'chan_id') ? undefined : json['chan_id'],
        'chanPoint': !runtime_1.exists(json, 'chan_point') ? undefined : _1.LnrpcChannelPointFromJSON(json['chan_point']),
        'capacity': !runtime_1.exists(json, 'capacity') ? undefined : json['capacity'],
        'routingPolicy': !runtime_1.exists(json, 'routing_policy') ? undefined : _1.LnrpcRoutingPolicyFromJSON(json['routing_policy']),
        'advertisingNode': !runtime_1.exists(json, 'advertising_node') ? undefined : json['advertising_node'],
        'connectingNode': !runtime_1.exists(json, 'connecting_node') ? undefined : json['connecting_node'],
    };
}
exports.LnrpcChannelEdgeUpdateFromJSONTyped = LnrpcChannelEdgeUpdateFromJSONTyped;
function LnrpcChannelEdgeUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chan_id': value.chanId,
        'chan_point': _1.LnrpcChannelPointToJSON(value.chanPoint),
        'capacity': value.capacity,
        'routing_policy': _1.LnrpcRoutingPolicyToJSON(value.routingPolicy),
        'advertising_node': value.advertisingNode,
        'connecting_node': value.connectingNode,
    };
}
exports.LnrpcChannelEdgeUpdateToJSON = LnrpcChannelEdgeUpdateToJSON;
