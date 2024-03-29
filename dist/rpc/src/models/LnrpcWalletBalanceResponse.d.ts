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
import { LnrpcWalletAccountBalance } from './';
/**
 *
 * @export
 * @interface LnrpcWalletBalanceResponse
 */
export interface LnrpcWalletBalanceResponse {
    /**
     *
     * @type {string}
     * @memberof LnrpcWalletBalanceResponse
     */
    totalBalance?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcWalletBalanceResponse
     */
    confirmedBalance?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcWalletBalanceResponse
     */
    unconfirmedBalance?: string;
    /**
     * A mapping of each wallet account's name to its balance.
     * @type {{ [key: string]: LnrpcWalletAccountBalance; }}
     * @memberof LnrpcWalletBalanceResponse
     */
    accountBalance?: {
        [key: string]: LnrpcWalletAccountBalance;
    };
}
export declare function LnrpcWalletBalanceResponseFromJSON(json: any): LnrpcWalletBalanceResponse;
export declare function LnrpcWalletBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcWalletBalanceResponse;
export declare function LnrpcWalletBalanceResponseToJSON(value?: LnrpcWalletBalanceResponse | null): any;
