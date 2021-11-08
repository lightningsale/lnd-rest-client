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
    LnrpcPeer,
    LnrpcPeerFromJSON,
    LnrpcPeerFromJSONTyped,
    LnrpcPeerToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcListPeersResponse
 */
export interface LnrpcListPeersResponse {
    /**
     * 
     * @type {Array<LnrpcPeer>}
     * @memberof LnrpcListPeersResponse
     */
    peers?: Array<LnrpcPeer>;
}

export function LnrpcListPeersResponseFromJSON(json: any): LnrpcListPeersResponse {
    return LnrpcListPeersResponseFromJSONTyped(json, false);
}

export function LnrpcListPeersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcListPeersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'peers': !exists(json, 'peers') ? undefined : ((json['peers'] as Array<any>).map(LnrpcPeerFromJSON)),
    };
}

export function LnrpcListPeersResponseToJSON(value?: LnrpcListPeersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'peers': value.peers === undefined ? undefined : ((value.peers as Array<any>).map(LnrpcPeerToJSON)),
    };
}

