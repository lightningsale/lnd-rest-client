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
function LnrpcChanBackupSnapshotFromJSON(json) {
    return LnrpcChanBackupSnapshotFromJSONTyped(json, false);
}
exports.LnrpcChanBackupSnapshotFromJSON = LnrpcChanBackupSnapshotFromJSON;
function LnrpcChanBackupSnapshotFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'singleChanBackups': !runtime_1.exists(json, 'single_chan_backups') ? undefined : _1.LnrpcChannelBackupsFromJSON(json['single_chan_backups']),
        'multiChanBackup': !runtime_1.exists(json, 'multi_chan_backup') ? undefined : _1.LnrpcMultiChanBackupFromJSON(json['multi_chan_backup']),
    };
}
exports.LnrpcChanBackupSnapshotFromJSONTyped = LnrpcChanBackupSnapshotFromJSONTyped;
function LnrpcChanBackupSnapshotToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'single_chan_backups': _1.LnrpcChannelBackupsToJSON(value.singleChanBackups),
        'multi_chan_backup': _1.LnrpcMultiChanBackupToJSON(value.multiChanBackup),
    };
}
exports.LnrpcChanBackupSnapshotToJSON = LnrpcChanBackupSnapshotToJSON;
