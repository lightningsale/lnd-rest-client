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

export class LnrpcDebugLevelRequest {
    'show'?: boolean;
    'levelSpec'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "show",
            "baseName": "show",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "levelSpec",
            "baseName": "level_spec",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcDebugLevelRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
