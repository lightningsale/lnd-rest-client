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

import { LnrpcRoute } from './LnrpcRoute';
import { HttpFile } from '../http/http';

export class LnrpcSendToRouteRequest {
    /**
    * The payment hash to use for the HTLC. When using REST, this field must be encoded as base64.
    */
    'paymentHash'?: string;
    /**
    * An optional hex-encoded payment hash to be used for the HTLC. Deprecated now that the REST gateway supports base64 encoding of bytes fields.
    */
    'paymentHashString'?: string;
    'route'?: LnrpcRoute;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paymentHash",
            "baseName": "payment_hash",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "paymentHashString",
            "baseName": "payment_hash_string",
            "type": "string",
            "format": ""
        },
        {
            "name": "route",
            "baseName": "route",
            "type": "LnrpcRoute",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcSendToRouteRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
