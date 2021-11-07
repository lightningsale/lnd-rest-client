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

import { LnrpcChannelPoint } from './LnrpcChannelPoint';
import { LnrpcKeyDescriptor } from './LnrpcKeyDescriptor';
import { HttpFile } from '../http/http';

export class LnrpcChanPointShim {
    /**
    * The size of the pre-crafted output to be used as the channel point for this channel funding.
    */
    'amt'?: string;
    'chanPoint'?: LnrpcChannelPoint;
    'localKey'?: LnrpcKeyDescriptor;
    /**
    * The key of the remote party to use when creating the multi-sig output.
    */
    'remoteKey'?: string;
    /**
    * If non-zero, then this will be used as the pending channel ID on the wire protocol to initate the funding request. This is an optional field, and should only be set if the responder is already expecting a specific pending channel ID.
    */
    'pendingChanId'?: string;
    /**
    * This uint32 indicates if this channel is to be considered 'frozen'. A frozen channel does not allow a cooperative channel close by the initiator. The thaw_height is the height that this restriction stops applying to the channel. The height can be interpreted in two ways: as a relative height if the value is less than 500,000, or as an absolute height otherwise.
    */
    'thawHeight'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amt",
            "baseName": "amt",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "chanPoint",
            "baseName": "chan_point",
            "type": "LnrpcChannelPoint",
            "format": ""
        },
        {
            "name": "localKey",
            "baseName": "local_key",
            "type": "LnrpcKeyDescriptor",
            "format": ""
        },
        {
            "name": "remoteKey",
            "baseName": "remote_key",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "pendingChanId",
            "baseName": "pending_chan_id",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "thawHeight",
            "baseName": "thaw_height",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcChanPointShim.attributeTypeMap;
    }

    public constructor() {
    }
}

