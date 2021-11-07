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

export class LnrpcEdgeLocator {
    /**
    * The short channel id of this edge.
    */
    'channelId'?: string;
    /**
    * The direction of this edge. If direction_reverse is false, the direction of this edge is from the channel endpoint with the lexicographically smaller pub key to the endpoint with the larger pub key. If direction_reverse is is true, the edge goes the other way.
    */
    'directionReverse'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelId",
            "baseName": "channel_id",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "directionReverse",
            "baseName": "direction_reverse",
            "type": "boolean",
            "format": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcEdgeLocator.attributeTypeMap;
    }

    public constructor() {
    }
}

