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
function LnrpcRestoreChanBackupRequestFromJSON(json) {
    return LnrpcRestoreChanBackupRequestFromJSONTyped(json, false);
}
exports.LnrpcRestoreChanBackupRequestFromJSON = LnrpcRestoreChanBackupRequestFromJSON;
function LnrpcRestoreChanBackupRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chanBackups': !runtime_1.exists(json, 'chan_backups') ? undefined : _1.LnrpcChannelBackupsFromJSON(json['chan_backups']),
        'multiChanBackup': !runtime_1.exists(json, 'multi_chan_backup') ? undefined : json['multi_chan_backup'],
    };
}
exports.LnrpcRestoreChanBackupRequestFromJSONTyped = LnrpcRestoreChanBackupRequestFromJSONTyped;
function LnrpcRestoreChanBackupRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chan_backups': _1.LnrpcChannelBackupsToJSON(value.chanBackups),
        'multi_chan_backup': value.multiChanBackup,
    };
}
exports.LnrpcRestoreChanBackupRequestToJSON = LnrpcRestoreChanBackupRequestToJSON;