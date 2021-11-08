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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LnrpcRoutingPolicy
 */
export interface LnrpcRoutingPolicy {
    /**
     * 
     * @type {number}
     * @memberof LnrpcRoutingPolicy
     */
    timeLockDelta?: number;
    /**
     * 
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    minHtlc?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    feeBaseMsat?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    feeRateMilliMsat?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LnrpcRoutingPolicy
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    maxHtlcMsat?: string;
    /**
     * 
     * @type {number}
     * @memberof LnrpcRoutingPolicy
     */
    lastUpdate?: number;
}

export function LnrpcRoutingPolicyFromJSON(json: any): LnrpcRoutingPolicy {
    return LnrpcRoutingPolicyFromJSONTyped(json, false);
}

export function LnrpcRoutingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcRoutingPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeLockDelta': !exists(json, 'time_lock_delta') ? undefined : json['time_lock_delta'],
        'minHtlc': !exists(json, 'min_htlc') ? undefined : json['min_htlc'],
        'feeBaseMsat': !exists(json, 'fee_base_msat') ? undefined : json['fee_base_msat'],
        'feeRateMilliMsat': !exists(json, 'fee_rate_milli_msat') ? undefined : json['fee_rate_milli_msat'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'maxHtlcMsat': !exists(json, 'max_htlc_msat') ? undefined : json['max_htlc_msat'],
        'lastUpdate': !exists(json, 'last_update') ? undefined : json['last_update'],
    };
}

export function LnrpcRoutingPolicyToJSON(value?: LnrpcRoutingPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time_lock_delta': value.timeLockDelta,
        'min_htlc': value.minHtlc,
        'fee_base_msat': value.feeBaseMsat,
        'fee_rate_milli_msat': value.feeRateMilliMsat,
        'disabled': value.disabled,
        'max_htlc_msat': value.maxHtlcMsat,
        'last_update': value.lastUpdate,
    };
}
