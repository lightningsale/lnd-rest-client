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

export class LnrpcMacaroonPermission {
    /**
    * The entity a permission grants access to.
    */
    'entity'?: string;
    /**
    * The action that is granted.
    */
    'action'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "string",
            "format": ""
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcMacaroonPermission.attributeTypeMap;
    }

    public constructor() {
    }
}
