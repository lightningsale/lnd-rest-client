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
 * @interface LnrpcSendManyRequest
 */
export interface LnrpcSendManyRequest {
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof LnrpcSendManyRequest
     */
    addrToAmount?: {
        [key: string]: string;
    };
    /**
     * The target number of blocks that this transaction should be confirmed
     * by.
     * @type {number}
     * @memberof LnrpcSendManyRequest
     */
    targetConf?: number;
    /**
     * A manual fee rate set in sat/vbyte that should be used when crafting the
     * transaction.
     * @type {string}
     * @memberof LnrpcSendManyRequest
     */
    satPerVbyte?: string;
    /**
     * Deprecated, use sat_per_vbyte.
     * A manual fee rate set in sat/vbyte that should be used when crafting the
     * transaction.
     * @type {string}
     * @memberof LnrpcSendManyRequest
     */
    satPerByte?: string;
    /**
     * An optional label for the transaction, limited to 500 characters.
     * @type {string}
     * @memberof LnrpcSendManyRequest
     */
    label?: string;
    /**
     * The minimum number of confirmations each one of your outputs used for
     * the transaction must satisfy.
     * @type {number}
     * @memberof LnrpcSendManyRequest
     */
    minConfs?: number;
    /**
     * Whether unconfirmed outputs should be used as inputs for the transaction.
     * @type {boolean}
     * @memberof LnrpcSendManyRequest
     */
    spendUnconfirmed?: boolean;
}
export declare function LnrpcSendManyRequestFromJSON(json: any): LnrpcSendManyRequest;
export declare function LnrpcSendManyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSendManyRequest;
export declare function LnrpcSendManyRequestToJSON(value?: LnrpcSendManyRequest | null): any;
