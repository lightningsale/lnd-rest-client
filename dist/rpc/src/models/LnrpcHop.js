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
function LnrpcHopFromJSON(json) {
    return LnrpcHopFromJSONTyped(json, false);
}
exports.LnrpcHopFromJSON = LnrpcHopFromJSON;
function LnrpcHopFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chanId': !runtime_1.exists(json, 'chan_id') ? undefined : json['chan_id'],
        'chanCapacity': !runtime_1.exists(json, 'chan_capacity') ? undefined : json['chan_capacity'],
        'amtToForward': !runtime_1.exists(json, 'amt_to_forward') ? undefined : json['amt_to_forward'],
        'fee': !runtime_1.exists(json, 'fee') ? undefined : json['fee'],
        'expiry': !runtime_1.exists(json, 'expiry') ? undefined : json['expiry'],
        'amtToForwardMsat': !runtime_1.exists(json, 'amt_to_forward_msat') ? undefined : json['amt_to_forward_msat'],
        'feeMsat': !runtime_1.exists(json, 'fee_msat') ? undefined : json['fee_msat'],
        'pubKey': !runtime_1.exists(json, 'pub_key') ? undefined : json['pub_key'],
        'tlvPayload': !runtime_1.exists(json, 'tlv_payload') ? undefined : json['tlv_payload'],
        'mppRecord': !runtime_1.exists(json, 'mpp_record') ? undefined : _1.LnrpcMPPRecordFromJSON(json['mpp_record']),
        'ampRecord': !runtime_1.exists(json, 'amp_record') ? undefined : _1.LnrpcAMPRecordFromJSON(json['amp_record']),
        'customRecords': !runtime_1.exists(json, 'custom_records') ? undefined : json['custom_records'],
    };
}
exports.LnrpcHopFromJSONTyped = LnrpcHopFromJSONTyped;
function LnrpcHopToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chan_id': value.chanId,
        'chan_capacity': value.chanCapacity,
        'amt_to_forward': value.amtToForward,
        'fee': value.fee,
        'expiry': value.expiry,
        'amt_to_forward_msat': value.amtToForwardMsat,
        'fee_msat': value.feeMsat,
        'pub_key': value.pubKey,
        'tlv_payload': value.tlvPayload,
        'mpp_record': _1.LnrpcMPPRecordToJSON(value.mppRecord),
        'amp_record': _1.LnrpcAMPRecordToJSON(value.ampRecord),
        'custom_records': value.customRecords,
    };
}
exports.LnrpcHopToJSON = LnrpcHopToJSON;
