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
import {
    LnrpcOpenStatusUpdate,
    LnrpcOpenStatusUpdateFromJSON,
    LnrpcOpenStatusUpdateFromJSONTyped,
    LnrpcOpenStatusUpdateToJSON,
    RuntimeStreamError,
    RuntimeStreamErrorFromJSON,
    RuntimeStreamErrorFromJSONTyped,
    RuntimeStreamErrorToJSON,
} from './';

/**
 * 
 * @export
 * @interface StreamResultOfLnrpcOpenStatusUpdate
 */
export interface StreamResultOfLnrpcOpenStatusUpdate {
    /**
     * 
     * @type {LnrpcOpenStatusUpdate}
     * @memberof StreamResultOfLnrpcOpenStatusUpdate
     */
    result?: LnrpcOpenStatusUpdate;
    /**
     * 
     * @type {RuntimeStreamError}
     * @memberof StreamResultOfLnrpcOpenStatusUpdate
     */
    error?: RuntimeStreamError;
}

export function StreamResultOfLnrpcOpenStatusUpdateFromJSON(json: any): StreamResultOfLnrpcOpenStatusUpdate {
    return StreamResultOfLnrpcOpenStatusUpdateFromJSONTyped(json, false);
}

export function StreamResultOfLnrpcOpenStatusUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamResultOfLnrpcOpenStatusUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : LnrpcOpenStatusUpdateFromJSON(json['result']),
        'error': !exists(json, 'error') ? undefined : RuntimeStreamErrorFromJSON(json['error']),
    };
}

export function StreamResultOfLnrpcOpenStatusUpdateToJSON(value?: StreamResultOfLnrpcOpenStatusUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': LnrpcOpenStatusUpdateToJSON(value.result),
        'error': RuntimeStreamErrorToJSON(value.error),
    };
}

