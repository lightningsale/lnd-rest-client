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
import {
    LnrpcFeature,
    LnrpcFeatureFromJSON,
    LnrpcFeatureFromJSONTyped,
    LnrpcFeatureToJSON,
    LnrpcRouteHint,
    LnrpcRouteHintFromJSON,
    LnrpcRouteHintFromJSONTyped,
    LnrpcRouteHintToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcPayReq
 */
export interface LnrpcPayReq {
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    destination?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    paymentHash?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    numSatoshis?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    timestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    expiry?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    descriptionHash?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    fallbackAddr?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    cltvExpiry?: string;
    /**
     * 
     * @type {Array<LnrpcRouteHint>}
     * @memberof LnrpcPayReq
     */
    routeHints?: Array<LnrpcRouteHint>;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    paymentAddr?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayReq
     */
    numMsat?: string;
    /**
     * 
     * @type {{ [key: string]: LnrpcFeature; }}
     * @memberof LnrpcPayReq
     */
    features?: { [key: string]: LnrpcFeature; };
}

export function LnrpcPayReqFromJSON(json: any): LnrpcPayReq {
    return LnrpcPayReqFromJSONTyped(json, false);
}

export function LnrpcPayReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcPayReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destination': !exists(json, 'destination') ? undefined : json['destination'],
        'paymentHash': !exists(json, 'payment_hash') ? undefined : json['payment_hash'],
        'numSatoshis': !exists(json, 'num_satoshis') ? undefined : json['num_satoshis'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'expiry': !exists(json, 'expiry') ? undefined : json['expiry'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'descriptionHash': !exists(json, 'description_hash') ? undefined : json['description_hash'],
        'fallbackAddr': !exists(json, 'fallback_addr') ? undefined : json['fallback_addr'],
        'cltvExpiry': !exists(json, 'cltv_expiry') ? undefined : json['cltv_expiry'],
        'routeHints': !exists(json, 'route_hints') ? undefined : ((json['route_hints'] as Array<any>).map(LnrpcRouteHintFromJSON)),
        'paymentAddr': !exists(json, 'payment_addr') ? undefined : json['payment_addr'],
        'numMsat': !exists(json, 'num_msat') ? undefined : json['num_msat'],
        'features': !exists(json, 'features') ? undefined : (mapValues(json['features'], LnrpcFeatureFromJSON)),
    };
}

export function LnrpcPayReqToJSON(value?: LnrpcPayReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination': value.destination,
        'payment_hash': value.paymentHash,
        'num_satoshis': value.numSatoshis,
        'timestamp': value.timestamp,
        'expiry': value.expiry,
        'description': value.description,
        'description_hash': value.descriptionHash,
        'fallback_addr': value.fallbackAddr,
        'cltv_expiry': value.cltvExpiry,
        'route_hints': value.routeHints === undefined ? undefined : ((value.routeHints as Array<any>).map(LnrpcRouteHintToJSON)),
        'payment_addr': value.paymentAddr,
        'num_msat': value.numMsat,
        'features': value.features === undefined ? undefined : (mapValues(value.features, LnrpcFeatureToJSON)),
    };
}

