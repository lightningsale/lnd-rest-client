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

import { LnrpcHopHint } from './LnrpcHopHint';
import { HttpFile } from '../http/http';

export class LnrpcRouteHint {
    /**
    * A list of hop hints that when chained together can assist in reaching a specific destination.
    */
    'hopHints'?: Array<LnrpcHopHint>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hopHints",
            "baseName": "hop_hints",
            "type": "Array<LnrpcHopHint>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcRouteHint.attributeTypeMap;
    }

    public constructor() {
    }
}

