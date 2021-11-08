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
function LnrpcPsbtShimFromJSON(json) {
    return LnrpcPsbtShimFromJSONTyped(json, false);
}
exports.LnrpcPsbtShimFromJSON = LnrpcPsbtShimFromJSON;
function LnrpcPsbtShimFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pendingChanId': !runtime_1.exists(json, 'pending_chan_id') ? undefined : json['pending_chan_id'],
        'basePsbt': !runtime_1.exists(json, 'base_psbt') ? undefined : json['base_psbt'],
        'noPublish': !runtime_1.exists(json, 'no_publish') ? undefined : json['no_publish'],
    };
}
exports.LnrpcPsbtShimFromJSONTyped = LnrpcPsbtShimFromJSONTyped;
function LnrpcPsbtShimToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pending_chan_id': value.pendingChanId,
        'base_psbt': value.basePsbt,
        'no_publish': value.noPublish,
    };
}
exports.LnrpcPsbtShimToJSON = LnrpcPsbtShimToJSON;