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
function LnrpcSendCoinsRequestFromJSON(json) {
    return LnrpcSendCoinsRequestFromJSONTyped(json, false);
}
exports.LnrpcSendCoinsRequestFromJSON = LnrpcSendCoinsRequestFromJSON;
function LnrpcSendCoinsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addr': !runtime_1.exists(json, 'addr') ? undefined : json['addr'],
        'amount': !runtime_1.exists(json, 'amount') ? undefined : json['amount'],
        'targetConf': !runtime_1.exists(json, 'target_conf') ? undefined : json['target_conf'],
        'satPerVbyte': !runtime_1.exists(json, 'sat_per_vbyte') ? undefined : json['sat_per_vbyte'],
        'satPerByte': !runtime_1.exists(json, 'sat_per_byte') ? undefined : json['sat_per_byte'],
        'sendAll': !runtime_1.exists(json, 'send_all') ? undefined : json['send_all'],
        'label': !runtime_1.exists(json, 'label') ? undefined : json['label'],
        'minConfs': !runtime_1.exists(json, 'min_confs') ? undefined : json['min_confs'],
        'spendUnconfirmed': !runtime_1.exists(json, 'spend_unconfirmed') ? undefined : json['spend_unconfirmed'],
    };
}
exports.LnrpcSendCoinsRequestFromJSONTyped = LnrpcSendCoinsRequestFromJSONTyped;
function LnrpcSendCoinsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addr': value.addr,
        'amount': value.amount,
        'target_conf': value.targetConf,
        'sat_per_vbyte': value.satPerVbyte,
        'sat_per_byte': value.satPerByte,
        'send_all': value.sendAll,
        'label': value.label,
        'min_confs': value.minConfs,
        'spend_unconfirmed': value.spendUnconfirmed,
    };
}
exports.LnrpcSendCoinsRequestToJSON = LnrpcSendCoinsRequestToJSON;
