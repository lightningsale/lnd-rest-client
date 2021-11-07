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

export class LnrpcGetRecoveryInfoResponse {
    'recoveryMode'?: boolean;
    'recoveryFinished'?: boolean;
    /**
    * The recovery progress, ranging from 0 to 1.
    */
    'progress'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recoveryMode",
            "baseName": "recovery_mode",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "recoveryFinished",
            "baseName": "recovery_finished",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcGetRecoveryInfoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
