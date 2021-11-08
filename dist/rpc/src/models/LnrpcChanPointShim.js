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
function LnrpcChanPointShimFromJSON(json) {
    return LnrpcChanPointShimFromJSONTyped(json, false);
}
exports.LnrpcChanPointShimFromJSON = LnrpcChanPointShimFromJSON;
function LnrpcChanPointShimFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amt': !runtime_1.exists(json, 'amt') ? undefined : json['amt'],
        'chanPoint': !runtime_1.exists(json, 'chan_point') ? undefined : _1.LnrpcChannelPointFromJSON(json['chan_point']),
        'localKey': !runtime_1.exists(json, 'local_key') ? undefined : _1.LnrpcKeyDescriptorFromJSON(json['local_key']),
        'remoteKey': !runtime_1.exists(json, 'remote_key') ? undefined : json['remote_key'],
        'pendingChanId': !runtime_1.exists(json, 'pending_chan_id') ? undefined : json['pending_chan_id'],
        'thawHeight': !runtime_1.exists(json, 'thaw_height') ? undefined : json['thaw_height'],
    };
}
exports.LnrpcChanPointShimFromJSONTyped = LnrpcChanPointShimFromJSONTyped;
function LnrpcChanPointShimToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amt': value.amt,
        'chan_point': _1.LnrpcChannelPointToJSON(value.chanPoint),
        'local_key': _1.LnrpcKeyDescriptorToJSON(value.localKey),
        'remote_key': value.remoteKey,
        'pending_chan_id': value.pendingChanId,
        'thaw_height': value.thawHeight,
    };
}
exports.LnrpcChanPointShimToJSON = LnrpcChanPointShimToJSON;
