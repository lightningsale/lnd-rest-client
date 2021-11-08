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
 * @interface LnrpcChannelPoint
 */
export interface LnrpcChannelPoint {
    /**
     * Txid of the funding transaction. When using REST, this field must be
     * encoded as base64.
     * @type {string}
     * @memberof LnrpcChannelPoint
     */
    fundingTxidBytes?: string;
    /**
     * Hex-encoded string representing the byte-reversed hash of the funding
     * transaction.
     * @type {string}
     * @memberof LnrpcChannelPoint
     */
    fundingTxidStr?: string;
    /**
     * 
     * @type {number}
     * @memberof LnrpcChannelPoint
     */
    outputIndex?: number;
}

export function LnrpcChannelPointFromJSON(json: any): LnrpcChannelPoint {
    return LnrpcChannelPointFromJSONTyped(json, false);
}

export function LnrpcChannelPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fundingTxidBytes': !exists(json, 'funding_txid_bytes') ? undefined : json['funding_txid_bytes'],
        'fundingTxidStr': !exists(json, 'funding_txid_str') ? undefined : json['funding_txid_str'],
        'outputIndex': !exists(json, 'output_index') ? undefined : json['output_index'],
    };
}

export function LnrpcChannelPointToJSON(value?: LnrpcChannelPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'funding_txid_bytes': value.fundingTxidBytes,
        'funding_txid_str': value.fundingTxidStr,
        'output_index': value.outputIndex,
    };
}
