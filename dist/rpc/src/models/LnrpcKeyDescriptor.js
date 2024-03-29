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
function LnrpcKeyDescriptorFromJSON(json) {
    return LnrpcKeyDescriptorFromJSONTyped(json, false);
}
exports.LnrpcKeyDescriptorFromJSON = LnrpcKeyDescriptorFromJSON;
function LnrpcKeyDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rawKeyBytes': !runtime_1.exists(json, 'raw_key_bytes') ? undefined : json['raw_key_bytes'],
        'keyLoc': !runtime_1.exists(json, 'key_loc') ? undefined : _1.LnrpcKeyLocatorFromJSON(json['key_loc']),
    };
}
exports.LnrpcKeyDescriptorFromJSONTyped = LnrpcKeyDescriptorFromJSONTyped;
function LnrpcKeyDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'raw_key_bytes': value.rawKeyBytes,
        'key_loc': _1.LnrpcKeyLocatorToJSON(value.keyLoc),
    };
}
exports.LnrpcKeyDescriptorToJSON = LnrpcKeyDescriptorToJSON;
