/* tslint:disable */
/* eslint-disable */
/**
 * rpc.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LnrpcForwardingHistoryRequest
 */
export interface LnrpcForwardingHistoryRequest {
    /**
     * Start time is the starting point of the forwarding history request. All
     * records beyond this point will be included, respecting the end time, and
     * the index offset.
     * @type {string}
     * @memberof LnrpcForwardingHistoryRequest
     */
    startTime?: string;
    /**
     * End time is the end point of the forwarding history request. The
     * response will carry at most 50k records between the start time and the
     * end time. The index offset can be used to implement pagination.
     * @type {string}
     * @memberof LnrpcForwardingHistoryRequest
     */
    endTime?: string;
    /**
     * Index offset is the offset in the time series to start at. As each
     * response can only contain 50k records, callers can use this to skip
     * around within a packed time series.
     * @type {number}
     * @memberof LnrpcForwardingHistoryRequest
     */
    indexOffset?: number;
    /**
     * The max number of events to return in the response to this query.
     * @type {number}
     * @memberof LnrpcForwardingHistoryRequest
     */
    numMaxEvents?: number;
}

export function LnrpcForwardingHistoryRequestFromJSON(json: any): LnrpcForwardingHistoryRequest {
    return LnrpcForwardingHistoryRequestFromJSONTyped(json, false);
}

export function LnrpcForwardingHistoryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcForwardingHistoryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startTime': !exists(json, 'start_time') ? undefined : json['start_time'],
        'endTime': !exists(json, 'end_time') ? undefined : json['end_time'],
        'indexOffset': !exists(json, 'index_offset') ? undefined : json['index_offset'],
        'numMaxEvents': !exists(json, 'num_max_events') ? undefined : json['num_max_events'],
    };
}

export function LnrpcForwardingHistoryRequestToJSON(value?: LnrpcForwardingHistoryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start_time': value.startTime,
        'end_time': value.endTime,
        'index_offset': value.indexOffset,
        'num_max_events': value.numMaxEvents,
    };
}
