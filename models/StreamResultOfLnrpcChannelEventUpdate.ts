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

import { LnrpcChannelEventUpdate } from './LnrpcChannelEventUpdate';
import { RuntimeStreamError } from './RuntimeStreamError';
import { HttpFile } from '../http/http';

export class StreamResultOfLnrpcChannelEventUpdate {
    'result'?: LnrpcChannelEventUpdate;
    'error'?: RuntimeStreamError;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "LnrpcChannelEventUpdate",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "RuntimeStreamError",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StreamResultOfLnrpcChannelEventUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}
