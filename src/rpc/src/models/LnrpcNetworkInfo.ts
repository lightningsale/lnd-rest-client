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
 * @interface LnrpcNetworkInfo
 */
export interface LnrpcNetworkInfo {
    /**
     * 
     * @type {number}
     * @memberof LnrpcNetworkInfo
     */
    graphDiameter?: number;
    /**
     * 
     * @type {number}
     * @memberof LnrpcNetworkInfo
     */
    avgOutDegree?: number;
    /**
     * 
     * @type {number}
     * @memberof LnrpcNetworkInfo
     */
    maxOutDegree?: number;
    /**
     * 
     * @type {number}
     * @memberof LnrpcNetworkInfo
     */
    numNodes?: number;
    /**
     * 
     * @type {number}
     * @memberof LnrpcNetworkInfo
     */
    numChannels?: number;
    /**
     * 
     * @type {string}
     * @memberof LnrpcNetworkInfo
     */
    totalNetworkCapacity?: string;
    /**
     * 
     * @type {number}
     * @memberof LnrpcNetworkInfo
     */
    avgChannelSize?: number;
    /**
     * 
     * @type {string}
     * @memberof LnrpcNetworkInfo
     */
    minChannelSize?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcNetworkInfo
     */
    maxChannelSize?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcNetworkInfo
     */
    medianChannelSizeSat?: string;
    /**
     * The number of edges marked as zombies.
     * @type {string}
     * @memberof LnrpcNetworkInfo
     */
    numZombieChans?: string;
}

export function LnrpcNetworkInfoFromJSON(json: any): LnrpcNetworkInfo {
    return LnrpcNetworkInfoFromJSONTyped(json, false);
}

export function LnrpcNetworkInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcNetworkInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'graphDiameter': !exists(json, 'graph_diameter') ? undefined : json['graph_diameter'],
        'avgOutDegree': !exists(json, 'avg_out_degree') ? undefined : json['avg_out_degree'],
        'maxOutDegree': !exists(json, 'max_out_degree') ? undefined : json['max_out_degree'],
        'numNodes': !exists(json, 'num_nodes') ? undefined : json['num_nodes'],
        'numChannels': !exists(json, 'num_channels') ? undefined : json['num_channels'],
        'totalNetworkCapacity': !exists(json, 'total_network_capacity') ? undefined : json['total_network_capacity'],
        'avgChannelSize': !exists(json, 'avg_channel_size') ? undefined : json['avg_channel_size'],
        'minChannelSize': !exists(json, 'min_channel_size') ? undefined : json['min_channel_size'],
        'maxChannelSize': !exists(json, 'max_channel_size') ? undefined : json['max_channel_size'],
        'medianChannelSizeSat': !exists(json, 'median_channel_size_sat') ? undefined : json['median_channel_size_sat'],
        'numZombieChans': !exists(json, 'num_zombie_chans') ? undefined : json['num_zombie_chans'],
    };
}

export function LnrpcNetworkInfoToJSON(value?: LnrpcNetworkInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'graph_diameter': value.graphDiameter,
        'avg_out_degree': value.avgOutDegree,
        'max_out_degree': value.maxOutDegree,
        'num_nodes': value.numNodes,
        'num_channels': value.numChannels,
        'total_network_capacity': value.totalNetworkCapacity,
        'avg_channel_size': value.avgChannelSize,
        'min_channel_size': value.minChannelSize,
        'max_channel_size': value.maxChannelSize,
        'median_channel_size_sat': value.medianChannelSizeSat,
        'num_zombie_chans': value.numZombieChans,
    };
}

