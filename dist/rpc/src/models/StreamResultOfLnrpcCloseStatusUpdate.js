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
function StreamResultOfLnrpcCloseStatusUpdateFromJSON(json) {
    return StreamResultOfLnrpcCloseStatusUpdateFromJSONTyped(json, false);
}
exports.StreamResultOfLnrpcCloseStatusUpdateFromJSON = StreamResultOfLnrpcCloseStatusUpdateFromJSON;
function StreamResultOfLnrpcCloseStatusUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'result': !runtime_1.exists(json, 'result') ? undefined : _1.LnrpcCloseStatusUpdateFromJSON(json['result']),
        'error': !runtime_1.exists(json, 'error') ? undefined : _1.RuntimeStreamErrorFromJSON(json['error']),
    };
}
exports.StreamResultOfLnrpcCloseStatusUpdateFromJSONTyped = StreamResultOfLnrpcCloseStatusUpdateFromJSONTyped;
function StreamResultOfLnrpcCloseStatusUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'result': _1.LnrpcCloseStatusUpdateToJSON(value.result),
        'error': _1.RuntimeStreamErrorToJSON(value.error),
    };
}
exports.StreamResultOfLnrpcCloseStatusUpdateToJSON = StreamResultOfLnrpcCloseStatusUpdateToJSON;
