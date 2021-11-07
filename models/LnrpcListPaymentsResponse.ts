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

import { LnrpcPayment } from './LnrpcPayment';
import { HttpFile } from '../http/http';

export class LnrpcListPaymentsResponse {
    'payments'?: Array<LnrpcPayment>;
    /**
    * The index of the first item in the set of returned payments. This can be used as the index_offset to continue seeking backwards in the next request.
    */
    'firstIndexOffset'?: string;
    /**
    * The index of the last item in the set of returned payments. This can be used as the index_offset to continue seeking forwards in the next request.
    */
    'lastIndexOffset'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<LnrpcPayment>",
            "format": ""
        },
        {
            "name": "firstIndexOffset",
            "baseName": "first_index_offset",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "lastIndexOffset",
            "baseName": "last_index_offset",
            "type": "string",
            "format": "uint64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcListPaymentsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
