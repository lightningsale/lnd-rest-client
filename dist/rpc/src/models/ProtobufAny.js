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
function ProtobufAnyFromJSON(json) {
    return ProtobufAnyFromJSONTyped(json, false);
}
exports.ProtobufAnyFromJSON = ProtobufAnyFromJSON;
function ProtobufAnyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'typeUrl': !runtime_1.exists(json, 'type_url') ? undefined : json['type_url'],
        'value': !runtime_1.exists(json, 'value') ? undefined : json['value'],
    };
}
exports.ProtobufAnyFromJSONTyped = ProtobufAnyFromJSONTyped;
function ProtobufAnyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type_url': value.typeUrl,
        'value': value.value,
    };
}
exports.ProtobufAnyToJSON = ProtobufAnyToJSON;
