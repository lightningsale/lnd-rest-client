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
    ForceClosedChannelAnchorState,
    ForceClosedChannelAnchorStateFromJSON,
    ForceClosedChannelAnchorStateFromJSONTyped,
    ForceClosedChannelAnchorStateToJSON,
    LnrpcPendingHTLC,
    LnrpcPendingHTLCFromJSON,
    LnrpcPendingHTLCFromJSONTyped,
    LnrpcPendingHTLCToJSON,
    PendingChannelsResponsePendingChannel,
    PendingChannelsResponsePendingChannelFromJSON,
    PendingChannelsResponsePendingChannelFromJSONTyped,
    PendingChannelsResponsePendingChannelToJSON,
} from './';

/**
 * 
 * @export
 * @interface PendingChannelsResponseForceClosedChannel
 */
export interface PendingChannelsResponseForceClosedChannel {
    /**
     * 
     * @type {PendingChannelsResponsePendingChannel}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    channel?: PendingChannelsResponsePendingChannel;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    closingTxid?: string;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    limboBalance?: string;
    /**
     * 
     * @type {number}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    maturityHeight?: number;
    /**
     * Remaining # of blocks until the commitment output can be swept.
     * Negative values indicate how many blocks have passed since becoming
     * mature.
     * @type {number}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    blocksTilMaturity?: number;
    /**
     * 
     * @type {string}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    recoveredBalance?: string;
    /**
     * 
     * @type {Array<LnrpcPendingHTLC>}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    pendingHtlcs?: Array<LnrpcPendingHTLC>;
    /**
     * 
     * @type {ForceClosedChannelAnchorState}
     * @memberof PendingChannelsResponseForceClosedChannel
     */
    anchor?: ForceClosedChannelAnchorState;
}

export function PendingChannelsResponseForceClosedChannelFromJSON(json: any): PendingChannelsResponseForceClosedChannel {
    return PendingChannelsResponseForceClosedChannelFromJSONTyped(json, false);
}

export function PendingChannelsResponseForceClosedChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingChannelsResponseForceClosedChannel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : PendingChannelsResponsePendingChannelFromJSON(json['channel']),
        'closingTxid': !exists(json, 'closing_txid') ? undefined : json['closing_txid'],
        'limboBalance': !exists(json, 'limbo_balance') ? undefined : json['limbo_balance'],
        'maturityHeight': !exists(json, 'maturity_height') ? undefined : json['maturity_height'],
        'blocksTilMaturity': !exists(json, 'blocks_til_maturity') ? undefined : json['blocks_til_maturity'],
        'recoveredBalance': !exists(json, 'recovered_balance') ? undefined : json['recovered_balance'],
        'pendingHtlcs': !exists(json, 'pending_htlcs') ? undefined : ((json['pending_htlcs'] as Array<any>).map(LnrpcPendingHTLCFromJSON)),
        'anchor': !exists(json, 'anchor') ? undefined : ForceClosedChannelAnchorStateFromJSON(json['anchor']),
    };
}

export function PendingChannelsResponseForceClosedChannelToJSON(value?: PendingChannelsResponseForceClosedChannel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': PendingChannelsResponsePendingChannelToJSON(value.channel),
        'closing_txid': value.closingTxid,
        'limbo_balance': value.limboBalance,
        'maturity_height': value.maturityHeight,
        'blocks_til_maturity': value.blocksTilMaturity,
        'recovered_balance': value.recoveredBalance,
        'pending_htlcs': value.pendingHtlcs === undefined ? undefined : ((value.pendingHtlcs as Array<any>).map(LnrpcPendingHTLCToJSON)),
        'anchor': ForceClosedChannelAnchorStateToJSON(value.anchor),
    };
}
