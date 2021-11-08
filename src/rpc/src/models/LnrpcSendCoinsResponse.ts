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
 * @interface LnrpcSendCoinsResponse
 */
export interface LnrpcSendCoinsResponse {
    /**
     * 
     * @type {string}
     * @memberof LnrpcSendCoinsResponse
     */
    txid?: string;
}

export function LnrpcSendCoinsResponseFromJSON(json: any): LnrpcSendCoinsResponse {
    return LnrpcSendCoinsResponseFromJSONTyped(json, false);
}

export function LnrpcSendCoinsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSendCoinsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txid': !exists(json, 'txid') ? undefined : json['txid'],
    };
}

export function LnrpcSendCoinsResponseToJSON(value?: LnrpcSendCoinsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txid': value.txid,
    };
}
