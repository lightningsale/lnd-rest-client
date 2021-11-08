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
function LnrpcEdgeLocatorFromJSON(json) {
    return LnrpcEdgeLocatorFromJSONTyped(json, false);
}
exports.LnrpcEdgeLocatorFromJSON = LnrpcEdgeLocatorFromJSON;
function LnrpcEdgeLocatorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelId': !runtime_1.exists(json, 'channel_id') ? undefined : json['channel_id'],
        'directionReverse': !runtime_1.exists(json, 'direction_reverse') ? undefined : json['direction_reverse'],
    };
}
exports.LnrpcEdgeLocatorFromJSONTyped = LnrpcEdgeLocatorFromJSONTyped;
function LnrpcEdgeLocatorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channel_id': value.channelId,
        'direction_reverse': value.directionReverse,
    };
}
exports.LnrpcEdgeLocatorToJSON = LnrpcEdgeLocatorToJSON;
