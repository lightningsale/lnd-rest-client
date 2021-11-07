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

export class LnrpcHopHint {
    /**
    * The public key of the node at the start of the channel.
    */
    'nodeId'?: string;
    /**
    * The unique identifier of the channel.
    */
    'chanId'?: string;
    /**
    * The base fee of the channel denominated in millisatoshis.
    */
    'feeBaseMsat'?: number;
    /**
    * The fee rate of the channel for sending one satoshi across it denominated in millionths of a satoshi.
    */
    'feeProportionalMillionths'?: number;
    /**
    * The time-lock delta of the channel.
    */
    'cltvExpiryDelta'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "node_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "chanId",
            "baseName": "chan_id",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "feeBaseMsat",
            "baseName": "fee_base_msat",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "feeProportionalMillionths",
            "baseName": "fee_proportional_millionths",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "cltvExpiryDelta",
            "baseName": "cltv_expiry_delta",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcHopHint.attributeTypeMap;
    }

    public constructor() {
    }
}
