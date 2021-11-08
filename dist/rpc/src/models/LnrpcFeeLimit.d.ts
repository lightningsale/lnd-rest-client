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
 * @interface LnrpcFeeLimit
 */
export interface LnrpcFeeLimit {
    /**
     * The fee limit expressed as a fixed amount of satoshis.
     *
     * The fields fixed and fixed_msat are mutually exclusive.
     * @type {string}
     * @memberof LnrpcFeeLimit
     */
    fixed?: string;
    /**
     * The fee limit expressed as a fixed amount of millisatoshis.
     *
     * The fields fixed and fixed_msat are mutually exclusive.
     * @type {string}
     * @memberof LnrpcFeeLimit
     */
    fixedMsat?: string;
    /**
     * The fee limit expressed as a percentage of the payment amount.
     * @type {string}
     * @memberof LnrpcFeeLimit
     */
    percent?: string;
}
export declare function LnrpcFeeLimitFromJSON(json: any): LnrpcFeeLimit;
export declare function LnrpcFeeLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcFeeLimit;
export declare function LnrpcFeeLimitToJSON(value?: LnrpcFeeLimit | null): any;
