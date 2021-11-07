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

import { LnrpcChannelEdge } from './LnrpcChannelEdge';
import { LnrpcLightningNode } from './LnrpcLightningNode';
import { HttpFile } from '../http/http';

export class LnrpcNodeInfo {
    'node'?: LnrpcLightningNode;
    /**
    * The total number of channels for the node.
    */
    'numChannels'?: number;
    /**
    * The sum of all channels capacity for the node, denominated in satoshis.
    */
    'totalCapacity'?: string;
    /**
    * A list of all public channels for the node.
    */
    'channels'?: Array<LnrpcChannelEdge>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "node",
            "baseName": "node",
            "type": "LnrpcLightningNode",
            "format": ""
        },
        {
            "name": "numChannels",
            "baseName": "num_channels",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalCapacity",
            "baseName": "total_capacity",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "channels",
            "baseName": "channels",
            "type": "Array<LnrpcChannelEdge>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcNodeInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

