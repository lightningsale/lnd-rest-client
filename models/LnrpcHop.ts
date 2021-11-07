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

import { LnrpcAMPRecord } from './LnrpcAMPRecord';
import { LnrpcMPPRecord } from './LnrpcMPPRecord';
import { HttpFile } from '../http/http';

export class LnrpcHop {
    /**
    * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
    */
    'chanId'?: string;
    'chanCapacity'?: string;
    'amtToForward'?: string;
    'fee'?: string;
    'expiry'?: number;
    'amtToForwardMsat'?: string;
    'feeMsat'?: string;
    /**
    * An optional public key of the hop. If the public key is given, the payment can be executed without relying on a copy of the channel graph.
    */
    'pubKey'?: string;
    /**
    * If set to true, then this hop will be encoded using the new variable length TLV format. Note that if any custom tlv_records below are specified, then this field MUST be set to true for them to be encoded properly.
    */
    'tlvPayload'?: boolean;
    'mppRecord'?: LnrpcMPPRecord;
    'ampRecord'?: LnrpcAMPRecord;
    /**
    * An optional set of key-value TLV records. This is useful within the context of the SendToRoute call as it allows callers to specify arbitrary K-V pairs to drop off at each hop within the onion.
    */
    'customRecords'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chanId",
            "baseName": "chan_id",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "chanCapacity",
            "baseName": "chan_capacity",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "amtToForward",
            "baseName": "amt_to_forward",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "expiry",
            "baseName": "expiry",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "amtToForwardMsat",
            "baseName": "amt_to_forward_msat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "feeMsat",
            "baseName": "fee_msat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "pubKey",
            "baseName": "pub_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "tlvPayload",
            "baseName": "tlv_payload",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "mppRecord",
            "baseName": "mpp_record",
            "type": "LnrpcMPPRecord",
            "format": ""
        },
        {
            "name": "ampRecord",
            "baseName": "amp_record",
            "type": "LnrpcAMPRecord",
            "format": ""
        },
        {
            "name": "customRecords",
            "baseName": "custom_records",
            "type": "{ [key: string]: string; }",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcHop.attributeTypeMap;
    }

    public constructor() {
    }
}
