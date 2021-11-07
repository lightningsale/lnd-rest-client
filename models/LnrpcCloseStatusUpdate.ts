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

import { LnrpcChannelCloseUpdate } from './LnrpcChannelCloseUpdate';
import { LnrpcPendingUpdate } from './LnrpcPendingUpdate';
import { HttpFile } from '../http/http';

export class LnrpcCloseStatusUpdate {
    'closePending'?: LnrpcPendingUpdate;
    'chanClose'?: LnrpcChannelCloseUpdate;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "closePending",
            "baseName": "close_pending",
            "type": "LnrpcPendingUpdate",
            "format": ""
        },
        {
            "name": "chanClose",
            "baseName": "chan_close",
            "type": "LnrpcChannelCloseUpdate",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcCloseStatusUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

