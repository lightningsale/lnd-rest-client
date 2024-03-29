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
import { HTLCAttemptHTLCStatus, LnrpcFailure, LnrpcRoute } from './';
/**
 *
 * @export
 * @interface LnrpcHTLCAttempt
 */
export interface LnrpcHTLCAttempt {
    /**
     * The unique ID that is used for this attempt.
     * @type {string}
     * @memberof LnrpcHTLCAttempt
     */
    attemptId?: string;
    /**
     *
     * @type {HTLCAttemptHTLCStatus}
     * @memberof LnrpcHTLCAttempt
     */
    status?: HTLCAttemptHTLCStatus;
    /**
     *
     * @type {LnrpcRoute}
     * @memberof LnrpcHTLCAttempt
     */
    route?: LnrpcRoute;
    /**
     * The time in UNIX nanoseconds at which this HTLC was sent.
     * @type {string}
     * @memberof LnrpcHTLCAttempt
     */
    attemptTimeNs?: string;
    /**
     * The time in UNIX nanoseconds at which this HTLC was settled or failed.
     * This value will not be set if the HTLC is still IN_FLIGHT.
     * @type {string}
     * @memberof LnrpcHTLCAttempt
     */
    resolveTimeNs?: string;
    /**
     *
     * @type {LnrpcFailure}
     * @memberof LnrpcHTLCAttempt
     */
    failure?: LnrpcFailure;
    /**
     * The preimage that was used to settle the HTLC.
     * @type {string}
     * @memberof LnrpcHTLCAttempt
     */
    preimage?: string;
}
export declare function LnrpcHTLCAttemptFromJSON(json: any): LnrpcHTLCAttempt;
export declare function LnrpcHTLCAttemptFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcHTLCAttempt;
export declare function LnrpcHTLCAttemptToJSON(value?: LnrpcHTLCAttempt | null): any;
