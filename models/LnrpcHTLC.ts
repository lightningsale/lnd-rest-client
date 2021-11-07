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

export class LnrpcHTLC {
    'incoming'?: boolean;
    'amount'?: string;
    'hashLock'?: string;
    'expirationHeight'?: number;
    /**
    * Index identifying the htlc on the channel.
    */
    'htlcIndex'?: string;
    /**
    * If this HTLC is involved in a forwarding operation, this field indicates the forwarding channel. For an outgoing htlc, it is the incoming channel. For an incoming htlc, it is the outgoing channel. When the htlc originates from this node or this node is the final destination, forwarding_channel will be zero. The forwarding channel will also be zero for htlcs that need to be forwarded but don't have a forwarding decision persisted yet.
    */
    'forwardingChannel'?: string;
    /**
    * Index identifying the htlc on the forwarding channel.
    */
    'forwardingHtlcIndex'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "incoming",
            "baseName": "incoming",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "hashLock",
            "baseName": "hash_lock",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "expirationHeight",
            "baseName": "expiration_height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "htlcIndex",
            "baseName": "htlc_index",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "forwardingChannel",
            "baseName": "forwarding_channel",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "forwardingHtlcIndex",
            "baseName": "forwarding_htlc_index",
            "type": "string",
            "format": "uint64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcHTLC.attributeTypeMap;
    }

    public constructor() {
    }
}

