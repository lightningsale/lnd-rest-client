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
 * @interface LnrpcTransaction
 */
export interface LnrpcTransaction {
    /**
     *
     * @type {string}
     * @memberof LnrpcTransaction
     */
    txHash?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcTransaction
     */
    amount?: string;
    /**
     *
     * @type {number}
     * @memberof LnrpcTransaction
     */
    numConfirmations?: number;
    /**
     *
     * @type {string}
     * @memberof LnrpcTransaction
     */
    blockHash?: string;
    /**
     *
     * @type {number}
     * @memberof LnrpcTransaction
     */
    blockHeight?: number;
    /**
     *
     * @type {string}
     * @memberof LnrpcTransaction
     */
    timeStamp?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcTransaction
     */
    totalFees?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof LnrpcTransaction
     */
    destAddresses?: Array<string>;
    /**
     * The raw transaction hex.
     * @type {string}
     * @memberof LnrpcTransaction
     */
    rawTxHex?: string;
    /**
     * A label that was optionally set on transaction broadcast.
     * @type {string}
     * @memberof LnrpcTransaction
     */
    label?: string;
}
export declare function LnrpcTransactionFromJSON(json: any): LnrpcTransaction;
export declare function LnrpcTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcTransaction;
export declare function LnrpcTransactionToJSON(value?: LnrpcTransaction | null): any;
