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
function LnrpcChannelOpenUpdateFromJSON(json) {
    return LnrpcChannelOpenUpdateFromJSONTyped(json, false);
}
exports.LnrpcChannelOpenUpdateFromJSON = LnrpcChannelOpenUpdateFromJSON;
function LnrpcChannelOpenUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channelPoint': !runtime_1.exists(json, 'channel_point') ? undefined : _1.LnrpcChannelPointFromJSON(json['channel_point']),
    };
}
exports.LnrpcChannelOpenUpdateFromJSONTyped = LnrpcChannelOpenUpdateFromJSONTyped;
function LnrpcChannelOpenUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channel_point': _1.LnrpcChannelPointToJSON(value.channelPoint),
    };
}
exports.LnrpcChannelOpenUpdateToJSON = LnrpcChannelOpenUpdateToJSON;
