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
 * @interface LnrpcSendCoinsRequest
 */
export interface LnrpcSendCoinsRequest {
    /**
     * 
     * @type {string}
     * @memberof LnrpcSendCoinsRequest
     */
    addr?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcSendCoinsRequest
     */
    amount?: string;
    /**
     * The target number of blocks that this transaction should be confirmed
     * by.
     * @type {number}
     * @memberof LnrpcSendCoinsRequest
     */
    targetConf?: number;
    /**
     * A manual fee rate set in sat/vbyte that should be used when crafting the
     * transaction.
     * @type {string}
     * @memberof LnrpcSendCoinsRequest
     */
    satPerVbyte?: string;
    /**
     * Deprecated, use sat_per_vbyte.
     * A manual fee rate set in sat/vbyte that should be used when crafting the
     * transaction.
     * @type {string}
     * @memberof LnrpcSendCoinsRequest
     */
    satPerByte?: string;
    /**
     * If set, then the amount field will be ignored, and lnd will attempt to
     * send all the coins under control of the internal wallet to the specified
     * address.
     * @type {boolean}
     * @memberof LnrpcSendCoinsRequest
     */
    sendAll?: boolean;
    /**
     * An optional label for the transaction, limited to 500 characters.
     * @type {string}
     * @memberof LnrpcSendCoinsRequest
     */
    label?: string;
    /**
     * The minimum number of confirmations each one of your outputs used for
     * the transaction must satisfy.
     * @type {number}
     * @memberof LnrpcSendCoinsRequest
     */
    minConfs?: number;
    /**
     * Whether unconfirmed outputs should be used as inputs for the transaction.
     * @type {boolean}
     * @memberof LnrpcSendCoinsRequest
     */
    spendUnconfirmed?: boolean;
}

export function LnrpcSendCoinsRequestFromJSON(json: any): LnrpcSendCoinsRequest {
    return LnrpcSendCoinsRequestFromJSONTyped(json, false);
}

export function LnrpcSendCoinsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSendCoinsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addr': !exists(json, 'addr') ? undefined : json['addr'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'targetConf': !exists(json, 'target_conf') ? undefined : json['target_conf'],
        'satPerVbyte': !exists(json, 'sat_per_vbyte') ? undefined : json['sat_per_vbyte'],
        'satPerByte': !exists(json, 'sat_per_byte') ? undefined : json['sat_per_byte'],
        'sendAll': !exists(json, 'send_all') ? undefined : json['send_all'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'minConfs': !exists(json, 'min_confs') ? undefined : json['min_confs'],
        'spendUnconfirmed': !exists(json, 'spend_unconfirmed') ? undefined : json['spend_unconfirmed'],
    };
}

export function LnrpcSendCoinsRequestToJSON(value?: LnrpcSendCoinsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addr': value.addr,
        'amount': value.amount,
        'target_conf': value.targetConf,
        'sat_per_vbyte': value.satPerVbyte,
        'sat_per_byte': value.satPerByte,
        'send_all': value.sendAll,
        'label': value.label,
        'min_confs': value.minConfs,
        'spend_unconfirmed': value.spendUnconfirmed,
    };
}
