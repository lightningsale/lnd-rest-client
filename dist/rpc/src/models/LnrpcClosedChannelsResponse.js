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
function LnrpcClosedChannelsResponseFromJSON(json) {
    return LnrpcClosedChannelsResponseFromJSONTyped(json, false);
}
exports.LnrpcClosedChannelsResponseFromJSON = LnrpcClosedChannelsResponseFromJSON;
function LnrpcClosedChannelsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'channels': !runtime_1.exists(json, 'channels') ? undefined : (json['channels'].map(_1.LnrpcChannelCloseSummaryFromJSON)),
    };
}
exports.LnrpcClosedChannelsResponseFromJSONTyped = LnrpcClosedChannelsResponseFromJSONTyped;
function LnrpcClosedChannelsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'channels': value.channels === undefined ? undefined : (value.channels.map(_1.LnrpcChannelCloseSummaryToJSON)),
    };
}
exports.LnrpcClosedChannelsResponseToJSON = LnrpcClosedChannelsResponseToJSON;
