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
function LnrpcVerifyMessageRequestFromJSON(json) {
    return LnrpcVerifyMessageRequestFromJSONTyped(json, false);
}
exports.LnrpcVerifyMessageRequestFromJSON = LnrpcVerifyMessageRequestFromJSON;
function LnrpcVerifyMessageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'msg': !runtime_1.exists(json, 'msg') ? undefined : json['msg'],
        'signature': !runtime_1.exists(json, 'signature') ? undefined : json['signature'],
    };
}
exports.LnrpcVerifyMessageRequestFromJSONTyped = LnrpcVerifyMessageRequestFromJSONTyped;
function LnrpcVerifyMessageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'msg': value.msg,
        'signature': value.signature,
    };
}
exports.LnrpcVerifyMessageRequestToJSON = LnrpcVerifyMessageRequestToJSON;
