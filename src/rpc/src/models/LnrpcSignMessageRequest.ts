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
 * @interface LnrpcSignMessageRequest
 */
export interface LnrpcSignMessageRequest {
    /**
     * The message to be signed. When using REST, this field must be encoded as
     * base64.
     * @type {string}
     * @memberof LnrpcSignMessageRequest
     */
    msg?: string;
}

export function LnrpcSignMessageRequestFromJSON(json: any): LnrpcSignMessageRequest {
    return LnrpcSignMessageRequestFromJSONTyped(json, false);
}

export function LnrpcSignMessageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSignMessageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'msg': !exists(json, 'msg') ? undefined : json['msg'],
    };
}

export function LnrpcSignMessageRequestToJSON(value?: LnrpcSignMessageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'msg': value.msg,
    };
}
