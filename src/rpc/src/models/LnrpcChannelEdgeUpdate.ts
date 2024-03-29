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
    LnrpcChannelPoint,
    LnrpcChannelPointFromJSON,
    LnrpcChannelPointFromJSONTyped,
    LnrpcChannelPointToJSON,
    LnrpcRoutingPolicy,
    LnrpcRoutingPolicyFromJSON,
    LnrpcRoutingPolicyFromJSONTyped,
    LnrpcRoutingPolicyToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcChannelEdgeUpdate
 */
export interface LnrpcChannelEdgeUpdate {
    /**
     * The unique channel ID for the channel. The first 3 bytes are the block
     * height, the next 3 the index within the block, and the last 2 bytes are the
     * output index for the channel.
     * @type {string}
     * @memberof LnrpcChannelEdgeUpdate
     */
    chanId?: string;
    /**
     * 
     * @type {LnrpcChannelPoint}
     * @memberof LnrpcChannelEdgeUpdate
     */
    chanPoint?: LnrpcChannelPoint;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdgeUpdate
     */
    capacity?: string;
    /**
     * 
     * @type {LnrpcRoutingPolicy}
     * @memberof LnrpcChannelEdgeUpdate
     */
    routingPolicy?: LnrpcRoutingPolicy;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdgeUpdate
     */
    advertisingNode?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdgeUpdate
     */
    connectingNode?: string;
}

export function LnrpcChannelEdgeUpdateFromJSON(json: any): LnrpcChannelEdgeUpdate {
    return LnrpcChannelEdgeUpdateFromJSONTyped(json, false);
}

export function LnrpcChannelEdgeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelEdgeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chanId': !exists(json, 'chan_id') ? undefined : json['chan_id'],
        'chanPoint': !exists(json, 'chan_point') ? undefined : LnrpcChannelPointFromJSON(json['chan_point']),
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
        'routingPolicy': !exists(json, 'routing_policy') ? undefined : LnrpcRoutingPolicyFromJSON(json['routing_policy']),
        'advertisingNode': !exists(json, 'advertising_node') ? undefined : json['advertising_node'],
        'connectingNode': !exists(json, 'connecting_node') ? undefined : json['connecting_node'],
    };
}

export function LnrpcChannelEdgeUpdateToJSON(value?: LnrpcChannelEdgeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chan_id': value.chanId,
        'chan_point': LnrpcChannelPointToJSON(value.chanPoint),
        'capacity': value.capacity,
        'routing_policy': LnrpcRoutingPolicyToJSON(value.routingPolicy),
        'advertising_node': value.advertisingNode,
        'connecting_node': value.connectingNode,
    };
}

