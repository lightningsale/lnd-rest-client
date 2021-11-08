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
    LnrpcCommitmentType,
    LnrpcCommitmentTypeFromJSON,
    LnrpcCommitmentTypeFromJSONTyped,
    LnrpcCommitmentTypeToJSON,
    LnrpcInitiator,
    LnrpcInitiatorFromJSON,
    LnrpcInitiatorFromJSONTyped,
    LnrpcInitiatorToJSON,
} from './';

/**
 * 
 * @export
 * @interface PendingChannelsResponsePendingChannel
 */
export interface PendingChannelsResponsePendingChannel {
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    remoteNodePub?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    channelPoint?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    capacity?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    localBalance?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    remoteBalance?: string;
    /**
     * The minimum satoshis this node is required to reserve in its
     * balance.
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    localChanReserveSat?: string;
    /**
     * The minimum satoshis the other node is required to reserve in its
     * balance.
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    remoteChanReserveSat?: string;
    /**
     * 
     * @type {LnrpcInitiator}
     * @memberof PendingChannelsResponsePendingChannel
     */
    initiator?: LnrpcInitiator;
    /**
     * 
     * @type {LnrpcCommitmentType}
     * @memberof PendingChannelsResponsePendingChannel
     */
    commitmentType?: LnrpcCommitmentType;
}

export function PendingChannelsResponsePendingChannelFromJSON(json: any): PendingChannelsResponsePendingChannel {
    return PendingChannelsResponsePendingChannelFromJSONTyped(json, false);
}

export function PendingChannelsResponsePendingChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingChannelsResponsePendingChannel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'remoteNodePub': !exists(json, 'remote_node_pub') ? undefined : json['remote_node_pub'],
        'channelPoint': !exists(json, 'channel_point') ? undefined : json['channel_point'],
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
        'localBalance': !exists(json, 'local_balance') ? undefined : json['local_balance'],
        'remoteBalance': !exists(json, 'remote_balance') ? undefined : json['remote_balance'],
        'localChanReserveSat': !exists(json, 'local_chan_reserve_sat') ? undefined : json['local_chan_reserve_sat'],
        'remoteChanReserveSat': !exists(json, 'remote_chan_reserve_sat') ? undefined : json['remote_chan_reserve_sat'],
        'initiator': !exists(json, 'initiator') ? undefined : LnrpcInitiatorFromJSON(json['initiator']),
        'commitmentType': !exists(json, 'commitment_type') ? undefined : LnrpcCommitmentTypeFromJSON(json['commitment_type']),
    };
}

export function PendingChannelsResponsePendingChannelToJSON(value?: PendingChannelsResponsePendingChannel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'remote_node_pub': value.remoteNodePub,
        'channel_point': value.channelPoint,
        'capacity': value.capacity,
        'local_balance': value.localBalance,
        'remote_balance': value.remoteBalance,
        'local_chan_reserve_sat': value.localChanReserveSat,
        'remote_chan_reserve_sat': value.remoteChanReserveSat,
        'initiator': LnrpcInitiatorToJSON(value.initiator),
        'commitment_type': LnrpcCommitmentTypeToJSON(value.commitmentType),
    };
}

