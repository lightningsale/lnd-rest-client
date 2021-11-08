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
 * @interface LnrpcDeleteMacaroonIDResponse
 */
export interface LnrpcDeleteMacaroonIDResponse {
    /**
     * A boolean indicates that the deletion is successful.
     * @type {boolean}
     * @memberof LnrpcDeleteMacaroonIDResponse
     */
    deleted?: boolean;
}

export function LnrpcDeleteMacaroonIDResponseFromJSON(json: any): LnrpcDeleteMacaroonIDResponse {
    return LnrpcDeleteMacaroonIDResponseFromJSONTyped(json, false);
}

export function LnrpcDeleteMacaroonIDResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcDeleteMacaroonIDResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
    };
}

export function LnrpcDeleteMacaroonIDResponseToJSON(value?: LnrpcDeleteMacaroonIDResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleted': value.deleted,
    };
}
