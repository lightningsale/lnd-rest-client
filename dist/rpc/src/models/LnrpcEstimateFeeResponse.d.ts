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
 * @interface LnrpcEstimateFeeResponse
 */
export interface LnrpcEstimateFeeResponse {
    /**
     * The total fee in satoshis.
     * @type {string}
     * @memberof LnrpcEstimateFeeResponse
     */
    feeSat?: string;
    /**
     * Deprecated, use sat_per_vbyte.
     * The fee rate in satoshi/vbyte.
     * @type {string}
     * @memberof LnrpcEstimateFeeResponse
     */
    feerateSatPerByte?: string;
    /**
     * The fee rate in satoshi/vbyte.
     * @type {string}
     * @memberof LnrpcEstimateFeeResponse
     */
    satPerVbyte?: string;
}
export declare function LnrpcEstimateFeeResponseFromJSON(json: any): LnrpcEstimateFeeResponse;
export declare function LnrpcEstimateFeeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcEstimateFeeResponse;
export declare function LnrpcEstimateFeeResponseToJSON(value?: LnrpcEstimateFeeResponse | null): any;