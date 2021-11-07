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

export class LnrpcVerifyMessageRequest {
    /**
    * The message over which the signature is to be verified. When using REST, this field must be encoded as base64.
    */
    'msg'?: string;
    'signature'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcVerifyMessageRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
