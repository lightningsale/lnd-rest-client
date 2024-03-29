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
function LnrpcAddInvoiceResponseFromJSON(json) {
    return LnrpcAddInvoiceResponseFromJSONTyped(json, false);
}
exports.LnrpcAddInvoiceResponseFromJSON = LnrpcAddInvoiceResponseFromJSON;
function LnrpcAddInvoiceResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rHash': !runtime_1.exists(json, 'r_hash') ? undefined : json['r_hash'],
        'paymentRequest': !runtime_1.exists(json, 'payment_request') ? undefined : json['payment_request'],
        'addIndex': !runtime_1.exists(json, 'add_index') ? undefined : json['add_index'],
        'paymentAddr': !runtime_1.exists(json, 'payment_addr') ? undefined : json['payment_addr'],
    };
}
exports.LnrpcAddInvoiceResponseFromJSONTyped = LnrpcAddInvoiceResponseFromJSONTyped;
function LnrpcAddInvoiceResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'r_hash': value.rHash,
        'payment_request': value.paymentRequest,
        'add_index': value.addIndex,
        'payment_addr': value.paymentAddr,
    };
}
exports.LnrpcAddInvoiceResponseToJSON = LnrpcAddInvoiceResponseToJSON;
