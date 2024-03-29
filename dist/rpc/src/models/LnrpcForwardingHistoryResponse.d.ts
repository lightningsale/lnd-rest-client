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
import { LnrpcForwardingEvent } from './';
/**
 *
 * @export
 * @interface LnrpcForwardingHistoryResponse
 */
export interface LnrpcForwardingHistoryResponse {
    /**
     * A list of forwarding events from the time slice of the time series
     * specified in the request.
     * @type {Array<LnrpcForwardingEvent>}
     * @memberof LnrpcForwardingHistoryResponse
     */
    forwardingEvents?: Array<LnrpcForwardingEvent>;
    /**
     * The index of the last time in the set of returned forwarding events. Can
     * be used to seek further, pagination style.
     * @type {number}
     * @memberof LnrpcForwardingHistoryResponse
     */
    lastOffsetIndex?: number;
}
export declare function LnrpcForwardingHistoryResponseFromJSON(json: any): LnrpcForwardingHistoryResponse;
export declare function LnrpcForwardingHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcForwardingHistoryResponse;
export declare function LnrpcForwardingHistoryResponseToJSON(value?: LnrpcForwardingHistoryResponse | null): any;
