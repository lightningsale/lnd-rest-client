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
function LnrpcSendManyResponseFromJSON(json) {
    return LnrpcSendManyResponseFromJSONTyped(json, false);
}
exports.LnrpcSendManyResponseFromJSON = LnrpcSendManyResponseFromJSON;
function LnrpcSendManyResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'txid': !runtime_1.exists(json, 'txid') ? undefined : json['txid'],
    };
}
exports.LnrpcSendManyResponseFromJSONTyped = LnrpcSendManyResponseFromJSONTyped;
function LnrpcSendManyResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'txid': value.txid,
    };
}
exports.LnrpcSendManyResponseToJSON = LnrpcSendManyResponseToJSON;
