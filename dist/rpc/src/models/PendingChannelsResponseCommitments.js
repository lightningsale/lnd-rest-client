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
function PendingChannelsResponseCommitmentsFromJSON(json) {
    return PendingChannelsResponseCommitmentsFromJSONTyped(json, false);
}
exports.PendingChannelsResponseCommitmentsFromJSON = PendingChannelsResponseCommitmentsFromJSON;
function PendingChannelsResponseCommitmentsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'localTxid': !runtime_1.exists(json, 'local_txid') ? undefined : json['local_txid'],
        'remoteTxid': !runtime_1.exists(json, 'remote_txid') ? undefined : json['remote_txid'],
        'remotePendingTxid': !runtime_1.exists(json, 'remote_pending_txid') ? undefined : json['remote_pending_txid'],
        'localCommitFeeSat': !runtime_1.exists(json, 'local_commit_fee_sat') ? undefined : json['local_commit_fee_sat'],
        'remoteCommitFeeSat': !runtime_1.exists(json, 'remote_commit_fee_sat') ? undefined : json['remote_commit_fee_sat'],
        'remotePendingCommitFeeSat': !runtime_1.exists(json, 'remote_pending_commit_fee_sat') ? undefined : json['remote_pending_commit_fee_sat'],
    };
}
exports.PendingChannelsResponseCommitmentsFromJSONTyped = PendingChannelsResponseCommitmentsFromJSONTyped;
function PendingChannelsResponseCommitmentsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'local_txid': value.localTxid,
        'remote_txid': value.remoteTxid,
        'remote_pending_txid': value.remotePendingTxid,
        'local_commit_fee_sat': value.localCommitFeeSat,
        'remote_commit_fee_sat': value.remoteCommitFeeSat,
        'remote_pending_commit_fee_sat': value.remotePendingCommitFeeSat,
    };
}
exports.PendingChannelsResponseCommitmentsToJSON = PendingChannelsResponseCommitmentsToJSON;