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

export class LnrpcTimestampedError {
    /**
    * The unix timestamp in seconds when the error occurred.
    */
    'timestamp'?: string;
    /**
    * The string representation of the error sent by our peer.
    */
    'error'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcTimestampedError.attributeTypeMap;
    }

    public constructor() {
    }
}
