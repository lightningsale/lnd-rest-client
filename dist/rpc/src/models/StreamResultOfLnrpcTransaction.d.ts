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
import { LnrpcTransaction, RuntimeStreamError } from './';
/**
 *
 * @export
 * @interface StreamResultOfLnrpcTransaction
 */
export interface StreamResultOfLnrpcTransaction {
    /**
     *
     * @type {LnrpcTransaction}
     * @memberof StreamResultOfLnrpcTransaction
     */
    result?: LnrpcTransaction;
    /**
     *
     * @type {RuntimeStreamError}
     * @memberof StreamResultOfLnrpcTransaction
     */
    error?: RuntimeStreamError;
}
export declare function StreamResultOfLnrpcTransactionFromJSON(json: any): StreamResultOfLnrpcTransaction;
export declare function StreamResultOfLnrpcTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamResultOfLnrpcTransaction;
export declare function StreamResultOfLnrpcTransactionToJSON(value?: StreamResultOfLnrpcTransaction | null): any;
