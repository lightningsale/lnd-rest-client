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
    PendingChannelsResponseCommitments,
    PendingChannelsResponseCommitmentsFromJSON,
    PendingChannelsResponseCommitmentsFromJSONTyped,
    PendingChannelsResponseCommitmentsToJSON,
    PendingChannelsResponsePendingChannel,
    PendingChannelsResponsePendingChannelFromJSON,
    PendingChannelsResponsePendingChannelFromJSONTyped,
    PendingChannelsResponsePendingChannelToJSON,
} from './';

/**
 * 
 * @export
 * @interface PendingChannelsResponseWaitingCloseChannel
 */
export interface PendingChannelsResponseWaitingCloseChannel {
    /**
     * 
     * @type {PendingChannelsResponsePendingChannel}
     * @memberof PendingChannelsResponseWaitingCloseChannel
     */
    channel?: PendingChannelsResponsePendingChannel;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponseWaitingCloseChannel
     */
    limboBalance?: string;
    /**
     * 
     * @type {PendingChannelsResponseCommitments}
     * @memberof PendingChannelsResponseWaitingCloseChannel
     */
    commitments?: PendingChannelsResponseCommitments;
}

export function PendingChannelsResponseWaitingCloseChannelFromJSON(json: any): PendingChannelsResponseWaitingCloseChannel {
    return PendingChannelsResponseWaitingCloseChannelFromJSONTyped(json, false);
}

export function PendingChannelsResponseWaitingCloseChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingChannelsResponseWaitingCloseChannel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : PendingChannelsResponsePendingChannelFromJSON(json['channel']),
        'limboBalance': !exists(json, 'limbo_balance') ? undefined : json['limbo_balance'],
        'commitments': !exists(json, 'commitments') ? undefined : PendingChannelsResponseCommitmentsFromJSON(json['commitments']),
    };
}

export function PendingChannelsResponseWaitingCloseChannelToJSON(value?: PendingChannelsResponseWaitingCloseChannel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': PendingChannelsResponsePendingChannelToJSON(value.channel),
        'limbo_balance': value.limboBalance,
        'commitments': PendingChannelsResponseCommitmentsToJSON(value.commitments),
    };
}

