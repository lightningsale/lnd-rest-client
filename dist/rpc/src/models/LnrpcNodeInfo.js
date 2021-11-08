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
function LnrpcNodeInfoFromJSON(json) {
    return LnrpcNodeInfoFromJSONTyped(json, false);
}
exports.LnrpcNodeInfoFromJSON = LnrpcNodeInfoFromJSON;
function LnrpcNodeInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'node': !runtime_1.exists(json, 'node') ? undefined : _1.LnrpcLightningNodeFromJSON(json['node']),
        'numChannels': !runtime_1.exists(json, 'num_channels') ? undefined : json['num_channels'],
        'totalCapacity': !runtime_1.exists(json, 'total_capacity') ? undefined : json['total_capacity'],
        'channels': !runtime_1.exists(json, 'channels') ? undefined : (json['channels'].map(_1.LnrpcChannelEdgeFromJSON)),
    };
}
exports.LnrpcNodeInfoFromJSONTyped = LnrpcNodeInfoFromJSONTyped;
function LnrpcNodeInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'node': _1.LnrpcLightningNodeToJSON(value.node),
        'num_channels': value.numChannels,
        'total_capacity': value.totalCapacity,
        'channels': value.channels === undefined ? undefined : (value.channels.map(_1.LnrpcChannelEdgeToJSON)),
    };
}
exports.LnrpcNodeInfoToJSON = LnrpcNodeInfoToJSON;