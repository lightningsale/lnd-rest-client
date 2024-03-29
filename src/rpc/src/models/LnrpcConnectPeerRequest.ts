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
    LnrpcLightningAddress,
    LnrpcLightningAddressFromJSON,
    LnrpcLightningAddressFromJSONTyped,
    LnrpcLightningAddressToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcConnectPeerRequest
 */
export interface LnrpcConnectPeerRequest {
    /**
     * 
     * @type {LnrpcLightningAddress}
     * @memberof LnrpcConnectPeerRequest
     */
    addr?: LnrpcLightningAddress;
    /**
     * If set, the daemon will attempt to persistently connect to the target
     * peer. Otherwise, the call will be synchronous.
     * @type {boolean}
     * @memberof LnrpcConnectPeerRequest
     */
    perm?: boolean;
    /**
     * The connection timeout value (in seconds) for this request. It won't affect
     * other requests.
     * @type {string}
     * @memberof LnrpcConnectPeerRequest
     */
    timeout?: string;
}

export function LnrpcConnectPeerRequestFromJSON(json: any): LnrpcConnectPeerRequest {
    return LnrpcConnectPeerRequestFromJSONTyped(json, false);
}

export function LnrpcConnectPeerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcConnectPeerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addr': !exists(json, 'addr') ? undefined : LnrpcLightningAddressFromJSON(json['addr']),
        'perm': !exists(json, 'perm') ? undefined : json['perm'],
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
    };
}

export function LnrpcConnectPeerRequestToJSON(value?: LnrpcConnectPeerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addr': LnrpcLightningAddressToJSON(value.addr),
        'perm': value.perm,
        'timeout': value.timeout,
    };
}

