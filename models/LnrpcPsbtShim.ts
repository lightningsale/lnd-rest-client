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

import { HttpFile } from '../http/http';

export class LnrpcPsbtShim {
    /**
    * A unique identifier of 32 random bytes that will be used as the pending channel ID to identify the PSBT state machine when interacting with it and on the wire protocol to initiate the funding request.
    */
    'pendingChanId'?: string;
    /**
    * An optional base PSBT the new channel output will be added to. If this is non-empty, it must be a binary serialized PSBT.
    */
    'basePsbt'?: string;
    /**
    * If a channel should be part of a batch (multiple channel openings in one transaction), it can be dangerous if the whole batch transaction is published too early before all channel opening negotiations are completed. This flag prevents this particular channel from broadcasting the transaction after the negotiation with the remote peer. In a batch of channel openings this flag should be set to true for every channel but the very last.
    */
    'noPublish'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pendingChanId",
            "baseName": "pending_chan_id",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "basePsbt",
            "baseName": "base_psbt",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "noPublish",
            "baseName": "no_publish",
            "type": "boolean",
            "format": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcPsbtShim.attributeTypeMap;
    }

    public constructor() {
    }
}

