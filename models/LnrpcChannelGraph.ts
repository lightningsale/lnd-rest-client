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

/**
* Returns a new instance of the directed channel graph.
*/
export class LnrpcChannelGraph {
    'nodes'?: Array<LnrpcLightningNode>;
    'edges'?: Array<LnrpcChannelEdge>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodes",
            "baseName": "nodes",
            "type": "Array<LnrpcLightningNode>",
            "format": ""
        },
        {
            "name": "edges",
            "baseName": "edges",
            "type": "Array<LnrpcChannelEdge>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcChannelGraph.attributeTypeMap;
    }

    public constructor() {
    }
}
