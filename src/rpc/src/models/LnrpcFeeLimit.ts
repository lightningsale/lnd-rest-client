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
 * @interface LnrpcFeeLimit
 */
export interface LnrpcFeeLimit {
    /**
     * The fee limit expressed as a fixed amount of satoshis.
     * 
     * The fields fixed and fixed_msat are mutually exclusive.
     * @type {string}
     * @memberof LnrpcFeeLimit
     */
    fixed?: string;
    /**
     * The fee limit expressed as a fixed amount of millisatoshis.
     * 
     * The fields fixed and fixed_msat are mutually exclusive.
     * @type {string}
     * @memberof LnrpcFeeLimit
     */
    fixedMsat?: string;
    /**
     * The fee limit expressed as a percentage of the payment amount.
     * @type {string}
     * @memberof LnrpcFeeLimit
     */
    percent?: string;
}

export function LnrpcFeeLimitFromJSON(json: any): LnrpcFeeLimit {
    return LnrpcFeeLimitFromJSONTyped(json, false);
}

export function LnrpcFeeLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcFeeLimit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fixed': !exists(json, 'fixed') ? undefined : json['fixed'],
        'fixedMsat': !exists(json, 'fixed_msat') ? undefined : json['fixed_msat'],
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
    };
}

export function LnrpcFeeLimitToJSON(value?: LnrpcFeeLimit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fixed': value.fixed,
        'fixed_msat': value.fixedMsat,
        'percent': value.percent,
    };
}

