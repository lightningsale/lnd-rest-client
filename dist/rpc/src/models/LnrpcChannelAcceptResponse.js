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
function LnrpcChannelAcceptResponseFromJSON(json) {
    return LnrpcChannelAcceptResponseFromJSONTyped(json, false);
}
exports.LnrpcChannelAcceptResponseFromJSON = LnrpcChannelAcceptResponseFromJSON;
function LnrpcChannelAcceptResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accept': !runtime_1.exists(json, 'accept') ? undefined : json['accept'],
        'pendingChanId': !runtime_1.exists(json, 'pending_chan_id') ? undefined : json['pending_chan_id'],
        'error': !runtime_1.exists(json, 'error') ? undefined : json['error'],
        'upfrontShutdown': !runtime_1.exists(json, 'upfront_shutdown') ? undefined : json['upfront_shutdown'],
        'csvDelay': !runtime_1.exists(json, 'csv_delay') ? undefined : json['csv_delay'],
        'reserveSat': !runtime_1.exists(json, 'reserve_sat') ? undefined : json['reserve_sat'],
        'inFlightMaxMsat': !runtime_1.exists(json, 'in_flight_max_msat') ? undefined : json['in_flight_max_msat'],
        'maxHtlcCount': !runtime_1.exists(json, 'max_htlc_count') ? undefined : json['max_htlc_count'],
        'minHtlcIn': !runtime_1.exists(json, 'min_htlc_in') ? undefined : json['min_htlc_in'],
        'minAcceptDepth': !runtime_1.exists(json, 'min_accept_depth') ? undefined : json['min_accept_depth'],
    };
}
exports.LnrpcChannelAcceptResponseFromJSONTyped = LnrpcChannelAcceptResponseFromJSONTyped;
function LnrpcChannelAcceptResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accept': value.accept,
        'pending_chan_id': value.pendingChanId,
        'error': value.error,
        'upfront_shutdown': value.upfrontShutdown,
        'csv_delay': value.csvDelay,
        'reserve_sat': value.reserveSat,
        'in_flight_max_msat': value.inFlightMaxMsat,
        'max_htlc_count': value.maxHtlcCount,
        'min_htlc_in': value.minHtlcIn,
        'min_accept_depth': value.minAcceptDepth,
    };
}
exports.LnrpcChannelAcceptResponseToJSON = LnrpcChannelAcceptResponseToJSON;
