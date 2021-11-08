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
 * @interface LnrpcMacaroonPermission
 */
export interface LnrpcMacaroonPermission {
    /**
     * The entity a permission grants access to.
     * @type {string}
     * @memberof LnrpcMacaroonPermission
     */
    entity?: string;
    /**
     * The action that is granted.
     * @type {string}
     * @memberof LnrpcMacaroonPermission
     */
    action?: string;
}

export function LnrpcMacaroonPermissionFromJSON(json: any): LnrpcMacaroonPermission {
    return LnrpcMacaroonPermissionFromJSONTyped(json, false);
}

export function LnrpcMacaroonPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcMacaroonPermission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'action': !exists(json, 'action') ? undefined : json['action'],
    };
}

export function LnrpcMacaroonPermissionToJSON(value?: LnrpcMacaroonPermission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': value.entity,
        'action': value.action,
    };
}
