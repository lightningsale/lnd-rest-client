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
    LnrpcUtxo,
    LnrpcUtxoFromJSON,
    LnrpcUtxoFromJSONTyped,
    LnrpcUtxoToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcListUnspentResponse
 */
export interface LnrpcListUnspentResponse {
    /**
     * 
     * @type {Array<LnrpcUtxo>}
     * @memberof LnrpcListUnspentResponse
     */
    utxos?: Array<LnrpcUtxo>;
}

export function LnrpcListUnspentResponseFromJSON(json: any): LnrpcListUnspentResponse {
    return LnrpcListUnspentResponseFromJSONTyped(json, false);
}

export function LnrpcListUnspentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcListUnspentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'utxos': !exists(json, 'utxos') ? undefined : ((json['utxos'] as Array<any>).map(LnrpcUtxoFromJSON)),
    };
}

export function LnrpcListUnspentResponseToJSON(value?: LnrpcListUnspentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'utxos': value.utxos === undefined ? undefined : ((value.utxos as Array<any>).map(LnrpcUtxoToJSON)),
    };
}

