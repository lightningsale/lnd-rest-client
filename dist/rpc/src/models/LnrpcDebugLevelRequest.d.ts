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
 * @interface LnrpcDebugLevelRequest
 */
export interface LnrpcDebugLevelRequest {
    /**
     *
     * @type {boolean}
     * @memberof LnrpcDebugLevelRequest
     */
    show?: boolean;
    /**
     *
     * @type {string}
     * @memberof LnrpcDebugLevelRequest
     */
    levelSpec?: string;
}
export declare function LnrpcDebugLevelRequestFromJSON(json: any): LnrpcDebugLevelRequest;
export declare function LnrpcDebugLevelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcDebugLevelRequest;
export declare function LnrpcDebugLevelRequestToJSON(value?: LnrpcDebugLevelRequest | null): any;