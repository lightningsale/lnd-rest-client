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

export class LnrpcFeeLimit {
    /**
    * The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
    */
    'fixed'?: string;
    /**
    * The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
    */
    'fixedMsat'?: string;
    /**
    * The fee limit expressed as a percentage of the payment amount.
    */
    'percent'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fixed",
            "baseName": "fixed",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "fixedMsat",
            "baseName": "fixed_msat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "string",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcFeeLimit.attributeTypeMap;
    }

    public constructor() {
    }
}

