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
 * @interface LnrpcOutPoint
 */
export interface LnrpcOutPoint {
    /**
     * Raw bytes representing the transaction id.
     * @type {string}
     * @memberof LnrpcOutPoint
     */
    txidBytes?: string;
    /**
     * Reversed, hex-encoded string representing the transaction id.
     * @type {string}
     * @memberof LnrpcOutPoint
     */
    txidStr?: string;
    /**
     * The index of the output on the transaction.
     * @type {number}
     * @memberof LnrpcOutPoint
     */
    outputIndex?: number;
}

export function LnrpcOutPointFromJSON(json: any): LnrpcOutPoint {
    return LnrpcOutPointFromJSONTyped(json, false);
}

export function LnrpcOutPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcOutPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txidBytes': !exists(json, 'txid_bytes') ? undefined : json['txid_bytes'],
        'txidStr': !exists(json, 'txid_str') ? undefined : json['txid_str'],
        'outputIndex': !exists(json, 'output_index') ? undefined : json['output_index'],
    };
}

export function LnrpcOutPointToJSON(value?: LnrpcOutPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'txid_bytes': value.txidBytes,
        'txid_str': value.txidStr,
        'output_index': value.outputIndex,
    };
}

