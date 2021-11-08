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
    LnrpcRoutingPolicy,
    LnrpcRoutingPolicyFromJSON,
    LnrpcRoutingPolicyFromJSONTyped,
    LnrpcRoutingPolicyToJSON,
} from './';

/**
 * A fully authenticated channel along with all its unique attributes.
 * Once an authenticated channel announcement has been processed on the network,
 * then an instance of ChannelEdgeInfo encapsulating the channels attributes is
 * stored. The other portions relevant to routing policy of a channel are stored
 * within a ChannelEdgePolicy for each direction of the channel.
 * @export
 * @interface LnrpcChannelEdge
 */
export interface LnrpcChannelEdge {
    /**
     * The unique channel ID for the channel. The first 3 bytes are the block
     * height, the next 3 the index within the block, and the last 2 bytes are the
     * output index for the channel.
     * @type {string}
     * @memberof LnrpcChannelEdge
     */
    channelId?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdge
     */
    chanPoint?: string;
    /**
     * 
     * @type {number}
     * @memberof LnrpcChannelEdge
     */
    lastUpdate?: number;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdge
     */
    node1Pub?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdge
     */
    node2Pub?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelEdge
     */
    capacity?: string;
    /**
     * 
     * @type {LnrpcRoutingPolicy}
     * @memberof LnrpcChannelEdge
     */
    node1Policy?: LnrpcRoutingPolicy;
    /**
     * 
     * @type {LnrpcRoutingPolicy}
     * @memberof LnrpcChannelEdge
     */
    node2Policy?: LnrpcRoutingPolicy;
}

export function LnrpcChannelEdgeFromJSON(json: any): LnrpcChannelEdge {
    return LnrpcChannelEdgeFromJSONTyped(json, false);
}

export function LnrpcChannelEdgeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelEdge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': !exists(json, 'channel_id') ? undefined : json['channel_id'],
        'chanPoint': !exists(json, 'chan_point') ? undefined : json['chan_point'],
        'lastUpdate': !exists(json, 'last_update') ? undefined : json['last_update'],
        'node1Pub': !exists(json, 'node1_pub') ? undefined : json['node1_pub'],
        'node2Pub': !exists(json, 'node2_pub') ? undefined : json['node2_pub'],
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
        'node1Policy': !exists(json, 'node1_policy') ? undefined : LnrpcRoutingPolicyFromJSON(json['node1_policy']),
        'node2Policy': !exists(json, 'node2_policy') ? undefined : LnrpcRoutingPolicyFromJSON(json['node2_policy']),
    };
}

export function LnrpcChannelEdgeToJSON(value?: LnrpcChannelEdge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel_id': value.channelId,
        'chan_point': value.chanPoint,
        'last_update': value.lastUpdate,
        'node1_pub': value.node1Pub,
        'node2_pub': value.node2Pub,
        'capacity': value.capacity,
        'node1_policy': LnrpcRoutingPolicyToJSON(value.node1Policy),
        'node2_policy': LnrpcRoutingPolicyToJSON(value.node2Policy),
    };
}

