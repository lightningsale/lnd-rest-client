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
 * @interface LnrpcFeature
 */
export interface LnrpcFeature {
    /**
     * 
     * @type {string}
     * @memberof LnrpcFeature
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LnrpcFeature
     */
    isRequired?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LnrpcFeature
     */
    isKnown?: boolean;
}

export function LnrpcFeatureFromJSON(json: any): LnrpcFeature {
    return LnrpcFeatureFromJSONTyped(json, false);
}

export function LnrpcFeatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcFeature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isRequired': !exists(json, 'is_required') ? undefined : json['is_required'],
        'isKnown': !exists(json, 'is_known') ? undefined : json['is_known'],
    };
}

export function LnrpcFeatureToJSON(value?: LnrpcFeature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'is_required': value.isRequired,
        'is_known': value.isKnown,
    };
}

