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
    LnrpcRoute,
    LnrpcRouteFromJSON,
    LnrpcRouteFromJSONTyped,
    LnrpcRouteToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcSendResponse
 */
export interface LnrpcSendResponse {
    /**
     * 
     * @type {string}
     * @memberof LnrpcSendResponse
     */
    paymentError?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcSendResponse
     */
    paymentPreimage?: string;
    /**
     * 
     * @type {LnrpcRoute}
     * @memberof LnrpcSendResponse
     */
    paymentRoute?: LnrpcRoute;
    /**
     * 
     * @type {string}
     * @memberof LnrpcSendResponse
     */
    paymentHash?: string;
}

export function LnrpcSendResponseFromJSON(json: any): LnrpcSendResponse {
    return LnrpcSendResponseFromJSONTyped(json, false);
}

export function LnrpcSendResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSendResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentError': !exists(json, 'payment_error') ? undefined : json['payment_error'],
        'paymentPreimage': !exists(json, 'payment_preimage') ? undefined : json['payment_preimage'],
        'paymentRoute': !exists(json, 'payment_route') ? undefined : LnrpcRouteFromJSON(json['payment_route']),
        'paymentHash': !exists(json, 'payment_hash') ? undefined : json['payment_hash'],
    };
}

export function LnrpcSendResponseToJSON(value?: LnrpcSendResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_error': value.paymentError,
        'payment_preimage': value.paymentPreimage,
        'payment_route': LnrpcRouteToJSON(value.paymentRoute),
        'payment_hash': value.paymentHash,
    };
}

