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

import { LnrpcForwardingEvent } from './LnrpcForwardingEvent';
import { HttpFile } from '../http/http';

export class LnrpcForwardingHistoryResponse {
    /**
    * A list of forwarding events from the time slice of the time series specified in the request.
    */
    'forwardingEvents'?: Array<LnrpcForwardingEvent>;
    /**
    * The index of the last time in the set of returned forwarding events. Can be used to seek further, pagination style.
    */
    'lastOffsetIndex'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "forwardingEvents",
            "baseName": "forwarding_events",
            "type": "Array<LnrpcForwardingEvent>",
            "format": ""
        },
        {
            "name": "lastOffsetIndex",
            "baseName": "last_offset_index",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcForwardingHistoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

