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
 * @interface LnrpcChain
 */
export interface LnrpcChain {
    /**
     *
     * @type {string}
     * @memberof LnrpcChain
     */
    chain?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcChain
     */
    network?: string;
}
export declare function LnrpcChainFromJSON(json: any): LnrpcChain;
export declare function LnrpcChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChain;
export declare function LnrpcChainToJSON(value?: LnrpcChain | null): any;
