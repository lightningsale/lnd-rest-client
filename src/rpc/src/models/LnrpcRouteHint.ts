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
    LnrpcHopHint,
    LnrpcHopHintFromJSON,
    LnrpcHopHintFromJSONTyped,
    LnrpcHopHintToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcRouteHint
 */
export interface LnrpcRouteHint {
    /**
     * A list of hop hints that when chained together can assist in reaching a
     * specific destination.
     * @type {Array<LnrpcHopHint>}
     * @memberof LnrpcRouteHint
     */
    hopHints?: Array<LnrpcHopHint>;
}

export function LnrpcRouteHintFromJSON(json: any): LnrpcRouteHint {
    return LnrpcRouteHintFromJSONTyped(json, false);
}

export function LnrpcRouteHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcRouteHint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hopHints': !exists(json, 'hop_hints') ? undefined : ((json['hop_hints'] as Array<any>).map(LnrpcHopHintFromJSON)),
    };
}

export function LnrpcRouteHintToJSON(value?: LnrpcRouteHint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hop_hints': value.hopHints === undefined ? undefined : ((value.hopHints as Array<any>).map(LnrpcHopHintToJSON)),
    };
}

