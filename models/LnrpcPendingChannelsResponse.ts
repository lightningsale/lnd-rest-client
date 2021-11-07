/**
 * rpc.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PendingChannelsResponseClosedChannel } from './PendingChannelsResponseClosedChannel';
import { PendingChannelsResponseForceClosedChannel } from './PendingChannelsResponseForceClosedChannel';
import { PendingChannelsResponsePendingOpenChannel } from './PendingChannelsResponsePendingOpenChannel';
import { PendingChannelsResponseWaitingCloseChannel } from './PendingChannelsResponseWaitingCloseChannel';
import { HttpFile } from '../http/http';

export class LnrpcPendingChannelsResponse {
    'totalLimboBalance'?: string;
    'pendingOpenChannels'?: Array<PendingChannelsResponsePendingOpenChannel>;
    /**
    * Deprecated: Channels pending closing previously contained cooperatively closed channels with a single confirmation. These channels are now considered closed from the time we see them on chain.
    */
    'pendingClosingChannels'?: Array<PendingChannelsResponseClosedChannel>;
    'pendingForceClosingChannels'?: Array<PendingChannelsResponseForceClosedChannel>;
    'waitingCloseChannels'?: Array<PendingChannelsResponseWaitingCloseChannel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalLimboBalance",
            "baseName": "total_limbo_balance",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "pendingOpenChannels",
            "baseName": "pending_open_channels",
            "type": "Array<PendingChannelsResponsePendingOpenChannel>",
            "format": ""
        },
        {
            "name": "pendingClosingChannels",
            "baseName": "pending_closing_channels",
            "type": "Array<PendingChannelsResponseClosedChannel>",
            "format": ""
        },
        {
            "name": "pendingForceClosingChannels",
            "baseName": "pending_force_closing_channels",
            "type": "Array<PendingChannelsResponseForceClosedChannel>",
            "format": ""
        },
        {
            "name": "waitingCloseChannels",
            "baseName": "waiting_close_channels",
            "type": "Array<PendingChannelsResponseWaitingCloseChannel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcPendingChannelsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
