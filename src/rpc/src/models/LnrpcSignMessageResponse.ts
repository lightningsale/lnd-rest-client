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
 * @interface LnrpcSignMessageResponse
 */
export interface LnrpcSignMessageResponse {
    /**
     * 
     * @type {string}
     * @memberof LnrpcSignMessageResponse
     */
    signature?: string;
}

export function LnrpcSignMessageResponseFromJSON(json: any): LnrpcSignMessageResponse {
    return LnrpcSignMessageResponseFromJSONTyped(json, false);
}

export function LnrpcSignMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSignMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signature': !exists(json, 'signature') ? undefined : json['signature'],
    };
}

export function LnrpcSignMessageResponseToJSON(value?: LnrpcSignMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signature': value.signature,
    };
}
