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
import {
    LnrpcAmount,
    LnrpcAmountFromJSON,
    LnrpcAmountFromJSONTyped,
    LnrpcAmountToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcChannelBalanceResponse
 */
export interface LnrpcChannelBalanceResponse {
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelBalanceResponse
     */
    balance?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcChannelBalanceResponse
     */
    pendingOpenBalance?: string;
    /**
     * 
     * @type {LnrpcAmount}
     * @memberof LnrpcChannelBalanceResponse
     */
    localBalance?: LnrpcAmount;
    /**
     * 
     * @type {LnrpcAmount}
     * @memberof LnrpcChannelBalanceResponse
     */
    remoteBalance?: LnrpcAmount;
    /**
     * 
     * @type {LnrpcAmount}
     * @memberof LnrpcChannelBalanceResponse
     */
    unsettledLocalBalance?: LnrpcAmount;
    /**
     * 
     * @type {LnrpcAmount}
     * @memberof LnrpcChannelBalanceResponse
     */
    unsettledRemoteBalance?: LnrpcAmount;
    /**
     * 
     * @type {LnrpcAmount}
     * @memberof LnrpcChannelBalanceResponse
     */
    pendingOpenLocalBalance?: LnrpcAmount;
    /**
     * 
     * @type {LnrpcAmount}
     * @memberof LnrpcChannelBalanceResponse
     */
    pendingOpenRemoteBalance?: LnrpcAmount;
}

export function LnrpcChannelBalanceResponseFromJSON(json: any): LnrpcChannelBalanceResponse {
    return LnrpcChannelBalanceResponseFromJSONTyped(json, false);
}

export function LnrpcChannelBalanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelBalanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'pendingOpenBalance': !exists(json, 'pending_open_balance') ? undefined : json['pending_open_balance'],
        'localBalance': !exists(json, 'local_balance') ? undefined : LnrpcAmountFromJSON(json['local_balance']),
        'remoteBalance': !exists(json, 'remote_balance') ? undefined : LnrpcAmountFromJSON(json['remote_balance']),
        'unsettledLocalBalance': !exists(json, 'unsettled_local_balance') ? undefined : LnrpcAmountFromJSON(json['unsettled_local_balance']),
        'unsettledRemoteBalance': !exists(json, 'unsettled_remote_balance') ? undefined : LnrpcAmountFromJSON(json['unsettled_remote_balance']),
        'pendingOpenLocalBalance': !exists(json, 'pending_open_local_balance') ? undefined : LnrpcAmountFromJSON(json['pending_open_local_balance']),
        'pendingOpenRemoteBalance': !exists(json, 'pending_open_remote_balance') ? undefined : LnrpcAmountFromJSON(json['pending_open_remote_balance']),
    };
}

export function LnrpcChannelBalanceResponseToJSON(value?: LnrpcChannelBalanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balance': value.balance,
        'pending_open_balance': value.pendingOpenBalance,
        'local_balance': LnrpcAmountToJSON(value.localBalance),
        'remote_balance': LnrpcAmountToJSON(value.remoteBalance),
        'unsettled_local_balance': LnrpcAmountToJSON(value.unsettledLocalBalance),
        'unsettled_remote_balance': LnrpcAmountToJSON(value.unsettledRemoteBalance),
        'pending_open_local_balance': LnrpcAmountToJSON(value.pendingOpenLocalBalance),
        'pending_open_remote_balance': LnrpcAmountToJSON(value.pendingOpenRemoteBalance),
    };
}
