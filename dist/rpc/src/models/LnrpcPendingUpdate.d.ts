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
 * @interface LnrpcPendingUpdate
 */
export interface LnrpcPendingUpdate {
    /**
     *
     * @type {string}
     * @memberof LnrpcPendingUpdate
     */
    txid?: string;
    /**
     *
     * @type {number}
     * @memberof LnrpcPendingUpdate
     */
    outputIndex?: number;
}
export declare function LnrpcPendingUpdateFromJSON(json: any): LnrpcPendingUpdate;
export declare function LnrpcPendingUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcPendingUpdate;
export declare function LnrpcPendingUpdateToJSON(value?: LnrpcPendingUpdate | null): any;