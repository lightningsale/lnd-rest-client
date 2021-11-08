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
/**
 *
 * @export
 * @enum {string}
 */
var LnrpcFeatureBit;
(function (LnrpcFeatureBit) {
    LnrpcFeatureBit["DatalossProtectReq"] = "DATALOSS_PROTECT_REQ";
    LnrpcFeatureBit["DatalossProtectOpt"] = "DATALOSS_PROTECT_OPT";
    LnrpcFeatureBit["InitialRouingSync"] = "INITIAL_ROUING_SYNC";
    LnrpcFeatureBit["UpfrontShutdownScriptReq"] = "UPFRONT_SHUTDOWN_SCRIPT_REQ";
    LnrpcFeatureBit["UpfrontShutdownScriptOpt"] = "UPFRONT_SHUTDOWN_SCRIPT_OPT";
    LnrpcFeatureBit["GossipQueriesReq"] = "GOSSIP_QUERIES_REQ";
    LnrpcFeatureBit["GossipQueriesOpt"] = "GOSSIP_QUERIES_OPT";
    LnrpcFeatureBit["TlvOnionReq"] = "TLV_ONION_REQ";
    LnrpcFeatureBit["TlvOnionOpt"] = "TLV_ONION_OPT";
    LnrpcFeatureBit["ExtGossipQueriesReq"] = "EXT_GOSSIP_QUERIES_REQ";
    LnrpcFeatureBit["ExtGossipQueriesOpt"] = "EXT_GOSSIP_QUERIES_OPT";
    LnrpcFeatureBit["StaticRemoteKeyReq"] = "STATIC_REMOTE_KEY_REQ";
    LnrpcFeatureBit["StaticRemoteKeyOpt"] = "STATIC_REMOTE_KEY_OPT";
    LnrpcFeatureBit["PaymentAddrReq"] = "PAYMENT_ADDR_REQ";
    LnrpcFeatureBit["PaymentAddrOpt"] = "PAYMENT_ADDR_OPT";
    LnrpcFeatureBit["MppReq"] = "MPP_REQ";
    LnrpcFeatureBit["MppOpt"] = "MPP_OPT";
    LnrpcFeatureBit["WumboChannelsReq"] = "WUMBO_CHANNELS_REQ";
    LnrpcFeatureBit["WumboChannelsOpt"] = "WUMBO_CHANNELS_OPT";
    LnrpcFeatureBit["AnchorsReq"] = "ANCHORS_REQ";
    LnrpcFeatureBit["AnchorsOpt"] = "ANCHORS_OPT";
    LnrpcFeatureBit["AnchorsZeroFeeHtlcReq"] = "ANCHORS_ZERO_FEE_HTLC_REQ";
    LnrpcFeatureBit["AnchorsZeroFeeHtlcOpt"] = "ANCHORS_ZERO_FEE_HTLC_OPT";
    LnrpcFeatureBit["AmpReq"] = "AMP_REQ";
    LnrpcFeatureBit["AmpOpt"] = "AMP_OPT";
})(LnrpcFeatureBit = exports.LnrpcFeatureBit || (exports.LnrpcFeatureBit = {}));
function LnrpcFeatureBitFromJSON(json) {
    return LnrpcFeatureBitFromJSONTyped(json, false);
}
exports.LnrpcFeatureBitFromJSON = LnrpcFeatureBitFromJSON;
function LnrpcFeatureBitFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LnrpcFeatureBitFromJSONTyped = LnrpcFeatureBitFromJSONTyped;
function LnrpcFeatureBitToJSON(value) {
    return value;
}
exports.LnrpcFeatureBitToJSON = LnrpcFeatureBitToJSON;