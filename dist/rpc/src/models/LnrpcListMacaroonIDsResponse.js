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
function LnrpcListMacaroonIDsResponseFromJSON(json) {
    return LnrpcListMacaroonIDsResponseFromJSONTyped(json, false);
}
exports.LnrpcListMacaroonIDsResponseFromJSON = LnrpcListMacaroonIDsResponseFromJSON;
function LnrpcListMacaroonIDsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rootKeyIds': !runtime_1.exists(json, 'root_key_ids') ? undefined : json['root_key_ids'],
    };
}
exports.LnrpcListMacaroonIDsResponseFromJSONTyped = LnrpcListMacaroonIDsResponseFromJSONTyped;
function LnrpcListMacaroonIDsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'root_key_ids': value.rootKeyIds,
    };
}
exports.LnrpcListMacaroonIDsResponseToJSON = LnrpcListMacaroonIDsResponseToJSON;
