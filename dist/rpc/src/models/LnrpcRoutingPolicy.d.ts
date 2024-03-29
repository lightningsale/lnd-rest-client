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
/**
 *
 * @export
 * @interface LnrpcRoutingPolicy
 */
export interface LnrpcRoutingPolicy {
    /**
     *
     * @type {number}
     * @memberof LnrpcRoutingPolicy
     */
    timeLockDelta?: number;
    /**
     *
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    minHtlc?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    feeBaseMsat?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    feeRateMilliMsat?: string;
    /**
     *
     * @type {boolean}
     * @memberof LnrpcRoutingPolicy
     */
    disabled?: boolean;
    /**
     *
     * @type {string}
     * @memberof LnrpcRoutingPolicy
     */
    maxHtlcMsat?: string;
    /**
     *
     * @type {number}
     * @memberof LnrpcRoutingPolicy
     */
    lastUpdate?: number;
}
export declare function LnrpcRoutingPolicyFromJSON(json: any): LnrpcRoutingPolicy;
export declare function LnrpcRoutingPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcRoutingPolicy;
export declare function LnrpcRoutingPolicyToJSON(value?: LnrpcRoutingPolicy | null): any;
