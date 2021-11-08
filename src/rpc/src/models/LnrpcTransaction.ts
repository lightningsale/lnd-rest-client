/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
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

export function LnrpcTransactionFromJSON(json: any): LnrpcTransaction {
    return LnrpcTransactionFromJSONTyped(json, false);
}

export function LnrpcTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'txHash': !exists(json, 'tx_hash') ? undefined : json['tx_hash'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'numConfirmations': !exists(json, 'num_confirmations') ? undefined : json['num_confirmations'],
        'blockHash': !exists(json, 'block_hash') ? undefined : json['block_hash'],
        'blockHeight': !exists(json, 'block_height') ? undefined : json['block_height'],
        'timeStamp': !exists(json, 'time_stamp') ? undefined : json['time_stamp'],
        'totalFees': !exists(json, 'total_fees') ? undefined : json['total_fees'],
        'destAddresses': !exists(json, 'dest_addresses') ? undefined : json['dest_addresses'],
        'rawTxHex': !exists(json, 'raw_tx_hex') ? undefined : json['raw_tx_hex'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function LnrpcTransactionToJSON(value?: LnrpcTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tx_hash': value.txHash,
        'amount': value.amount,
        'num_confirmations': value.numConfirmations,
        'block_hash': value.blockHash,
        'block_height': value.blockHeight,
        'time_stamp': value.timeStamp,
        'total_fees': value.totalFees,
        'dest_addresses': value.destAddresses,
        'raw_tx_hex': value.rawTxHex,
        'label': value.label,
    };
}

