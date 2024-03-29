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
    LnrpcChannelAcceptRequest,
    LnrpcChannelAcceptRequestFromJSON,
    LnrpcChannelAcceptRequestFromJSONTyped,
    LnrpcChannelAcceptRequestToJSON,
    RuntimeStreamError,
    RuntimeStreamErrorFromJSON,
    RuntimeStreamErrorFromJSONTyped,
    RuntimeStreamErrorToJSON,
} from './';

/**
 * 
 * @export
 * @interface StreamResultOfLnrpcChannelAcceptRequest
 */
export interface StreamResultOfLnrpcChannelAcceptRequest {
    /**
     * 
     * @type {LnrpcChannelAcceptRequest}
     * @memberof StreamResultOfLnrpcChannelAcceptRequest
     */
    result?: LnrpcChannelAcceptRequest;
    /**
     * 
     * @type {RuntimeStreamError}
     * @memberof StreamResultOfLnrpcChannelAcceptRequest
     */
    error?: RuntimeStreamError;
}

export function StreamResultOfLnrpcChannelAcceptRequestFromJSON(json: any): StreamResultOfLnrpcChannelAcceptRequest {
    return StreamResultOfLnrpcChannelAcceptRequestFromJSONTyped(json, false);
}

export function StreamResultOfLnrpcChannelAcceptRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamResultOfLnrpcChannelAcceptRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : LnrpcChannelAcceptRequestFromJSON(json['result']),
        'error': !exists(json, 'error') ? undefined : RuntimeStreamErrorFromJSON(json['error']),
    };
}

export function StreamResultOfLnrpcChannelAcceptRequestToJSON(value?: StreamResultOfLnrpcChannelAcceptRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': LnrpcChannelAcceptRequestToJSON(value.result),
        'error': RuntimeStreamErrorToJSON(value.error),
    };
}

