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
function LnrpcFloatMetricFromJSON(json) {
    return LnrpcFloatMetricFromJSONTyped(json, false);
}
exports.LnrpcFloatMetricFromJSON = LnrpcFloatMetricFromJSON;
function LnrpcFloatMetricFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'value': !runtime_1.exists(json, 'value') ? undefined : json['value'],
        'normalizedValue': !runtime_1.exists(json, 'normalized_value') ? undefined : json['normalized_value'],
    };
}
exports.LnrpcFloatMetricFromJSONTyped = LnrpcFloatMetricFromJSONTyped;
function LnrpcFloatMetricToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'value': value.value,
        'normalized_value': value.normalizedValue,
    };
}
exports.LnrpcFloatMetricToJSON = LnrpcFloatMetricToJSON;