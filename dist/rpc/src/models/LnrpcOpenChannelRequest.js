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
function LnrpcOpenChannelRequestFromJSON(json) {
    return LnrpcOpenChannelRequestFromJSONTyped(json, false);
}
exports.LnrpcOpenChannelRequestFromJSON = LnrpcOpenChannelRequestFromJSON;
function LnrpcOpenChannelRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'satPerVbyte': !runtime_1.exists(json, 'sat_per_vbyte') ? undefined : json['sat_per_vbyte'],
        'nodePubkey': !runtime_1.exists(json, 'node_pubkey') ? undefined : json['node_pubkey'],
        'nodePubkeyString': !runtime_1.exists(json, 'node_pubkey_string') ? undefined : json['node_pubkey_string'],
        'localFundingAmount': !runtime_1.exists(json, 'local_funding_amount') ? undefined : json['local_funding_amount'],
        'pushSat': !runtime_1.exists(json, 'push_sat') ? undefined : json['push_sat'],
        'targetConf': !runtime_1.exists(json, 'target_conf') ? undefined : json['target_conf'],
        'satPerByte': !runtime_1.exists(json, 'sat_per_byte') ? undefined : json['sat_per_byte'],
        '_private': !runtime_1.exists(json, 'private') ? undefined : json['private'],
        'minHtlcMsat': !runtime_1.exists(json, 'min_htlc_msat') ? undefined : json['min_htlc_msat'],
        'remoteCsvDelay': !runtime_1.exists(json, 'remote_csv_delay') ? undefined : json['remote_csv_delay'],
        'minConfs': !runtime_1.exists(json, 'min_confs') ? undefined : json['min_confs'],
        'spendUnconfirmed': !runtime_1.exists(json, 'spend_unconfirmed') ? undefined : json['spend_unconfirmed'],
        'closeAddress': !runtime_1.exists(json, 'close_address') ? undefined : json['close_address'],
        'fundingShim': !runtime_1.exists(json, 'funding_shim') ? undefined : _1.LnrpcFundingShimFromJSON(json['funding_shim']),
        'remoteMaxValueInFlightMsat': !runtime_1.exists(json, 'remote_max_value_in_flight_msat') ? undefined : json['remote_max_value_in_flight_msat'],
        'remoteMaxHtlcs': !runtime_1.exists(json, 'remote_max_htlcs') ? undefined : json['remote_max_htlcs'],
        'maxLocalCsv': !runtime_1.exists(json, 'max_local_csv') ? undefined : json['max_local_csv'],
    };
}
exports.LnrpcOpenChannelRequestFromJSONTyped = LnrpcOpenChannelRequestFromJSONTyped;
function LnrpcOpenChannelRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sat_per_vbyte': value.satPerVbyte,
        'node_pubkey': value.nodePubkey,
        'node_pubkey_string': value.nodePubkeyString,
        'local_funding_amount': value.localFundingAmount,
        'push_sat': value.pushSat,
        'target_conf': value.targetConf,
        'sat_per_byte': value.satPerByte,
        'private': value._private,
        'min_htlc_msat': value.minHtlcMsat,
        'remote_csv_delay': value.remoteCsvDelay,
        'min_confs': value.minConfs,
        'spend_unconfirmed': value.spendUnconfirmed,
        'close_address': value.closeAddress,
        'funding_shim': _1.LnrpcFundingShimToJSON(value.fundingShim),
        'remote_max_value_in_flight_msat': value.remoteMaxValueInFlightMsat,
        'remote_max_htlcs': value.remoteMaxHtlcs,
        'max_local_csv': value.maxLocalCsv,
    };
}
exports.LnrpcOpenChannelRequestToJSON = LnrpcOpenChannelRequestToJSON;
